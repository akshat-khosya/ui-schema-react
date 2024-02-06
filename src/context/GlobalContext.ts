import { createContext } from "react";
import { UIObject, sampleData } from "../utils/jsonValidation";

interface GlobalContextValue {
  uiJson: UIObject[];
  setUIJSON: (data: UIObject[]) => void;
  formData: {};
  updateFormData: (jsonKey: string, value: string) => void;
  emptyFormData: () => void;
}
const GlobalContext = createContext<GlobalContextValue>({
  uiJson: sampleData,
  setUIJSON: () => {},
  formData: {},
  updateFormData: () => {},
  emptyFormData: () => {},
});

export default GlobalContext;
