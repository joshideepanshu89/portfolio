import { BriefcaseBusiness } from "lucide-react";

const points: string[] = [
    "Built and deployed multiple real-world web platforms across different business domains",
    "Handled complete development lifecycle from frontend to backend and production deployment",
    "Developed applications using React, Node.js, Express, and MongoDB",
    "Built REST APIs, authentication systems (JWT, Google OAuth), and data workflows",
    "Managed VPS deployments (Ubuntu, Nginx, PM2), including domain and server setup",
    "Designed scalable UI systems, booking flows, dashboards, and optimized performance"
  ];

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-12">
      

       <div className="text-center mb-5 md:mb-10">
          <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Experience
          </h2>
          <p className="text-(--text) text-base md:text-2xl font-medium max-w-4xl mx-auto leading-tight">
            Professional Journey
          </p>
        </div>
      

      <div className="flex items-center justify-center md:gap-10 gap-5 max-w-330 m-auto p-5 flex-wrap lg:flex-nowrap">


        <div className="self-stretch border-r-2 border-(--primary-20) md:flex items-center hidden">
            <div className="bg-(--primary) p-2 rounded-full mr-[-9] ring-1 ring-(--primary) ring-offset-(--background) ring-offset-2"></div>
        </div>


        <div className="border-2 border-(--primary-20) text-(--primary) p-3 rounded-xl"><BriefcaseBusiness size={30}/></div>


        <div className="">
            <div className="text-(--text) md:text-2xl text-xl whitespace-nowrap font-semibold">Full Stack Developer </div>
            <div className="text-(--primary) text-lg font-semibold">BHUMU Group</div>
            <div>June 2023 – July 2025</div>
        </div>



        <div className="pl-5">
          <ul className="list-disc marker:text-(--primary) space-y-4 ">
            {
              points.map( (point,index) => (
                <li className="pl-2" key={index}>{point}</li> 
              ))
            }
          </ul>
        </div>

        
      </div>
    </section>
  );
}
