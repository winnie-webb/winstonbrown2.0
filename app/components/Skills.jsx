import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiEjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Typescript", icon: SiTypescript },
    { name: "TailwindCss", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "SQL", icon: AiOutlineConsoleSql },
    { name: "Git", icon: FaGit },
    { name: "Docker", icon: FaDocker },
    { name: "Firebase", icon: SiFirebase },
    { name: "EJS", icon: SiEjs },
  ];

  return (
    <div id="skills" className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          >
            <skill.icon className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
