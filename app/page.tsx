import Image from "next/image";
import Heading from "@/components/heading";
import logo from "@/public/next.svg";

const Page: React.FC = () => {
  return (
    <>
      <Heading text="Hello, Next.js!" />
      <Image src={logo} alt="logo" />
    </>
  )
}

export default Page;
