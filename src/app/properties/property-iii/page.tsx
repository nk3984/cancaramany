import type { Metadata } from "next";
import { PropertyIIIPage } from "@/components/PropertyIIIPage";

export const metadata: Metadata = {
  title: "Property III — Historic Finca | Can Caramany",
  description:
    "Property III at Can Caramany — 64,455 m² with a historic Mallorcan finca at the heart of the estate. A former rehabilitation proposal is presented as a starting point and does not constitute current building rights.",
};

export default function PropertyIIIRoute() {
  return <PropertyIIIPage />;
}
