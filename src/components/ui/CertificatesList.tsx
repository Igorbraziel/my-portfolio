import { useUserData } from "../../data/user";

export default function CertificatesList() {
  const { certificates } = useUserData();

  return (
    <ul className="grid grid-cols-3 gap-3">
      {certificates.map((certificate, index) => (
        <li key={index} className="p-3 border border-stone-800 rounded-sm">{certificate.company}</li>
      ))}
    </ul>
  );
}
