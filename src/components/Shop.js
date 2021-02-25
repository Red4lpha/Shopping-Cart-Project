import React from 'react';
import Card from './Card';
import ShopItems from './ShopItems';

const Shop = (props) => {
    console.log("Shop:");
    console.log(props);
    const increment = () => {
        props.handleClick();
    }
    return (
        <main className="grid place-items-center bg-white">
            <h1 className="text-7xl">{props.cartCount}</h1>
            <section className="flex flex-row flex-wrap justify-between gap-2 py-10 w-3/4">
                {ShopItems.map((item) => (
                    <Card item={item} handleClick={props.handleClick}/>
                ))}
            </section>
        </main>
    )
}

export default Shop
