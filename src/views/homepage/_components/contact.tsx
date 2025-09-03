"use client";
import IconComponent from "@/components/ui/icon";
import TitleHeader from "./title-header";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section id="contact" className="md:mt-40 mt-20 sm:px-10 px-5">
      <div className="card-border rounded-xl p-6 lg:p-8 mb-5 z-30">
        <TitleHeader title="Get In Touch" sub="contact me" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="grid-headtext mb-4">Contact Information</h2>
              <p className="text-sm grid-subtext leading-relaxed">
                Feel free to contact me via any of the following methods.
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <IconComponent
                    icon={<Mail />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white mb-1">Email</p>
                  <p className="text-[#afb0b6] text-sm break-all">
                    adebolabadejo11@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <IconComponent
                    icon={<Phone />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p className="text-[#afb0b6] text-sm">+234 9049 440 746</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <IconComponent
                    icon={<MapPin />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white mb-1">Location</p>
                  <p className="text-[#afb0b6] text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="grid-headtext mb-4">Social Profiles</h3>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  className="transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <IconComponent
                    icon={<Instagram />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm hover:bg-black-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adebola-badejo/"
                  className="transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <IconComponent
                    icon={<Linkedin />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm hover:bg-black-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  className="transition-transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <IconComponent
                    icon={<Twitter />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm hover:bg-black-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  className="transition-transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <IconComponent
                    icon={<Github />}
                    className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm hover:bg-black-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black-100/30 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10">
            <h3 className="grid-headtext mb-6">Send me a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/90">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full h-12 px-4 border border-gray-600/50 rounded-lg bg-black-200/50 backdrop-blur-sm text-white placeholder-gray-400 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white/90">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="your.email@example.com"
                    className="w-full h-12 px-4 border border-gray-600/50 rounded-lg bg-black-200/50 backdrop-blur-sm text-white placeholder-gray-400 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-3 border border-gray-600/50 rounded-lg bg-black-200/50 backdrop-blur-sm text-white placeholder-gray-400 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none"
                  onChange={handleChange}
                />
              </div>

              <Button
                className={`w-full text-black font-medium ${
                  status.type === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "hover:scale-105 transition-transform duration-200"
                }`}
                type="submit"
                text={status.type === "loading" ? "Sending..." : "Send Message"}
                icon={<Send />}
                disabled={status.type === "loading"}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
