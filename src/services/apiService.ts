export async function registerCourierApplication(data: {
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
}) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === "boolean") {
      formData.append(key, value ? "1" : "0");
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch("http://localhost:8000/api/courier/apply", {
    body: formData,
    method: "POST",
  });
  return response.json();
}

export async function registerFleetApplication(data: {
  account_holder_name: string;
  account_number: string;
  bank_name: string;
  bank_statement?: File;
  business_name: string;
  business_registration_number: string;
  business_type: string;
  city: string;
  driver_license?: File;
  email: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  fleet_size: string;
  full_name: string;
  // Document uploads
  id_document?: File;
  id_number: string;
  insurance_certificate?: File;
  operating_areas: string;
  operating_end_time: string;
  operating_start_time: string;
  password: string;
  phone_number: string;
  physical_address: string;
  postal_code: string;
  province: string;
  roadworthy_certificates?: File;
  service_types: string;
  tax_clearance?: File;
  vehicle_documents?: File;
  vehicle_registration?: File;
}) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value); // Upload file
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch("http://localhost:8000/api/fleet/apply", {
    body: formData,
    method: "POST",
  });
  return response.json();
}

export async function registerRestaurantApplication(data: {
  about?: string;
  agreed_privacy: number;
  agreed_terms: number;
  city: string;
  country: string;
  cuisines?: string;
  days_of_operation?: string;
  email: string;
  full_name: string;
  id_proof?: File;
  latitude?: string;
  logo_image?: File;
  longitude?: string;
  operating_hours?: string;
  password: string;
  phone_number: string;
  postal_code: string;
  province: string;
  restaurant_name: string;
  restaurant_type: string;
  street_address: string;
}) {
  const formData = new FormData();
  formData.append("agreed_privacy", String(data.agreed_privacy));
  formData.append("agreed_terms", String(data.agreed_terms));
  formData.append("city", data.city);
  formData.append("country", data.country);
  formData.append("email", data.email);
  formData.append("full_name", data.full_name);
  formData.append("password", data.password);
  formData.append("phone_number", data.phone_number);
  formData.append("postal_code", data.postal_code);
  formData.append("province", data.province);
  formData.append("restaurant_name", data.restaurant_name);
  formData.append("restaurant_type", data.restaurant_type);
  formData.append("street_address", data.street_address);

  // Add missing fields
  if (data.about !== undefined) formData.append("about", data.about);
  if (data.cuisines !== undefined) formData.append("cuisines", data.cuisines);
  if (data.latitude !== undefined) formData.append("latitude", data.latitude);
  if (data.longitude !== undefined)
    formData.append("longitude", data.longitude);
  if (data.days_of_operation !== undefined)
    formData.append("days_of_operation", data.days_of_operation);
  if (data.operating_hours !== undefined)
    formData.append("operating_hours", data.operating_hours);

  // Only append files if they exist and are File objects
  if (data.id_proof && typeof data.id_proof !== "string") {
    formData.append("id_proof", data.id_proof);
  }
  if (data.logo_image && typeof data.logo_image !== "string") {
    formData.append("logo_image", data.logo_image);
  }

  const response = await fetch("http://localhost:8000/api/restaurant/apply", {
    body: formData,
    method: "POST",
    // Do NOT set Content-Type header; browser will set it for FormData
  });
  return response.json();
}

export async function submitDeliveryDriverApplication(data: {
  agreed_terms: boolean;
  availability: string;
  city: string;
  email: string;
  first_name: string;
  has_license: boolean;
  has_vehicle: boolean;
  last_name: string;
  phone_number: string;
  preferred_delivery_type: string;
  vehicle_type: string;
}) {
  const response = await fetch(
    "http://localhost:8000/api/delivery-driver/apply",
    {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    },
  );
  return response.json();
}

