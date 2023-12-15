// console.log("joeohoe")

//met querySelector selecteer ik het element waarop de interactie moet gaan plaatsvinden, 
//dit gaat om het element met de classname .toggle

const toggle = document.querySelector('.toggle');
//console.log("button",toggle)
const nav = document.querySelector('.side-menu');
//console.log("nav",nav)
const div = document.querySelector('.menu-toggle');
//console.log(div)


//hiermee zorg ik er voor dat na een 'click' event er een reactie zal plaatsvinden

toggle.addEventListener('click', function(){
    //console.log("klik klik klik")

    //na de 'click' event van de EventListener zal het volgende gebeuren:
    nav.classList.toggle('active'), //hiermee klapt de navigatiebar met links open
    div.classList.toggle('active') //hiermee verschuift de toggle ook mee naar rechts
    toggle.classList.toggle('active') //hiermee roteert de toggle 180deg, zodat het ook duidelijk is dat het weer inklapbaar is
    
    
    // nav.classList.toggle('side-menu.active') dit werkt niet,waarom?
});
