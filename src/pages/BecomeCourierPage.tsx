import AppNavbar from "@/components/common/AppNavbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

import CourierRegistrationForm from "../components/forms/CourierRegistrationForm";

export default function BecomeCourierPage() {
  return (
    <>
      <AppNavbar />
      <div className="pt-16">
        <Breadcrumbs />
        <div className="flex min-h-screen w-full items-stretch justify-stretch px-0">
          <CourierRegistrationForm />
        </div>
      </div>
    </>
  );
}
