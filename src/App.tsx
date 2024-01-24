import { Form } from "./components/Form/HookForm";
import { FormContext } from "./context/FormContext";
import { JsonViewer } from "./components/JsonData/JsonData";

function App() {
  return (
    <>
      <FormContext>
        <h1>React Hook Form</h1>
        <Form />
        <JsonViewer />
      </FormContext>
    </>
  );
}

export default App;
