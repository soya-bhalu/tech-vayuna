import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents, NodeRenderer, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import gqlclient from "@/gql/client";
import { getAllEventNames, singleEventDetails } from "@/gql/queries";
import useCommonData from "@/hooks/use-common-data";

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const url = (params?.event as string) ?? "404";
  const eventData: any = await gqlclient.request(singleEventDetails, {
    eventName: url.replaceAll("-", " ")
  });
  return {
    props: { data: eventData },
    revalidate: 60 * 60 * 6
  };
};

export const getStaticPaths = async () => {
  const eventNames: string[] = (
    ((await gqlclient.request(getAllEventNames)) as Record<string, any>)?.eventCollection?.items || []
  ).map((item: any) => item.title);
  const eventPaths = eventNames.map((name) => ({ params: { event: name.replaceAll(" ", "-").toLowerCase() } }));

  return {
    paths: eventPaths,
    fallback: false
  };
};

export default function Event({ data }: { data: any }) {
  const commonData = useCommonData();
  const renderOptions = (links: any): Options => {
    const assetMap = links.assets.block;

    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: renderAsset(assetMap)
      }
    };
  };
  function getAsset(arr: any, id: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].sys.id == id) {
        return arr[i];
      }
    }
  }
  const renderAsset = (assetMap: Map<string, any>): NodeRenderer => {
    const temp = (node: any) => {
      const asset = getAsset(assetMap, node.data.target.sys.id);
      if (!asset) {
        return <></>;
      }
      const { url, description, height, width } = asset;
      let size = "medium";
      let desc = `${commonData.clubName} Event | ${event.title} | ${event.smallDescription}`;
      try {
        const temp = JSON.parse(description);
        const sizeTemp = temp.size;
        const possibleSizes = ["x-small", "small", "medium", "large", "x-large"];
        if (possibleSizes.includes(sizeTemp)) {
          size = sizeTemp;
        }
      } catch {}
      try {
        const temp = JSON.parse(description);
        let tempDesc = temp.description;
        if (tempDesc) desc = `${commonData.clubName} Event | ${event.title} | ${tempDesc}`;
      } catch {}
      return <Image src={url} alt={desc} height={height} width={width} data-size={size} />;
    };
    return temp;
  };
  const event = data.eventCollection.items[0];
  return (
    <div className="event-single-page">
      <div className="img-container">
        <Image src={event.eventPicture.url} alt={event.title} fill />
      </div>
      <h1>{event.title}</h1>
      <span className="date">{event.getDate}</span>
      {event.registrationLink != null && event.registrationLink != "" && event.registrationLink != " " && (
        <Link
          className="registrationLink button"
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </Link>
      )}
      <div className="rich-text-desc">
        {documentToReactComponents(event.description.json, renderOptions(event.description.links))}
      </div>
    </div>
  );
}
