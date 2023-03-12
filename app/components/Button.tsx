import { useIsSubmitting, useIsValid } from "remix-validated-form";

interface T {
  type: "button" | "submit" | "reset",
  className: string,
  m0: string,
  m1: string
}

export default function Button ({type, className, m0, m1}: T) {
  const isSubmitting = useIsSubmitting();
  const isValid = useIsValid();

  return (
    <div>
      <button type={type} className={className} disabled={!isValid || isSubmitting}>{isSubmitting ? m0 : m1}</button>
    </div>
  );
};