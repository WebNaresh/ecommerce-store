"use client";
import Preview from "@/components/preview-modal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Preview />
    </>
  );
};

export default ModalProvider;
