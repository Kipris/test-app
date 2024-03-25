'use client';
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  }

  return <button onClick={handleBackButtonClick}>{'<- Back'}</button>;
}

export default BackButton;
