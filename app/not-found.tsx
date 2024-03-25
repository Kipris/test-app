import { useRouter } from "next/navigation";
import Heading from "@/components/heading";

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <>
        <Heading text="404" />
        <Heading tag="h2" text="Page Not Found" />
        <input type="button" value="Go home" onClick={handleBack} />
    </>
  )
}

export default NotFound;
  