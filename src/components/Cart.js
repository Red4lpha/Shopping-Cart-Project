import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import CartCard from './CartCard'
import ShopItems from './ShopItems';

const Cart = (props) => {
    let length = props.cartItems.length;
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let total = 0;
        props.cartItems.map(item => {
            total += ShopItems[item.itemIndex].price * item.quantity;
            //console.log(total);
        });
        setTotalCost(total);
    },[props.cartItems]);
    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <section className="w-3/4 bg-gray-200 px-10 py-10">
                    <header className="flex justify-between border-b border-white pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{length} Items</h2>
                    </header>
                    <div className="flex mt-10 pb-5 border-b border-black">
                        <h3 className="font-extrabold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-extrabold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Subtotal</h3>
                    </div>
                    
                    {props.cartItems.map((item, index) =>(
                        <CartCard item={item} index={index} handleRemove={props.handleRemove} 
                        handleIncrement={props.handleIncrement} handleDecrement={props.handleDecrement}/>        
                    ))}
                    <NavLink to="/shop" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                        Continue Shopping
                    </NavLink>
                </section>
            <aside id="summary" className="bg-gray-300 w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">Items {length}</span>
                    <span className="font-semibold text-sm">${totalCost}</span>
                </div>
                <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Slow shipping - FREE</option>
                    <option>Standard shipping - $5</option>
                    <option>Express shipping - $20</option>
                </select>
                </div>
                <div className="py-10">
                    <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$600</span>
                    </div>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </aside>
        </div>
    </div>
    )
}

export default Cart
