import React from 'react';
import Card from './Card';
import ShopItems from './ShopItems';
import ubiqid from "uniqid";

const Shop = (props) => {

    return (
        <main className="grid place-items-center bg-white">
            {/* <h1 className="text-7xl">SHOP</h1> */}
            <section className="flex flex-row flex-wrap justify-around gap-1 py-10 w-3/4">
                {ShopItems.map((item, index) => (
                    <Card item={item} index={index} handleClick={props.handleClick} key={ubiqid()}/>
                ))}
            </section>
        </main>
    )
}

export default Shop
