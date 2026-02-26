import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen">Loading…</div>}>
      <ProductsClient />
    </Suspense>
  );
}
