import { Form } from "./components/Form/HookForm";
import { FormContext } from "./context/FormContext";
import { JsonViewer } from "./components/JsonData/JsonData";

function App() {
  return (
    <>
      <FormContext>
        <Form />
        <JsonViewer />
      </FormContext>
    </>
  );
}

export default App;
