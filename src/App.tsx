import { Form } from "./components/Form/HookForm";
import { FormContext } from "./context/FormContext";

function App() {
  return (
    <>
      <FormContext>
        <h1>React Hook Form</h1>
        <Form />
      </FormContext>
    </>
  );
}

export default App;
