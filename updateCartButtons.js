import { getCartFromLocal } from "./getCartFromLocal";
import { updateSubtotal } from "./updateSubtotal";

export const updateCartButtons=(ele,id,price,stock)=>{
   
    let cartitems=getCartFromLocal();

   

    let existingproduct=cartitems.filter((ele)=>ele.id===id);
   
    let itemcount=document.getElementById(`cart${id}`);
   
    let quantity=itemcount.querySelector('.containerC-quantity').innerText;
   
    let quantityvalue=Number(quantity);
    
    let stockNumber=stock-quantityvalue;
    
    if(ele.target.className=="containerC-btn-incre" && stockNumber>1)
    {
       quantityvalue+=1;

    }
    else if(ele.target.className=="containerC-btn-decre")
    {
        if(quantityvalue>1)
        quantityvalue-=1;
    }

    cartitems.map((ele)=>{
        if(ele.id===id)
        {
            let pricecut=price*quantityvalue;
            ele.price=pricecut.toFixed(2);
            ele.quantity=quantityvalue;
            itemcount.querySelector('.containerC-price').innerText=ele.price;
        }
    })
    
    itemcount.querySelector('.containerC-quantity').innerText=quantityvalue;

    localStorage.setItem("cartProductLS",JSON.stringify(cartitems));

    updateSubtotal(cartitems);
}