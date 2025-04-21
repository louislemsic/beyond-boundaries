"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Instagram, Facebook } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function About() {
  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Setup intersection observers for animations
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionVisionRef, missionVisionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="bg-bc-1 min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Meet the Team!</h1>
          <p className="text-lg text-center mt-22 -mb-10 max-w-4xl mx-auto italic">
            We're actually a local group of researchers from De La Salle-College of Saint Benilde. We provide information and insight about HIV as a disease and how it affects a person physically and mentally, along with preventative measures, where to find support and how to cope, and where to test and seek treatment against HIV. Our goal is to normalize the conversation of HIV for it is an ongoing epidemic in our generation, and to raise awareness along with destigmatizing the disease and people affected or at-risk of the disease.
          </p>
        </div>
      </header>

      {/* Large SVG Background */}
      <div className="absolute -right-1 top-20 w-5xl opacity-10 z-0 overflow-hidden">
        <img 
          src={`${basePath}/svgs/logo.svg`}
          alt="Beyond Boundaries Logo" 
          className="h-[800px] w-auto"
        />
      </div>

      {/* Meet the Team Section - Redesigned with square photos and overlay text */}
      <motion.section 
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="py-20 px-6"
      >
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Team Member 1 */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
              <Image 
                src={`${basePath}/images/inno.png`}
                alt="Inno" 
                fill 
                style={{objectFit: "cover"}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-9 mb-7 text-white">
                <h3 className="text-5xl font-bold mb-2">"Inno"</h3>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:inno@beyondboundaries.help" className="hover:text-gray-300 transition-colors">
                    inno@beyondboundaries.help
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
              <Image 
                src={`${basePath}/images/hazel.png`}
                alt="Hazel" 
                fill 
                style={{objectFit: "cover"}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-9 mb-7 text-white">
                <h3 className="text-5xl font-bold mb-2">"Hazel"</h3>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:hazel@beyondboundaries.help" className="hover:text-gray-300 transition-colors">
                    hazel@beyondboundaries.help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rest of content with beige background */}
      <div className="bg-[#F6E9DE]">
        {/* Mission Vision Section - Redesigned as rectangles */}
        <motion.section 
          ref={missionVisionRef}
          initial="hidden"
          animate={missionVisionInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="px-6 py-20"
        >
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-bc-1">Mission-Vision Statements</h2>
            
            {/* Mission Rectangle */}
            <div className="mb-10 overflow-hidden rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="bg-white p-8 md:w-1/2 flex items-center h-64">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-bc-1">Mission</h3>
                    <p className="text-gray-700">
                      Beyond Boundaries seeks to inform, educate, and comfort the youth on the realities of HIV, its effects, and provide easy access to care services and treatment for those seeking it.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <Image 
                    src={`${basePath}/images/mission-asset.jpg`}
                    alt="Mission" 
                    fill 
                    style={{objectFit: "cover"}}
                  />
                  <div className="absolute inset-0 bg-red-600 opacity-50"></div>
                </div>
              </div>
            </div>
            
            {/* Vision Rectangle */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="flex flex-col-reverse md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <Image 
                    src={`${basePath}/images/vision-asset.jpg`}
                    alt="Vision" 
                    fill 
                    style={{objectFit: "cover"}}
                  />
                  <div className="absolute inset-0 bg-red-600 opacity-50"></div>
                </div>
                <div className="bg-white p-8 md:w-1/2 flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-bc-1">Vision</h3>
                    <p className="text-gray-700">
                      Beyond Boundaries aims to be the light that exposes the reality of HIV and its support initiatives. Through the implementation of this project, we aim to normalize the talk about the disease resulting in minimizing the stigma that affects PLHIV. We also aim to promote inclusivity for the Gen-Z's who are afraid to talk about HIV, and those who want to seek help but simply are fearful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Contact Section - Redesigned without white container */}
      <motion.section 
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="px-6 py-20 -mb-22"
      >
        <div className="container max-w-5xl mx-auto text-center text-bc-2">
          <h2 className="text-3xl font-bold mb-4 text-center ">Please, Get In Touch!</h2>
          
          <p className="text-normal mb-10">
            Want to stay in touch? You can follow us in our social media:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link 
              href="https://www.instagram.com/beyondboundaries" 
              className="flex items-center gap-2 text-lg hover:text-red-600 transition-colors border border-gray-300 rounded-full px-6 py-3 hover:border-red-600" 
              target="_blank"
            >
              <Instagram className="h-6 w-6" />
              Instagram
            </Link>
            
            <Link 
              href="https://www.facebook.com/beyondboundaries" 
              className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors border border-gray-300 rounded-full px-6 py-3 hover:border-blue-600" 
              target="_blank"
            >
              <Facebook className="h-6 w-6" />
              Facebook
            </Link>
          </div>
          
          <p className="text-sm mb-3">
            (or Maybe you want to send an email instead?)
          </p>
          
          <a 
            href="mailto:hello.beyondboundaries@gmail.com" 
            className="text-xl md:text-2xl font-semibold hover:text-red-300 transition-colors inline-block break-all md:break-normal"
          >
            hello.beyondboundaries@gmail.com
          </a>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}