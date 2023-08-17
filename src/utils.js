export function getItemCount(cartItems){
    return cartItems.reduce((count,cartItem)=>cartItem.quantity+count,0);
}

export function  getSubTotal(cartItem){
    return cartItem.reduce((count,{product,quantity})=>product.price*quantity+count,0)
}