import Heading from "./heading";
import "@/styles/components/footer.css";
import { ISocial } from "@/types/social";
import Link from "next/link";

interface FooterProps {
  socials: ISocial[]
}

const Footer: React.FC<FooterProps> = ({ socials }) => (
  <footer>
    <Heading tag="h3" text="Created by ..." />
    <div>
      {socials.map(({ id, icon, path }: any) => (
        <Link 
          key={id} 
          href={path} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {icon}
        </Link>
      ))}
    </div>
  </footer>
)
  
export default Footer;
  