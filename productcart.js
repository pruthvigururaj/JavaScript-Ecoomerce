import { addCart } from "./addCart";
import { buttonToggle } from "./buttonToggle";
import { getCartFromLocal } from "./getCartFromLocal";

const templateclone=document.querySelector('#shopping-product');

let cartitems=getCartFromLocal();

document.querySelector('.cart-div-totalNumber').innerText=cartitems.length;

export const showProductContainer=(products)=>{
    if(!products)
    {
        return
    }

    products.forEach((element) => {
        const {brand, category, descripton, id, image, name, Price , Stock }=element;
        
        const productClone=document.importNode(templateclone.content, true);
        

        productClone.querySelector('.shopping-name').innerText=name;
        productClone.querySelector('.shopping-item').innerText=category;
        productClone.querySelector('.shopping-img').src=image;
        productClone.querySelector('.shopping-desc').innerText=descripton;
        productClone.querySelector('.shopping-price-fixed').innerText=`₹${Price} `;
        productClone.querySelector('.shopping-price-acutal').innerText=` ₹${Price*4}`;
        productClone.querySelector('.shopping-available-number').innerText=Stock;
        productClone.querySelector('#cart').setAttribute("id",`cart${id}`);

        const btns=productClone.querySelectorAll('.shopping-quantity-number button');
        btns.forEach((btn)=>{
            btn.addEventListener('click',(event)=>{
            
                buttonToggle(event,id,Stock);
            });
        })
        
        productClone.querySelector('.shopping-button-cart').addEventListener('click',(event)=>{
            addCart(event,id,Stock);
        })

        document.querySelector('.product-container').append(productClone);
       
        
        
        
      
        
    });
      

}