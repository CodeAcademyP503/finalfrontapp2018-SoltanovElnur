$(document).ready(function () {

    $('#nav-link').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function () {
    $('#nav-link-left').on('click', function () {
        $('.sidebar-left').toggleClass('active-right');
    });

});


$(".nav-item-sab a").on("click", function () {
    let x = document.querySelector(".hidder_dd.active1");
    this.nextElementSibling.classList.toggle("active1");
    if (x) {
        x.classList.remove("active1") 
    }
});


let chc = true;
$('#mv-left').on("click",()=>{
    if(chc){
        $('.sb-left').css('margin-left', '0px');
        chc = false;
    }

    else{
        $('.sb-left').css('margin-left', '-250px');
        chc = true;
    }
    
})



$('#mv-right').on("click",()=>{
    if(chc){
        $('.sidebar-left').css({
            'display': 'block',
            'margin-right': '0px'
        });
        chc = false;
    }

    else{
        $('.sidebar-left').css({
            'display': 'none',
            'margin-right': '-200px'
            
        });
        chc = true;
    }

})


function initMap() {
    var myLatLng = {lat: 40.409264, lng: 49.867092};

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 4
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Hello World!'
    });
  }
