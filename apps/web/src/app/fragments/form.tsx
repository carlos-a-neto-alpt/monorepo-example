"use client";

import {
  LoginForm,
  loginFormSchema,
  LoginFormSchema,
} from "@monorepo/ui/src/forms/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function WebLoginForm() {
  const { control, handleSubmit, reset } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginFormSchema) {
    console.log("Form submitted with data:", data);
  }

  return (
    <LoginForm
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      onClear={reset}
    />
  );
}
