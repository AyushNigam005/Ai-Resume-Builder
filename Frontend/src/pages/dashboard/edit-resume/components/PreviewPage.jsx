// Updated PreviewPage.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalDeatailPreview from "./preview-components/PersonalDeatailPreview";
import SummeryPreview from "./preview-components/SummaryPreview";
import ExperiencePreview from "./preview-components/ExperiencePreview";
import EducationalPreview from "./preview-components/EducationalPreview";
import SkillsPreview from "./preview-components/SkillsPreview";
import ProjectPreview from "./preview-components/ProjectPreview";
import Template2Preview from "./Template2Preview";
import Template3Preview from "./Template3Preview";
import Template4Preview from "./Template4Preview";
import Template5Preview from "./Template5Preview";
import Template6Preview from "./Template6Preview";
import Template7Preview from "./Template7Preview";

function PreviewPage() {
  const resumeData = useSelector((state) => state.editResume.resumeData);
  const currentTemplate = useSelector((state) => state.editResume.template || 1);

  useEffect(() => {
    console.log("PreviewPage rendered with template:", currentTemplate);
  }, [resumeData, currentTemplate]);

  // Template 1 - Original Classic Design
  const Template1 = () => (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeData?.themeColor ? resumeData.themeColor : "#000000",
      }}
    >
      <PersonalDeatailPreview resumeInfo={resumeData} />
      <SummeryPreview resumeInfo={resumeData} />
      {resumeData?.experience && <ExperiencePreview resumeInfo={resumeData} />}
      {resumeData?.projects && <ProjectPreview resumeInfo={resumeData} />}
      {resumeData?.education && <EducationalPreview resumeInfo={resumeData} />}
      {resumeData?.skills && <SkillsPreview resumeInfo={resumeData} />}
    </div>
  );

  // Render selected template
  const renderTemplate = () => {
    switch (currentTemplate) {
      case 2:
        return <Template2Preview resumeInfo={resumeData} />;
      case 3:
        return <Template3Preview resumeInfo={resumeData} />;
      case 4:
        return <Template4Preview resumeInfo={resumeData} />;
      case 5:
        return <Template5Preview resumeInfo={resumeData} />;
      case 6:
        return <Template6Preview resumeInfo={resumeData} />;
      case 7:
        return <Template7Preview resumeInfo={resumeData} />;
      case 8:
        return <Template8Preview resumeInfo={resumeData} />;
      case 1:
      default:
        return <Template1 />;
    }
  };

  return renderTemplate();
}

export default PreviewPage;
