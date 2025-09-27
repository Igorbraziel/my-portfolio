import ContactInfo from "../components/ui/features/contact/ContactInfo";
import ContactForm from "../components/ui/features/contact/ContactForm";
import MainContainer from "../components/ui/MainContainer";
import Title from "../components/ui/Title";
import { useSettingsData } from "../data/settings";

export default function ContactPage() {
  const { settings: { contactLabels: {contact} }} = useSettingsData()

  return (
    <MainContainer>
      <Title as="h1">{contact}</Title>
      <div className="grid grid-cols-[2.5fr_1fr] sm:grid-cols-[2fr_1fr] gap-4 xs:gap-6 sm:gap-8 lg:mb-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </MainContainer>
  );
}
