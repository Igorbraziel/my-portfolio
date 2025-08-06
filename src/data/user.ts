export const user = {
  name: "Igor Reis Braziel",
  description: "Full Stack Developer",
  address: "Brazil",
  media: [
    {
      name: "LinkedIn",
      profileURL: "https://www.linkedin.com/in/igor-reis-braziel-499b00300/",
      mediaIcon: "linkedin.png",
      bgColor: "bg-blue-700",
      textColor: "text-blue-50",
    },
    {
      name: "GitHub",
      profileURL: "https://github.com/Igorbraziel",
      mediaIcon: "github.png",
      bgColor: "bg-stone-800",
      textColor: "text-stone-50",
    },
    {
      name: "Instagram",
      profileURL: "https://www.instagram.com/igor_reis04/",
      mediaIcon: "instagram.png",
      bgColor: "bg-rose-600",
      textColor: "text-rose-50",
    },
  ],
};

export type SocialMedia = {
  name: string;
  profileURL: string;
  mediaIcon: string;
  bgColor: string;
  textColor: string;
};
