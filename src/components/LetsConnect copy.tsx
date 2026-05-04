import { Handshake } from "lucide-react";
import Link from "next/link";

export default function LetsConnect() {
  return (
    <section className="py-12 flex md:flex-nowrap flex-wrap justify-center items-center md:gap-15 gap-5 bg-(--background-light) rounded-xl max-w-350 mx-auto p-5 text-center">
      <Handshake className="size-12 md:size-15 text-(--primary)"/>
      <div>
        <div className="text-(--text) md:text-2xl text-xl font-semibold">Open to Full Stack / Frontend opportunities in Germany</div>
        <div className="md:text-lg text-base">Let’s build something impactful together.</div>
      </div>
      <Link href="mailto:" target="_blank" className="bg-(--primary) text-white text-lg p-2 px-5 rounded whitespace-nowrap ">
        Let’s Connect
      </Link>
    </section>
  );
}
