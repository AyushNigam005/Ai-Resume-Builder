import React from "react";
import { useSelector } from "react-redux";

const Template2 = () => {
  const resumeData = useSelector((state) => state.editResume.resumeData);
  const { personalInfo, education, experience, projects, skills, summary } = resumeData || {};

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 text-gray-900 p-8 shadow-lg rounded-lg border border-gray-300">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-800">
          {personalInfo?.name}
        </h1>
        <p className="text-gray-700">
          {personalInfo?.email} | {personalInfo?.phone}
        </p>
        <p className="text-gray-600">{personalInfo?.address}</p>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 text-blue-700">
            Profile Summary
          </h2>
          <p className="text-gray-800">{summary}</p>
        </section>
      )}

      {/* Education */}
      {education && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 text-blue-700">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 text-blue-700">
            Experience
          </h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold">{exp.role}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} – {exp.endDate}
              </p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 text-blue-700">
            Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-semibold">{proj.title}</h3>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && (
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2 text-blue-700">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <li key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Template2;