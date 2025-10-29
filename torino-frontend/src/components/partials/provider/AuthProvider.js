"use client";

import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();

  const { data, isPending } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending) return <p>Loading</p>;

  return <div>{children}</div>;
}

export default AuthProvider;
