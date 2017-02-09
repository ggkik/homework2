$(document).ready(function(){
})

    //  Время входа нас траницу(часов, минут, секунд)
     var dateStart = new Date();
        var startHours = Math.round(dateStart.getTime()/(1000*60*60));//прошло ч
        var startMinutes = Math.round(dateStart.getTime()/(1000*60));//прошло м
        var startSeconds = Math.round(dateStart.getTime()/(1000));//прошло с

    //счетчики времени
    function dateCount(){
        var date = new Date();
        var li = document.getElementsByTagName('li');
        var secs = date.getSeconds();//сейчас секунд
        var mins = date.getMinutes();//сейчас минут
        var hours = date.getHours();//сейчас часов

        if(secs<10){
            secs="0" + secs;
        }
        if(mins<10){
            mins="0" + mins;
        }
         if(hours<10){
            hours="0" + hours;
        };

        var newHours = Math.round(date.getTime()/(1000*60*60)); //прошло ч обн
        var newMinutes = Math.round(date.getTime()/(1000*60));//прошло м обн
        var newSeconds = Math.round(date.getTime()/(1000));//прошло с  обн
        var hoursDif = newHours - startHours;
        var minutesDif = newMinutes - startMinutes;

        li[1].innerHTML = "Your local time is: " + hours+':'+ mins+':'+ "<span style = 'color:blue'>" + secs +"</span>";

        li[0].innerHTML = "You are online for: " +"<span style = 'font-weight:700'>"+ hoursDif  + 'h ' + "</span>" + "<span style = 'color:green'>" +minutesDif+'m' + "</span>";

        setInterval(dateCount, 1000);
    };

    dateCount();

        //users online
        function countUsersOnline(){
        var usersOnline = $(".usersList>ul>li").length;
        $(".users>p").html("Online: " + usersOnline );
    };
      countUsersOnline();
	  
	  //находим введенный текст
		var textInputed =  $(".chatinput input").val();

		//send message from input to chat
		function sendMessage(){
			var textInputed =  $(".chatinput input").val();
			var section = $("section[id*=content-tab1]");
			section.append("<span style = 'color:cornflowerblue'> <b>You</b> : </span>"  + textInputed + '</br>');
			$("input.form-control").val("");
		}

		//bold
		function bolding(){
			$("input.form-control").css("fontWeight", "700");
		};

		//italic
		function italic(){
			$("input.form-control").css("fontStyle", "italic");
		};

		//uppercase
		function uppercase(){
			$("input.form-control").css("textTransform", "uppercase");
		};

		//link
		function link(){};

		//add icon before label text on tabs
		$("label[title*='Вклад']").prepend("<i class='fa fa-user'></i>");
		$(".fa-user").css({'marginRight' : '6px'});

		//add style overflow-y:auto for scrolling chat list
		$('section[id*=content]').css({'overflowY':'auto'});

