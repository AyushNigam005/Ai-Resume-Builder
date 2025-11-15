import React from "react";
import { Mail, Phone, Globe, User, Briefcase, GraduationCap, FolderOpen, Lightbulb } from "lucide-react";

function Template5Preview({ resumeInfo }) {
  const accentColor = "#fbbf24";
  const darkBg = "#2d3748";
  
  return (
    <div className="bg-white h-full flex">
      {/* Left Sidebar - Dark with Accent Color */}
      <div 
        className="w-72 text-white p-8 flex flex-col"
        style={{ backgroundColor: darkBg }}
      >
        {/* Profile Photo */}
        <div className="mb-6">
          <div 
  className="w-48 h-48 rounded-full mx-auto flex items-center justify-center border-8 overflow-hidden"
  style={{ 
    backgroundColor: "#374151",
    borderColor: accentColor
  }}
>
  {resumeInfo?.photo ? (
    <img 
      src={resumeInfo.photo} 
      alt="Profile" 
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-6xl font-bold" style={{ color: accentColor }}>
      {resumeInfo?.firstName?.[0]}{resumeInfo?.lastName?.[0]}
    </span>
  )}
</div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ color: accentColor }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <p className="text-lg text-gray-300">{resumeInfo?.jobTitle}</p>
        </div>

        {/* Contact Section */}
        <div className="mb-8">
          <div 
            className="flex items-center gap-3 mb-4"
            style={{ color: accentColor }}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: accentColor }}
            >
              <Phone size={20} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-bold">Contact</h3>
          </div>
          <div 
            className="border-b-2 w-16 mb-4"
            style={{ borderColor: accentColor }}
          ></div>
          
          <div className="space-y-3 text-sm">
            {resumeInfo?.email && (
              <div>
                <p style={{ color: accentColor }} className="font-semibold mb-1">Email</p>
                <p className="text-gray-300 break-all">{resumeInfo.email}</p>
              </div>
            )}
            {resumeInfo?.phone && (
              <div>
                <p style={{ color: accentColor }} className="font-semibold mb-1">Phone</p>
                <p className="text-gray-300">{resumeInfo.phone}</p>
              </div>
            )}
            {resumeInfo?.address && (
              <div>
                <p style={{ color: accentColor }} className="font-semibold mb-1">Address</p>
                <p className="text-gray-300">{resumeInfo.address}</p>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        {resumeInfo?.skills?.length > 0 && (
          <div className="mb-8">
            <div 
              className="flex items-center gap-3 mb-4"
              style={{ color: accentColor }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <Lightbulb size={20} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold">Skills</h3>
            </div>
            <div 
              className="border-b-2 w-16 mb-4"
              style={{ borderColor: accentColor }}
            ></div>
            
            <div className="space-y-3">
              {resumeInfo.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-sm mb-2 text-gray-300">{skill.name}</p>
                  <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: accentColor,
                        width: `${skill.rating ? skill.rating * 20 : 80}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-10">
        {/* Profile Summary */}
        {resumeInfo?.summary && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <User size={24} className="text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
            </div>
            <div 
              className="border-b-2 w-20 mb-4"
              style={{ borderColor: accentColor }}
            ></div>
            <p className="text-gray-700 leading-relaxed">{resumeInfo.summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {resumeInfo?.experience?.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <Briefcase size={24} className="text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            <div 
              className="border-b-2 w-20 mb-6"
              style={{ borderColor: accentColor }}
            ></div>

            <div className="space-y-6 relative pl-8">
              {/* Timeline Line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: accentColor }}
              ></div>

              {resumeInfo.experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute -left-10 top-0 w-4 h-4 rounded-full border-4 border-white"
                    style={{ backgroundColor: accentColor }}
                  ></div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-base font-semibold mb-1" style={{ color: accentColor }}>
                    {exp.companyName} | {exp.city && exp.state && `${exp.city}, ${exp.state}`}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                  <div
                    className="text-sm text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {resumeInfo?.education?.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <GraduationCap size={24} className="text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div 
              className="border-b-2 w-20 mb-6"
              style={{ borderColor: accentColor }}
            ></div>

            {resumeInfo.education.map((edu, index) => (
              <div key={index} className="mb-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-base font-semibold mb-1" style={{ color: accentColor }}>
                  {edu.universityName} | {edu.city && edu.state && `${edu.city}, ${edu.state}`}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Graduated: {edu.endDate}
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
                  <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {resumeInfo?.projects?.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <FolderOpen size={24} className="text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
            </div>
            <div 
              className="border-b-2 w-20 mb-6"
              style={{ borderColor: accentColor }}
            ></div>

            {resumeInfo.projects.map((project, index) => (
              <div key={index} className="mb-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.projectName}</h3>
                {project.techStack && (
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Technologies:</span> {project.techStack}
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
      </div>
    </div>
  );
}

export default Template5Preview;