'use client'

import { useRouter } from "next/navigation";

const OrderProduct = ()=>{
    const router =useRouter()

    const handleClick = ()=>{
        console.log("Placing your order")
        router.forward()
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place An Order</button>
        </>
    )
}

export default OrderProduct;