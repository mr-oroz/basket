import React from 'react';

const BasketItem = ({image, id, title, total,count, deleteProduct,stepProduct}) => {
    return (
        <div className="row">
            <div className="col-2"><img
                src={image}
                className="card-img-top" alt="..."/></div>
            <div className="col-2">{title}</div>
            <div className="col-3">
                <div style={{flexWrap: "nowrap"}} className="row">
                    <button onClick={stepProduct(id,-1)} className="btn btn-primary my-cursor">-</button>
                    <span className='form-control'> {count}</span>
                    <button onClick={stepProduct(id,1)} className="btn btn-primary">+</button>
                </div>
            </div>
            <div  className="col-2">{total} com</div>
            <div onClick={deleteProduct(id)} className="col-2 my-cursor">delete</div>
        </div>
    );
}


export default BasketItem;