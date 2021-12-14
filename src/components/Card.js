import React, { Fragment } from 'react'

const Card = ({item, index, handleClick}) => {

    function addToCart(){
        handleClick(index);
    }
    return (
        <article className="center m-screen mx-4 my-4">
            <div className="flex flex-col bg-gray-200 p-4 border-1 border-blue-900 rounded text-blue-600 shadow-lg w-80">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <img src={item.image} className="h-48 border-gray-900 border-2"/>
                <div className="text-black h-24 my-2 overflow-y-hidden">{item.description}</div>
                <section className="flex flex-row flex-wrap">
                <h3 className="py-3 pr-3 flex-auto font-extrabold text-2xl">${item.price}</h3>
                    <button onClick={addToCart} className="bg-blue-700 hover:bg-blue-400 text-white uppercase py-2 px-2 rounded-full flex-auto">Add to Cart</button>
                </section>   
            </div>
        </article>
    )
};

export default Card;
