import React from "react";
import { useField } from "remix-validated-form";

interface T {
  type: string,
  name: string,
  placeholder: string,
  className: string
}

export default function Input({ type, name, placeholder, className }: T) {
  const { error, getInputProps } = useField(name);

  return (
    <div className="mb-5">
      <input {...getInputProps({ type: type, placeholder: placeholder, className: className })} />
      {error && <p style={{ color: "red" }}><small>{error}</small></p>}
    </div>
  );
};