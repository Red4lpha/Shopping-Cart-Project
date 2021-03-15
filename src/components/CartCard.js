import React from 'react';
import ShopItems from './ShopItems';

const CartCard = ({item, index, handleRemove, handleIncrement, handleDecrement}) => {
    let shopItem = ShopItems[item.itemIndex];
    let name = shopItem.name;
    let image = shopItem.image;
    let price = shopItem.price;
    let quantity = item.quantity;

    function removeItem(){
        handleRemove(index);
    };
    function increment(){
        handleIncrement(index);  
    };
    function decrement(){
        handleDecrement(index);
    }

    return (
        <article className="flex items-center hover:bg-white -mx-8 px-6 py-5">
            <div className="flex w-2/5"> 
                <div className="w-32 h-24">
                    <img className="" src={image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="text-blue-600 font-bold text-2x1">{name}</span>
                    {/* <span className="text-red-500 text-xs">Apple</span> */}
                    <div onClick={removeItem} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</div>
                </div>
            </div>
            <span className="text-blue-600 text-center w-1/5 font-bold text-1xl">${price}</span>

            <div className="flex justify-center w-1/5">
                <div onClick={decrement} className="bg-blue-700 px-2 py-2 rounded-full fill-current text-white">
                    <svg className="w-3" 
                    viewBox="0 0 448 512">
                        <path 
                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33               32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                </div>
                <input className="mx-2 border text-center w-8" type="text" value={quantity} />
                <div onClick={increment} className="bg-blue-700 px-2 py-2 rounded-full fill-current text-white">
                    <svg className="w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                </div>
            </div>
            <span className="text-blue-600 text-center w-1/5 font-bold text-1xl">${price * quantity}</span>
        </article>
    )
}

export default CartCard
