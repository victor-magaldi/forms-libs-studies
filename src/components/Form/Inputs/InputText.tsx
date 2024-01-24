import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export function InputText(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <label htmlFor=""></label>
      <input {...field} placeholder={props.name} />
      <p>{fieldState?.error?.message ? fieldState?.error?.message : null}</p>
    </div>
  );
}
