import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValues } from "../../types/Form";
import { InputSelect } from "./Inputs/InputSelect";
import { schemaContact } from "../../types/ZodSchemas";

import { InputText } from "./Inputs/InputText";
import { InputNumber } from "./Inputs/InputNumber";
import { CheckboxGroup } from "./Inputs/CheckboxGroup";

export function Form() {
  const { handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues: {
      firstName: "Init",
      number: "1",
    },
    mode: "onChange",
    resolver: zodResolver(schemaContact),
  });

  const onSubmit = (data: FormValues) => console.log(data);
  console.log(formState.errors, "formState");
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
      <CheckboxGroup
        options={[
          { label: "Janeiro", value: "jan" },
          { label: "Fevereiro", value: "fev" },
          { label: "Março", value: "mar" },
          { label: "Abril", value: "abr" },
          { label: "Maio", value: "mai" },
          { label: "Junho", value: "jun" },
          { label: "Julho", value: "jul" },
          { label: "Agosto", value: "ago" },
          { label: "Setembro", value: "set" },
          { label: "Outubro", value: "out" },
          { label: "Novembro", value: "nov" },
          { label: "Dezembro", value: "dez" },
        ]}
        name="meses"
        control={control}
      />
      <input type="submit" />
    </form>
  );
}
