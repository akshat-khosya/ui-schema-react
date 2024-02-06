import { createContext } from "react";
import { UIObject, sampleData } from "../utils/jsonValidation";

interface GlobalContextValue {
  uiJson: UIObject[];
  setUIJSON: (data: UIObject[]) => void;
}
const GlobalContext = createContext<GlobalContextValue>({
  uiJson: sampleData,
  setUIJSON: () => {},
});

export default GlobalContext;
