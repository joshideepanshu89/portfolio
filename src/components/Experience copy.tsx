import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    role: "Web Designer → Frontend Developer → Backend Support",
    company: "DIGIREAM",
    duration: "Jul 2022 – May 2023",
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
    <section id="experience" className="py-10 md:py-12">
      <div className="text-center mb-10">
        <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
          Experience
        </h2>

        <p className="text-(--text) text-base md:text-2xl font-medium">
          Professional Journey
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[18px] md:left-6 top-0 bottom-0 w-[2px] bg-(--primary-20)" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-5 md:gap-8">
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="border-2 border-(--primary-20) bg-(--background) text-(--primary) p-3 rounded-xl">
                    <BriefcaseBusiness size={24} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 border border-(--primary-20) rounded-2xl p-5 md:p-7 bg-(--background)">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-(--text) text-xl md:text-2xl font-semibold">
                        {exp.role}
                      </h3>

                      <p className="text-(--primary) font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-sm md:text-base text-(--text-muted)">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="list-disc marker:text-(--primary) space-y-3 pl-5">
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
        </div>
      </div>
    </section>
  );
}