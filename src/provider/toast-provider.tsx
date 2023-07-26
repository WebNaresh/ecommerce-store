"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ToastProviderProps {}

const ToastProvider: FC<ToastProviderProps> = () => {
  return <Toaster />;
};

export default ToastProvider;
