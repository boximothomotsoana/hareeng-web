import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerFleetApplication } from "@/services/apiService";

import { FleetFormData } from "../../../types/FleetForm";
import StatusModal from "../../common/StatusModal";

type Props = {
  data: FleetFormData;
  prev: () => void;
};

export default function Step3_PreviewSubmit({ data, prev }: Props) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"error" | "success">("success");
  const [errorDetail, setErrorDetail] = useState<null | string>(null);
  const [agreed, setAgreed] = useState(false); // <-- Add state

  const formatFileInfo = (file: File | null) => {
    if (!file) return "Not uploaded";
    return `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  };

  const formatMultipleFiles = (files: File[] | null) => {
    if (!files || files.length === 0) return "Not uploaded";
    return `${files.length} file(s) uploaded`;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Prepare payload
      const payload = {
        account_holder_name: data.accountHolder ?? "",
        account_number: data.accountNumber ?? "",
        bank_name: data.bankName ?? "",
        bank_statement: data.bankStatement ?? undefined,
        branch_code: data.branchCode ?? "", // <-- Added branch_code
        business_name: data.businessName ?? "",
        business_registration_number: data.businessRegistrationNumber ?? "",
        business_type: data.businessType ?? "",
        city: data.city ?? "",
        driver_license: Array.isArray(data.driverLicenses)
          ? (data.driverLicenses[0] ?? undefined)
          : (data.driverLicenses ?? undefined),
        email: data.email ?? "",
        emergency_contact_name: data.emergencyContact ?? "",
        emergency_contact_phone: data.emergencyPhone ?? "",
        fleet_size: data.fleetSize ?? "",
        full_name: data.ownerName ?? "",
        id_document: data.idDocument ?? undefined,
        id_number: data.idNumber ?? "",
        insurance_certificate: data.insuranceCertificate ?? undefined,
        operating_areas: data.operatingAreas?.join(", ") ?? "",
        operating_end_time: data.operatingHours?.end ?? "",
        operating_start_time: data.operatingHours?.start ?? "",
        password: data.password ?? "",
        phone_number: data.phone ?? "",
        physical_address: data.address ?? "",
        postal_code: data.postalCode ?? "",
        province: data.province ?? "",
        roadworthy_certificates: Array.isArray(data.roadworthyCertificates)
          ? (data.roadworthyCertificates[0] ?? undefined)
          : (data.roadworthyCertificates ?? undefined),
        service_types: data.serviceTypes?.join(", ") ?? "",
        tax_clearance: data.taxClearance ?? undefined,
        tax_number: data.taxNumber ?? "", // <-- Added tax_number
        vehicle_documents: data.vehicleDocuments ?? undefined, // <-- Added vehicle_documents
        vehicle_registration: Array.isArray(data.vehicleRegistrations)
          ? (data.vehicleRegistrations[0] ?? undefined)
          : (data.vehicleRegistrations ?? undefined),
      };

      // Send to backend
      const result = await registerFleetApplication(payload);

      if (result.success) {
        setModalType("success");
        setErrorDetail(null);
        setShowModal(true);
      } else {
        setModalType("error");
        setErrorDetail(
          result.message ||
            (result.errors
              ? typeof result.errors === "string"
                ? result.errors
                : Array.isArray(result.errors)
                  ? result.errors.join(", ")
                  : JSON.stringify(result.errors)
              : "Unknown error"),
        );
        setShowModal(true);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      let detail = error?.message;
      if (error?.response && error.response?.data) {
        detail =
          error.response.data.message ||
          JSON.stringify(error.response.data.errors);
      }
      setModalType("error");
      setErrorDetail(detail);
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
          "Your fleet services registration has been submitted successfully. We will notify you once your application is reviewed.",
        title: "Registration Submitted!",
      };
    } else {
      return {
        buttonText: "Try Again",
        message:
          "There was an error submitting your registration. Please check your information and try again." +
          (errorDetail ? `\n\nDetails: ${errorDetail}` : ""),
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

  return (
    <>
      <div className="mx-auto w-[98%] rounded-xl bg-base-100 p-6 shadow lg:w-[80%]">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Review Your Information
        </h2>

        <div className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="font-medium">Full Name:</span>
                <p className="text-gray-600">
                  {data.ownerName || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <p className="text-gray-600">{data.email || "Not provided"}</p>
              </div>
              <div>
                <span className="font-medium">Phone:</span>
                <p className="text-gray-600">{data.phone || "Not provided"}</p>
              </div>
              <div>
                <span className="font-medium">ID Number:</span>
                <p className="text-gray-600">
                  {data.idNumber || "Not provided"}
                </p>
              </div>
              <div className="md:col-span-2">
                <span className="font-medium">Address:</span>
                <p className="text-gray-600">
                  {[data.address, data.city, data.postalCode, data.province]
                    .filter(Boolean)
                    .join(", ") || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Business Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="font-medium">Business Name:</span>
                <p className="text-gray-600">
                  {data.businessName || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Business Type:</span>
                <p className="text-gray-600">
                  {data.businessType || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Registration Number:</span>
                <p className="text-gray-600">
                  {data.businessRegistrationNumber || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Tax Number:</span>
                <p className="text-gray-600">
                  {data.taxNumber || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Banking Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Banking Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="font-medium">Bank Name:</span>
                <p className="text-gray-600">
                  {data.bankName || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Account Number:</span>
                <p className="text-gray-600">
                  {data.accountNumber
                    ? "*".repeat(data.accountNumber.length - 4) +
                      data.accountNumber.slice(-4)
                    : "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Branch Code:</span>
                <p className="text-gray-600">
                  {data.branchCode || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Account Holder:</span>
                <p className="text-gray-600">
                  {data.accountHolder || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Fleet Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Fleet Information
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="font-medium">Fleet Size:</span>
                <p className="text-gray-600">
                  {data.fleetSize || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Operating Hours:</span>
                <p className="text-gray-600">
                  {data.operatingHours
                    ? `${data.operatingHours.start} - ${data.operatingHours.end}`
                    : "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Service Types:</span>
                <p className="text-gray-600">
                  {data.serviceTypes?.join(", ") || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Operating Areas:</span>
                <p className="text-gray-600">
                  {data.operatingAreas?.join(", ") || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Emergency Contact:</span>
                <p className="text-gray-600">
                  {data.emergencyContact || "Not provided"}
                </p>
              </div>
              <div>
                <span className="font-medium">Emergency Phone:</span>
                <p className="text-gray-600">
                  {data.emergencyPhone || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Documents
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <span className="font-medium">ID Document:</span>
                <p className="text-gray-600">
                  {formatFileInfo(data.idDocument ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Business License:</span>
                <p className="text-gray-600">
                  {formatFileInfo(data.businessLicense ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Tax Clearance:</span>
                <p className="text-gray-600">
                  {formatFileInfo(data.taxClearance ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Bank Statement:</span>
                <p className="text-gray-600">
                  {formatFileInfo(data.bankStatement ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Insurance Certificate:</span>
                <p className="text-gray-600">
                  {formatFileInfo(data.insuranceCertificate ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Driver Licenses:</span>
                <p className="text-gray-600">
                  {formatMultipleFiles(data.driverLicenses ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Vehicle Registrations:</span>
                <p className="text-gray-600">
                  {formatMultipleFiles(data.vehicleRegistrations ?? null)}
                </p>
              </div>
              <div>
                <span className="font-medium">Roadworthy Certificates:</span>
                <p className="text-gray-600">
                  {formatMultipleFiles(data.roadworthyCertificates ?? null)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agree to Terms */}
        <div className="my-6 flex items-center">
          <input
            checked={agreed}
            className="checkbox mr-2"
            id="agreeTerms"
            onChange={(e) => setAgreed(e.target.checked)}
            type="checkbox"
          />
          <label className="text-sm" htmlFor="agreeTerms">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between gap-4">
          <button
            className="btn btn-outline flex-1"
            disabled={isSubmitting}
            onClick={prev}
          >
            Back
          </button>
          <button
            className="btn btn-success flex-1"
            disabled={isSubmitting || !agreed} // <-- Disable if not agreed
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
        message={modalContent.message}
        onButtonClick={handleModalButtonClick}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        type={modalType}
      />
    </>
  );
}
