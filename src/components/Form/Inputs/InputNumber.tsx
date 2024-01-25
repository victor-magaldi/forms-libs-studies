import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export const InputNumber: React.FC<UseControllerProps<FormValues>> = (
  props
) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <label htmlFor={props.name}>Número</label>
      <input
        {...field}
        placeholder={props.name}
        onChange={(e) => {
          const novoValor = e.currentTarget.value.replace(/[^0-9]/g, "");
          field.onChange(novoValor);
        }}
      />
      <p className="message-error">
        {fieldState?.error?.message ? fieldState?.error?.message : null}
      </p>
    </div>
  );
};
