

//Spielablauf herstellen

var listDefault = ["red", "yellow", "green", "blue"];

function setButton() {
  var startButtonNumber = Math.floor(Math.random() * listDefault.length);
  var nextButton = listDefault[startButtonNumber];     //random Button der defaultListe zuordnen
  list.push(nextButton);     //Button der Liste hinzufügen
  $(".btn" + "." + nextButton).addClass("pressed");    //Style hinzufügen
  setTimeout(function() {
    $(".btn" + "." + nextButton).removeClass("pressed");
  }, 100);
  var startSound = new Audio("sounds/" + nextButton + ".mp3");   //Sound hinzufügen
  startSound.play();
  $("h1").text("Level " + list.length);
}

function gameStart() {
$(document).keydown(function() {
  setButton();
  $(document).off("keydown");  
});
  return
}

var counter = 0;
$(".btn").click(function(event) {
  if (event.target.id === list[counter]) {
    counter++;
    if (counter === list.length) {
      setTimeout(function() {
        setButton();
        counter = 0;
      }, 1000);
    }
  } else {
    gameEnd();
  }
})


//Spielablauf herstellen

gameStart();


//Spielende

function gameEnd() {    //Event noch einfügen!!
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  $("h1").text("Game Over, Press Any Key to Restart");
  var endSound = new Audio("sounds/wrong.mp3");
  endSound.play();
}


// Anlegen der Listen

var list = [];


// Button style bei Click


$(".btn").click(function(event) {
  $(event.target).addClass("pressed");
  setTimeout(function() {
    $(event.target).removeClass("pressed");
  }, 100);
});



// Button sound bei click


$(".btn").click(function(event) {
  var buttonHtml = event.target.id

  switch (buttonHtml) {
    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;

    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;

    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;

    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;

    default: console.log("fehler");

  }
});
