"use client";

import { View, Text } from "react-native";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";
import { LoginFormSchema } from "./schema";
import { Input, Button } from "../../../components";

type LoginFormProps = {
  control: Control<LoginFormSchema>;
  onSubmit: () => void;
  onClear: () => void;
};

export function LoginForm({ control, onSubmit, onClear }: LoginFormProps) {
  return (
    <View className="flex w-full flex-col gap-8 items-center">
      <View className="flex flex-col gap-4 w-full">
        <Controller
          name="email"
          defaultValue=""
          render={({
            field: { onChange, value, disabled },
            fieldState: { invalid, error },
          }) => (
            <View className="flex flex-col gap-2">
              <Input
                value={value}
                placeholder="your@email.com"
                disabled={disabled}
                onChangeText={onChange}
                invalid={invalid}
              />
              {error && (
                <Text className="text-destructive">{error.message}</Text>
              )}
            </View>
          )}
          control={control}
        />

        <Controller
          name="password"
          defaultValue=""
          render={({
            field: { onChange, value, disabled },
            fieldState: { invalid, error },
          }) => (
            <View className="flex flex-col gap-2">
              <Input
                value={value}
                disabled={disabled}
                onChangeText={onChange}
                invalid={invalid}
                secret
                placeholder="Your password"
              />
              {error && (
                <Text className="text-destructive">{error.message}</Text>
              )}
            </View>
          )}
          control={control}
        />
      </View>
      <View className="flex flex-row gap-3">
        <Button onPress={onSubmit}>Submit</Button>
        <Button onPress={onClear}>Clear</Button>
      </View>
    </View>
  );
}
