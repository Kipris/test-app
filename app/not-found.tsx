"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Heading from "@/components/heading";

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
        <Heading text="404" />
        <Heading tag="h2" text="Page Not Found" />
    </>
  )
}

export default NotFound;
  