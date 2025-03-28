import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Decen from "../assets/images/Decentralized-Storage.png";
import DI from "../assets/images/Discover-India.png";
import Ser from "../assets/images/Server.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "NoirVault: Secure Decentralized Storage Platform",
      description:
        "DataVaultX is a decentralized, blockchain-powered SaaS platform that securely stores and organizes user data using crypto wallet authentication, encryption, and AWS S3 for decentralized cloud storage. With a microservices architecture and gRPC integration, it ensures fast, secure, and seamless access to user data while maintaining complete privacy and control",
      tags: ["Decentralized", "Web3", "Encryption", "Distributed Systems", "Microservices", "Remote Procedure Calls"],
      links: {
        github: "https://github.com/Vinay8git",
        demo: "Soon....",
      },
      image: Decen,
      featured: true,
    },
    {
      title: "Multithreaded Java Web Server",
      description:
        "A multithreaded Java web server that efficiently handles multiple client requests simultaneously. It uses Java's concurrency features to create a robust server capable of serving static and dynamic content, ensuring high performance and responsiveness.",
      tags: ["Java", "Concurrency", "Multithreading", "Web Server"],
      links: {
        github: "https://github.com/Vinay8git/Multithreaded-Web-Server",
        demo: "Soon....",
      },
      image: Ser,
      featured: true,
    },
    {
      title: "Discover India : Your Online Travel Guide",
      description:
        "Discover India is an online travel guide designed to help tourists explore India's breathtaking destinations, rich culture, and hidden gems. From historical landmarks to local cuisines and travel tips, it provides everything you need for an unforgettable journey across India. Built with HTML, CSS, and JavaScript, it offers an interactive and user-friendly experience for travelers.",
      tags: ["Web Development", "JavaScript", "UI/UX"],
      links: {
        github: "https://github.com/Vinay8git",
        demo: "Soon....",
      },
      image: DI,
      featured: true,
    },
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};





export default ProjectShowcase;
