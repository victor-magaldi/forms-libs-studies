// import { useEffect } from "react";
// import { useController, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm, useController, UseControllerProps } from "react-hook-form";

const schema = z.object({
  FirstName: z.string().max(5),
  meses: z.any(),
  number: z.string(),
  seletor: z.string(),
});
type FormValues = {
  FirstName: string;
};

function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <label htmlFor=""></label>
      <input {...field} placeholder={props.name} />
      <p>{fieldState?.error?.message ? fieldState?.error?.message : null}</p>
    </div>
  );
}
function InputNumber(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <label htmlFor="">Number</label>
      <input
        {...field}
        placeholder={props.name}
        onChange={(e) => {
          const novoValor = e.currentTarget.value.replace(/[^0-9]/g, "");
          field.onChange(novoValor);
        }}
      />
      <p>{fieldState?.error?.message ? fieldState?.error?.message : null}</p>
    </div>
  );
}

const CheckboxGroup: React.FC<any> = ({ options, name, control }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: ["jan"],
  });

  return (
    <div>
      {options.map((option: any) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value, option.value]);
              } else {
                onChange(value.filter((val) => val !== option.value));
              }
            }}
            checked={value.includes(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

function InputSelect(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <label htmlFor="selectField">Selecione uma opção:</label>
      <select {...field}>
        <option value="Selecione" disabled>
          Selecione uma opção
        </option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>

      <p>{fieldState?.error?.message ? fieldState?.error?.message : null}</p>
    </div>
  );
}
export function HookForm() {
  const { handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues: {
      FirstName: "Init",
      number: "1",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  console.log("formState", formState.errors);
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
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
