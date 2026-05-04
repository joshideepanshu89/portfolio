
interface TechItem {
  name: string;
  icon: string;
}

const tech: TechItem[] = [
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "Tailwind", icon: "tailwindcss.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Express", icon: "express.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "Nginx", icon: "nginx.svg" },
  { name: "Ubuntu", icon: "ubuntu.svg" },
];

export default function TechStack() {

  return (
    <section className="py-12">
      <div className="text-(--primary) text-center text-xl font-semibold">
        TECH STACK
      </div>

      <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-3 gap-10 lg:max-w-350 md:max-w-200 mx-auto p-5 ">
        {/* <div className="flex md:gap-10 gap-5 justify-evenly flex-wrap max-w-350 mx-auto p-5"> */}

        {tech.map((item) => (
          <div
            key={item.name}
            className="text-center transition hover:scale-130"
          >
            <img
              className="w-full max-w-15 m-auto"
              src={`/images/icons/${item.icon}`}
              alt={item.name}
            />

            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
