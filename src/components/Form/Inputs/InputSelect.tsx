import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export function InputSelect(props: UseControllerProps<FormValues>) {
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
