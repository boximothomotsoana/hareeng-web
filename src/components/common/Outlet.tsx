import { Suspense } from "react";
import { useOutlet } from "react-router";

import Spinner from "@/components/common/Spinner";

export default function Outlet() {
  const outlet = useOutlet();

  return <Suspense fallback={<Spinner />}>{outlet}</Suspense>;
}
