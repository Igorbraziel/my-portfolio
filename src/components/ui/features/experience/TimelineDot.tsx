interface TimelineDotProps {
  experiencesLength: number;
}

export default function TimelineDot({ experiencesLength }: TimelineDotProps) {
  return (
    <div
      className={`absolute top-0 left-0 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-purple-400 dark:bg-purple-900 ${experiencesLength > 1 ? "sm:left-1/2" : ""}`}
    ></div>
  );
}
