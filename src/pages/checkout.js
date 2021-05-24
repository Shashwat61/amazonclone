import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import Currency from 'react-currency-formatter'

import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from 'next-auth/client'

function Checkout() {
  const session=useSession();
  console.log(session.[0].user)
  const items=useSelector(selectItems)
  const total=useSelector(selectTotal)
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
             <div className="flex flex-col bg-white p-10 shadow-md">
               {items.length>0 && (
                 <>
                 <h2 className="whitespace-nowrap">Subtotal ({items.length} items): {" "}
                 <span className="font-bold">
                   <Currency quantity={total} currency="GBP"/>
                 </span>
                 </h2>
                 <button 
                 disabled={!session[0].user}
                 className={`button mt-2 ${!session[0].user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                   {!session[0].user ? "sign in to checkout" : "proceed to checkout"}
                 </button>
                 </>
               )}
             </div>
           </main>

        </div>
    )
}

export default Checkout
