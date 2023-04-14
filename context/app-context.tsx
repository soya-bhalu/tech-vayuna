import {
  createContext,
  type ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ActualAppContextType {
  commonData: {
    clubName: string;
    clubDesc: string;
  };
}

type AppContextType = [
  ActualAppContextType,
  Dispatch<SetStateAction<ActualAppContextType>>
];

const contextInit: ActualAppContextType = {
  commonData: {
    clubName: "TechVayuna",
    clubDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit repellendus veritatis, rem, nesciunt laudantium eaque quos vero praesentium aliquam modi tenetur nulla consequuntur labore officiis deserunt, natus neque. Deserunt voluptatibus quaerat voluptate labore itaque!",
  },
};

export const AppConst = createContext<AppContextType>([
  contextInit,
  () => contextInit,
]);

export default function Appcontext(children: ReactNode) {
  const [contextState, setContextState] = useState<AppContextType>(contextInit);
  return (
    <AppConst.Provider value={[contextState, setContextState]}>
      {children}
    </AppConst.Provider>
  );
}
