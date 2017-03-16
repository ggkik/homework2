$(document).ready(function(){

  //Отсчет времени пользователей
    var dateStart = new Date();
    var startHours = Math.round(dateStart.getTime()/(1000*60*60));//прошло ч
    var startMinutes = Math.round(dateStart.getTime()/(1000*60));//прошло м
 

   //Счетчик сколько времени 
    function dateCount(){
        var date = new Date();
        var li = document.getElementsByTagName('li');
        var mins = date.getMinutes();//сейчас минут
        var hours = date.getHours();//сейчас часов

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
        li[0].innerHTML = "You are online for: " +"<span style = 'font-weight:700'>"+ hoursDif  + 'h ' + "</span>" + "<span style = 'color:violet'>" +minutesDif+'m' + "</span>";

       setInterval(dateCount, 1000);
   };
      dateCount();

//Подключение юзеров на сервере//
function users(){
  $.ajax({
    type: 'GET',
    url: 'https://main-workspace-juggerr.c9users.io:8081/user',
    success: function(response) {  // Обработчик успещного ответа
      console.log(response); // Вывод содержимого ответа в консоль
  
      response.forEach(
        function (obj) {
          $(".usersList ul").append(`<li><a>${obj.username} ${obj.status}</a></li>`);
        }
      )
    },
    error: function(data, status) {  // Обработчик ответа в случае ошибки
      console.error(data, status);
    }
  });
}
users();


//Отправка сообщений на сервер//
  function mess(){
    $.ajax({
    type: 'GET',
    url: 'https://main-workspace-juggerr.c9users.io:8081/messages',
      success: function(response) {  // Обработчик успещного ответа
       console.log(response); // Вывод содержимого ответа в консоль
       response.forEach(
        function (obj) {
          var time = (obj.datetime).slice(11,16);
            var section = $("section:not(section:hidden)"); 
            section.prepend(`<p> <b>${obj.user_id}</b> :  ${obj.message} <span style = "float:right">` + time + `</span></p>`);
          }
          )
     },
      error: function(data, status) {  // Обработчик ответа в случае ошибки
       console.error(data, status);
     }
   });
}

mess(); 
//Регистрация пользователей//

function reg(){
    var regg = $("input#reg").val();
    $.ajax ({
      url: "https://main-workspace-juggerr.c9users.io:8081/user/register",
      type: "POST",
      data: JSON.stringify(
      {
        "username": regg
      }
      ),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data){
        console.log( data );
        console.log(regg);

      }
    });
};

$("#regBtn").click(function(){
  var regg = $("input#reg").val();
  reg();
  var us  = $("h4.nm");
  us.text(regg);
});


//Функция отправки сообщений в чат//
function sendMessage(){
   var textFormated = $(".chatInput .form-control").val();
   var textFormatedB = $(".chatInput .form-control").css("fontWeight");
   var section = $("section:not(section:hidden)"); //секция, которая не скрыта
   section.append("<span style = 'color:grey'> <b>Igor</b> : </span>"  + textFormated + '</br>');
   $("textarea.form-control").val("");
   var user  = $("h4.nm").text();
   var date = new Date();
    $.ajax ({
             url: "https://main-workspace-juggerr.c9users.io:8081/messages",
             type: "POST",
             data: JSON.stringify(
             {
               "datetime": date, 
               "message": textFormated, 
               "user_id": 98297325
             }
             ),
             dataType: "json",
             contentType: "application/json; charset=utf-8",
             success: function(data){
              console.log( data );
            }
          });


   console.log(textFormatedB);
};

//Сколько пользователей онлайн//
function countUsersOnline(){
    var usersOnline = $(".usersList>ul>li").length;
    $(".users>h2").html("Online: " + usersOnline );
    setTimeout(countUsersOnline, 3000);
};
countUsersOnline();

//Счетчики
function letCount(){
//Счетчик количества введенных букв
var countLetters = ($(".form-control").val()).length;
$(".counter>li:nth-child(1)").html("<span style = 'color:red'>" + countLetters + "</span>" + " characters entered" );
//Счетчик количества введенных слов
var lettersCounter = (($(".form-control").val()).split(/[\S\.\?]+/)).length-1;
  $(".counter>li:nth-child(2)").html("<span style = 'color:violet'>" + lettersCounter + "</span>" + " letters entered" );

  var whitespacesCounter = (($(".form-control").val()).split(/\s/)).length-1;
  $(".counter>li:nth-child(3)").html("<span style = 'color:yelow'>" + whitespacesCounter + "</span>" + " whitespase characters entered" );
  //Счетчик знаков припинания
  var regPunct = /[_+-.,?!@#$%^&*();\/|<>"']/;
  var punctuationCounter = (($(".form-control").val()).split(regPunct)).length-1;
  $(".counter>li:nth-child(4)").html("<span style = 'color:blue; font-weight:700'>" + punctuationCounter + "</span>" + " punctuation marks entered" );
  setInterval(letCount, 1000);
};
letCount();


//находим введенный текст
var textInputed =  $(".chatinput textarea").val();

//Жирный текст
function boldText(){
    $("textarea.form-control").toggleClass("forBolding");
};

//Наклонный текст
function italicText(){
    $("textarea.form-control").toggleClass("forItalic");
};

//Все заглавные буквы
function uppercaseText(){
    $("textarea.form-control").toggleClass("forUppercase");
};

//Иконки
function linkText(){
   var textInputed =  $(".chatinput textarea").val();   
   var section = $("section:not(section:hidden)");
   section.append("<span style = 'color:cornflowerblue'> <b>Igor</b> : </span>"  + '<a>'+ "Link" +'</a>'+ '</br>');
};

//Кнопки трансформации текста
var buttonBold = $('.bldbutn');
var buttonItalic = $('.ibutn');
var buttonUppercase = $('.ubutn');
var buttonLink = $('.lnkbutn');
var butSM = $('.butn button');

//Кнопки события
buttonBold.click(boldText);
buttonUppercase .click(uppercaseText);
buttonLink.click(linkText);
buttonItalic.click(italicText);




butSM.click(function(){
          sendMessage();
          mess();

        });






   

//функция keyup
  $(".chatInput .form-control").keyup(function(e){
    if(e.which ==13){
      e.preventDefault();
      sendMessage()
  };
});
    

});


