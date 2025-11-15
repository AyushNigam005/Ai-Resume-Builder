import React from "react";
import { useDispatch } from "react-redux";
import { addResumeData } from "@/features/resume/resumeFeatures";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { LoaderCircle, Upload, X } from "lucide-react";
import { toast } from "sonner";
import { updateThisResume } from "@/Services/resumeAPI";

function PersonalDetails({ resumeInfo, enanbledNext }) {
  const { resume_id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [photoPreview, setPhotoPreview] = React.useState(resumeInfo?.photo || "");
  const [formData, setFormData] = React.useState({
    firstName: resumeInfo?.firstName || "",
    lastName: resumeInfo?.lastName || "",
    jobTitle: resumeInfo?.jobTitle || "",
    address: resumeInfo?.address || "",
    phone: resumeInfo?.phone || "",
    email: resumeInfo?.email || "",
    photo: resumeInfo?.photo || "",
  });

  const handleInputChange = (e) => {
    enanbledNext(false);
    dispatch(
      addResumeData({
        ...resumeInfo,
        [e.target.name]: e.target.value,
      })
    );
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast("Please select a valid image file", "error");
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast("Image size should be less than 5MB", "error");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPhotoPreview(base64String);
        enanbledNext(false);
        dispatch(
          addResumeData({
            ...resumeInfo,
            photo: base64String,
          })
        );
        setFormData({
          ...formData,
          photo: base64String,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview("");
    enanbledNext(false);
    dispatch(
      addResumeData({
        ...resumeInfo,
        photo: "",
      })
    );
    setFormData({
      ...formData,
      photo: "",
    });
  };

  const onSave = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Personal Details Save Started");
    const data = {
      data: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        jobTitle: e.target.jobTitle.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        photo: photoPreview || "",
      },
    };
    if (resume_id) {
      try {
        const response = await updateThisResume(resume_id, data);
        toast("Resume Updated", "success");
      } catch (error) {
        toast(error.message, failed);
        console.log(error.message);
      } finally {
        enanbledNext(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
          
          {/* Photo Upload Section */}
          <div className="col-span-2">
            <label className="text-sm">Profile Photo (Optional)</label>
            <div className="mt-2">
              {photoPreview ? (
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={photoPreview}
                      alt="Profile Preview"
                      className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Photo uploaded successfully</p>
                    <p className="text-xs">Click X to remove</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <Upload size={18} />
                    <span className="text-sm">Upload Photo</span>
                  </label>
                  <span className="text-xs text-gray-500">
                    Max 5MB (JPG, PNG, GIF)
                  </span>
                </div>
              )}
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
