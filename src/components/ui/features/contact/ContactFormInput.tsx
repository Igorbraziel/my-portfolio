import type { HTMLInputTypeAttribute } from "react";
import type {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface ContactFormInputProps {
  type?: HTMLInputTypeAttribute;
  defaultValue?: string | number | readonly string[] | undefined;
  options?: RegisterOptions;
  placeholder?: string;
  as?: "input" | "textarea";
  register: UseFormRegister<FieldValues>;
  name: string;
}

export default function ContactFormInput({
  as = "input",
  type = "text",
  defaultValue = "",
  register,
  name,
  options = {},
  placeholder = "",
}: ContactFormInputProps) {
  const style =
    "backdrop-blur-xs rounded-lg border px-2 w-full max-w-140 xs:text-sm sm:text-base lg:text-lg lg:py-2 lg:px-3 sm:py-1.5 sm:px-2.5 shadow-md dark:shadow-slate-200/50 shadow-slate-900/50 text-xs py-1";

  return as == "input" ? (
    <input
      className={style}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      {...register(name, options)}
    />
  ) : as == "textarea" ? (
    <textarea
      rows={5}
      className={style}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...register(name, options)}
    ></textarea>
  ) : null;
}
