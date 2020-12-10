const menu= document.querySelector('#menu');
const links=document.querySelector('.na_menu');



const mobilemenu=()=>
{
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
  
};
menu.addEventListener('click',mobilemenu);