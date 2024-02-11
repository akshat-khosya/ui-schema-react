import { useState } from "react";
import { UIObject, sampleData } from "../utils/jsonValidation";

export const useContextData = () => {
  const json = localStorage.getItem("json");
  const [uiJson, setUIJSON] = useState<UIObject[]>(
    json ? JSON.parse(json) : sampleData
  );
  const [formData, setFormData] = useState({});

  const updateFormData = (jsonKey: string, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [jsonKey]: value,
    }));
  };

  const emptyFormData = () => {
    setFormData({});
  };

  return {
    uiJson,
    setUIJSON,
    formData,
    updateFormData,
    emptyFormData,
  };
};
