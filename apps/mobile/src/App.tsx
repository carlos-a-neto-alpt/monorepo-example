import "@monorepo/styles/globals.css";

import {
  LoginForm,
  loginFormSchema,
  LoginFormSchema,
} from "@monorepo/ui/src/forms/auth";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Theme } from "./components/themes/provider";

type AppProps = {
  Test?: string;
};

export default function App(props: AppProps) {
  const { control, handleSubmit, reset } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginFormSchema) {
    console.log("Form Data:", data);
  }

  return (
    <Theme>
      <View className="flex flex-col gap-8 bg-background pt-20 flex-1 items-center p-4">
        <Text className="text-xl text-foreground font-semibold">
          Welcome to the Mobile App!
        </Text>
        <LoginForm
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          onClear={reset}
        />
        <StatusBar style="auto" />
      </View>
    </Theme>
  );
}
