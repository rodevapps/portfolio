import { useField } from "remix-validated-form";

interface T {
  name: string,
  placeholder: string,
  rows: number,
  className: string
}

export default function Input({ name, placeholder, rows, className }: T) {
  const { error, getInputProps } = useField(name);

  return (
    <div className="mb-5">
      <textarea {...getInputProps({ placeholder: placeholder, rows: rows, className: className })}></textarea>
      {error && <p style={{ color: "red", marginTop: '-8px' }}><small>{error}</small></p>}
    </div>
  );
};
