import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce( (total,prd) => total + prd.price , 0);
    let total = 0;
    for( let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const vat = total / 5;
    const grandTotal = (total + shipping+ Number(vat)).toFixed(2);
    
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
        return (
        <div>
            <h4>Order Summery:</h4>
            <p>Items: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p>VAT (5%): ${formatNumber(vat)}</p>
            <p>Total Price: ${grandTotal} </p>
        </div>
    );
};

export default Cart;