"use client";
import { CaretCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function PageBack() {
  const router = useRouter();

  return (
    <div className="flex w-full justify-end">
      <button
        className="w-10 pr-15"
        type="button"
        onClick={() => router.back()}
      >
        <CaretCircleLeft size={40} weight="fill" />
      </button>
    </div>
  );
}
