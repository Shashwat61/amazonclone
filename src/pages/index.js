import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      
      {/* header */}
      <Header/>
      <main className="max-w-screen-lg  mx-auto">
        {/* banner */}
        <Banner/>

        {/* productFeed */}
      </main>

  
    </div>
  );
}
