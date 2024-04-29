import { getCartFromLocal } from "./getCartFromLocal";



export const addCart=(event,id,Stock)=>{
    let duplicate=false;
    let arrayLocalStorage=getCartFromLocal();
    const currentElementId=document.querySelector(`#cart${id}`);
    
    let price=currentElementId.querySelector('.shopping-price-fixed').innerText;
    let quantity=currentElementId.querySelector('.shopping-cart-number').innerText;
    price=price.replace("₹","");
    
    quantity=Number(quantity);

   arrayLocalStorage.find((arr)=>{
        if(arr.id===id)
         duplicate=true;
  })
    if(duplicate==true && quantity>1)
    {
        arrayLocalStorage.find((arr)=>{
            if(arr.id===id)
             {
                
                
                arr.quantity+=quantity;
                let dummynumber=Number(price*arr.quantity);
                arr.price=dummynumber.toFixed(2);
                 
             }
      })
    }
    if(duplicate==true && quantity<=1)
    {
         return false;
    }

    let dummyprice=Number(price*quantity);
    price=dummyprice.toFixed(2);
    if(duplicate==false)
    {
        arrayLocalStorage.push({id, price ,quantity});
    }
    
    localStorage.setItem("cartProductLS",JSON.stringify(arrayLocalStorage));
    
    
    document.querySelector('.cart-div-totalNumber').innerText=arrayLocalStorage.length;
    
}