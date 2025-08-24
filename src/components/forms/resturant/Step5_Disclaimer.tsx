import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import the API service
import { registerRestaurantApplication } from "@/services/apiService";

import { RestaurantFormData } from "../../../types/RestaurantForm";
import StatusModal from "../../common/StatusModal";

type Props = {
  data: RestaurantFormData;
  prev: () => void;
};

export default function Step5_Disclaimer({ data, prev }: Props) {
  const navigate = useNavigate();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"error" | "success">("success");
  const [errorDetail, setErrorDetail] = useState<null | string>(null);

  // Helper to map RestaurantFormData to API payload
  const mapFormDataToPayload = (form: RestaurantFormData) => ({
    // Optional fields
    about: form.description ?? "", // <-- map description to about
    agreed_privacy: agreedToPrivacy ? 1 : 0,
    agreed_terms: agreedToTerms ? 1 : 0,
    city: form.city ?? "",
    country: form.country ?? "",
    cuisines: form.cuisines ?? "",
    days_of_operation: form.daysOfOperation ?? "",
    email: form.email ?? "",
    full_name: form.ownerName ?? "",
    id_proof:
      typeof form.proofDocument === "string"
        ? undefined
        : form.proofDocument === null
          ? undefined
          : form.proofDocument,
    latitude: form.latitude ?? "",
    logo_image:
      typeof form.logo === "string"
        ? undefined
        : form.logo === null
          ? undefined
          : form.logo,
    longitude: form.longitude ?? "",
    operating_hours:
      typeof form.operatingHours === "string"
        ? form.operatingHours
        : form.operatingHours
          ? JSON.stringify(form.operatingHours)
          : "",
    password: form.password ?? "",
    phone_number: form.phone ?? "",
    postal_code: form.postalCode ?? "",
    province: form.province ?? "",
    restaurant_name: form.name ?? "",
    restaurant_type: form.cuisine ?? "", // Always send a string
    street_address: form.street ?? "",
  });

  const handleSubmit = async () => {
    if (!agreedToTerms || !agreedToPrivacy) {
      setModalType("error");
      setErrorDetail(
        "You must agree to the Terms & Conditions and Privacy Policy before submitting.",
      );
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = mapFormDataToPayload(data);
      const result = await registerRestaurantApplication(payload);

      if (result.success) {
        setModalType("success");
        setErrorDetail(null);
        setShowModal(true);
      } else {
        // Show backend error details if available
        let errorMsg = result.message;
        if (!errorMsg && result.errors) {
          if (typeof result.errors === "string") {
            errorMsg = result.errors;
          } else if (Array.isArray(result.errors)) {
            errorMsg = result.errors.join(", ");
          } else if (typeof result.errors === "object") {
            errorMsg = Object.values(result.errors).flat().join(", ");
          }
        }
        console.error("Backend error:", result); // Log backend error
        setModalType("error");
        setErrorDetail(
          errorMsg ||
            "An error occurred. Please check your input and try again.",
        );
        setShowModal(true);
      }
    } catch (error: any) {
      console.error("Submission error:", error); // Log UI error
      let detail = error?.message;
      if (error?.response && error.response?.data) {
        detail =
          error.response.data.message ||
          (error.response.data.errors
            ? Object.values(error.response.data.errors).flat().join(", ")
            : null);
      }
      setModalType("error");
      setErrorDetail(detail || "Network error. Please try again later.");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getModalContent = () => {
    if (modalType === "success") {
      return {
        buttonText: "Continue",
        message:
          "Your restaurant registration has been submitted successfully. We will notify you once your application is reviewed.",
        title: "Registration Submitted!",
      };
    } else {
      if (!agreedToTerms || !agreedToPrivacy) {
        return {
          buttonText: "Go Back",
          message: errorDetail,
          title: "Agreement Required",
        };
      }
      return {
        buttonText: "Try Again",
        message:
          errorDetail ||
          "There was an error submitting your registration. Please check your information and try again.",
        title: "Submission Failed",
      };
    }
  };

  const handleModalButtonClick = () => {
    if (modalType === "success") {
      navigate("/");
    } else {
      setShowModal(false);
    }
  };

  const modalContent = getModalContent();

  // Temporary debug card
  const debugData = mapFormDataToPayload(data);

  return (
    <>
      <div className="mx-auto w-[98%] rounded-xl bg-base-100 p-6 shadow lg:w-[80%]">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Terms & Conditions
        </h2>

        <div className="space-y-6">
          {/* Terms and Conditions */}
          <div className="max-h-64 overflow-y-auto rounded-lg bg-base-200 p-4">
            <h3 className="mb-3 text-lg font-semibold">
              Restaurant Registration Terms
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                By registering your restaurant with our platform, you agree to
                the following terms and conditions:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  You are authorized to register this restaurant and have all
                  necessary permissions.
                </li>
                <li>All information provided is accurate and up-to-date.</li>
                <li>
                  You will maintain food safety standards and comply with local
                  regulations.
                </li>
                <li>
                  You agree to our commission structure and payment terms.
                </li>
                <li>
                  You will provide timely order fulfillment and maintain quality
                  standards.
                </li>
                <li>
                  You understand that approval is subject to verification of
                  submitted documents.
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="max-h-64 overflow-y-auto rounded-lg bg-base-200 p-4">
            <h3 className="mb-3 text-lg font-semibold">Privacy Policy</h3>
            <div className="space-y-3 text-sm">
              <p>
                We are committed to protecting your privacy and personal
                information:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  Your personal information will be used solely for registration
                  and service purposes.
                </li>
                <li>
                  We will not share your information with third parties without
                  consent.
                </li>
                <li>
                  Your data is stored securely and protected against
                  unauthorized access.
                </li>
                <li>
                  You have the right to request data deletion or modification.
                </li>
                <li>
                  We may contact you regarding your restaurant registration and
                  platform updates.
                </li>
              </ul>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                checked={agreedToTerms}
                className="checkbox mt-1"
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                type="checkbox"
              />
              <span className="text-sm">
                I have read and agree to the{" "}
                <strong>Terms and Conditions</strong> for restaurant
                registration.
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                checked={agreedToPrivacy}
                className="checkbox mt-1"
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                type="checkbox"
              />
              <span className="text-sm">
                I have read and agree to the <strong>Privacy Policy</strong> and
                consent to data processing.
              </span>
            </label>
          </div>

          {/* Status Notice */}
          <div className="alert alert-info">
            <div>
              <h4 className="font-semibold">Notice:</h4>
              <p className="text-sm">
                Your registration data will be submitted to our backend system
                for processing.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between gap-4">
          <button
            className="btn btn-outline flex-1"
            disabled={isSubmitting}
            onClick={prev}
          >
            Back
          </button>
          <button
            className={`btn flex-1 ${agreedToTerms && agreedToPrivacy ? "btn-success" : "btn-disabled"}`}
            disabled={!agreedToTerms || !agreedToPrivacy || isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : null}
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </div>
      </div>

      {/* Status Modal */}
      <StatusModal
        buttonText={modalContent.buttonText}
        isOpen={showModal}
        message={modalContent.message ?? ""}
        onButtonClick={handleModalButtonClick}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        type={modalType}
      />
    </>
  );
}
