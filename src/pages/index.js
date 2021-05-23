import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  console.log(products)
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <h1>Happy Birthday Dutte</h1>
      
      {/* header */}
      <Header/>
      <main className="max-w-screen-lg  mx-auto">
        {/* banner */}
        <Banner/>

        {/* productFeed */}
        <ProductFeed products={products}/>
         
      </main>

  
    </div>
  );
}

export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  return {props:{
    products
  }}
}
