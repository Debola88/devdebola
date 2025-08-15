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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="md:mt-40 mt-20 sm:px-10 px-5">
      <div className="card card-border rounded-xl p-4 lg:p-6 mb-5">
        <TitleHeader title="Get In Touch" sub="contact me" />
        <div className="flex max-md:flex-col">
          <div className="flex-1 mt-12">
            <h2 className="grid-headtext">Contact information</h2>
            <p className="text-sm pt-4 pb-2 grid-subtext">
              Feel free to contact me via any of the following methods. I&apos;m
              always open to discussing new projects, creative ideas, or
              opportunities.
            </p>
            <div className="flex gap-2 md:pt-6 pt-2">
              <IconComponent
                icon={<Mail />}
                className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
              />
              <div className="flex flex-col">
                <p>Email</p>
                <p className="text-[#afb0b6]">adebolabadejo11@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2 md:pt-6 pt-2">
              <IconComponent
                icon={<Phone />}
                className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
              />
              <div className="flex flex-col">
                <p>Phone No</p>
                <p className="text-[#afb0b6]">+234 9049 440 746</p>
              </div>
            </div>
            <div className="flex gap-2 md:pt-6 pt-2">
              <IconComponent
                icon={<MapPin />}
                className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
              />
              <div className="flex flex-col">
                <p>Location</p>
                <p className="text-[#afb0b6]">Lagos</p>
              </div>
            </div>
            <h2 className="grid-headtext pt-4 pb-2">Social Profiles</h2>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#">
                <IconComponent
                  icon={<Instagram />}
                  className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                />
              </a>
              <a href="https://www.linkedin.com/in/adebola-badejo/">
                <IconComponent
                  icon={<Linkedin />}
                  className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                />
              </a>
              <a href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#">
                <IconComponent
                  icon={<Twitter />}
                  className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                />
              </a>
              <a href="https://www.instagram.com/debola.___/?igsh=NTc4MTIwNjQ2YQ%3D%3D#">
                <IconComponent
                  icon={<Github />}
                  className="backdrop-filter backdrop-blur-3xl bg-black-200 text-white-50 text-sm"
                />
              </a>
            </div>
          </div>
          <form className="flex-1 mt-12 space-y-6">
            <div className="flex max-md:flex-col space-x-2 space-y-2">
              <div className="flex flex-col flex-1 space-y-2">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full h-10 border-2 border-gray-500 rounded bg-black-200 p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col flex-1 space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className="w-full h-10 border-2 border-gray-500 rounded bg-black-200 p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                className="w-full h-10 border-2 border-gray-500 rounded bg-black-200 p-2"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                className="w-full border-2 border-gray-500 rounded bg-black-200 p-2 h-32"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <Button
              className="w-full text-black"
              text="Send Message"
              icon={<Send />}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
