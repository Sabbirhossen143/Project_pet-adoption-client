"use client";

import { useContext, useEffect } from "react";

import { AuthContext } from "@/providers/AuthProvider";

import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  const router = useRouter();



  useEffect(() => {

    if (!loading && !user) {

      router.push("/login");

    }

  }, [user, loading, router]);



  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <span className="loading loading-spinner loading-lg"></span>

      </div>

    );

  }



  if (!user) {

    return null;

  }



  return children;

};

export default PrivateRoute;