window.onload = function(){
    //time
    (function(){
        var date = new Date();
        li = document.getElementsByTagName('li');
        var secs = date.getSeconds();
        var mins = date.getMinutes();
        var hours = date.getHours();
        if(secs<10){
        	secs="0" + secs;
        }
        if(mins<10){
            mins="0" + mins;
        }
         if(hours<10){
            hours="0" + hours;
        }

        li[1].innerHTML = "Your local time is: " + hours+':'+ mins+':'+ "<span style = 'color:kblue'>" + secs +"</span>";
        //div[1].innerHTML = new Date().setTime(new Date(date).getTime());
        window.setTimeout(arguments.callee, 1);
        
    })();

        //users online
        (function(){
        var usersOnline = $(".usersList>ul>li").length;
        $(".users>p").html("Online: " + usersOnline );
    })();

     
};

function bold(){
    //находим введенный текст
  var text =  $(".footer input").val();
  alert(text);
  //text.style.font-weight = "700";
  //text.css('font-weight', '700');
  
}