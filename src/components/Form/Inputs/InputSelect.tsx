import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../../types/Form";

export const InputSelect: React.FC<UseControllerProps<FormValues>> = (
  props
) => {
  const { field, fieldState } = useController({
    ...props,
    defaultValue: "opcao2",
  });

  return (
    <div>
      <label htmlFor="seletor">Selecione uma opção:</label>
      <select {...field}>
        <option value="Selecione" disabled>
          Selecione uma opção
        </option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>

      <p className="message-error">
        {fieldState?.error?.message ? fieldState?.error?.message : null}
      </p>
    </div>
  );
};
