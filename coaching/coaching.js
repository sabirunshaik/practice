const mbicon=document.getElementById('mbicon')
const navlist=document.getElementById('mblist')
mbicon.addEventListener('click',function(){
    navlist.classList.toggle('shownhide')
    console.log('mbicon');
})
  
const monthlybtn = document.getElementById('btn1')
const price=document.getElementById('price')
const price2=document.getElementById('price2')
const price3=document.getElementById('price3')
monthlybtn.addEventListener('click',()=>{
   
    monthlybtn.style.backgroundColor='blue'
    monthlybtn.style.color='white'
    setTimeout(() => {
        monthlybtn.style.backgroundColor='white'
        monthlybtn.style.color='black'
    },1000);
    price.innerText='$14.99/Monthly'
    price2.innerText='$24.99/Monthly'
    price3.innerText='$34.99/Monthly'
    
})

const yearlybtn = document.getElementById('btn2')
// const price=document.getElementById('price')
// const price2=document.getElementById('price2')
// const price3=document.getElementById('price3')
yearlybtn.addEventListener('click',()=>{
    setTimeout(() => {
        yearlybtn.style.backgroundColor='white'
    yearlybtn.style.color='black'
    },1000);
    yearlybtn.style.backgroundColor='blue'
    yearlybtn.style.color='white'
    price.innerText='$114.99/Yearly'
    price2.innerText='$124.99/Yearly'
    price3.innerText='$134.99/Yearly'
    
})

