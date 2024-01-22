import { useEffect } from "react";
import { set, useForm } from "react-hook-form";

export function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result: any = await req.json();

        setValue("name", result.title);
        setValue("email", result.title);
        setValue("title", result.title);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === "required" && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}

      <label htmlFor="email">email</label>
      <input
        id="email"
        {...register("email", { required: true, maxLength: 30 })}
      />
      {errors.email && errors.email.type === "required" && (
        <span>This is required</span>
      )}
      {errors.email && errors.email.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}

      <label htmlFor="title">title</label>
      <input
        id="title"
        {...register("title", { required: true, maxLength: 30 })}
      />
      {errors.title && errors.title.type === "required" && (
        <span>This is required</span>
      )}
      {errors.title && errors.title.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}

      <label htmlFor="numero">numero</label>
      <input
        id="numero"
        {...register("numero", {
          required: true,
          maxLength: 30,
          onChange(evt) {
            setValue("numero", evt.target.value.replace("5", ""));
          },
        })}
      />
      {errors.numero && errors.numero.type === "required" && (
        <span>This is required</span>
      )}
      {errors.numero && errors.numero.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <input type="submit" />
    </form>
  );
}
