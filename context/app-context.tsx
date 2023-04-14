import { createContext, type ReactNode, useState, Dispatch, SetStateAction, useContext } from "react";

interface ActualAppContextType {
  commonData: {
    clubName: string;
    clubDesc: string;
  };
}

type AppContextType = [ActualAppContextType, Dispatch<SetStateAction<ActualAppContextType>>];

const contextInit: ActualAppContextType = {
  commonData: {
    clubName: "TechVayuna",
    clubDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit repellendus\
veritatis, rem, nesciunt laudantium eaque quos vero praesentium aliquam modi tenetur nulla consequuntur\
labore officiis deserunt, natus neque. Deserunt voluptatibus quaerat voluptate labore itaque!"
  }
};

export const AppConst = createContext<AppContextType>([contextInit, () => contextInit]);

export const useSetAppContext = (newContext: ActualAppContextType) => {
  if (!newContext) throw new Error("Context param is not given or is null");
  const [_, setContext] = useContext(AppConst);
  setContext(newContext);
};

export const useGetAppContext = () => {
  return useContext(AppConst)[0];
};

export default function Appcontext(children: ReactNode) {
  const [contextState, setContextState] = useState<ActualAppContextType>(contextInit);
  return <AppConst.Provider value={[contextState, setContextState]}>{children}</AppConst.Provider>;
}
