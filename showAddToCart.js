import products from './api/Products.json'
import { getCartFromLocal } from './getCartFromLocal';
import { removeCartItem } from './removeCartItem';
import { updateCartButtons } from './updateCartButtons';
import { updateSubtotal } from './updateSubtotal';

const templateclone=document.querySelector('#containerC-products');

let cartitems=getCartFromLocal();

document.querySelector('.cart-div-totalNumber').innerText=cartitems.length;

let cartproducts=products.filter((product)=>{
      cartitems.filter((cart)=>{
        if(cart.id===product.id)
        {
            const productClone=document.importNode(templateclone.content, true);
            
            productClone.querySelector('.containerC-title').innerText=product.category;
            productClone.querySelector('.containerC-img').src=product.image;
            productClone.querySelector('.containerC-name').innerText=product.name;
            productClone.querySelector('.containerC-price').innerText=cart.price;
            productClone.querySelector('.containerC-quantity').innerText=cart.quantity;
            productClone.querySelector('#cart').setAttribute("id",`cart${product.id}`);
            
            productClone.querySelector('.containerC-remove-button').addEventListener('click',()=>removeCartItem(cart.id));

           let btn=productClone.querySelectorAll('.containerC-buttons button');

           
           btn.forEach((ele)=>{
                
                ele.addEventListener('click',(ele)=>updateCartButtons(ele,product.id,product.Price,product.Stock));
            })
          
            

            document.querySelector('.containerC-temp').append(productClone);
            
            updateSubtotal(cartitems);

          

        }
      })
})