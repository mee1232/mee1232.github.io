const menu= document.querySelector('#menu');
const links=document.querySelector('.na_menu');
const navlogo=document.querySelector('#nbc')


const mobilemenu=()=>
{
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
  
};
menu.addEventListener('click',mobilemenu);
const highlightM =()=>
{
    const ele=document.querySelector('.highlight')
    const hm=document.querySelector('#homepage')
    const am=document.querySelector('#aboutpage')
    const sm=document.querySelector('#servicepage')
let scrollPos=window.scrollY
if(window.innerWidth>960 && scrollPos<600)
{
    hm.classList.add('highlight')
    am.classList.remove('highlight')
    return
}
else if(window.innerWidth>960 && scrollPos<1400)
{
    hm.classList.remove('highlight')
    am.classList.add('highlight')
    sm.classList.remove('highlight')
return
}
else if(window.innerWidth>960 && scrollPos<1400)
{
    am.classList.remove('highlight')
    sm.classList.add('highlight')
return
}
if((ele && window.innerWidth<960 && scrollPos<600) || ele)
{
ele.classList.remove('highlight')
}
}
window.addEventListener('click',highlightM)
window.addEventListener('scroll',highlightM)
const hidem =()=>
{
    const mb=document.querySelector('.is-active')
    if(window.innerWidth <= 768 && mb)
    {
        menu.classList.toggle('is-active')
        links.classList.remove('active')
    }
}
links.addEventListener('click',hidem)
navlogo.addEventListener('click',hidem)
//3d
//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerHeight / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageX) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});



