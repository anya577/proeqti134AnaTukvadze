//navigation, first in html-header we have only nav tag with id=nav

 const nav= ["Home", "About", "Games", "News", 'contact'];
 const links=["index.html", "about.html", "Games.html", 'news.html', "contact.html" ];

  let navl=nav.length;
  let navtxt="<ul>";

  for(let i=0; i<=navl-1; i++){
  // navtxt +='<li><a href="#" target=_blank>' + nav[i] + "</a></li>";
  navtxt +='<li><a href=" '+links[i]+' ">' + nav[i] + "</a></li>";
} 
navtxt+= "</ul>";
document.getElementById("nav").innerHTML=navtxt;




$('.owl-carousel').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}