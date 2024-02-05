import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const JsonEditor: React.FC = () => {
    const json = localStorage.getItem('json');
    const [jsonValue, setJsonValue] = useState<string>(json ? json : '{}');

    function handleEditorChange(value: string | undefined, event: any) {
        if (value) {
            localStorage.setItem('json', value);
            setJsonValue(value);
        }
    }
    console.log(jsonValue);

    return (
        <Editor
            height="100vh"
            defaultLanguage="json"
            defaultValue={jsonValue}
            onChange={handleEditorChange}
        />
    );
}

export default JsonEditor;
