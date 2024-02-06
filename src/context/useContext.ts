import { useState } from "react";
import { UIObject, sampleData } from "../utils/jsonValidation";

export const useContextData = () => {
  const [uiJson, setUIJSON] = useState<UIObject[]>(sampleData);

  return {
    uiJson,
    setUIJSON,
  };
};
