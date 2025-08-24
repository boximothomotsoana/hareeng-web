import { FleetFormData } from "../../../types/FleetForm";

type Props = {
  data: FleetFormData;
  next: () => void;
  prev: () => void;
  update: (data: Partial<FleetFormData>) => void;
};

const label = (text: string, required?: boolean) => (
  <span>
    {text}
    {required && <span className="ml-1 text-red-500">*</span>}
  </span>
);

export default function Step2_Documents({ data, next, prev, update }: Props) {
  const formatFileInfo = (file: File | null) => {
    if (!file) return "";
    return `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  };

  // Validation: all required fields must be filled
  const isValid =
    data.idDocument &&
    data.businessLicense &&
    data.taxClearance &&
    data.bankStatement &&
    data.insuranceCertificate &&
    data.driverLicenses &&
    data.driverLicenses.length > 0 &&
    data.vehicleRegistrations &&
    data.vehicleRegistrations.length > 0 &&
    data.roadworthyCertificates &&
    data.roadworthyCertificates.length > 0 &&
    data.operatingHours &&
    data.operatingHours.start &&
    data.operatingHours.end;

  return (
    <div className="mx-auto w-[98%] rounded-xl bg-base-100 p-6 shadow lg:w-[80%]">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Documents & Certificates
      </h2>

      <div className="space-y-6">
        {/* Required Documents */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Required Documents
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("ID Document (Copy)", true)}
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                onChange={(e) =>
                  update({ idDocument: e.target.files?.[0] || null })
                }
                type="file"
              />
              {data.idDocument && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {formatFileInfo(data.idDocument)}
                </span>
              )}
            </label>

            <label className="form-control w-full">
              {label("Business License", true)}
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                onChange={(e) =>
                  update({ businessLicense: e.target.files?.[0] || null })
                }
                type="file"
              />
              {data.businessLicense && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {formatFileInfo(data.businessLicense)}
                </span>
              )}
            </label>

            <label className="form-control w-full">
              {label("Tax Clearance Certificate", true)}
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                onChange={(e) =>
                  update({ taxClearance: e.target.files?.[0] || null })
                }
                type="file"
              />
              {data.taxClearance && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {formatFileInfo(data.taxClearance)}
                </span>
              )}
            </label>

            <label className="form-control w-full">
              {label("Bank Statement (Last 3 months)", true)}
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                onChange={(e) =>
                  update({ bankStatement: e.target.files?.[0] || null })
                }
                type="file"
              />
              {data.bankStatement && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {formatFileInfo(data.bankStatement)}
                </span>
              )}
            </label>

            <label className="form-control w-full">
              {label("Insurance Certificate", true)}
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                onChange={(e) =>
                  update({ insuranceCertificate: e.target.files?.[0] || null })
                }
                type="file"
              />
              {data.insuranceCertificate && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {formatFileInfo(data.insuranceCertificate)}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* Vehicle Documents */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Vehicle Documents
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <label className="form-control w-full">
              {label("Driver Licenses (All drivers)", true)}
              <span className="label-text-alt mb-2">
                Upload multiple files if needed
              </span>
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                multiple
                onChange={(e) =>
                  update({ driverLicenses: Array.from(e.target.files || []) })
                }
                type="file"
              />
              {data.driverLicenses && data.driverLicenses.length > 0 && (
                <span className="label-text-alt mt-1 text-success">
                  ✓ {data.driverLicenses.length} file(s) uploaded
                </span>
              )}
            </label>

            <label className="form-control w-full">
              {label("Vehicle Registrations (All vehicles)", true)}
              <span className="label-text-alt mb-2">
                Upload multiple files if needed
              </span>
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                multiple
                onChange={(e) =>
                  update({
                    vehicleRegistrations: Array.from(e.target.files || []),
                  })
                }
                type="file"
              />
              {data.vehicleRegistrations &&
                data.vehicleRegistrations.length > 0 && (
                  <span className="label-text-alt mt-1 text-success">
                    ✓ {data.vehicleRegistrations.length} file(s) uploaded
                  </span>
                )}
            </label>

            <label className="form-control w-full">
              {label("Roadworthy Certificates (All vehicles)", true)}
              <span className="label-text-alt mb-2">
                Upload multiple files if needed
              </span>
              <input
                accept=".pdf,.jpg,.png"
                className="file-input file-input-bordered w-full"
                multiple
                onChange={(e) =>
                  update({
                    roadworthyCertificates: Array.from(e.target.files || []),
                  })
                }
                type="file"
              />
              {data.roadworthyCertificates &&
                data.roadworthyCertificates.length > 0 && (
                  <span className="label-text-alt mt-1 text-success">
                    ✓ {data.roadworthyCertificates.length} file(s) uploaded
                  </span>
                )}
            </label>
          </div>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Operating Hours
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Start Time", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) =>
                  update({
                    operatingHours: {
                      end:
                        data.operatingHours &&
                        typeof data.operatingHours.end === "string"
                          ? data.operatingHours.end
                          : "",
                      start: e.target.value,
                    },
                  })
                }
                type="time"
                value={data.operatingHours?.start || ""}
              />
            </label>

            <label className="form-control w-full">
              {label("End Time", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) =>
                  update({
                    operatingHours: {
                      ...data.operatingHours,
                      end: e.target.value,
                    },
                  })
                }
                type="time"
                value={data.operatingHours?.end || ""}
              />
            </label>
          </div>
        </div>

        {/* Info Alert */}
        <div className="alert alert-info">
          <div>
            <h4 className="font-semibold">Document Requirements:</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• All documents must be clear and legible</li>
              <li>• Accepted formats: PDF, JPG, PNG</li>
              <li>• Maximum file size: 10MB per file</li>
              <li>• Documents must be current and valid</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between gap-4">
        <button className="btn btn-outline flex-1" onClick={prev}>
          Back
        </button>
        <button
          className="btn btn-primary flex-1"
          disabled={!isValid} // <-- Disable if not valid
          onClick={next}
        >
          Review & Submit
        </button>
      </div>
    </div>
  );
}
