$(document).ready(function() {
    $('#apropos-paragraphe').waypoint(function() {
        $('#apropos-paragraphe').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#qui').waypoint(function() {
        $('#qui').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#illustrition').waypoint(function() {
        $('#illustrition').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#illustrition').waypoint(function() {
        $('#illustrition').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#me').waypoint(function() {
        $('#me').addClass("animate__animated animate__fadeInLeft")
        
    }, {offset:"10%"});
    $('#ligne').waypoint(function() {
        $('#ligne').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"50%"});
    $('#hi').waypoint(function() {
        $('#hi').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('h3').waypoint(function() {
        $('h3').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('h4').waypoint(function() {
        $('h4').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#ligne2').waypoint(function() {
        $('#ligne2').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"50%"});
    $('#h1-comp').waypoint(function() {
        $('#h1-comp').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#p-comp').waypoint(function() {
        $('#p-comp').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#skills').waypoint(function() {
        $('#skills').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('.root').waypoint(function() {
        $('.root').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"80%"});
    $('#ligne3').waypoint(function() {
        $('#ligne3').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"50%"});
    $('#h1-form').waypoint(function() {
        $('#h1-form').addClass("animate__animated animate__fadeInLeft")
        
    }, {offset:"90%"});
    $('.formation').waypoint(function() {
        $('.formation').addClass("animate__animated animate__fadeInLeft")
        
    }, {offset:"50%"});
    $('.projects').waypoint(function() {
        $('.projects').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"30%"});
    $('#h1-pro').waypoint(function() {
        $('#h1-pro').addClass("animate__animated animate__fadeInLeft")
        
    }, {offset:"80%"});
    $('#tact').waypoint(function() {
        $('#tact').addClass("animate__animated animate__fadeInLeft")
        
    }, {offset:"80%"});
    $('#logos').waypoint(function() {
        $('#logos').addClass("animate__animated animate__fadeInUp")
        
    }, {offset:"90%"});

    $("#sub").click(function(e){

    e.preventDefault();

    });
    
    document.getElementById("sub").addEventListener("click", function(e){

    e.preventDefault();

    let alertBox = document.getElementById("alert-box");

    alertBox.innerHTML = "Message envoyé avec succès !";

    alertBox.style.opacity = "1";

    setTimeout(() => {
        alertBox.style.opacity = "0";
    }, 3000);

    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mess").value = "";

});
})