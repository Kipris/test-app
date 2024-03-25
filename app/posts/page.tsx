import Head from "next/head";
import Heading from "@/components/heading";

const Posts: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Post list:" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque voluptates doloribus nisi nam repudiandae eos. Molestiae porro, necessitatibus quia numquam odit hic harum nobis repudiandae mollitia incidunt sed quas.</p>
    </>
  )
}

export default Posts;
