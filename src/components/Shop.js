import React from 'react';
import Card from './Card';
import ShopItems from './ShopItems';
import ubiqid from "uniqid";

const Shop = ({handleClick}) => {

  return (
    <main className="container mx-auto center">
      <section className="flex flex-row flex-wrap justify-center gap-1 py-10 max-w-6xl mx-auto">
        {ShopItems.map((item, index) => (
          <Card item={item} index={index} handleClick={handleClick} key={ubiqid()} />
        ))}
      </section>
    </main>
  )
}

export default Shop
