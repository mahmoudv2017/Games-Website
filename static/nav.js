 // var browser = document.querySelector(".dropdown-toggle")

    var container = document.querySelector(".navey")
    var headers = document.querySelectorAll('.coley')
    var login_butt = document.querySelector('.loginner')

    var text = document.querySelector(".search_text")
    var tar = document.querySelector(".target")

    function login(){
        login_butt.classList.toggle("droppies3")
    }


  function styyler(index){

    document.querySelectorAll('svg')[index].style.backgroundColor = "white"
    document.querySelectorAll('svg')[index].style.color = "black"


  }

  function styyler_off(index){

    document.querySelectorAll('svg')[index].style.backgroundColor = "#353131"
    document.querySelectorAll('svg')[index].style.color = "#e4e3e3"


  }

  $(".search_of_form").on("submit" , function(e){
    e.preventDefault()

    window.location.href = '/search='+text.value+"/page=1"
   
  })
    


    function myFunction() {
  return "Write something clever here...";
    }



function openNav() {
    document.querySelector(".spin_me").style.opacity = 0
    document.getElementById("mySidenav").style.width = " 260px";
    document.getElementById("mySidenav").style.padding = " 16px";
    document.getElementById("mySidenav").style.paddingTop = " 80px";
    document.querySelectorAll('.sidenav path').forEach(item => {
        item.style.display = 'none'
    })

    setTimeout(function(){
 
        document.querySelectorAll('.sidenav path').forEach(item => {
            item.style.display = 'block'
        })
    },140)

}

function show_side(option){
    if (option == "show"){
        document.querySelector('.side_menuu').style.display = 'block'
    }
    
}

function closeNav() {
    console.log("closing Nav")
    document.querySelector(".spin_me").style.opacity = 1

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.padding = " 0px";

    document.querySelectorAll('.sidenav path').forEach(item => {
        item.style.display = 'none'
    })




}

function openlister(lister) {
    if(lister == ".lister2"){
        document.querySelector(lister).classList.toggle("hhh")
    }else{
        document.querySelector(lister).classList.toggle("heigh")
    }

}

document.querySelector(".group2").addEventListener('click' , closeNav)