// components/ClientProvider.tsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/toolkit/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      {children}
    </Provider>
  );
};

export default ClientProvider;
