import { useContext } from "react";
import { AppConst } from "../context/app-context";

export default function useCommonData() {
  const [contextState] = useContext(AppConst);
  return contextState?.commonData ?? {};
}
