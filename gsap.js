let typeSplit = new SplitType(".hero .elm2 h1", {
    types: "words, chars",
    tagName: "h1"
});
let typeSplit2 = new SplitType(".__h2 h2", {
    types: "words, chars",
    tagName: "h2"
});
let typeSplit3 = new SplitType(".__h1 h1", {
    types: "words, chars",
    tagName: "h1"
});
var tl = gsap.timeline({ease: "expo.inOut",});


tl.from(".hero .elm1 p", {
   
   delay:1,
   opacity:0,
    filter:"blur(10px)"
});

// h1 
tl.from(".hero .elm2 h1", {
   
      yPercent: 100, 
      opacity:0,
      stagger: 0.08,
      filter:"blur(10px)"
  },"a");

//   Italic

  tl.from("#italic", { 
   
    opacity:0, 
    filter:"blur(10px)"
},"a");

tl.to(".hidden", {
     
    opacity:0,
});
// Nav
  tl.from(".nav", {
   
    
    opacity:0,
    filter:"blur(10px)"
});
// 

var scale = gsap.timeline({
    scrollTrigger: {
        trigger:".page_2",
      scroller:"#main",
        start:"0% 90%",
        end:"20% 80%",
    
     scrub:0.2
      }
})

scale.to(".page_2",{
    scale:1,
})

// Page2
var rule = CSSRulePlugin.getRule(".line:before");
var scroll = gsap.timeline({
    scrollTrigger: {
        trigger:".page_2",
      scroller:"#main",
        start:"0% 60%",
        end:"100% 90%",
        ease: "expo.inOut",
        scrub:true,
      }
})


// Page 2
scroll.from("._elm2 ._h1",{
    opacity:0,
    filter:"blur(10px)"
})

scroll.from(rule,{
    height:"0%",
 })

scroll.from("._elm3 ._p",{
    opacity:0,
    filter:"blur(10px)"
})


scroll.from("._elm5 h4",{
    opacity:0,
    yPercent: 100, 
    filter:"blur(10px)"
})
scroll.from("._elm5 h4 .sign",{
    opacity:0,
    
    filter:"blur(10px)"
})


// page3

var lineTwo = CSSRulePlugin.getRule(".line2:before");

var scroll2 = gsap.timeline({
    scrollTrigger: {
        trigger:".page_3",
      scroller:"#main",
        start:"0% 60%",
        end:"120% 100%",
       scrub:true,
    //    markers:true,
       ease: "expo.inOut",
      }
})

scroll2.from(lineTwo,{
    height:"0%",
 })
 scroll2.from(".__h2 h5", {
   opacity:0,  
    filter:"blur(10px)"
});
scroll2.from(".__h1 h1", {
   
    yPercent: 100, 
    opacity:0,
    stagger: 0.08,
    filter:"blur(10px)"
});
 scroll2.from(".__h2 h2", {
   
    yPercent: 100, 
    opacity:0,
    stagger: 0.08,
    filter:"blur(10px)"
});

scroll2.from(".__h4 h4", {
   
    yPercent: 100, 
    opacity:0,
    stagger: 0.08,
    filter:"blur(10px)"
});

// page4
var lineFor = CSSRulePlugin.getRule(".line3:before");
var scroll3 = gsap.timeline({
    scrollTrigger: {
        trigger:".page_4",
      scroller:"#main",
        start:"40% 20%",
       
       pin:true,
       scrub:true,
      }
})
var scrollLine = gsap.timeline({
    scrollTrigger: {
        trigger:".page_4",
      scroller:"#main",
        start:"0% 60%",
       end:"200px 70%",
       ease: "expo.inOut",
    //   markers:true,
       scrub:true,
      }
})
scrollLine.to(lineFor, {
   ease:"easeinOut",
    top: "0", 
   duration:2,
  
   
});
scroll3.to(".w50_2 .wrap", {
   
    yPercent: -400, 
    // opacity:0,
    duration:10,
    stagger: 0.5,
   
});

scroll3.from(".withoutwrap", {
   
    top: "200%", 
    opacity:0,
   
   
});

// page 5
let typeSplit5 = new SplitType(".center .centertext h1", {
    types: "words, chars",
    tagName: "h1"
});
var page5 = gsap.timeline({
    scrollTrigger: {
        trigger:".page_5",
      scroller:"#main",
        start:"00% 60%",
       end:"100% 100%",
    
       scrub:0.2,
      }
})

page5.from(".center .centertext h5",{
    opacity:0,  
    filter:"blur(10px)"
})

page5.from(".center .centertext h1",{
    yPercent: 100, 
    opacity:0,
    stagger: 0.08,
    filter:"blur(10px)"
})

// page6
var page6 = gsap.timeline({
    scrollTrigger: {
        trigger:".page_6",
      scroller:"#main",
        start:"0% 60%",
       end:"100% 100%",

       scrub:0.2,
      }
})
page6.from(".centertext2 h4",{
    opacity:0,  
    filter:"blur(10px)"
})

// page7
let typeSplit7 = new SplitType(".overflow8 h1", {
    types: "words, chars",
    tagName: "h1"
});

var page7 = gsap.timeline({
    scrollTrigger: {
        trigger:".page7",
      scroller:"#main",
        start:"0% 60%",
       end:"65% 100%",
    //  markers:true,
       scrub:0.2,
      }
})

page7.from(".overflow7 h1",{
   
    opacity:0,
   duration:1,
    filter:"blur(10px)"
})
page7.from(".overflow8 h1",{
    yPercent: 100, 
    opacity:0,
    stagger: 0.08,
    filter:"blur(10px)"
})