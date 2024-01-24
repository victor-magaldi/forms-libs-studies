import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export function InputNumber(props: UseControllerProps<FormValues>) {
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