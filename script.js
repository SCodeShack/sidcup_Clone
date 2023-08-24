'use strict';
const main = document.querySelector('.main')
const nav = document.querySelector('.nav--bar')
const h1 = document.querySelector('.content--h1')
const contentAll = document.querySelectorAll('.content')
const btn = document.querySelector('.button')
const page2 = document.querySelector('.content--2');
const page1 = document.querySelector('.content--1');
const cursor = document.querySelector('.cursor');
const cursorshadow = document.querySelector('.cursor--shadow')
const navlink = document.querySelectorAll('.nav--link')
const navContainer = document.querySelector('.nav--links');

// ////////////////////////////////
const callback = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting) {
       
        nav.classList.add('nav--scroll');
        btn.classList.add('button--scroll');
        navlink.forEach(function(nav){
            nav.classList.add('nav--link__scroll');
        })
    }
    else {
        nav.classList.remove('nav--scroll');
        btn.classList.remove('button--scroll');
        navlink.forEach(function(nav){
            nav.classList.remove('nav--link__scroll');
        })
    }


  
}
const option ={
    root: null,
    threshold:0,
    rootMargin: `-300px`,
}

const observer = new IntersectionObserver(callback,option);

observer.observe(h1);


//section page 2

const pageCall = function(entries,observer){
    const [entry1] = entries
    if(!entry1.isIntersecting){
        page2.classList.add('content--2__bg');
    }else{
        page2.classList.remove('content--2__bg');
    }
    
}

const optionPage = {
    root:null,
    threshold: 1

}

const observerPage = new IntersectionObserver(pageCall,optionPage)

observerPage.observe(page1);


// cursor

document.addEventListener('mousemove',function(cord){
    console.log(cord)
    cursor.style.left = cord.x+30+"px";
    cursor.style.top = cord.y+"px";
    cursorshadow.style.left = cord.x-150+"px";
    cursorshadow.style.top = cord.y-150+"px";

})

//card-cursor
const cards = document.querySelectorAll('.card');
const cardshover =document.querySelectorAll('.card--hover')
const cursorhoever= document.querySelector('.cursor-card-hover');
cards.forEach(function(card){
    card.addEventListener('mouseover',function(e){

        if(e.target){
            console.log(e)
            cursor.classList.add('cursor-card-hover');
            // cardshover.forEach(function(e){
            //     e.classList.toggle('hidden');
            // })
            
            document.querySelectorAll('.card--hover').forEach(function(ele){
                    ele.classList.toggle('hidden');
            })
        }

    })
})

cards.forEach(function(card){
    card.addEventListener('mouseout',function(e){

        if(e.target){

       
        cursor.classList.remove('cursor-card-hover');
       
        // cardshover.forEach(function(e){
        //     e.classList.toggle('hidden');
        //     })

         document.querySelectorAll('.card--hover').forEach(function(ele){
             ele.classList.toggle('hidden');
             
         })

        }
    })
})


document.querySelectorAll('.nav--link').forEach(function(el){
    el.addEventListener('mouseenter',function(){
        cursor.classList.add('cursor-card-hover');
    })
})

document.querySelectorAll('.nav--link').forEach(function(el){
    el.addEventListener('mouseleave',function(){
        cursor.classList.remove('cursor-card-hover');
    })
})


gsap.from(".about-img",".about-us",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about",
        scroller:'body',
        markers:true,
        start:"top 60 %",
        end: "top 58%",
        scrub:3
    }
})

const hidquote = document.querySelector('.qoute-sec')

const call = function(entires){
    const [ent] = entires;

    if(!ent.isIntersecting){

        ent.target.classList.remove('qoute-hidden');
    } 
}

const observerqoute = new IntersectionObserver(call,{
    root:null,
    threshold:0.15
})

observerqoute.observe(hidquote);


const arrow = document.querySelector('.arrow');
const section2 = document.querySelector('.content--2');

arrow.addEventListener('click',function(e){
    section2.scrollIntoView({behavior:"smooth"});
})

arrow.addEventListener('mouseenter',function(e){
    arrow.classList.add('arrow--hover');

})

arrow.addEventListener('mouseleave',function(e){
    arrow.classList.remove('arrow--hover');
})