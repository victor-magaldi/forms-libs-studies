import { useController } from "react-hook-form";

export const CheckboxGroup: React.FC<any> = (props) => {
  console.log("------------>", props);
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
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...value, option.value]);
                console.log("teste");
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
