import { DefaultInput } from "./default";

/**
 * The Input component can be used in forms, filters, search and others.
 *
 * @example
 * ```tsx
 * <Controller
 *  name="name"
 *  control={control}
 *  render={({
 *    field: { onChange, value, disabled, onBlur },
 *    fieldState: { error },
 *  }) => (
 *    <View className="flex-1 flex flex-col gap-2">
 *      <Text
 *        className={cn(
 *          "text-foreground font-medium text-base leading-none",
 *          error && "text-destructive"
 *        )}
 *      >
 *        Field Name{" "}
 *        <Text
 *          className={cn(
 *            "text-primary font-semibold",
 *            error && "text-destructive"
 *          )}
 *        >
 *          *
 *        </Text>
 *      </Text>
 *      <Input
 *        isInvalid={error ? true : false}
 *        keyboardType="numeric"
 *        isDisabled={disabled}
 *        placeholder="Something"
 *        onBlur={onBlur}
 *        value={value}
 *        onChangeText={onChange}
 *        placeholderTextColor={inputPlaceholderColor}
 *      />
 *      {error && (
 *        <Text className="text-destructive text-xs">
 *          {error.message}
 *        </Text>
 *      )}
 *    </View>
 *  )}
 * />
 *
 * ```
 *
 * *`(mobile and web)`*
 */
export const Input = DefaultInput;
