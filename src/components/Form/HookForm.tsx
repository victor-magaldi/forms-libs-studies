import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValues } from "../../types/Form";
import { InputSelect } from "./Inputs/InputSelect";
import { schemaContact } from "../../types/ZodSchemas";

import { InputText } from "./Inputs/InputText";
import { InputNumber } from "./Inputs/InputNumber";
import { CheckboxGroup } from "./Inputs/CheckboxGroup";
import { useFormContextCustom } from "../../context/FormContext";
import { dataMonths } from "./dataCheckbox";

export function Form() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: "My Name ",
      number: "1",
    },
    mode: "onChange",
    resolver: zodResolver(schemaContact),
  });
  const { setDataForm } = useFormContextCustom();

  const onSubmit = (data: FormValues) => {
    setDataForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="firstName"
        rules={{ required: true }}
      />
      <InputNumber control={control} name="number" rules={{ required: true }} />
      <InputSelect
        control={control}
        name="seletor"
        rules={{ required: true }}
      />
      <CheckboxGroup options={dataMonths} name="meses" control={control} />
      <input type="submit" />
    </form>
  );
}
