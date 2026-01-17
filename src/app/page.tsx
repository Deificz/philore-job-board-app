import JobCard from "@/components/page-components/home/JobCard";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  const jobs = [
    {
      label: "Frontend Developer",
      value: "frontend-dev",
      description:
        "As a Frontend Developer, you will craft and maintain responsive, high-performance web interfaces. You will collaborate closely with designers and backend developers to ensure seamless user experiences, optimize website speed, and implement cutting-edge technologies like React and Tailwind. Your work directly impacts how users interact with applications, making every interaction smooth and visually appealing.",
      skills: ["React", "Tailwind", "JavaScript"],
      salary: 45000,
      location: "Pasig City",
      isApplied: true,
    },
    {
      label: "Backend Developer",
      value: "backend-dev",
      description:
        "As a Backend Developer, you are responsible for building robust server-side logic, managing databases, and creating APIs that power dynamic applications. You will work on optimizing performance, ensuring security, and integrating various systems. Collaboration with frontend teams is crucial to provide seamless, reliable, and scalable solutions that handle large volumes of data efficiently.",
      skills: ["Node.js", "Express", "MongoDB"],
      salary: 48000,
      location: "Makati City",
      isApplied: false,
    },
    {
      label: "Fullstack Developer",
      value: "fullstack-dev",
      description:
        "A Fullstack Developer plays a pivotal role in bridging frontend and backend development. You will design, implement, and maintain complete applications, ensuring functionality, performance, and a seamless user experience. From crafting intuitive interfaces to building secure, efficient server-side logic, your expertise enables the delivery of end-to-end solutions for complex projects.",
      skills: ["React", "Node.js", "TypeScript"],
      salary: 55000,
      location: "Quezon City",
      isApplied: true,
    },
    {
      label: "UI/UX Designer",
      value: "ui-ux-designer",
      description:
        "As a UI/UX Designer, you will research, design, and refine user interfaces to enhance usability and satisfaction. Your work involves creating wireframes, prototypes, and design systems while collaborating with developers to ensure the design vision is realized. By understanding user behavior and incorporating feedback, you will craft interfaces that are both visually appealing and intuitively functional.",
      skills: ["Figma", "Adobe XD", "Sketch"],
      salary: 40000,
      location: "Mandaluyong City",
      isApplied: false,
    },
    {
      label: "DevOps Engineer",
      value: "devops-engineer",
      description:
        "As a DevOps Engineer, you will oversee deployment pipelines, automate infrastructure, and ensure system reliability. Your responsibilities include monitoring performance, implementing CI/CD processes, and collaborating with development teams to improve code delivery efficiency. By bridging development and operations, you help organizations maintain scalable, secure, and highly available systems.",
      skills: ["Docker", "Kubernetes", "AWS"],
      salary: 60000,
      location: "Taguig City",
      isApplied: false,
    },
    {
      label: "Mobile Developer",
      value: "mobile-dev",
      description:
        "A Mobile Developer builds and maintains applications for iOS and Android platforms. You will work with frameworks like React Native and Flutter to create responsive, performant apps that provide an excellent user experience. From integrating APIs to optimizing performance and ensuring compatibility across devices, your work ensures mobile users have a seamless and engaging experience.",
      skills: ["React Native", "Flutter", "Swift"],
      salary: 50000,
      location: "Pasig City",
      isApplied: true,
    },
    {
      label: "Data Analyst",
      value: "data-analyst",
      description:
        "As a Data Analyst, you will examine complex datasets to uncover insights that drive business decisions. Your work involves cleaning, analyzing, and visualizing data using tools like Python, SQL, and Power BI. By identifying trends, patterns, and anomalies, you provide actionable recommendations to improve operations, optimize strategies, and support organizational growth.",
      skills: ["Python", "SQL", "Power BI"],
      salary: 45000,
      location: "Makati City",
      isApplied: true,
    },
    {
      label: "Project Manager",
      value: "project-manager",
      description:
        "A Project Manager coordinates teams, resources, and timelines to ensure projects are completed successfully. You will plan, execute, and monitor projects while mitigating risks and resolving challenges. Effective communication with stakeholders, scheduling, and resource management are key to delivering projects on time, within scope, and with high quality.",
      skills: ["Agile", "Scrum", "Jira"],
      salary: 52000,
      location: "Quezon City",
      isApplied: false,
    },
    {
      label: "QA Engineer",
      value: "qa-engineer",
      description:
        "As a QA Engineer, your role is to ensure software quality and reliability through rigorous testing. You will design test plans, automate test cases, and identify bugs or performance issues before release. Collaborating with developers and stakeholders, you help deliver stable and high-quality products that meet user expectations and maintain system integrity.",
      skills: ["Selenium", "Jest", "Cypress"],
      salary: 43000,
      location: "Mandaluyong City",
      isApplied: false,
    },
    {
      label: "Cybersecurity Specialist",
      value: "cybersecurity-specialist",
      description:
        "A Cybersecurity Specialist safeguards an organization’s systems, networks, and data from threats. You will monitor for vulnerabilities, conduct penetration testing, and implement security protocols. Staying ahead of emerging cyber threats, you ensure systems are protected against attacks, data breaches, and unauthorized access, contributing to organizational resilience and trust.",
      skills: ["Network Security", "Penetration Testing", "Linux"],
      salary: 58000,
      location: "Taguig City",
      isApplied: true,
    },
  ];

  return (
    <>
      <Label className="text-3xl justify-center ">Job Board</Label>
      <div className="md:flex md:justify-evenly flex-wrap">
        {jobs?.map((job) => (
          <JobCard key={job?.value} details={job} />
        ))}
      </div>
    </>
  );
}
