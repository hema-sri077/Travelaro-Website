// Welcome message
window.addEventListener("load",function(){
    console.log("Travel Website Loaded");
});

// Book button
document.getElementById("bookBtn").addEventListener("click",function(){
    alert("Thank you for choosing Travel!");
});

// Dark mode
document.getElementById("darkModeBtn").addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});

// Gallery image zoom
let galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image){

    image.addEventListener("click",function(){

        if(image.style.transform==="scale(1.5)"){
            image.style.transform="scale(1)";
        }
        else{
            image.style.transform="scale(1.5)";
        }

    });

});

// Scroll to top button
let topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY>300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Service cards click
let cards=document.querySelectorAll(".card1,.card2,.card3");

cards.forEach(function(card){

    card.addEventListener("click",function(){

        alert("Service Selected");

    });

});

// Menu item click effect
let menuItems=document.querySelectorAll("li");

menuItems.forEach(function(item){

    item.addEventListener("click",function(){

        menuItems.forEach(function(i){
            i.style.borderBottom="none";
        });

        item.style.borderBottom="3px solid blue";

    });

});
document.getElementById("showFormBtn").addEventListener("click", function(){
    document.getElementById("bookingForm").style.display = "block";
});

document.getElementById("bookNow").addEventListener("click", function(){

    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;

    document.getElementById("message").innerHTML =
    "✅ Booking Successful! Thank you " + name +
    ". Your trip to " + destination + " has been booked.";
});
