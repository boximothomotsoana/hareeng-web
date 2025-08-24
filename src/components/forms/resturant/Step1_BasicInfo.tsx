import { useState } from "react";

import { RestaurantFormData } from "../../../types/RestaurantForm";

type Props = {
  data: RestaurantFormData;
  next: () => void;
  update: (data: Partial<RestaurantFormData>) => void;
};

export default function Step1_OwnerAccount({ data, next, update }: Props) {
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [showPassword, setShowPassword] = useState(false); // <-- Add state

  // Required fields
  const requiredFields = ["ownerName", "email", "phone", "password"];

  // Validation
  const isValid =
    data.ownerName &&
    data.email &&
    data.phone &&
    data.password &&
    data.password.length >= 8; // <-- minimum 8 chars

  // Helper for smart label
  const label = (text: string, required?: boolean) => (
    <span>
      {text}
      {required && <span className="ml-1 text-red-500">*</span>}
    </span>
  );

  // Helper for error
  const error = <K extends keyof RestaurantFormData>(
    field: K,
    message: string,
  ) =>
    !data[field] && touched[field as string] ? (
      <span className="text-xs text-red-500">{message}</span>
    ) : null;

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="mx-auto w-[100%] rounded-xl bg-base-100 p-6 shadow lg:w-[100%]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="form-control w-full">
          {label("Full Name", true)}
          <input
            className="input input-bordered w-full"
            onBlur={() => handleBlur("ownerName")}
            onChange={(e) => update({ ownerName: e.target.value })}
            placeholder="Full Name"
            value={data.ownerName || ""}
          />
          {error("ownerName", "Full Name is required")}
        </label>

        <label className="form-control w-full">
          {label("Email Address", true)}
          <input
            className="input input-bordered w-full"
            onBlur={() => handleBlur("email")}
            onChange={(e) => update({ email: e.target.value })}
            placeholder="Email Address"
            type="email"
            value={data.email || ""}
          />
          {error("email", "Email is required")}
        </label>

        <label className="form-control w-full">
          {label("Phone Number", true)}
          <input
            className="input input-bordered w-full"
            onBlur={() => handleBlur("phone")}
            onChange={(e) => update({ phone: e.target.value })}
            placeholder="Phone Number"
            type="tel"
            value={data.phone || ""}
          />
          {error("phone", "Phone Number is required")}
        </label>

        <label className="form-control w-full">
          {label("Password", true)}
          <div className="relative">
            <input
              className="input input-bordered w-full pr-10"
              onBlur={() => handleBlur("password")}
              onChange={(e) => update({ password: e.target.value })}
              placeholder="Password"
              type={showPassword ? "text" : "password"} // <-- Toggle type
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
          {error("password", "Password is required")}
          {data.password && data.password.length < 8 && (
            <span className="text-xs text-red-500">
              Password must be at least 8 characters
            </span>
          )}
        </label>

        <label className="form-control w-full">
          {label("ID / Business Proof (optional)")}
          <input
            accept=".pdf,.jpg,.png"
            className="file-input file-input-bordered w-full"
            onChange={(e) =>
              update({ proofDocument: e.target.files?.[0] || null })
            }
            type="file"
          />
        </label>

        <label className="form-control w-full">
          {label("Logo / Restaurant Image (optional)")}
          <input
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={(e) => update({ logo: e.target.files?.[0] || null })}
            type="file"
          />
        </label>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="btn btn-primary mt-6 px-10 py-2"
          disabled={!isValid}
          onClick={() => {
            // Mark all required fields as touched to show errors if any
            setTouched((prev) => ({
              ...prev,
              email: true,
              ownerName: true,
              password: true,
              phone: true,
            }));
            if (isValid) next();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
