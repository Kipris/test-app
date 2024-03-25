import Head from "next/head";
import Heading from "@/components/heading";
import { IContact } from "@/types/contact";

interface ContactInfoProps {
  contact: IContact
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};

  if (!contact) {
    return <Heading text="Empty contact" />
  }

  return (
    <>
      <Head>
        <title>Contact {name}</title>
      </Head>
      <Heading text={name} />
      <div>
        <strong>Email: {email}</strong>
      </div>
      <div>
        <strong>Address: {address?.street}</strong>
      </div>
    </>
  )
}

export default ContactInfo;
