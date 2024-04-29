export const updateSubtotal=(cartitems)=>{
   let total=0;
   cartitems.map((ele)=>{
    total+=Number(ele.price);
    
   })
   total=total.toFixed(2);
   
   document.querySelector('.containerC-subtotal-value').innerText=`₹${total}`;

   document.querySelector('.containerC-subtotal-totalvalue').innerText=`₹${Number(total)+50}`;

   

}