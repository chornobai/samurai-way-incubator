import s from "./FormControl.module.css";

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { Field } from "redux-form";

interface FormControlProps {
  meta?: { touched: boolean; error: string }; // Уточненный тип для meta
  children: ReactNode; // Ребёнок-компонент (textarea, input и т.д.)
}

export const FormControl = (props: FormControlProps) => {
  const hasError = props.meta && props.meta.touched && props.meta.error;

  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      {props.children} {/* Рендеринг ребенка */}
      {hasError && <span>{props.meta?.error}</span>}
    </div>
  );
};

// Пример использования для Textarea
interface TextareaProps {
  input: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  meta?: { touched: boolean; error: string };

  [key: string]: any;
}

export const Textarea = (props: TextareaProps) => {
  return (
    <FormControl meta={props.meta}>
      <textarea {...props.input} {...props} />
    </FormControl>
  );
};

// Пример использования для Input
interface InputProps {
  input: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  meta?: { touched: boolean; error: string };

  [key: string]: any;
}

export const Input = (props: InputProps) => {
  return (
    <FormControl meta={props.meta}>
      <input {...props.input} {...props} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string,
  name: string,
  validators: [],
  component: React.FC<any>,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};
