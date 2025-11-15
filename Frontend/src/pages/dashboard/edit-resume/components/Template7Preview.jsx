import React from "react";
import { Mail, Phone, MapPin, User, Briefcase, GraduationCap } from "lucide-react";

function Template7Preview({ resumeInfo }) {
  return (
    <div className="bg-white h-full">
      {/* Header with Image and Info */}
      <div className="bg-slate-700 text-white">
        <div className="flex items-center gap-8 px-12 py-10">
          {/* Profile Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-5xl font-bold border-4 border-white border-opacity-50 overflow-hidden">
              {resumeInfo?.photo ? (
                <img
                  src={resumeInfo.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  {resumeInfo?.firstName?.[0]}
                  {resumeInfo?.lastName?.[0]}
                </>
              )}
            </div>
          </div>

          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">
              {resumeInfo?.firstName || "Your"} {resumeInfo?.lastName || "Name"}
            </h1>
            <p className="text-2xl font-light text-slate-200">
              {resumeInfo?.jobTitle || "Professional Title"}
            </p>
            {resumeInfo?.summary && (
              <p className="mt-4 text-sm leading-relaxed text-slate-200 max-w-2xl">
                {resumeInfo.summary}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-200 px-8 py-10 space-y-10">
          {/* Skills Section */}
          {resumeInfo?.skills?.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
                  <Briefcase size={24} className="text-slate-700" />
                </div>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
                  Skills and<br />Abilities
                </h2>
              </div>
              <ul className="space-y-2 ml-1">
                {resumeInfo.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-slate-600 mr-2">•</span>
                    <span className="text-sm text-slate-700">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education Section */}
          {resumeInfo?.education?.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
                  <GraduationCap size={24} className="text-slate-700" />
                </div>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
                  Educational<br />Training
                </h2>
              </div>
              <div className="space-y-6">
                {resumeInfo.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-sm text-slate-800 mb-1">
                      {edu.universityName}
                    </h3>
                    <p className="text-sm text-slate-700 mb-1">
                      {edu.degree}
                    </p>
                    {edu.major && (
                      <p className="text-xs text-slate-600">
                        {edu.major}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-6 pb-3 border-b-2 border-slate-400">
              Contact
            </h2>
            <div className="space-y-4">
              {resumeInfo?.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-600" />
                  <span className="text-sm text-slate-700">{resumeInfo.phone}</span>
                </div>
              )}
              {resumeInfo?.email && (
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-slate-600" />
                  <span className="text-sm text-slate-700 break-all">{resumeInfo.email}</span>
                </div>
              )}
              {resumeInfo?.address && (
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-slate-600" />
                  <span className="text-sm text-slate-700">{resumeInfo.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 px-12 py-10 space-y-10">
          {/* Experience Section */}
          {resumeInfo?.experience?.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
                  <Briefcase size={24} className="text-slate-700" />
                </div>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
                  Work<br />Experience
                </h2>
              </div>
              <div className="space-y-8 ml-1">
                {resumeInfo.experience.map((exp, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-base text-slate-600 mb-1 italic">
                      {exp.companyName} ({exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate})
                    </p>
                    {exp.city && exp.state && (
                      <p className="text-sm text-slate-500 mb-3">
                        {exp.city}, {exp.state}
                      </p>
                    )}
                    <div
                      className="text-sm text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {resumeInfo?.projects?.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-6 pb-2 border-b-2 border-slate-300">
                Projects
              </h2>
              <div className="space-y-6">
                {resumeInfo.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-base font-bold text-slate-800 mb-2">
                      {project.projectName}
                    </h3>
                    {project.techStack && (
                      <p className="text-sm text-slate-600 mb-2 italic">
                        {project.techStack}
                      </p>
                    )}
                    {project.projectSummary && (
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {project.projectSummary}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template7Preview;