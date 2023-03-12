import { z } from "zod";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";

import Alert from "./Alert";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";

export const validator = withZod(
  z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid emaill address"),
    message: z
      .string()
      .min(1, "Message is required")
      .min(10, "Your message must be at least 10 characters long"),
  })
);

interface T {
  request: Request
}

export const ContactFormAction = async ({ request }: T) => {
  const result = await validator.validate(await request.formData());

  if (result.error) {
    return validationError(result.error);
  }

  return json({ status: "success", message: "Thank you for your message! The form is currently inactive. Please contact me by an e-mail." });
};

export default function ContactForm() {
  const data = useActionData();

  console.log(data);

  return (
    <>
      <h1 className="text-center text-xl font-medium pt-20">Contact form</h1>

      {data ? (<Alert variant={data.status} title={data.message} />) : (<Alert variant="error" title="Sorry, the contact form is currently inactive. Please contact me by an e-mail." />)}

      <ValidatedForm validator={validator} method="post" action="/?index" defaultValues={{ name: "", email: "", message: "" }} resetAfterSubmit className="max-w-md mt-10 pb-20 m-auto">
        <Input type="text" name="name" placeholder="Your name" className="border w-full p-3" />
        <Input type="email" name="email" placeholder="Your email" className="border w-full p-3" />
        <Textarea name="message" placeholder="Your message" rows={ 8 } className="border w-full p-3" />
        <Button type="submit" className="w-full border p-3 bg-blue-400 text-white" m0="OK, sending..." m1="Send me a message" />
      </ValidatedForm>
    </>
  );
}
