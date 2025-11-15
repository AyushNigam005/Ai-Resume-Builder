import React from "react";

function Template1({ resumeData }) {
  return (
    <div
      className="shadow-xl border-t-[20px] p-14 bg-white"
      style={{
        borderColor: resumeData?.themeColor || "#0a66c2",
        transition: "all 0.3s ease",
      }}
    >
      {/* Personal Details - Same as PersonalDetailPreview */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {resumeData?.personalDetails?.firstName || ""}{" "}
          {resumeData?.personalDetails?.lastName || ""}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          {resumeData?.personalDetails?.jobTitle && (
            <p className="font-semibold text-lg" style={{ color: resumeData?.themeColor }}>
              {resumeData.personalDetails.jobTitle}
            </p>
          )}
          <p>
            {resumeData?.personalDetails?.email && resumeData.personalDetails.email}
            {resumeData?.personalDetails?.email && resumeData?.personalDetails?.phone && " | "}
            {resumeData?.personalDetails?.phone && resumeData.personalDetails.phone}
          </p>
          {resumeData?.personalDetails?.address && (
            <p>{resumeData.personalDetails.address}</p>
          )}
        </div>
      </div>

      {/* Summary - Same as SummaryPreview */}
      {resumeData?.summary && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-2 border-b-2 pb-1"
            style={{ borderColor: resumeData?.themeColor, color: resumeData?.themeColor }}
          >
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {resumeData.summary}
          </p>
        </div>
      )}

      {/* Experience - Same as ExperiencePreview */}
      {resumeData?.experience?.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-2 border-b-2 pb-1"
            style={{ borderColor: resumeData?.themeColor, color: resumeData?.themeColor }}
          >
            Professional Experience
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {exp?.jobTitle || "Job Title"}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {exp?.companyName || "Company Name"}
                    {exp?.city && `, ${exp.city}`}
                    {exp?.state && `, ${exp.state}`}
                  </p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {exp?.startDate} - {exp?.currentlyWorking ? "Present" : exp?.endDate}
                </p>
              </div>
              {exp?.description && (
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects - Same as ProjectPreview */}
      {resumeData?.projects?.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-2 border-b-2 pb-1"
            style={{ borderColor: resumeData?.themeColor, color: resumeData?.themeColor }}
          >
            Projects
          </h2>
          {resumeData.projects.map((proj, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-base text-gray-900">
                {proj?.title || "Project Title"}
              </h3>
              {proj?.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {proj.link}
                </a>
              )}
              {proj?.description && (
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {proj.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education - Same as EducationalPreview */}
      {resumeData?.education?.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-2 border-b-2 pb-1"
            style={{ borderColor: resumeData?.themeColor, color: resumeData?.themeColor }}
          >
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {edu?.degree || "Degree"}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {edu?.institution || "Institution"}
                    {edu?.location && `, ${edu.location}`}
                  </p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {edu?.startDate} - {edu?.endDate}
                </p>
              </div>
              {edu?.description && (
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills - Same as SkillsPreview with rating bars */}
      {resumeData?.skills?.length > 0 && (
        <div>
          <h2
            className="text-lg font-bold mb-2 border-b-2 pb-1"
            style={{ borderColor: resumeData?.themeColor, color: resumeData?.themeColor }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {resumeData.skills.map((skill, index) => (
              <div key={skill._id || index} className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-800">
                  {typeof skill === 'string' ? skill : skill.name}
                </h3>
                {skill.rating && (
                  <div className="h-2 bg-gray-200 w-[120px] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        backgroundColor: resumeData?.themeColor || "#0a66c2",
                        width: `${(skill.rating / 5) * 100}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Template1;