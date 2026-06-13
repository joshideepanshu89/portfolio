import { BriefcaseBusiness, ArrowDown } from "lucide-react";

const experiences = [
  {
    role: "Web Designer → Frontend Developer → Backend Support",
    company: "DIGIREAM",
    duration: "Jul 2022 – May 2023",
    stage: "Designer → Frontend → Backend Support",
    points: [
      "Started as a Web Designer and transitioned into frontend development using React.js",
      "Built responsive user interfaces and integrated REST APIs",
      "Supported backend development tasks and worked with Node.js and MongoDB",
      "Gained experience across design, frontend, and backend workflows",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "BHUMU Group",
    duration: "Jun 2023 – Jul 2025",
    stage: "Full Stack",
    points: [
      "Built and deployed multiple production web applications using React.js, Node.js, Express.js, and MongoDB",
      "Developed dashboards, booking systems, authentication flows, and business management platforms",
      "Managed VPS deployments using Ubuntu, NGINX, PM2, domain configuration, and SSL setup",
      "Worked across the complete development lifecycle from frontend to deployment",
    ],
  },
  {
    role: "Software Developer – Product Development",
    company: "FuelBuddy",
    duration: "Jul 2025 – Dec 2025",
    stage: "Product Developer",
    points: [
      "Contributed to product development within a large engineering team supporting operational workflows",
      "Worked with Vue.js, TypeScript, GraphQL, PostgreSQL, and Docker in a production environment",
      "Collaborated with product and engineering teams following agile development practices",
      "Contributed to feature development, debugging, and platform improvements",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
          Experience
        </h2>

        <p className="text-(--text) text-base md:text-2xl font-medium">
          Career Progression
        </p>
      </div>

      {/* Career Path */}
      <div className="max-w-5xl mx-auto px-5 mb-14">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-center">
          <div className="px-4 py-2 rounded-full border border-(--primary-20)">
            Web Designer
          </div>

          <ArrowDown
            className="text-(--primary) rotate-0 md:rotate-[-90deg]"
            size={18}
          />

          <div className="px-4 py-2 rounded-full border border-(--primary-20)">
            Frontend Developer
          </div>

          <ArrowDown
            className="text-(--primary) rotate-0 md:rotate-[-90deg]"
            size={18}
          />

          <div className="px-4 py-2 rounded-full border border-(--primary-20)">
            Full Stack Developer
          </div>

          <ArrowDown
            className="text-(--primary) rotate-0 md:rotate-[-90deg]"
            size={18}
          />

          <div className="px-4 py-2 rounded-full border border-(--primary-20)">
            Product Developer
          </div>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto px-5 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative border border-(--primary-20) rounded-2xl p-5 md:p-8 hover:border-(--primary) transition-all duration-300"
          >
            {/* Stage Badge */}
            <div className="mb-4 md:absolute md:-top-3 md:left-6">
              <span className="inline-block bg-(--background) border border-(--primary-20) text-(--primary) text-xs md:text-sm px-3 py-1 rounded-full">
                {exp.stage}
              </span>
            </div>

            {/* HEADER ROW (ICON + TITLE) */}
            <div className="flex items-start gap-3 md:gap-5">
              <div className="border-2 border-(--primary-20) text-(--primary)
                              p-2 md:p-3 rounded-xl shrink-0
                              flex items-center justify-center leading-none">
                <BriefcaseBusiness size={22} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-(--text) text-lg md:text-2xl font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-(--primary) text-base md:text-lg font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-xs md:text-base opacity-80">
                    {exp.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* POINTS FULL WIDTH (IMPORTANT FIX) */}
            <div className="mt-5 md:mt-6 w-full">
              <ul className="list-disc marker:text-(--primary) pl-5 space-y-3 text-sm md:text-base">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}