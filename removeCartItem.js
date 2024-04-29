import { getCartFromLocal } from "./getCartFromLocal";
import { updateSubtotal } from "./updateSubtotal";

export const removeCartItem=((id)=>{
    let cartitems=getCartFromLocal();
    cartitems=cartitems.filter((ele)=>ele.id!=id)
    localStorage.setItem("cartProductLS",JSON.stringify(cartitems));
    let removediv=document.getElementById(`cart${id}`);
    if(removediv)
    removediv.remove();
    document.querySelector('.cart-div-totalNumber').innerText=cartitems.length;
    updateSubtotal(cartitems);
})