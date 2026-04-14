import React, { forwardRef } from "react";
import { Text, Pressable, type PressableProps, View } from "react-native";
import { buttonStyle, textStyle } from "./style";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

export interface ButtonProps
  extends
    PressableProps,
    VariantProps<typeof buttonStyle>,
    VariantProps<typeof textStyle> {
  children: React.ReactNode;
  className?: string;
  textClass?: string;
}

/**
 * This is a simple styled button. It has all the props that the `Pressable` component have and more.
 *
 * @param children Most of the time you will pass a string here, but you can also pass an icon.
 * @param ref Have access to the `Pressable` component through the `useRef` hook.
 * @param variant How the button should be displayed.
 * @param size The size of the button.
 * @param className Customize the button with this prop.
 * @param textClass Customize what is inside the button (usually the text).
 */
export const Button = forwardRef<View, ButtonProps>(
  (
    {
      variant = "default",
      size = "default",
      textVariant = "default",
      fontVariant = "default",
      className,
      textClass,
      disabled,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    return (
      <Pressable
        disabled={disabled}
        className={cn(
          buttonStyle({ variant, size }),
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        ref={ref}
        {...props}
      >
        <Text
          className={cn(
            textStyle({ variant, textVariant, fontVariant, size }),
            textClass,
          )}
        >
          {props.children}
        </Text>
      </Pressable>
    );
  },
);
