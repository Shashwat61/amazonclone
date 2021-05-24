import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'

function CheckoutProduct({id,title,description,image,price,hasPrime,category,rating}) {
    return (
        <div className="grid grid-column-5">
            <Image src={image} alt="" height={200} width={200} objectFit="contain"/>
            {/* middlesection */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3 ">{description}</p>
                 <Currency quantity={price} currency="GBP"/>
                 {hasPrime && (
                     <div className="flex items-center space-x-2">
                         <img 
                         className="w-12"
                         loading="lazy"
                         src="https://links.papareact.com/fdw"
                         alt=""
                         />
                         <p className="text-sm text-gray-500">Free Next Day Delivery</p>
                         </div>
                 )}
            </div>
            
            {/* right add/remove buttons*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button classsName="button">Add to Basket</button>
                <button classsName="button">Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
