import ReactJson, { ReactJsonViewProps } from "react-json-view";
import { useFormContextCustom } from "../../context/FormContext";

export const JsonViewer = () => {
  const { dataForm } = useFormContextCustom();
  const reactJsonProps: ReactJsonViewProps = {
    src: dataForm,
    theme: "twilight",
    displayDataTypes: false,
    displayObjectSize: false,
    indentWidth: 2,
    name: "JSON DATA",
  };

  return (
    <div>
      <h2>Data Form</h2>
      <ReactJson {...reactJsonProps} />
    </div>
  );
};
