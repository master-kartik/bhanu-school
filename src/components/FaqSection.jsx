import React from "react";
import { Typography } from "@material-tailwind/react";
import HeroSection from "./HeroSection";

const faqs = [
  {
    title: "How can I enroll my child at your school?",
    desc: "To enroll your child at our school, please visit the admissions section on our website for detailed information on the admission process, required documents, and important dates. You can also contact our admissions office for personalized assistance."
  },
  {
    title: "What extracurricular activities do you offer?",
    desc: "We offer a wide range of extracurricular activities to cater to diverse interests, including sports, arts, music, clubs, and community service initiatives. Our goal is to provide students with opportunities to explore their passions, develop new skills, and foster a well-rounded educational experience.",
  },
  {
    title: "How can I stay updated on school events and announcements?",
    desc: "Stay informed about school events, announcements, and important updates by regularly checking our school website, subscribing to our newsletter, following our social media channels, and downloading our school app. We strive to keep our school community engaged and informed about all the happenings at our school.",
  }
];

export function FaqSection() {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
            <HeroSection title={"Frequently asked questions"} decription={"A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do."}/>
         
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
            <Typography className="pb-6 text-text text-[20px] font-medium">
            {title}
          </Typography>
              <div className="border-t border-gray-400 pt-4">
                <Typography className=" text-md leadinig-tight font-normal text-dark">
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;