import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import ContactFormInput from "./ContactFormInput";

import { useSettingsData } from "../../../../data/settings";

import SubmitButton from "./SubmitButton";


/*
MISSING:
1 - HANDLE FORM ERRORS
2 - DON'T ALLOW BIG MESSAGES
3 - DISPLAY THE FORM ERRORS TO THE USER USING THE "errors" ATTRIBUTE
4 - CHANGE THE "required" OPTION TO THE ERROR MESSAGE
*/
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const { settings } = useSettingsData();
  const { contactLabels } = settings;
  const { name, email, phone, subject, message, buttonText, submittingText } =
    contactLabels;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xrbyeldg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if(response.ok){
        alert("Form submittion accepted");
        reset();
      } else {
        alert("something went wrong");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xs:space-y-3 space-y-2 sm:space-y-3.5"
    >
      <ContactFormInput
        type="text"
        placeholder={name}
        register={register}
        name="name"
        options={{ required: true }}
      />

      <ContactFormInput
        type="email"
        placeholder={email}
        register={register}
        name="email"
        options={{ required: false }}
      />

      <ContactFormInput
        type="text"
        placeholder={phone}
        register={register}
        name="phone"
        options={{ required: false }}
      />

      <ContactFormInput
        type="text"
        placeholder={subject}
        register={register}
        name="subject"
        options={{ required: false }}
      />

      <ContactFormInput
        as="textarea"
        placeholder={message}
        register={register}
        name="message"
        options={{ required: true }}
      />

      <div className="mt-1 md:mt-2 lg:mt-3" aria-hidden></div>
      <SubmitButton
        isSubmitting={isSubmitting}
        submittingText={submittingText}
        buttonText={buttonText}
      />
    </form>
  );
}
