import { capitalize } from "@mui/material";
import MainContainer from "../components/ui/MainContainer";
import NextPageLink from "../components/ui/NextPageLink";
import Title from "../components/ui/Title";
import { useSkillsData } from "../data/skills";
import { useLinksData } from "../data/links";
import InfiniteScrollList from "../components/ui/InfiniteScrollLits";
import { motion } from "motion/react";
import Typewriter from "../components/ui/TypeWriter";
import CompetenciesList from "../components/ui/icons/CompetenciesList";

export default function SkillsPage() {
  const { skillsLabels, skillsList } = useSkillsData();
  const links = useLinksData();

  return (
    <MainContainer>
      <Title as="h1">{skillsLabels.skillsText}</Title>
      <InfiniteScrollList
        unorderedListClassName="py-2.5"
        listItemClassName="dark:bg-slate-600/20 rounded-sm border-2 dark:border-slate-300/40"
        items={skillsList.map((skill, index) => (
          <motion.div
            className="xs:h-25 xs:w-25 flex h-22 w-22 flex-col items-center justify-center gap-2 p-2 sm:h-27 sm:w-27 md:h-30 md:w-30 lg:gap-3 bg-purple-400/20 dark:bg-purple-600/10"
            key={index}
            whileHover={{ scale: 1.03 }}
          >
            {
              <skill.techIcon className="xs:h-10 xs:w-10 h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-13 lg:w-13 xl:h-14 xl:w-14" />
            }{" "}
            <span className="xs:text-[10px] text-[8px] font-semibold md:text-xs">
              {skill.techLabel}
            </span>
          </motion.div>
        ))}
        duration={50}
      />
      <Title as="h2" className="!mt-8">
        {skillsLabels.coreCompetenciesText}
      </Title>
      <Typewriter
        text={skillsLabels.competenciesResume}
        speed={50}
        className="text-center text-sm font-semibold tracking-wider sm:text-base lg:text-lg xl:text-xl"
      />
      <CompetenciesList />
      <NextPageLink path="/projects">
        {capitalize(links.at(3)?.label as string) || "Next"}
      </NextPageLink>
    </MainContainer>
  );
}
