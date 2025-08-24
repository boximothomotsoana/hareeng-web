import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Step1_PersonalBusiness from "@/components/forms/fleet/Step1_PersonalBusiness";
import Step2_Documents from "@/components/forms/fleet/Step2_Documents";
import Step3_PreviewSubmit from "@/components/forms/fleet/Step3_PreviewSubmit";
import { FleetFormData } from "@/types/FleetForm";

const steps = ["Personal & Business", "Documents", "Review & Submit"];

export default function RegisterFleet() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FleetFormData>({});

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const updateData = (data: Partial<FleetFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1_PersonalBusiness
            data={formData}
            next={nextStep}
            update={updateData}
          />
        );
      case 1:
        return (
          <Step2_Documents
            data={formData}
            next={nextStep}
            prev={prevStep}
            update={updateData}
          />
        );
      case 2:
        return <Step3_PreviewSubmit data={formData} prev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      <AppNavbar />
      <div className="bg-base-100 pt-16">
        <Breadcrumbs />
        <div className="flex min-h-screen flex-col items-center bg-base-200 p-6">
          <h1 className="mb-6 text-2xl font-bold">
            Fleet Services Registration
          </h1>
          <div className="steps mb-6 w-full max-w-xl">
            {steps.map((label, idx) => (
              <div
                className={`step ${idx <= currentStep ? "step-primary" : ""}`}
                key={label}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="w-[100%] rounded-lg bg-base-100 p-6 shadow lg:w-[100%]">
            {renderStep()}
          </div>
        </div>
      </div>
    </>
  );
}
