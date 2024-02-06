interface UIObject {
  sort: number;
  label: string;
  description?: string;
  validate: {
    required?: boolean;
    immutable?: boolean;
    options?: {
      label: string;
      value: string;
      description: string;
      icon: string;
    }[];
    pattern?: RegExp;
    defaultValue?: string;
  };
  jsonKey: string;
  uiType: string;
  level: number;
  placeholder?: string;
}

export const isValidUIObject = (obj: any): obj is UIObject => {
  if (
    typeof obj.sort !== "number" ||
    typeof obj.label !== "string" ||
    typeof obj.validate !== "object" ||
    typeof obj.jsonKey !== "string" ||
    typeof obj.uiType !== "string" ||
    typeof obj.level !== "number"
  ) {
    return false;
  }

  return true;
};

export type { UIObject };
