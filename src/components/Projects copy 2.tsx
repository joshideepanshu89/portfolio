import { ArrowRight, CircleDot, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      link: "https://garageoncall.com",
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
    <section id="projects" className="py-20 bg-(--background-light) px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Projects
          </h2>
          <p className="text-(--text) text-2xl md:text-4xl font-bold">
            Real-world Applications & Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-(--background) rounded-2xl border border-gray-800/50 overflow-hidden hover:border-(--primary-20) transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-video overflow-hidden border-b border-gray-800/50">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={`/images/projects/${project.image}`}
                  alt={project.title}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-(--text) font-bold text-xl group-hover:text-(--primary) transition-colors">
                    {project.title}
                  </h3>
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-(--primary) p-2 hover:bg-(--primary-20) rounded-full transition-colors"
                    >
                      <ExternalLink size={20}/>
                    </Link>
                  )}
                </div>

                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                 <ul className="space-y-2 mb-6">
                  {project.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-(--foreground) opacity-90">
                      <CircleDot size={14} className="text-(--primary) mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags Section - Pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-gray-800/30">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-(--background-light) text-(--primary) text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-(--primary-20)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}