import { useUserData } from "../../../../data/user";
import ExperienceCard from "./ExperienceCard";
import ExperienceContainer from "./ExperienceContainer";
import ExperienceVerticalLine from "./ExperienceVerticalLine";
import TimelineDot from "./TimelineDot";

export default function ExperienceTimeline() {
  const { experiences } = useUserData();

  return (
    <div className="relative mx-auto my-2 w-full max-w-4xl">
      <ExperienceVerticalLine experiences={experiences} />

      {experiences.map((exp, index) => (
        <ExperienceContainer key={index} index={index}>
          <TimelineDot experiencesLength={experiences.length} />
          <ExperienceCard exp={exp} experiencesLength={experiences.length} />
        </ExperienceContainer>
      ))}
    </div>
  );
}
