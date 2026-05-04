import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Invoician",
      image: "invoician.png",
      desc: "Handles complete billing workflows with GST compliance.",
      link: "https://invoician.com",
      points: [
        "Sales, purchase, returns & credit notes",
        "Stock and party balance tracking",
        "Cash, bank, and payment management",
      ],
      tags: ["Node.js", "MongoDB", "JWT", "Nginx"],
    },
    {
      title: "GarageOnCall",
      image: "goc.png",
      desc: "Built dynamic booking flow for real-time service selection.",
      link: "#",
      points: [
        "Bike data fetched via API",
        "Auto pricing based on selection",
        "Inquiry and booking handling",
      ],
      tags: ["REST API", "MongoDB", "Dynamic UI"],
    },
    {
      title: "FluffyTouch",
      image: "fluffy.png",
      desc: "Implemented structured service flows for grooming and boarding.",
      link: "#",
      points: [
        "Category-based service logic",
        "Booking and inquiry forms",
        "Reusable component structure",
      ],
      tags: ["UI System", "Forms", "Node.js"],
    },
    {
      title: "Glazma",
      image: "glazma.png",
      desc: "Booking system with authentication and order tracking.",
      link: "#",
      points: [
        "Service & package selection flow",
        "Order history with status updates",
        "State managed using Redux",
      ],
      tags: ["Redux", "Node.js", "MongoDB", "Auth"],
    },
    {
      title: "BHUMU",
      image: "bhumu.png",
      desc: "Structured content and program delivery system.",
      link: "#",
      points: [
        "Modular page architecture",
        "Organized content sections",
        "Smooth navigation and flow",
      ],
      tags: ["React", "UI Architecture", "SEO"],
    },
    {
      title: "RepairBuddy",
      image: "repairbuddy.png",
      desc: "Created fast and focused service landing experience.",
      link: "#",
      points: [
        "Split and window AC flows",
        "Lightweight UI structure",
        "Direct inquiry handling",
      ],
      tags: ["Landing Page", "Performance", "Forms"],
    },
    {
      title: "WeExcel Center",
      image: "weexcel.png",
      desc: "Built informational platform with student-focused flows.",
      link: "#",
      points: [
        "Course, tutor, and comparison pages",
        "Trial and inquiry forms",
        "Clear content hierarchy",
      ],
      tags: ["Content Pages", "Forms", "UX"],
    },
    {
      title: "Feedbacker",
      image: "feedbacker.png",
      desc: "Developed system for handling multi-platform service requests.",
      link: "#",
      points: [
        "Unified dynamic form system",
        "Platform-specific input handling",
        "Dashboard for tracking requests",
      ],
      tags: ["Dynamic Forms", "Node.js"],
    },
  ];

  return (
    <section className="py-12 bg-(--background-light)">
      <h2 className="text-(--primary) text-center text-xl font-semibold">
        PROJECTS
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-330 m-auto p-5">
        {projects.map((project) => (
          <div key={project.title} className="bg-(--background) rounded-2xl">
            <img
              className="rounded-t-2xl"
              src={`/images/projects/${project.image}`}
              alt={project.title}
            />

            <div className="p-5 grid gap-3">
              <div className="flex items-center justify-between">
                
              <div className="text-(--text) font-semibold text-lg">
                {project.title}
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="text-(--primary) flex items-center "
              >
                View Project <ArrowRight size={20}/>
              </Link>
              </div>

              <div>{project.desc}</div>

              <ol className="list-disc list-inside">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ol>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-(--background-light) text-(--text) px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
