

// var star = document.querySelectorAll(".game-text .fa-star").forEach(item => {
//     item.addEventListener("mousemove",function(){
//         console.log('sadasd')
//         item.classList.add("checked")
// })

// })
t = false
name = document.querySelector('.game-text h1').innerText
if(name.includes("/")){
    name = $(".game-text h1")[0].attributes.role.nodeValue
}
function like(index,type , comment_id ){

    slug = name
    var vtn_up  = document.querySelectorAll('.fa-thumbs-up')[index-1]
    var vtn_down  = document.querySelectorAll('.fa-thumbs-down')[index-1]
    if(vtn_up.style.color != "blue" && vtn_down.style.color != "red"){
       vtn_up = vtn_up.style.zIndex = "-1"
       vtn_down = vtn_down.style.zIndex = "-1"

        if(type == "up"){
          

            $.ajax({
                type : 'GET',
                url :  "/id="+ slug +"/AddComment/"+ comment_id +"/reply=like",
                success:function(reponse){
    
                    document.querySelectorAll('.fa-thumbs-up')[index-1].style.color = "blue";
                    document.querySelectorAll('.like_counter')[index-1].innerText = parseInt(document.querySelectorAll('.like_counter')[index-1].innerText) + 1
               
                }
                
                
            })

   
       }else{

        
       
            $.ajax({
                type : 'GET',
                url :  "/id="+ slug +"/AddComment/"+ comment_id +"/reply=dislike",
                
                success:function(){
    
                    document.querySelectorAll('.fa-thumbs-down')[index-1].style.color = "red";
                    document.querySelectorAll('.dislike_counter')[index-1].innerText = parseInt(document.querySelectorAll('.dislike_counter')[index-1].innerText) + 1
                }
                
                
            })

            
   
           
   
       }

    }
       
   
    }
    

var comments = document.querySelectorAll('.comment_1')

var comments_form = document.querySelectorAll('.comment_former')
var comment_vaue = 'asd'
function edit_comment(index){

    comments[index-1].classList.toggle("hide")
    comments_form[index-1].classList.toggle("hide")
}

function add_reply(index){
    var comments_form = document.querySelectorAll('.comment_reply')
    comments_form[index-1].classList.toggle("hide")

}
f = false
function view_replies(index){
    var replies = document.querySelectorAll('.replies')
    var btn = document.getElementById("reply_button")
    
    if(!f){
        btn.innerText = "Hide Replies"
        f= true
    }else{
        btn.innerText = "Show Replies"
        f =false
    }
    
    replies[index-1].classList.toggle("show_reply")
}
var vid = document.querySelector(".video")
function playvideo(){

    vid.pause()
    
}


function Delete_comment( index, id , slug){
    document.querySelectorAll(".comment-manager")[index-1].innerHTML = "<h1>LOADING....<h1>"
    $.ajax({
        type : 'GET',
        url :  "/id="+slug+"/DeleteComment/"+id+"/reply=false",
    
        success:function(data){
        

            $("body" ).html(data)
        }
        
        
    })
}




    choosen_one = $(".my-rating")[0].attributes.role.nodeValue
    choosen_one2 = 0
    user_star = document.querySelector(".user_star")
    his_rating = document.querySelector(".his_rating")
    flag = false
 $(".my-rating").starRating({
    starSize: 25,
    strokeColor: '#894A00',
    hoverColor : '#278bd8' ,
    initialRating: choosen_one,
  
    callback: function(currentRating, $el){
        // make a server call here
      
        document.querySelector('.user_score .my-rating').style.display = "none"
        flag = true
        choosen_one2 = currentRating
        his_rating = currentRating
        document.querySelector(".user_star").style.color = "#278bd8"

        req = $.ajax({
            type : 'POST',
            url : '/id='+$el[0].id+"/Current_Rating="+currentRating,
            data : {
                'Current_Rating' : currentRating,
                csrfmiddlewaretoken : $('input[name = csrfmiddlewaretoken]').val()
            },
        })

       
        
    }
    });


count = 0;
past_rate = document.querySelector(".api_rating").textContent








document.querySelectorAll(".my-rating polygon").forEach(item => {
    
    item.addEventListener("mouseenter" , function(){
        document.querySelectorAll(".my-rating polygon").forEach(item => {
        if(item.dataset.side == "right" || item.dataset.side == "left"){
            var cl_list = item.classList.value
           
            if(cl_list.includes("hovered")){

                if(count <= 10){
                    
                    count += 1
                    if(count == 11){count= 9;}
                }
                document.querySelector(".user_star").classList.add('styler2')
                his_rating.classList.add('api_rating' , 'styler2')
           
                his_rating.textContent = count*.5
                
            }else{
                count = 0;
            }
            
            
    
        }
    })
    })

})


document.querySelector('.my-rating').addEventListener("mouseleave" , function(){
    document.querySelector(".user_star").classList.toggle('styler2')
    if(!flag){
        reset()
        reset_user_star()
    }
    

})

function reset(){
    if(choosen_one == 0){
        document.querySelector(".his_rating").classList.toggle('api_rating')
        document.querySelector(".his_rating").classList.toggle('styler2')
        document.querySelector(".his_rating").textContent = "rate this"
    }
    
}

function reset_user_star(){
    setTimeout(function(){
        document.querySelector('.user_star').addEventListener("mouseenter" , function(){
     
            document.querySelector('.user_score .my-rating').style.display = "flex"
        })

        if(choosen_one > 0){
            document.querySelector(".user_star").style.color = "#278bd8"
            his_rating.classList.toggle('api_rating')
            his_rating.classList.toggle('styler2')
           
            his_rating.textContent = choosen_one
            if(choosen_one2 > 0){
                his_rating.textContent = choosen_one2
            }
        }
    } , 40)
   
}


rater = document.querySelector('.my-rating')
rater.addEventListener("mouseleave" , function(e){
  
    rater.style.display = "none"
    reset_user_star()
})

reset_user_star()












function show_my_rating(){
    current_ratting =  $('.my-rating').starRating('getRating')

}

 f = false
 t = false
 function small_menu(index){
  
     document.querySelectorAll(".dropdown-menu")[index-1].classList.toggle("show")
 }




 $('#add_me').on("submit",function(e){
    
   e.preventDefault()

     
   $.ajax({
         type : 'POST',
         url :  '/id='+name+'/AddComment/NewComment/reply=false',
         data : {
             comment : $('#actual_comment').val(),
             csrfmiddlewaretoken : $('input[name = csrfmiddlewaretoken]').val()
         },
         success:function(data){
            
         
             $(data).find(".comments");

             $("body" ).html(data)
         }
         
         
     })
     document.querySelector('#add_me').innerHTML = '<div></div><div style="background: rgba(0,0,0,0.0); width: 100%;" class="loadingio-spinner-bean-eater-jant8q2tnu"><div style="left: 50%;" class="ldio-ju6mpey5stg">'
         +'<div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>'
         +'</div></div>'
      
         

 })








 function reply_submission(username , comment_id ,index){


   
     

   $.ajax({

     type : 'POST',
     url :  '/id='+name+'/EditComment/'+comment_id+'/reply='+username,
     data : {
         comment : document.querySelectorAll('.actual_reply')[index-1].value,
         csrfmiddlewaretoken : $('input[name = csrfmiddlewaretoken]').val()
     },
     success:function(data){
         
       
         $("body" ).html(data)

     }
         
         
     })

     document.querySelectorAll(".replierr")[index-1].innerHTML = "<h1>LOADING....<h1>"
     

}
