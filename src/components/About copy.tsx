import {
  ChartNoAxesCombined,
  Code2,
  ShieldCheck,
  SquareChartGantt,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-(--background-light) md:p-10 py-10 ">
      <div className="text-(--primary) text-center text-xl font-semibold">
        ABOUT ME
      </div>

      <div className="text-center py-2 text-sm ">
        I build complete digital products independently — from UI/UX and
        frontend to backend APIs and deployment.
        <br />I focus on clean architecture, performance, and real-world impact.
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:p-4 py-4">
        <div className="flex gap-3 md:p-5 p-2">
          <div className="text-(--primary)">
            <Code2 size={50} />
          </div>
          <div>
            <div className="text-(--text) font-semibold">Production Ready</div>
            <div className="text-sm ">
              Built and deployed real-world applications on VPS.
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:p-5 p-2">
          <div className="text-(--primary)">
            <ShieldCheck size={50} />
          </div>
          <div>
            <div className="text-(--text) font-semibold">Secure & Reliable</div>
            <div className="text-sm ">
              Authentication, data validation, and best practices.
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:p-5 p-2">
          <div className="text-(--primary)">
            <ChartNoAxesCombined size={50} />
          </div>
          <div>
            <div className="text-(--text) font-semibold">
              Performance Focused
            </div>
            <div className="text-sm">
              Optimized applications for speed, SEO, and user experience.
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:p-5 p-2">
          <div className="text-(--primary)">
            <SquareChartGantt size={50} />
          </div>
          <div>
            <div className="text-(--text) font-semibold">
              End-to-End Ownership
            </div>
            <div className="text-sm">
              From idea to deployment — I handle everything.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
