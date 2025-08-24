export interface FleetFormData {
  accountHolder?: string;
  accountNumber?: string;
  address?: string;
  bankName?: string;
  bankStatement?: File | null;
  branchCode?: string;
  businessLicense?: File | null;
  // Business Information
  businessName?: string;
  businessRegistrationNumber?: string;
  businessType?: string;

  city?: string;
  driverLicenses?: File[] | null;
  email?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  // Fleet Information
  fleetSize?: string;
  // Documents
  idDocument?: File | null;
  idNumber?: string;

  insuranceCertificate?: File | null;
  operatingAreas?: string[];
  operatingHours?: {
    end: string;
    start: string;
  };
  // Personal Information
  ownerName?: string;
  password?: string;
  phone?: string;

  postalCode?: string;
  province?: string;
  roadworthyCertificates?: File[] | null;
  serviceTypes?: string[];
  taxClearance?: File | null;
  taxNumber?: string;
  vehicleDocuments: any;
  vehicleRegistrations?: File[] | null;
}
