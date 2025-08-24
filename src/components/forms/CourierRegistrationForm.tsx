import type { CountryData } from "react-phone-input-2";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { registerCourierApplication } from "@/services/apiService";

const allowedCountries = ["za", "ls", "bw"];

type CourierFormData = {
  address: string;
  city: string;
  company: string;
  country: string;
  email: string;
  idDocument?: File;
  idNumber: string;
  licenseDocument?: File;
  name: string;
  phone: string;
  proofOfAddress?: File;
  terms: boolean;
};

const steps = [
  "Basic Info",
  "Contact & Address",
  "Documents",
  "Review & Submit",
];

export default function CourierRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CourierFormData>({
    address: "",
    city: "",
    company: "",
    country: "",
    email: "",
    idDocument: undefined,
    idNumber: "",
    licenseDocument: undefined,
    name: "",
    phone: "",
    proofOfAddress: undefined,
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"error" | "success">("success");
  const [errorDetail, setErrorDetail] = useState<null | string>(null);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const updateData = (data: Partial<CourierFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Universal input handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, type, value } = target;
    updateData({
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    });
  };

  // Modern Step Card Wrapper
  const StepCard = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-2xl border border-base-200 bg-white/90 p-10 shadow-2xl backdrop-blur-lg md:p-16 dark:bg-base-200/90">
      {children}
    </div>
  );

  // Step 1: Basic Info
  const Step1_BasicInfo = () => (
    <StepCard>
      <h2 className="mb-10 text-center text-4xl font-extrabold text-primary drop-shadow">
        Let's Get Started
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            id="company"
            name="company"
            onChange={handleInputChange}
            placeholder="e.g. FastExpress"
            required
            value={formData.company}
          />
        </div>
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Your name"
            required
            value={formData.name}
          />
        </div>
      </div>
      <div className="mt-14 flex justify-end">
        <button
          className="btn btn-primary btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          disabled={!formData.company || !formData.name} // <-- Disable until filled
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </StepCard>
  );

  // Step 2: Contact & Address
  const Step2_ContactAddress = () => (
    <StepCard>
      <h2 className="mb-10 text-center text-4xl font-extrabold text-primary drop-shadow">
        Contact & Address
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="you@email.com"
            required
            type="email"
            value={formData.email}
          />
        </div>
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            buttonClass="!bg-base-200 dark:!bg-base-300 !border-base-300 dark:!border-base-200"
            containerClass="!w-full"
            dropdownClass="!bg-base-100 dark:!bg-base-200 !text-base-content dark:!text-base-content"
            inputClass="!w-full input input-bordered h-14 text-lg bg-base-100 dark:bg-base-200 text-base-content dark:text-base-content"
            inputStyle={{
              backgroundColor: "inherit",
              color: "inherit",
              fontSize: "1.125rem",
              height: "56px",
              width: "100%",
            }}
            onChange={(value, country) => {
              updateData({ phone: value });
            }}
            onlyCountries={allowedCountries}
            specialLabel=""
            value={formData.phone}
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            onChange={(e) => updateData({ address: e.target.value })}
            placeholder="Street address"
            required
            value={formData.address}
          />
        </div>
        <div>
          <label className="mb-3 block text-lg font-semibold">
            City <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            onChange={(e) => updateData({ city: e.target.value })}
            placeholder="City"
            required
            value={formData.city}
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-lg font-semibold">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            id="country"
            name="country"
            onChange={handleInputChange}
            required
            value={formData.country}
          >
            <option value="">Select Country</option>
            <option value="za">South Africa</option>
            <option value="ls">Lesotho</option>
            <option value="bw">Botswana</option>
          </select>
        </div>
        <div>
          <label className="mb-3 block text-lg font-semibold">
            ID Number <span className="text-red-500">*</span>
          </label>
          <input
            className="input input-bordered h-14 w-full text-lg focus:ring-2 focus:ring-primary"
            onChange={(e) => updateData({ idNumber: e.target.value })}
            placeholder="ID Number"
            required
            value={formData.idNumber}
          />
        </div>
      </div>
      <div className="mt-14 flex justify-between">
        <button
          className="btn btn-outline btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="btn btn-primary btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          disabled={
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.city ||
            !formData.country ||
            !formData.idNumber
          }
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </StepCard>
  );

  // Step 3: Document Uploads
  const Step3_Documents = () => (
    <StepCard>
      <h2 className="mb-10 text-center text-4xl font-extrabold text-primary drop-shadow">
        Upload Documents
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <FileUpload
          file={formData.idDocument}
          label="ID Document *"
          onChange={(file) => updateData({ idDocument: file })}
        />
        <FileUpload
          file={formData.licenseDocument}
          label="Driver License *"
          onChange={(file) => updateData({ licenseDocument: file })}
        />
        <FileUpload
          file={formData.proofOfAddress}
          label="Proof of Address *"
          onChange={(file) => updateData({ proofOfAddress: file })}
        />
      </div>
      <div className="mt-14 flex justify-between">
        <button
          className="btn btn-outline btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="btn btn-primary btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          disabled={
            !formData.idDocument ||
            !formData.licenseDocument ||
            !formData.proofOfAddress
          }
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </StepCard>
  );

  // Modern file upload component
  function FileUpload({
    file,
    label,
    onChange,
  }: {
    file?: File;
    label: string;
    onChange: (file?: File) => void;
  }) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-base-200 p-6 shadow-md transition-colors hover:bg-base-300">
        <label className="mb-3 block text-lg font-semibold">{label}</label>
        <input
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          id={label}
          onChange={(e) => onChange(e.target.files?.[0])}
          type="file"
        />
        <label
          className="btn btn-accent btn-wide mb-2 cursor-pointer"
          htmlFor={label}
        >
          {file ? "Change File" : "Select File"}
        </label>
        {file && (
          <div className="mt-2 flex flex-col items-center">
            <span className="text-base font-medium text-primary">
              {file.name}
            </span>
            <span className="text-xs text-gray-500">
              {(file.size / 1024).toFixed(1)} KB
            </span>
          </div>
        )}
        {!file && (
          <span className="text-xs text-gray-400">No file selected</span>
        )}
      </div>
    );
  }

  // Step 4: Review & Submit
  const Step4_ReviewSubmit = () => (
    <StepCard>
      <h2 className="mb-10 text-center text-4xl font-extrabold text-primary drop-shadow">
        Review & Submit
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <strong>Company:</strong> {formData.company}
          </div>
          <div>
            <strong>Name:</strong> {formData.name}
          </div>
          <div>
            <strong>Email:</strong> {formData.email}
          </div>
          <div>
            <strong>Phone:</strong> {formData.phone}
          </div>
          <div>
            <strong>Address:</strong> {formData.address}
          </div>
          <div>
            <strong>City:</strong> {formData.city}
          </div>
          <div>
            <strong>Country:</strong> {formData.country}
          </div>
          <div>
            <strong>ID Number:</strong> {formData.idNumber}
          </div>
          <div>
            <strong>ID Document:</strong>{" "}
            {formData.idDocument?.name || "Not uploaded"}
          </div>
          <div>
            <strong>Driver License:</strong>{" "}
            {formData.licenseDocument?.name || "Not uploaded"}
          </div>
          <div>
            <strong>Proof of Address:</strong>{" "}
            {formData.proofOfAddress?.name || "Not uploaded"}
          </div>
        </div>
        <div className="mt-8 flex items-start gap-2">
          <input
            checked={formData.terms}
            className="checkbox mt-1"
            onChange={(e) => updateData({ terms: e.target.checked })}
            required
            type="checkbox"
          />
          <span>
            I agree to the{" "}
            <a className="link link-primary underline" href="#">
              terms and conditions
            </a>
          </span>
        </div>
      </div>
      <div className="mt-14 flex justify-between">
        <button
          className="btn btn-outline btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="btn btn-success btn-lg rounded-full px-12 py-3 text-lg shadow-lg transition-transform hover:scale-105"
          disabled={isSubmitting || !formData.terms}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm mr-2"></span>
          ) : null}
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">
          <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl dark:bg-base-200">
            <h3
              className={`mb-4 text-2xl font-bold ${
                modalType === "success"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {modalType === "success"
                ? "Registration Successful"
                : "Submission Failed"}
            </h3>
            <p className="text-base-content dark:text-base-content/80">
              {modalType === "success"
                ? "Your courier registration has been submitted successfully. We will notify you once your application is reviewed."
                : `There was an error submitting your registration. Please check your information and try again.${
                    errorDetail ? `\n\nDetails: ${errorDetail}` : ""
                  }`}
            </p>
            <button
              className="btn btn-primary mt-8 w-full rounded-full"
              onClick={() => {
                setShowModal(false);
                if (modalType === "success") window.location.href = "/";
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </StepCard>
  );

  // Final submit handler
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await registerCourierApplication(formData);

      if (result.success) {
        setModalType("success");
        setErrorDetail(null);
        setShowModal(true);
      } else {
        setModalType("error");
        setErrorDetail(result.message || JSON.stringify(result.errors) || null);
        setShowModal(true);
      }
    } catch (error: any) {
      setModalType("error");
      setErrorDetail(error?.message || "Network error");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step renderer
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1_BasicInfo />;
      case 1:
        return <Step2_ContactAddress />;
      case 2:
        return <Step3_Documents />;
      case 3:
        return <Step4_ReviewSubmit />;
      default:
        return null;
    }
  };

  return (
    <form
      className="h-full w-full px-0 py-0"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="h-full w-full rounded-none bg-base-100 p-0 shadow-none dark:bg-base-200">
        <h2 className="mb-12 text-center text-5xl font-extrabold text-primary drop-shadow-lg">
          Become a Courier
        </h2>
        <div className="steps mb-12 w-full">
          {steps.map((label, idx) => (
            <div
              className={`step ${idx <= currentStep ? "step-primary" : ""} border-base-300 bg-base-200 text-base-content dark:border-base-200 dark:bg-base-300 dark:text-base-content/80`}
              key={idx}
            >
              {label}
            </div>
          ))}
        </div>
        {renderStep()}
      </div>
    </form>
  );
}
