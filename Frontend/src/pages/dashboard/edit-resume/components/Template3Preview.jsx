// src/edit-resume/components/templates/Template3Preview.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Template3Preview({ resumeInfo }) {
  return (
    <div className="flex h-full bg-white">
      {/* Left Sidebar */}
      <div
        className="w-1/3 p-6 text-white"
        style={{ backgroundColor: resumeInfo?.themeColor || "#000000" }}
      >
        {/* Profile */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">
            {resumeInfo?.firstName}
          </h1>
          <h1 className="text-2xl font-bold mb-3">
            {resumeInfo?.lastName}
          </h1>
          <p className="text-sm opacity-90">{resumeInfo?.jobTitle}</p>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 border-b border-white/30 pb-2">
            CONTACT
          </h2>
          <div className="space-y-3 text-sm">
            {resumeInfo?.phone && (
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="break-all">{resumeInfo.phone}</span>
              </div>
            )}
            {resumeInfo?.email && (
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="break-all">{resumeInfo.email}</span>
              </div>
            )}
            {resumeInfo?.address && (
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{resumeInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {resumeInfo?.skills?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-white/30 pb-2">
              SKILLS
            </h2>
            <div className="space-y-2">
              {resumeInfo.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-sm font-medium mb-1">{skill.name}</p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: `${skill.rating * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeInfo?.education?.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-3 border-b border-white/30 pb-2">
              EDUCATION
            </h2>
            {resumeInfo.education.map((edu, index) => (
              <div key={index} className="mb-4 text-sm">
                <p className="font-bold">{edu.degree}</p>
                <p className="opacity-90">{edu.universityName}</p>
                {edu.major && (
                  <p className="opacity-90 text-xs mt-1">
                    <strong>Major:</strong> {edu.major}
                  </p>
                )}
                {edu.grade && (
                  <p className="opacity-90 text-xs mt-1">
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                )}
                {edu.description && (
                  <p className="opacity-75 text-xs mt-1">{edu.description}</p>
                )}
                <p className="opacity-75 text-xs mt-1">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-8">
        {/* Summary */}
        {resumeInfo?.summary && (
          <div className="mb-6">
            <h2
              className="text-xl font-bold mb-3 uppercase"
              style={{ color: resumeInfo?.themeColor || "#000000" }}
            >
              Profile
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {resumeInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resumeInfo?.experience?.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-xl font-bold mb-4 uppercase"
              style={{ color: resumeInfo?.themeColor || "#000000" }}
            >
              Experience
            </h2>
            {resumeInfo.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-4 relative pl-4 border-l-2"
                style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-base">{exp.title}</h3>
                  <p className="text-sm text-gray-600">
                    {exp.companyName} | {exp.city}, {exp.state}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
                <div
                  className="text-sm text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {resumeInfo?.projects?.length > 0 && (
          <div>
            <h2
              className="text-xl font-bold mb-4 uppercase"
              style={{ color: resumeInfo?.themeColor || "#000000" }}
            >
              Projects
            </h2>
            {resumeInfo.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 relative pl-4 border-l-2"
                style={{ borderColor: resumeInfo?.themeColor || "#000000" }}
              >
                <h3 className="font-bold text-base mb-1">
                  {project.projectName}
                </h3>
                {project.techStack && (
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                )}
                {project.projectSummary && (
                  <p className="text-sm text-gray-700">
                    {project.projectSummary}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Template3Preview;