import { useState } from "react";

import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Step1_BasicInfo from "@/components/forms/resturant/Step1_BasicInfo";
import Step2_ContactInfo from "@/components/forms/resturant/Step2_ContactInfo";
import Step3_Documents from "@/components/forms/resturant/Step3_Documents";
import Step4_ReviewSubmit from "@/components/forms/resturant/Step4_ReviewSubmit";
import Step5_Disclaimer from "@/components/forms/resturant/Step5_Disclaimer";
import { RestaurantFormData } from "@/types/RestaurantForm";

const steps = ["Basic Info", "Contact Info", "Documents", "Review", "Submit"];

export default function RegisterRestaurant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RestaurantFormData>({});

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const updateData = (data: Partial<RestaurantFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1_BasicInfo
            data={formData}
            next={nextStep}
            update={updateData}
          />
        );
      case 1:
        return (
          <Step2_ContactInfo
            data={formData}
            next={nextStep}
            prev={prevStep}
            update={updateData}
          />
        );
      case 2:
        return (
          <Step3_Documents
            data={formData}
            next={nextStep}
            prev={prevStep}
            update={updateData}
          />
        );
      case 3:
        return (
          <Step4_ReviewSubmit data={formData} next={nextStep} prev={prevStep} />
        );
      case 4:
        return <Step5_Disclaimer data={formData} prev={prevStep} />;
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
          <h1 className="mb-6 text-2xl font-bold">Restaurant Registration</h1>
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
          <div className="w-[98%] rounded-lg bg-base-100 p-6 shadow lg:w-[90%]">
            {renderStep()}
          </div>
        </div>
      </div>
    </>
  );
}