export async function submitDriverApplication(data: {
  agreed_terms: boolean;
  city: string;
  email: string;
  first_name: string;
  has_license: boolean;
  last_name: string;
  phone_number: string;
  vehicle_type: string;
}) {
  const response = await fetch("http://localhost:8000/api/driver/apply", {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  return response.json();
}

export async function submitEmergencyReport(formData: any) {
  const data = new FormData();

  // Map frontend fields to backend fields
  data.append("emergency_type", formData.emergencyType);
  data.append("is_immediate", formData.isImmediate ? "1" : "0");
  data.append("location", formData.location);
  data.append("trip_id", formData.tripId);
  data.append("driver_name", formData.driverName);
  data.append("vehicle_plate", formData.vehiclePlate);
  data.append("description", formData.description);
  data.append("contact_number", formData.contactNumber);

  // Attach multiple files
  if (formData.attachments && formData.attachments.length > 0) {
    (Array.from(formData.attachments) as File[]).forEach((file: File) => {
      data.append("evidence[]", file);
    });
  }

  const response = await fetch("http://localhost:8000/api/report/emergency", {
    body: data,
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok) {
    if (result.errors) {
      throw new Error(Object.values(result.errors).flat().join(", "));
    }
    throw new Error(result.message || "Failed to submit emergency report.");
  }

  return result;
}

export async function submitIssueReport(formData: any) {
  const data = new FormData();

  // Map frontend fields to backend fields
  data.append("issue_type", formData.issueType);
  data.append("priority", formData.priority);
  data.append("email", formData.email);
  data.append("phone_number", formData.phone);
  data.append("trip_id", formData.tripId);
  data.append("location", formData.location);
  data.append("subject", formData.subject);
  data.append("description", formData.description);

  // Attach files if any
  if (formData.attachments && formData.attachments.length > 0) {
    (Array.from(formData.attachments) as File[]).forEach((file: File) => {
      data.append("attachments[]", file);
    });
  }

  const response = await fetch("http://localhost:8000/api/report/issue", {
    body: data,
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok) {
    if (result.errors) {
      throw new Error(Object.values(result.errors).flat().join(", "));
    }
    throw new Error(result.message || "Failed to submit report.");
  }

  return result;
}

export async function submitScooterDriverApplication(data: {
  age: number;
  agreed_terms: boolean;
  availability: string;
  city: string;
  email: string;
  first_name: string;
  has_helmet: boolean;
  has_license: boolean;
  has_scooter: boolean;
  last_name: string;
  phone_number: string;
  scooter_experience: string;
}) {
  const response = await fetch(
    "http://localhost:8000/api/scooter-driver/apply",
    {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    },
  );
  return response.json();
}

export async function submitVehicleReport(formData: any) {
  const data = new FormData();

  // Map frontend fields to backend fields
  data.append("vehicle_type", formData.vehicleType);
  data.append("license_plate", formData.licensePlate);
  data.append("driver_name", formData.driverName);
  data.append("issue_type", formData.issueType);
  data.append("priority", formData.priority);
  data.append("description", formData.description);
  data.append("location", formData.location);
  data.append("date_time", formData.dateTime);
  data.append("trip_id", formData.tripId);
  data.append("user_name", formData.reporterName);
  data.append("user_email", formData.reporterEmail);
  data.append("user_phone", formData.reporterPhone);

  // Attach files if any
  if (formData.attachments && formData.attachments.length > 0) {
    (Array.from(formData.attachments) as File[]).forEach((file: File) => {
      data.append("evidence[]", file);
    });
  }

  for (const pair of data.entries()) {
    console.log(pair[0], pair[1]);
  }

  const response = await fetch("http://localhost:8000/api/report/vehicle", {
    body: data,
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok) {
    // Throw error so your catch block in ReportVehicle.tsx is triggered
    // If result.errors exists, join all error messages
    if (result.errors) {
      throw new Error(Object.values(result.errors).flat().join(", "));
    }
    throw new Error(result.message || "Failed to submit report.");
  }

  return result;
}
