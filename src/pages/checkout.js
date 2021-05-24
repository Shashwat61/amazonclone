import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function Checkout() {
  const items=useSelector(selectItems)
    return (
        <div className="bg-gray-100">
           <Header/>
           <main className="lg:flex max-w-screen-lg mx-auto">
             {/* lefthand */}
             <div className="flex-grow m-5 shadow-sm">
               <Image src="https://links.papareact.com/ikj"
               width={1020}
               height={250}
               objectFit="contain"
               alt=""/>
             <div className="flex flex-col p-5 space-y-10 bg-white">
                 <h1 className="text-3xl border-b pb-4">{items.length===0? 'Your Basket is empty' : ' Your Shopping Basket'}</h1>
              {items.map((item,i)=>(
                <CheckoutProduct
                id={item.id}
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                category={item.category}
                rating={item.rating}
                hasPrime={item.hasPrime}
                key={i} />
                // console.log(item)
                ))}
             </div>
             </div>
             {/* righthand */}
             <div>

             </div>
           </main>

        </div>
    )
}

export default Checkout
