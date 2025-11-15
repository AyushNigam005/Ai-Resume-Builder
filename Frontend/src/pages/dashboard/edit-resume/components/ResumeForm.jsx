// Updated ResumeForm.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import PersonalDetails from "./form-components/PersonalDetails";
import Summary from "./form-components/Summary";
import Experience from "./form-components/Experience";
import Education from "./form-components/Education";
import Skills from "./form-components/Skills";
import Project from "./form-components/Project";
import TemplateSelector from "./TemplateSelector";
import { ArrowLeft, ArrowRight, HomeIcon, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeColor from "./ThemeColor";

function ResumeForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enanbledNext, setEnabledNext] = useState(true);
  const [enanbledPrev, setEnabledPrev] = useState(true);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const resumeInfo = useSelector((state) => state.editResume.resumeData);

  useEffect(() => {
    if (currentIndex === 0) {
      setEnabledPrev(false);
    } else if (currentIndex == 1) {
      setEnabledPrev(true);
    } else if (currentIndex === 4) {
      setEnabledNext(true);
    } else if (currentIndex === 5) {
      setEnabledNext(false);
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button>
              <HomeIcon />
            </Button>
          </Link>
          <ThemeColor resumeInfo={resumeInfo}/> 
          <Button 
            variant="outline"
            onClick={() => setShowTemplateSelector(!showTemplateSelector)}
          >
            <Layout className="mr-2" size={16} />
            Change Template
          </Button>
        </div>
        <div className="flex items-center gap-3">
          {currentIndex > 0 && (
            <Button
              size="sm"
              className="text-sm gap-2"
              disabled={!enanbledPrev}
              onClick={() => {
                if (currentIndex === 0) return;
                setCurrentIndex(currentIndex - 1);
              }}
            >
              <ArrowLeft /> Prev
            </Button>
          )}
          {currentIndex < 5 && (
            <Button
              size="sm"
              className="gap-2"
              disabled={!enanbledNext}
              onClick={() => {
                if (currentIndex >= 5) return;
                setCurrentIndex(currentIndex + 1);
              }}
            >
              Next <ArrowRight className="text-sm" />
            </Button>
          )}
        </div>
      </div>

      {/* Template Selector Modal/Drawer */}
      {showTemplateSelector && (
        <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
          <TemplateSelector />
          <Button 
            className="mt-4"
            onClick={() => setShowTemplateSelector(false)}
          >
            Done
          </Button>
        </div>
      )}

      {currentIndex === 0 && (
        <PersonalDetails
          resumeInfo={resumeInfo}
          enanbledNext={setEnabledNext}
        />
      )}
      {currentIndex === 1 && (
        <Summary
          resumeInfo={resumeInfo}
          enanbledNext={setEnabledNext}
          enanbledPrev={setEnabledPrev}
        />
      )}
      {currentIndex === 2 && (
        <Experience
          resumeInfo={resumeInfo}
          enanbledNext={setEnabledNext}
          enanbledPrev={setEnabledPrev}
        />
      )}
      {currentIndex === 3 && (
        <Project
          resumeInfo={resumeInfo}
          setEnabledNext={setEnabledNext}
          setEnabledPrev={setEnabledPrev}
        />
      )}
      {currentIndex === 4 && (
        <Education
          resumeInfo={resumeInfo}
          enanbledNext={setEnabledNext}
          enabledPrev={setEnabledPrev}
        />
      )}
      {currentIndex === 5 && (
        <Skills
          resumeInfo={resumeInfo}
          enanbledNext={setEnabledNext}
          enanbledPrev={setEnabledNext}
        />
      )}
    </div>
  );
}

export default ResumeForm;


