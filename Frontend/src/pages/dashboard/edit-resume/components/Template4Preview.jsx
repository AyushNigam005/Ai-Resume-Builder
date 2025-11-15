import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Template4Preview({ resumeInfo }) {
  return (
    <div className="bg-white h-full">
      {/* Header Section with Photo Area and Theme Color */}
      <div className="relative">
        {/* Top Section - Name and Photo */}
        <div className="flex items-end">
          {/* Photo Circle Space */}
          <div className="w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden ml-8">
            {resumeInfo?.photo ? (
            <img 
            src={resumeInfo.photo} 
                alt="Profile" 
              className="w-full h-full object-cover"
        />
         ) : (
          <span className="text-6xl font-bold text-gray-400">
          {resumeInfo?.firstName?.[0]}{resumeInfo?.lastName?.[0]}
        </span>
        )}
      </div>
          
          {/* Name Section */}
          <div className="ml-8 mb-8">
            <p className="text-2xl font-medium mb-1">{resumeInfo?.firstName}</p>
            <h1 className="text-6xl font-bold tracking-tight">
              {resumeInfo?.lastName}
            </h1>
          </div>
        </div>

        {/* Color Bar with Job Title */}
        <div 
          className="py-6 px-8 bg-[#00a8b5]"
        >
          <h2 className="text-2xl font-bold text-white tracking-wide">
            {resumeInfo?.jobTitle?.toUpperCase() || "JOB TITLE"}
          </h2>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="flex">
        {/* Left Sidebar */}
        <div 
          className="w-72 p-8 space-y-8"
          style={{ backgroundColor: "#e8f4f6" }}
        >
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-800">
              CONTACTO
            </h3>
            <div className="space-y-3 text-sm">
              {resumeInfo?.email && (
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">{resumeInfo.email}</span>
                </div>
              )}
              {resumeInfo?.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>{resumeInfo.phone}</span>
                </div>
              )}
              {resumeInfo?.address && (
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{resumeInfo.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Summary */}
          {resumeInfo?.summary && (
            <div>
              <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-800">
                PROFILE SUMMARY
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {resumeInfo.summary}
              </p>
            </div>
          )}

          {/* Skills */}
          {resumeInfo?.skills?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-800">
                SKILLS
              </h3>
              <div className="space-y-2">
                {resumeInfo.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">✓</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-8 space-y-8">
          {/* Professional Experience */}
          {resumeInfo?.experience?.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-800">
                PROFESSIONAL EXPERIENCE
              </h3>
              {resumeInfo.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-bold mb-1">{exp.companyName}</h4>
                  <p className="text-base font-semibold text-gray-700 mb-1">
                    {exp.title}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {exp.city && exp.state && `${exp.city}, ${exp.state} | `}
                    {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                  <div
                    className="text-sm text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resumeInfo?.projects?.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-800">
                PROJECTS
              </h3>
              {resumeInfo.projects.map((project, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-lg font-bold mb-1">{project.projectName}</h4>
                  {project.techStack && (
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Tech Stack:</span> {project.techStack}
                    </p>
                  )}
                  {project.projectSummary && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {project.projectSummary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {resumeInfo?.education?.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-800">
                EDUCATION
              </h3>
              {resumeInfo.education.map((edu, index) => (
                <div key={index} className="mb-5">
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-base font-semibold text-gray-700 mb-1">
                    {edu.universityName}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.major && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Major:</span> {edu.major}
                    </p>
                  )}
                  {edu.grade && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Grade:</span> {edu.grade}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template4Preview;