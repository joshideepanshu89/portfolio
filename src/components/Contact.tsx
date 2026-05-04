"use client";

import { AlertCircle, CheckCircle2, Mail, MapPin, RefreshCcw, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset(); 
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="max-w-6xl m-auto pt-20 px-6 flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Left Side: Contact Info */}
            <div className="flex flex-col gap-5 md:w-1/3">
                <div className="space-y-2">
                    <h2 className="text-(--primary) text-xl font-bold tracking-[0.2em] uppercase">
                        Contact
                    </h2>
                    <p className="text-(--text) text-lg font-medium opacity-80 leading-relaxed">
                        {/* I’m looking to join a product-driven team in Germany. Let’s discuss how I can contribute. */}
                        Full Stack Developer in Germany. Let's build something great.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <a href="mailto:joshideepanshu89@gmail.com" className="flex gap-4 items-center group transition-colors">
                        <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20) group-hover:border-(--primary) transition-all">
                            <Mail className="size-5 text-(--primary)"/> 
                        </div>
                        <span className="text-sm md:text-base group-hover:text-(--primary) transition-colors">
                            joshideepanshu89@gmail.com
                        </span>
                    </a>

                    <a href="https://linkedin.com/in/08-deepanshu/" target="_blank" className="flex gap-4 items-center group transition-colors">
                        <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20) group-hover:border-(--primary) transition-all">
                             <span className="text-sm font-bold text-(--primary) w-5 h-5 flex items-center justify-center">in</span> 
                        </div>
                        <span className="text-sm md:text-base group-hover:text-(--primary) transition-colors">
                            linkedin.com/in/08-deepanshu/
                        </span>
                    </a>

                    <div className="flex gap-4 items-center">
                        <div className="p-3 bg-(--background-light) rounded-lg border border-(--primary-20)">
                            <MapPin className="size-5 text-(--primary)"/> 
                        </div>
                        <span className="text-sm md:text-base">Germany</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Conditional Rendering (Form or Success) */}
            <div className="flex-1">
                {status === "success" ? (
                    <div className="w-full text-center p-10 bg-(--background-light) border-2 border-dashed border-(--primary-20) rounded-3xl animate-in zoom-in duration-500">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-(--primary-20) rounded-full mb-6">
                            <CheckCircle2 className="size-10 text-(--primary)" />
                        </div>
                        <h3 className="text-3xl font-bold text-(--text) mb-3">Thank You!</h3>
                        <p className="text-(--foreground) opacity-70 max-w-sm mx-auto mb-8 leading-relaxed">
                            Your message has been received. I will get back to you as soon as possible.
                        </p>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="flex items-center gap-2 mx-auto text-(--primary) font-bold hover:underline"
                        >
                            <RefreshCcw size={18} /> Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input name="name" className="bg-(--background-light) border border-(--primary-20) p-4 rounded-xl focus:border-(--primary) outline-none transition-all placeholder:opacity-50" type="text" placeholder="Full Name" required />
                            <input name="email" className="bg-(--background-light) border border-(--primary-20) p-4 rounded-xl focus:border-(--primary) outline-none transition-all placeholder:opacity-50" type="email" placeholder="Email Address" required />
                        </div>
                        
                        <div className="relative">
                            <textarea name="message" className="w-full bg-(--background-light) border border-(--primary-20) p-5 rounded-xl h-48 focus:border-(--primary) outline-none transition-all resize-none placeholder:opacity-50" placeholder="Tell me about your project or opportunity..." required></textarea>
                            
                            <button 
                                type="submit" 
                                disabled={status === "sending"}
                                className="absolute bottom-4 right-4 bg-(--primary) text-(--background) font-bold py-3 px-8 rounded-lg flex items-center gap-2 hover:brightness-110 active:scale-95 disabled:opacity-50 shadow-lg transition-all"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"} <Send className="size-4" />
                            </button>
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                                <AlertCircle size={16} /> Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
}