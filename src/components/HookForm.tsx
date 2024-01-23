import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email({ message: "E-mail Inválido" }),
  title: z.string(),
  phone: z.string(),
});

export function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
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
      {errors.email?.message && <p>{String(errors.email?.message)}</p>}

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

      <label htmlFor="phone">phone</label>
      <input
        id="phone"
        {...register("phone", {
          required: true,
          maxLength: 30,
          onChange(evt) {
            setValue("phone", evt.target.value.replace(/\D/g, ""));
          },
        })}
      />
      {errors.phone && errors.phone.type === "required" && (
        <span>This is required</span>
      )}
      {errors.phone && errors.phone.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <input type="submit" />
    </form>
  );
}
