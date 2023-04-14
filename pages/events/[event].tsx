import { useRouter } from "next/router";

export default function Event() {
  console.log("wtf");
  const router = useRouter();
  const { event } = router.query;

  if (!event) {
    return <p>Hello</p>;
  } else {
    return (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi,
        ipsa excepturi voluptates cum alias at, nobis aliquid unde, dolorem
        assumenda est recusandae! Dolore minima nihil, nobis corrupti corporis,
        autem id vitae quae reiciendis commodi excepturi ea! Labore dolore
        repellat at modi. Animi dolores ipsam totam dolore aspernatur accusamus
        ab perferendis consequuntur tempore magnam atque et fugiat dignissimos
        accusantium quos, ut beatae adipisci suscipit exercitationem cupiditate
        voluptatum quas. Perferendis, excepturi quia? Explicabo iusto reiciendis
        asperiores ratione recusandae quaerat esse doloremque molestiae eius
        quasi facilis enim, corrupti natus est commodi ad officiis porro maiores
        voluptate repellendus! In veritatis iste nulla incidunt reprehenderit
        rerum alias repellat commodi voluptatum sed exercitationem nobis
        provident excepturi quos temporibus delectus modi harum, tempore,
        aliquam saepe iure fugit neque ullam? Ad corrupti reiciendis, qui sed
        molestiae exercitationem quidem optio eos non voluptates ratione nihil.
        Labore, quas praesentium tenetur, saepe corporis odio incidunt quos sint
        eos id non, libero velit? Labore corporis odio fugit maiores obcaecati
        reprehenderit, itaque ab. Qui facere nihil cumque. At culpa dolorum
        inventore dolore beatae provident eius, quisquam quibusdam autem
        delectus facilis nobis quidem eveniet aspernatur perferendis similique
        repellendus vel temporibus quasi nesciunt aliquam. Ipsum fuga laboriosam
        eligendi molestiae error atque nemo commodi consequatur quasi
        laudantium, molestias vero reiciendis et sequi vitae omnis debitis
        cupiditate soluta, dignissimos magnam eius ipsam distinctio. Fuga magnam
        nulla consequuntur in laboriosam ratione deleniti harum illum corrupti
        libero sunt esse eaque quod labore, facere inventore, quos quaerat?
        Magni, iure! Numquam iste fugiat corporis quasi tempore officia itaque
        provident alias suscipit amet dignissimos saepe, accusamus cumque!
        Nobis, veniam porro cupiditate cum magni dolorum sunt necessitatibus
        nihil provident. Totam esse labore impedit animi ipsa corrupti incidunt,
        suscipit vero possimus alias soluta provident, placeat blanditiis. Eos,
        rem est natus possimus nihil eius? Neque, tempora! Sit magni maiores
        neque, maxime tenetur, minus voluptate velit, aliquid possimus
        doloremque consequatur iure dolorum cumque id recusandae harum accusamus
        vel nostrum. Architecto repudiandae quo quibusdam rem quod accusamus
        quas? Similique, cumque. Pariatur et quas laudantium molestias ullam sit
        possimus. Sunt culpa autem aliquid laboriosam ea delectus itaque
        blanditiis possimus vel repudiandae. Adipisci, unde id molestias ut
        quisquam, ex repellendus inventore iure nostrum eveniet odio accusantium
        consequuntur, deleniti reprehenderit in aperiam a aut commodi
        dignissimos labore vitae nemo. Deserunt cumque sint obcaecati mollitia
        repellat? Sapiente, quis deleniti saepe doloribus tenetur error
        reprehenderit nisi laboriosam iste cupiditate accusamus consequatur
        nesciunt veniam vel alias totam beatae ipsam sint. Exercitationem sint
        sunt mollitia ut est dolore non nam quidem repellendus explicabo
        veritatis voluptas quisquam ratione nulla dolorem aspernatur corporis
        consequuntur eum porro, quibusdam natus, excepturi similique iusto? Id
        totam commodi fuga nam magni officiis eveniet vitae eum iure quia
        ducimus, quidem reprehenderit, veniam quam placeat recusandae a porro
        repudiandae repellat incidunt. Ex quam at corporis ut illum debitis
        asperiores accusamus doloremque aperiam voluptatum tempore omnis fugiat,
        dolores deleniti eveniet dignissimos hic sit molestias ullam nemo qui
        distinctio. Similique, doloribus fugit aut corrupti ratione
        necessitatibus quod soluta possimus odio porro, tempore consectetur.
        Perspiciatis tempore quam reiciendis provident veniam eum voluptatem sed
        quae.
      </>
    );
  }
}
