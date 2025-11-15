// src/edit-resume/components/templates/Template2Preview.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Template2Preview({ resumeInfo }) {
  return (
    <div className="bg-white h-full">
      {/* Header with Color Background */}
      <div
        className="p-8 text-white"
        style={{
          backgroundColor: resumeInfo?.themeColor || "#000000"
        }}
      >
        <h1 className="text-4xl font-bold mb-2">
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <p className="text-xl opacity-90">{resumeInfo?.jobTitle}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {resumeInfo?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{resumeInfo.phone}</span>
            </div>
          )}
          {resumeInfo?.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{resumeInfo.email}</span>
            </div>
          )}
          {resumeInfo?.address && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{resumeInfo.address}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {resumeInfo?.summary && (
          <div className="mb-6">
            <h2
              className="text-xl font-bold mb-3 pb-2 border-b-2"
              style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
            >
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">{resumeInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {resumeInfo?.experience?.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-bold mb-3 pb-2 border-b-2"
              style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
            >
              WORK EXPERIENCE
            </h2>
            {resumeInfo.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  {exp.companyName} | {exp.city}, {exp.state}
                </p>
                <div
                  className="text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                />
              </div>
            ))}
          </div>
        )}

         {/* ✅ Updated Projects Section */}
        {resumeInfo?.projects?.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-bold mb-3 pb-2 border-b-2"
              style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
            >
              PROJECTS
            </h2>
            {resumeInfo.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-lg">{project.projectName}</h3>
                {project.techStack && (
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                )}
                {project.projectSummary && (
                  <p className="text-sm text-gray-700 mt-1">
                    {project.projectSummary}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Education */}
        {resumeInfo.education.map((edu, index) => (
  <div key={index} className="mb-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-lg">{edu.degree}</h3>
        <p className="text-gray-600">{edu.universityName}</p>
        {edu.major && (
          <p className="text-sm text-gray-700">
            <strong>Major:</strong> {edu.major}
          </p>
        )}
        {edu.grade && (
          <p className="text-sm text-gray-700">
            <strong>Grade:</strong> {edu.grade}
          </p>
        )}
        {edu.description && (
          <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
        )}
      </div>
      <span className="text-sm text-gray-600">
        {edu.startDate} - {edu.endDate}
      </span>
    </div>
  </div>
))}


        {/* Skills */}
        {resumeInfo?.skills?.length > 0 && (
          <div>
            <h2
              className="text-xl font-bold mb-3 pb-2 border-b-2"
              style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
            >
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full text-white"
                  style={{ backgroundColor: resumeInfo?.themeColor || "#000000" }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Template2Preview;