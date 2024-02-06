import { Editor } from "@monaco-editor/react";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UIObject, isValidUIObject } from "../utils/jsonValidation";
import GlobalContext from "../context/GlobalContext";


const JsonEditor: React.FC = () => {
    const { uiJson, setUIJSON } = useContext(GlobalContext)
    const json = localStorage.getItem('json');
    const [jsonValue, setJsonValue] = useState<string>(json ? json : JSON.stringify(uiJson, null, 2));

    const handleEditorChange = (value: string | undefined, event: any) => {
        if (value) {
            validateJson(value)
            localStorage.setItem('json', value);
            setJsonValue(value);
        }
    }
    const validateJson = (value: string) => {
        try {
            const jsonObject: UIObject[] = JSON.parse(value);

            let isValid = true;

            jsonObject.forEach((element: UIObject) => {
                const validationStatus = isValidUIObject(element);
                if (!validationStatus) {
                    toast.error("UI JSON is not correct");
                    isValid = false;
                    return;
                }

            });

            if (!isValid) return;

            const sortedArray = [...jsonObject].sort((a: UIObject, b: UIObject) => {
                if (a.sort < b.sort) {
                    return -1;
                } else if (a.sort > b.sort) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setUIJSON(sortedArray);
        } catch (error) {
            toast.error((error as Error).message);
        }
    }
    return (
        <>
            <ToastContainer />
            <Editor
                height="100vh"
                defaultLanguage="json"
                defaultValue={jsonValue}
                onChange={handleEditorChange}
                options={{ formatOnPaste: true, formatOnType: true, automaticLayout: true }}
            />
        </>

    );
}

export default JsonEditor;
