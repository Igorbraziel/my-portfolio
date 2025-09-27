import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import ContactFormInput from "./ContactFormInput";

import { useSettingsData } from "../../../../data/settings";

import SubmitButton from "./SubmitButton";
import ErrorMessage from "./ErrorMessage";
import { emailRegex, phoneRegex } from "../../../../utils/regex";
import toast from "react-hot-toast";

const nameCharacterLimit = 80;
const emailCharacterLimit = 100;
const messageCharacterLimit = 4000;
const subjectCharacterLimit = 200;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { settings } = useSettingsData();
  const { contactLabels } = settings;
  const {
    name,
    email,
    phone,
    subject,
    message,
    buttonText,
    submittingText,
    errorMessages,
    successToast,
    errorToast
  } = contactLabels;

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

      if (response.ok) {
        toast.success(successToast);
        reset();
      } else {
        toast.error(errorToast);
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
        options={{
          required: errorMessages.name,
          maxLength: {
            value: nameCharacterLimit,
            message: errorMessages.nameMaxLength.replace(
              "?",
              nameCharacterLimit.toString(),
            ),
          },
        }}
      />
      {errors?.name && <ErrorMessage text={errors.name.message as string} />}

      <ContactFormInput
        type="email"
        placeholder={email}
        register={register}
        name="email"
        options={{
          required: errorMessages.email,
          pattern: { value: emailRegex, message: errorMessages.invalidEmail },
          maxLength: {
            value: emailCharacterLimit,
            message: errorMessages.emailMaxLength.replace(
              "?",
              emailCharacterLimit.toString(),
            ),
          },
        }}
      />
      {errors?.email && <ErrorMessage text={errors.email.message as string} />}

      <ContactFormInput
        type="text"
        placeholder={phone}
        register={register}
        name="phone"
        options={{
          required: false,
          pattern: { value: phoneRegex, message: errorMessages.invalidPhone },
        }}
      />
      {errors?.phone && <ErrorMessage text={errors.phone.message as string} />}

      <ContactFormInput
        type="text"
        placeholder={subject}
        register={register}
        name="subject"
        options={{
          required: false,
          maxLength: {
            value: subjectCharacterLimit,
            message: errorMessages.subjectMaxLength.replace(
              "?",
              subjectCharacterLimit.toString(),
            ),
          },
        }}
      />
      {errors?.subject && (
        <ErrorMessage text={errors.subject.message as string} />
      )}

      <ContactFormInput
        as="textarea"
        placeholder={message}
        register={register}
        name="message"
        options={{
          required: errorMessages.message,
          maxLength: {
            value: messageCharacterLimit,
            message: errorMessages.messageMaxLength.replace(
              "?",
              messageCharacterLimit.toString(),
            ),
          },
        }}
      />
      {errors?.message && (
        <ErrorMessage text={errors.message.message as string} />
      )}

      <div className="mt-1 md:mt-2 lg:mt-3" aria-hidden></div>

      <SubmitButton
        isSubmitting={isSubmitting}
        submittingText={submittingText}
        buttonText={buttonText}
      />
    </form>
  );
}
