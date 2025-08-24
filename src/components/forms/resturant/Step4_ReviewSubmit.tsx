import { RestaurantFormData } from "../../../types/RestaurantForm";

type Props = {
  data: RestaurantFormData;
  next: () => void;
  prev: () => void;
};

export default function Step4_ReviewSubmit({ data, next, prev }: Props) {
  const formatFileInfo = (file: File | null | undefined) => {
    if (!file) return "Not uploaded";
    return `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  };

  const formatOperatingHours = () => {
    if (!data.operatingDays || data.operatingDays.length === 0) {
      return "Not specified";
    }

    return data.operatingDays
      .map((day) => {
        const hours = data.operatingHours?.[day];
        if (!hours) return `${day}: Not specified`;
        return `${day}: ${hours.open} - ${hours.close}`;
      })
      .join(", ");
  };

  return (
    <div className="mx-auto w-[98%] rounded-xl bg-base-100 p-6 shadow lg:w-[80%]">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Review Your Information
      </h2>

      <div className="space-y-8">
        {/* Owner Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Owner Information
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
              <span className="font-medium">Password:</span>
              <p className="text-gray-600">
                {"*".repeat(data.password?.length || 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Restaurant Information
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <span className="font-medium">Restaurant Name:</span>
              <p className="text-gray-600">{data.name || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">Cuisine Type:</span>
              <p className="text-gray-600">{data.cuisine || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">Description:</span>
              <p className="text-gray-600">
                {data.description || "Not provided"}
              </p>
            </div>
            <div>
              <span className="font-medium">Tags:</span>
              <p className="text-gray-600">
                {data.tags && data.tags.length > 0
                  ? data.tags.join(", ")
                  : "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Address & Location
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <span className="font-medium">Street Address:</span>
              <p className="text-gray-600">{data.street || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">City:</span>
              <p className="text-gray-600">{data.city || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">Postal Code:</span>
              <p className="text-gray-600">
                {data.postalCode || "Not provided"}
              </p>
            </div>
            <div>
              <span className="font-medium">Province:</span>
              <p className="text-gray-600">{data.province || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">Country:</span>
              <p className="text-gray-600">{data.country || "Not provided"}</p>
            </div>
            <div>
              <span className="font-medium">Coordinates:</span>
              <p className="text-gray-600">
                {data.latitude && data.longitude
                  ? `${data.latitude}, ${data.longitude}`
                  : "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Operating Information */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">
            Operating Information
          </h3>
          <div>
            <span className="font-medium">Operating Hours:</span>
            <p className="mt-1 text-gray-600">{formatOperatingHours()}</p>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-primary">Documents</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <span className="font-medium">ID/Business Proof:</span>
              <p className="text-gray-600">
                {formatFileInfo(data.proofDocument)}
              </p>
            </div>
            <div>
              <span className="font-medium">Restaurant Logo:</span>
              <p className="text-gray-600">{formatFileInfo(data.logo)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between gap-4">
        <button className="btn btn-outline flex-1" onClick={prev}>
          Back
        </button>
        <button className="btn btn-primary flex-1" onClick={next}>
          Continue to Terms
        </button>
      </div>
    </div>
  );
}
