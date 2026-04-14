import { forwardRef, useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { cn } from "../../../utils";
import { Eye, EyeOff } from "../icon";

export type InputProps = TextInputProps & {
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  secret?: boolean;
  secretIconClassName?: string;
  secretIconColor?: string;
  icon?: {
    name: string;
    color?: string;
    className?: string;
    size?: number;
  };
};

function DefaultInputInner(
  {
    defaultValue,
    className,
    multiline = false,
    disabled = false,
    invalid = false,
    secret,
    secretIconClassName = "text-input",
    secretIconColor,
    placeholderTextColor,
    secureTextEntry,
    icon,
    ...props
  }: InputProps,
  ref: React.Ref<TextInput>,
) {
  const [secure, setSecure] = useState(secret);

  return (
    <View className={cn("group relative flex flex-row w-full shrink")}>
      <TextInput
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-1 caret-muted text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-input text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/80 disabled:cursor-not-allowed disabled:opacity-50",
          "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70",
          disabled &&
            "opacity-50 cursor-not-allowed select-none ring-transparent",
          !multiline ? "h-10" : "max-h-20",
          invalid &&
            "text-destructive border-destructive placeholder-destructive/50",
          icon && "pl-10",
          className,
        )}
        multiline={multiline}
        selectTextOnFocus={!disabled}
        readOnly={disabled}
        aria-disabled={disabled}
        secureTextEntry={secure}
        placeholderTextColor={
          invalid ? "hsla(349.72, 89.16%, 60.2%, 0.5)" : placeholderTextColor
        }
        {...props}
        ref={ref}
      />
      {secret && (
        <Pressable
          className="absolute right-3 top-1"
          onPress={() => setSecure(!secure)}
        >
          {secure ? (
            <Eye
              size={28}
              className={cn(
                secretIconClassName,
                invalid && "text-destructive/50",
              )}
              color={secretIconColor}
            />
          ) : (
            <EyeOff
              size={28}
              className={cn(
                secretIconClassName,
                invalid && "text-destructive/50",
              )}
              color={secretIconColor}
            />
          )}
        </Pressable>
      )}
    </View>
  );
}

export const DefaultInput = forwardRef<TextInput, InputProps>(
  DefaultInputInner,
) as React.FC<InputProps>;
