import ReactJson, { ReactJsonViewProps } from "react-json-view";
import { useFormContextCustom } from "../../context/FormContext";

export const JsonViewer = () => {
  const { dataForm } = useFormContextCustom();
  const reactJsonProps: ReactJsonViewProps = {
    src: dataForm,
    theme: "twilight",
    displayDataTypes: false,
    displayObjectSize: false,
    indentWidth: 4,
    name: "JSON",
  };

  return (
    <div>
      <h2>Dados do Formulário Enviado</h2>
      <ReactJson {...reactJsonProps} />
    </div>
  );
};
