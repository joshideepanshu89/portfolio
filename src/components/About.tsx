import {
  ChartNoAxesCombined,
  Code2,
  LucideIcon,
  ShieldCheck,
  SquareChartGantt,
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const features : Feature[] = [
  {
    title: "Production Ready",
    desc: "Built and deployed real-world applications on VPS.",
    icon: Code2,
  },
  {
    title: "Secure & Reliable",
    desc: "Authentication, data validation, and best practices.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Focused",
    desc: "Optimized applications for speed, SEO, and user experience.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "End-to-End Ownership",
    desc: "From idea to deployment — I handle everything.",
    icon: SquareChartGantt,
  },
];


export default function About() {

  return (
    <div id="about" className="bg-(--background-light) py-10 md:py-20 p-4">
      
      <div className="text-center mb-5 md:mb-10">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            About Me
          </h2>
          <p className="text-(--text) text-base md:text-2xl font-medium max-w-4xl mx-auto leading-tight">
            I build complete digital products independently — from UI/UX and
            frontend to backend APIs and deployment.
          </p>
        </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:p-4 py-4 gap-5">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-3 md:p-5 p-2 transition hover:scale-105 bg-(--background) rounded-xl border border-(--primary-20) hover:border-(--primary)"
            >
               <div className="text-(--primary) flex-shrink-0">
                  <Icon size={45} strokeWidth={1.5} />
                </div>

              <div>
                <div className="text-(--text) font-semibold">{item.title}</div>
                <div className="text-sm">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
