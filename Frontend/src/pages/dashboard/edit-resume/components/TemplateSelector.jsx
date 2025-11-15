// TemplateSelector.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTemplate } from "@/features/resume/resumeFeatures";
import { Card } from "@/components/ui/card";

const templates = [
  { id: 1, name: "Template 1", preview: "/template1-preview.png" },
  { id: 2, name: "Template 2", preview: "/template2-preview.png" },
  { id: 3, name: "Template 3", preview: "/template3-preview.png" },
  { id: 4, name: "Template 4", preview: "/template4-preview.png" },
  { id: 5, name: "Template 5", preview: "/template5-preview.png" },
  { id: 6, name: "Template 6", preview: "/template6-preview.png" },
  { id: 7, name: "Template 7", preview: "/template7-preview.png" },
  

];

function TemplateSelector() {
  const dispatch = useDispatch();
  const currentTemplate = useSelector((state) => state.editResume.template || 1);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Choose Template</h2>
      <div className="grid grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer p-4 hover:shadow-lg transition-all ${
              currentTemplate === template.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => dispatch(setTemplate(template.id))}
          >
            <div className="aspect-[8.5/11] bg-gray-100 rounded mb-2 flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>
            <p className="text-center font-medium">{template.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;