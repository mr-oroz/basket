import React from 'react';
import BasketItem from "./basket-item";


const Basket = ({basket,deleteProduct}) => {
    return (
        <section>
            <div className="container jumbotron">
                {basket.map((item) => {
                    return <BasketItem deleteProduct={deleteProduct} key={item.id} {...item}/>
                })}
            </div>
        </section>
    );
}


export default Basket;