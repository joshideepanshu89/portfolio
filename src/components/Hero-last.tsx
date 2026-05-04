"use client";

import { useEffect, useState } from "react";
import { Server, CloudUpload, Code2, ArrowRight, Download } from "lucide-react";

export default function Hero() {


const [theme, setTheme] = useState<"dark" | "light">("dark");
    

useEffect(() => {
  const observer = new MutationObserver(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}, []);
    
    return(
        <div className="flex flex-wrap gap-x-12 justify-center items-center m-5 pb-5">

            {/* image -------------------------------------------- */}

                <img 
                src={theme === "dark" ? "/images/Hero_Dark.png" : "/images/Hero_Light.png"} className="w-120 "
                />
            
            {/* left ------------------------------------------ */}
            
            <div className=" gap-10 md:grid hidden">

                <div className="flex items-center gap-5">
                    <div className="border-2 border-(--primary-20) text-(--primary) p-3 rounded-xl"><Code2 size={35}  /></div>
                    <div>
                        <div className="text-(--primary) text-xl">Build</div>
                        <div className="text-sm">Scalable apps</div>
                    </div>
                </div>


                <div className="flex items-center gap-5">
                    <div className="border-2 border-(--primary-20) text-(--primary) p-3 rounded-xl"><Server size={35}  /></div>
                    <div>
                        <div className="text-(--primary) text-xl">Develop</div>
                        <div className="text-sm">Robust APIs</div>
                    </div>
                </div>


                <div className="flex items-center gap-5">
                    <div className="border-2 border-(--primary-20) text-(--primary) p-3 rounded-xl"><CloudUpload size={35}  /></div>
                    <div>
                        <div className="text-(--primary) text-xl">Deploy</div>
                        <div className="text-sm">Live on VPS</div>
                    </div>
                </div>

            </div>




            {/* right ------------------------------------------ */}


            <div className="max-[1175px]:text-center">
                <div className=" max-[1176px]:flex justify-center items-center gap-x-2 flex-wrap pb-6 ">
                    
                <div className="text-(--text) md:text-4xl text-2xl font-semibold">Full Stack Developer</div>
                <div className="text-(--primary) md:text-3xl text-xl">(React Focused)</div>
                </div>
                <div>I build scalable, production-ready web applications.</div>
                {/* <div> I build fast, secure and scalable web applications from frontend to backend and deploy them on production.</div> */}
                <div className="flex max-[1175px]:justify-center items-center gap-5 mt-8">
                    <div className="flex whitespace-nowrap items-center gap-2 cursor-pointer text-white border-2 border-(--primary) bg-(--primary) px-4 py-2 rounded-md">
                        View Work <ArrowRight />
                    </div>
                    <div className="flex whitespace-nowrap items-center gap-2 cursor-pointer text-(--primary) border-2 border-(--primary) px-4 py-2 rounded-md">
                        Download CV <Download />
                    </div>
                </div>
            </div>


        </div>
    )
}