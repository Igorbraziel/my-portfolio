import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import ContactFormInput from "./ContactFormInput";
import Button from "../../Button";
import { useSettingsData } from "../../../../data/settings";

import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { settings } = useSettingsData();
  const { contactLabels } = settings;
  const { name, email, phone, subject, message, buttonText } = contactLabels;

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  const onError: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
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
        options={{ required: true }}
      />

      <ContactFormInput
        type="text"
        placeholder={phone}
        register={register}
        name="phone"
        options={{ required: true }}
      />

      <ContactFormInput
        type="text"
        placeholder={subject}
        register={register}
        name="subject"
        options={{ required: true }}
      />

      <ContactFormInput
        as="textarea"
        placeholder={message}
        register={register}
        name="message"
        options={{ required: true }}
      />

      <div className="mt-1 md:mt-2 lg:mt-3"></div>
      <Button type="normal" size="medium">
        {buttonText} <SendIcon fontSize="small" className="ml-1" />
      </Button>
    </form>
  );
}
