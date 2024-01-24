import React from "react";
import ReactJson, { ReactJsonViewProps } from "react-json-view";
import { useFormContextCustom } from "../../context/FormContext";

export const JsonViewer: React.FC<JsonViewerProps> = () => {
  const {} = useFormContextCustom;
  const reactJsonProps: ReactJsonViewProps = {
    src: jsonData,
    theme: "monokai",
    displayDataTypes: false,
    displayObjectSize: false,
    indentWidth: 2,
  };

  return (
    <div>
      <h2>Data Form</h2>
      <ReactJson {...reactJsonProps} />
    </div>
  );
};
