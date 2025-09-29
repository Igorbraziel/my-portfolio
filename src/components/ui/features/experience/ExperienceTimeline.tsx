import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const experiences = [
  {
    title: "QA Engineer",
    company: "Outlier",
    date: "01/2025 - 07/2025",
    description: [
      "Garantia da qualidade de software por meio de testes automatizados e manuais",
      "Automação com Python (Pytest, Selenium) e JavaScript (Playwright, Cypress)",
      "Testes de API com Postman, integração em pipelines CI/CD",
      "Atuação em times ágeis com foco em rastreio de issues e desenho de casos de teste",
    ],
  },
  {
    title: "AI&ML Trainee",
    company: "Compass UOL",
    date: "2024 - 2025",
    description: [
      "Desenvolvimento de modelos de machine learning para processamento de linguagem natural",
      "Implementação de pipelines de dados com Python e TensorFlow",
      "Otimização de modelos para produção",
      "Integração com serviços de cloud computing utilizando AWS",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto my-2 max-w-4xl w-full">
      {/* Vertical line */}
      <div className="left-0 absolute sm:left-1/2 h-full w-1 -translate-x-1/2 transform bg-purple-500"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative mb-10 flex w-full ${
            (index + 1) % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Dot */}
          <div className="absolute top-0 left-0 sm:left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-purple-500"></div>

          {/* Card */}
          <div
            className={`ml-4 sm:mx-0 sm:max-w-[46%] rounded-md bg-indigo-400/60 dark:bg-slate-950/70 backdrop-blur-[2px] py-3 px-4 shadow-md ${
              (index + 1) % 2 === 0 ? "text-left" : "text-left"
            }`}
          >
            <div className="flex items-center gap-1">
            <BusinessCenterIcon className="mb-1.5" fontSize="small" htmlColor="oklch(38% 0.189 293.745)"/>
            <h3 className="mb-1 text-lg font-bold font-title">{exp.title}</h3>
            </div>
            <span className="text-slate-700 text-sm dark:text-slate-400">{exp.company}</span>
            <span className="mb-3 block text-sm dark:text-slate-500">{exp.date}</span>
            <ul className="list-inside list-disc space-y-1 text-sm font-medium">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
