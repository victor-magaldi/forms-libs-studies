import { Form } from "./components/Form/HookForm";
import { FormContext } from "./context/FormContext";
import { JsonViewer } from "./components/JsonData/JsonData";

function App() {
  return (
    <div className="container-page">
      <FormContext>
        <Form />
        <JsonViewer />
      </FormContext>
    </div>
  );
}

export default App;
