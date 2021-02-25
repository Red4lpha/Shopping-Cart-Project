import React, { Fragment } from 'react'

const Card = ({item, handleClick}) => {

    function addToCart(){
        handleClick(item);
    }
    return (
        <main className="center m-screen mx-5 my-5">
            <div className="flex flex-col bg-gray-200 p-4 border-1 border-blue-900 rounded text-blue-600 shadow-lg w-96 p-5 gap-2">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <img src={item.image} className="h-52 border-gray-900 border-2"/>
                <div className="text-black h-24 overflow-y-hidden">{item.description}</div>
                <section className="flex flex-row flex-wrap">
                <h3 className="py-3 pr-3 flex-auto font-extrabold text-2xl">${item.price}</h3>
                    <button onClick={addToCart} className="bg-blue-700 text-white uppercase py-2 px-2 rounded-full flex-auto">Add to Cart</button>
                </section>   
            </div>
        </main>
    )
};

export default Card;
