// var $ = require('jquery');  // Подключение установленной библиотеки jQuery
$(document).ready(function(){

   /***Время входа на страницу(часов, минут, секунд)***/
    var dateStart = new Date();
    var startHours = Math.round(dateStart.getTime()/(1000*60*60));//прошло ч
    var startMinutes = Math.round(dateStart.getTime()/(1000*60));//прошло м
    //var startSeconds = Math.round(dateStart.getTime()/(1000));//прошло с

    /***счетчики времени***/
    function dateCount(){
        var date = new Date();
        var li = document.getElementsByTagName('li');
        //var secs = date.getSeconds();//сейчас секунд
        var mins = date.getMinutes();//сейчас минут
        var hours = date.getHours();//сейчас часов

        // if(secs<10){
        //  secs="0" + secs;
        // }
        if(mins<10){
            mins="0" + mins;
        }
        if(hours<10){
            hours="0" + hours;
        };

        var newHours = Math.round(date.getTime()/(1000*60*60)); //прошло ч обн
        var newMinutes = Math.round(date.getTime()/(1000*60));//прошло м обн
        var hoursDif = newHours - startHours;
        var minutesDif = newMinutes - startMinutes;
        li[1].innerHTML = "Your local time is: " + hours+':'+ mins+ "<span style = 'color:blue'>"  +"</span>";
        //div[1].innerHTML = new Date().setTime(new Date(date).getTime());
        li[0].innerHTML = "You are online for: " +"<span style = 'font-weight:700'>"+ hoursDif  + 'h ' + "</span>" + "<span style = 'color:green'>" +minutesDif+'m' + "</span>";
       // window.setTimeout(arguments.callee, 1000);
       setInterval(dateCount, 1000);
   };
      dateCount();

        /***users online***/
        function countUsersOnline(){
            var usersOnline = $(".usersList>ul>li").length;
            $(".users>h2").html("Online: " + usersOnline );
        };
        countUsersOnline();

        //counters
        function letCount(){
        //letters conter
        var countLetters = ($(".form-control").val()).length;
        $(".counter>li:nth-child(1)").html("<span style = 'color:blue'>" + countLetters + "</span>" + " characters entered" );
        //words counter
        var lettersCounter = (($(".form-control").val()).split(/[\S\.\?]+/)).length-1;
        $(".counter>li:nth-child(2)").html("<span style = 'color:red'>" + lettersCounter + "</span>" + " letters entered" );
            //whitespaces vcunter
            var whitespacesCounter = (($(".form-control").val()).split(/\s/)).length-1;
            $(".counter>li:nth-child(3)").html("<span style = 'color:green'>" + whitespacesCounter + "</span>" + " whitespase characters entered" );
        //punctuation marks entered counter
        var regPunct = /[_+-.,?!@#$%^&*();\/|<>"']/;
        var punctuationCounter = (($(".form-control").val()).split(regPunct)).length-1;
        $(".counter>li:nth-child(4)").html("<span style = 'color:blueviolet; font-weight:700'>" + punctuationCounter + "</span>" + " punctuation marks entered" );
        //window.setTimeout(arguments.callee, 100);
        setInterval(letCount, 1000);
    };
    letCount();

    /*** BUTTONS ***/

//находим введенный текст
var textInputed =  $(".chatinput textarea").val();

//bolding the text
function boldText(){
    $("textarea.form-control").toggleClass("forBolding");
};

//italic the text
function italicText(){
    $("textarea.form-control").toggleClass("forItalic");
};

//uppercase the text
function uppercaseText(){
    $("textarea.form-control").toggleClass("forUppercase");
};

//link the text
function linkText(){
   var textInputed =  $(".chatinput textarea").val();   
   var section = $("section:not(section:hidden)");
   section.append("<span style = 'color:cornflowerblue'> <b>You</b> : </span>"  + '<a>'+ "Link" +'</a>'+ '</br>');
};

//findiтg buttons
var buttonBold = $('.bldbutn');
var buttonItalic = $('.ibutn');
var buttonUppercase = $('.ubutn');
var buttonLink = $('.lnkbutn');
var buttonSendMessage = $('.butn button');

//click events
buttonBold.click(boldText);
buttonUppercase .click(uppercaseText);
buttonLink.click(linkText);
buttonItalic.click(italicText);




//send message from input to chat
function sendMessage(){
   var textFormated = $(".chatInput .form-control").val();
   var textFormatedB = $(".chatInput .form-control").css("fontWeight");
   var section = $("section:not(section:hidden)"); //секция, которая не скрыта
   section.append("<span style = 'color:chocolate'> <b>You</b> : </span>"  + textFormated + '</br>');
   $("textarea.form-control").val("");
   console.log(textFormatedB);
};

buttonSendMessage.click(sendMessage);

/*** BUTTONS END ***/



//test function for checking counter countUsersOnline();
$('.personal').append('<button> newUser </button>'); //add test button

var myButton = $('.personal button');
myButton.css('marginTop', '10px').addClass('btn btn-primary');//add styles & class
myButton.click(function(){var newName = prompt('name?', 'Angelina Jolie'); $('.usersList ul').append('<li><a>'+ newName +'</li></a>'); countUsersOnline()}); //add event onclick

// $(".usersList a").dblclick(function(){
//     var cht = $(".tabs input").last();
//     cht.after('<input id="tab" type="radio" name="tabs"><label for="tab" title="Вкладка ">Chat with <b>John Snow</b></label>')
// })

//add icon before label text on tabs
$("label[title*='Вклад']").prepend("<i class='fa fa-user'></i>");
$(".fa-user").css({'marginRight' : '6px'});

//add style overflow-y:auto for scrolling chat list
$('section[id*=content]').css({'overflowY':'auto'});



});