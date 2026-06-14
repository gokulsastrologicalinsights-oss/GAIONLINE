"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#about") {
        router.push("/about");
      }
    };
    // Check hash on mount
    handleHash();
    
    // Listen to hash changes client-side
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [router]);

  return null;
}
