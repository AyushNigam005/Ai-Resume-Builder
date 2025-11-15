import React from "react";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code } from "lucide-react";

function Template6Preview({ resumeInfo }) {
  return (
    <div className="bg-white h-full">
      {/* Header with Gradient */}
      <div 
        className="p-12 text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-8">
            {/* Profile Circle with Image Support */}
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

            
            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2">
                {resumeInfo?.firstName} {resumeInfo?.lastName}
              </h1>
              <p className="text-2xl mb-4 opacity-90">{resumeInfo?.jobTitle}</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                {resumeInfo?.email && (
                  <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Mail size={16} />
                    <span>{resumeInfo.email}</span>
                  </div>
                )}
                {resumeInfo?.phone && (
                  <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Phone size={16} />
                    <span>{resumeInfo.phone}</span>
                  </div>
                )}
                {resumeInfo?.address && (
                  <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <MapPin size={16} />
                    <span>{resumeInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - 1/3 */}
          <div className="space-y-8">
            {/* Profile Summary */}
            {resumeInfo?.summary && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Profile</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{resumeInfo.summary}</p>
              </div>
            )}

            {/* Skills */}
            {resumeInfo?.skills?.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Code size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {resumeInfo?.education?.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Education</h2>
                </div>
                {resumeInfo.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-sm text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-xs text-purple-600 font-semibold mb-1">{edu.universityName}</p>
                    <p className="text-xs text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    {edu.grade && (
                      <p className="text-xs text-gray-600 mt-1">Grade: {edu.grade}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - 2/3 */}
          <div className="col-span-2 space-y-8">
            {/* Experience */}
            {resumeInfo?.experience?.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Experience</h2>
                </div>

                <div className="space-y-6">
                  {resumeInfo.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-purple-300 pl-6 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                          <p className="text-base font-semibold text-purple-600">{exp.companyName}</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-purple-50 px-3 py-1 rounded-full">
                          {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        {exp.city && exp.state && `${exp.city}, ${exp.state}`}
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

            {/* Projects */}
            {resumeInfo?.projects?.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Code size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Projects</h2>
                </div>

                <div className="grid gap-4">
                  {resumeInfo.projects.map((project, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                      <h3 className="font-bold text-base text-gray-800 mb-2">{project.projectName}</h3>
                      {project.techStack && (
                        <p className="text-xs text-purple-600 font-semibold mb-2">
                          {project.techStack}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template6Preview;