import { useState } from "react";

import { FleetFormData } from "../../../types/FleetForm";

type Props = {
  data: FleetFormData;
  next: () => void;
  update: (data: Partial<FleetFormData>) => void;
};

const businessTypes = [
  "Sole Proprietorship",
  "Partnership",
  "Private Company",
  "Public Company",
  "Close Corporation",
  "Trust",
];

const serviceTypes = [
  "Food Delivery",
  "Package Delivery",
  "Document Courier",
  "E-commerce Delivery",
  "Medical Supplies",
  "Grocery Delivery",
  "Pharmacy Delivery",
  "Furniture Delivery",
  "Electronics Delivery",
  "Other",
];

// Smart label helper
const label = (text: string, required?: boolean) => (
  <span>
    {text}
    {required && <span className="ml-1 text-red-500">*</span>}
  </span>
);

export default function Step1_PersonalBusiness({ data, next, update }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  // Validation for required fields
  const isValid =
    data.ownerName &&
    data.email &&
    data.phone &&
    data.password &&
    data.password.length >= 8 &&
    data.idNumber &&
    data.address &&
    data.city &&
    data.postalCode &&
    /^\d+$/.test(data.postalCode) && // Postal code only numbers
    data.province &&
    data.businessName &&
    data.businessType &&
    data.businessRegistrationNumber &&
    data.taxNumber &&
    data.bankName &&
    data.accountNumber &&
    /^\d+$/.test(data.accountNumber) &&
    data.branchCode &&
    /^\d+$/.test(data.branchCode) &&
    data.accountHolder &&
    data.fleetSize &&
    data.operatingAreas &&
    data.operatingAreas.length > 0 &&
    data.serviceTypes &&
    data.serviceTypes.length > 0 &&
    data.emergencyContact &&
    data.emergencyPhone;

  const handleServiceTypeChange = (service: string, checked: boolean) => {
    const currentServices = data.serviceTypes || [];
    if (checked) {
      update({ serviceTypes: [...currentServices, service] });
    } else {
      update({ serviceTypes: currentServices.filter((s) => s !== service) });
    }
  };

  return (
    <div className="mx-auto w-[100%] rounded-xl bg-base-100 p-6 shadow lg:w-[80%]">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Personal & Business Information
      </h2>

      <div className="space-y-12">
        {/* Personal Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Full Name", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ ownerName: e.target.value })}
                placeholder="Full Name"
                value={data.ownerName || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Email Address", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ email: e.target.value })}
                placeholder="Email Address"
                type="email"
                value={data.email || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Phone Number", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ phone: e.target.value })}
                placeholder="Phone Number"
                type="tel"
                value={data.phone || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Password", true)}
              <div className="relative">
                <input
                  className="input input-bordered w-full pr-10"
                  onChange={(e) => update({ password: e.target.value })}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={data.password || ""}
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  type="button"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {data.password && data.password.length < 8 && (
                <span className="text-xs text-red-500">
                  Password must be at least 8 characters
                </span>
              )}
            </label>
            <label className="form-control w-full">
              {label("ID Number", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ idNumber: e.target.value })}
                placeholder="ID Number"
                value={data.idNumber || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Physical Address", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ address: e.target.value })}
                placeholder="Physical Address"
                value={data.address || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("City", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ city: e.target.value })}
                placeholder="City"
                value={data.city || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Postal Code", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  update({ postalCode: value });
                }}
                placeholder="Postal Code"
                value={data.postalCode || ""}
              />
              {data.postalCode && !/^\d+$/.test(data.postalCode) && (
                <span className="text-xs text-red-500">
                  Postal Code must be numbers only
                </span>
              )}
            </label>
            <label className="form-control w-full">
              {label("Province", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ province: e.target.value })}
                placeholder="Province"
                value={data.province || ""}
              />
            </label>
          </div>
        </div>
        {/* Business Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Business Information
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Business Name", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ businessName: e.target.value })}
                placeholder="Business Name"
                value={data.businessName || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Business Type", true)}
              <select
                className="select select-bordered w-full"
                onChange={(e) => update({ businessType: e.target.value })}
                value={data.businessType || ""}
              >
                <option value="">Select Business Type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full">
              {label("Business Registration Number", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) =>
                  update({ businessRegistrationNumber: e.target.value })
                }
                placeholder="Business Registration Number"
                value={data.businessRegistrationNumber || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Tax Number", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ taxNumber: e.target.value })}
                placeholder="Tax Number"
                value={data.taxNumber || ""}
              />
            </label>
          </div>
        </div>

        {/* Banking Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Banking Information
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Bank Name", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ bankName: e.target.value })}
                placeholder="Bank Name"
                value={data.bankName || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Account Number", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  update({ accountNumber: value });
                }}
                placeholder="Account Number"
                value={data.accountNumber || ""}
              />
              {data.accountNumber && !/^\d+$/.test(data.accountNumber) && (
                <span className="text-xs text-red-500">
                  Account Number must be numbers only
                </span>
              )}
            </label>
            <label className="form-control w-full">
              {label("Branch Code", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  update({ branchCode: value });
                }}
                placeholder="Branch Code"
                value={data.branchCode || ""}
              />
              {data.branchCode && !/^\d+$/.test(data.branchCode) && (
                <span className="text-xs text-red-500">
                  Branch Code must be numbers only
                </span>
              )}
            </label>
            <label className="form-control w-full">
              {label("Account Holder Name", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ accountHolder: e.target.value })}
                placeholder="Account Holder Name"
                value={data.accountHolder || ""}
              />
            </label>
          </div>
        </div>

        {/* Fleet Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Fleet Information
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Fleet Size", true)}
              <select
                className="select select-bordered w-full"
                onChange={(e) => update({ fleetSize: e.target.value })}
                value={data.fleetSize || ""}
              >
                <option value="">Select Fleet Size</option>
                <option value="1-5">1-5 vehicles</option>
                <option value="6-10">6-10 vehicles</option>
                <option value="11-25">11-25 vehicles</option>
                <option value="26-50">26-50 vehicles</option>
                <option value="50+">50+ vehicles</option>
              </select>
            </label>
            <label className="form-control w-full">
              {label("Operating Areas", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) =>
                  update({
                    operatingAreas: e.target.value
                      .split(",")
                      .map((area) => area.trim())
                      .filter((area) => area),
                  })
                }
                placeholder="Operating Areas (e.g., Johannesburg, Cape Town)"
                value={data.operatingAreas?.join(", ") || ""}
              />
            </label>
          </div>

          {/* Service Types */}
          <div className="mt-4">
            <p className="mb-3 font-medium">
              {label("Service Types (Select all that apply)", true)}
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {serviceTypes.map((service) => (
                <label
                  className="flex cursor-pointer items-center gap-2"
                  key={service}
                >
                  <input
                    checked={(data.serviceTypes || []).includes(service)}
                    className="checkbox checkbox-sm"
                    onChange={(e) =>
                      handleServiceTypeChange(service, e.target.checked)
                    }
                    type="checkbox"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control w-full">
              {label("Emergency Contact Name", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ emergencyContact: e.target.value })}
                placeholder="Emergency Contact Name"
                value={data.emergencyContact || ""}
              />
            </label>
            <label className="form-control w-full">
              {label("Emergency Contact Phone", true)}
              <input
                className="input input-bordered w-full"
                onChange={(e) => update({ emergencyPhone: e.target.value })}
                placeholder="Emergency Contact Phone"
                type="tel"
                value={data.emergencyPhone || ""}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-end">
        <button
          className="btn btn-primary px-10"
          disabled={!isValid}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
