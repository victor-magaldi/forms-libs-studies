import { useController } from "react-hook-form";

export const CheckboxGroup: React.FC<any> = (props) => {
  const { options, name, control } = props;
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
        <label key={option.value} htmlFor={option.value}>
          <input
            type="checkbox"
            name={option.value}
            value={option.value}
            id={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value, option.value]);
              } else {
                onChange(value.filter((val: string) => val !== option.value));
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
