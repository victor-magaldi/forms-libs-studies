import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export const InputText: React.FC<UseControllerProps<FormValues>> = (props) => {
  const { field, fieldState } = useController(props);
  return (
    <div>
      <label htmlFor={props.name}>{props.name}:</label>
      <input {...field} placeholder={props.name} />
      <p className="message-error">
        {fieldState?.error?.message ? fieldState?.error?.message : null}
      </p>
    </div>
  );
};
