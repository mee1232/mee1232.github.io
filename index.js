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
