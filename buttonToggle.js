export const buttonToggle=((event,id,Stock)=>{
    const currentElementId=document.querySelector(`#cart${id}`);
    let cartNumber=currentElementId.querySelector('.shopping-cart-number');
    let totalNumber=currentElementId.querySelector('.shopping-available-number');
    let StockNumber=parseInt(totalNumber.innerText || Stock);
    
    let number=parseInt(cartNumber.innerText);
    if(event.target.className==="shopping-incre" && (StockNumber!=0))
    {
        cartNumber.innerText=number+1;
        StockNumber-=1;
        
    }
    else if(event.target.className==="shopping-decre" && (number!==1))
    {
        cartNumber.innerText=number-1;
        StockNumber+=1;
        
    }
    totalNumber.innerText=StockNumber;
   
    
})