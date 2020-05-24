var states = [];
var currentStateIndex = -1; // ???

if (states.length === 0) {
  $("#level-title").text("Press A Key to Start");
} else {
  $("#level-title").text("Level " + states.length);
}

$("body").on('keypress', function(event) {
  states = [];
  // generateNewState();
  setTimeout(function() {
    generateNewState();
  }, 500);
})


$("#green").on("click", function() {
  showPressed("green");
  checkState("green");
})

$("#red").on("click", function() {
  showPressed("red");
  checkState("red");
})

$("#yellow").on("click", function() {
  showPressed("yellow");
  checkState("yellow");
})

$("#blue").on("click", function() {
  showPressed("blue");
  checkState("blue");
})

function generateNewState() {
  var rn = Math.floor(Math.random() * 4);
  var color = "";

  switch (rn) {
    case 0:
      color = "green";
      break;
    case 1:
      color = "red";
      break;
    case 2:
      color = "yellow";
      break;
    case 3:
      color = "blue";
      break;
    default:
      console.log("imposible to reach here! ");
  }

  states.push(color);
  showPlayed(color);

  currentStateIndex = 0; // need to start from beginning
  $("#level-title").text("Level " + states.length);

  console.log("states: " + states);
  console.log("currentStateIndex: " + currentStateIndex);
  console.log("end of generateNewState()");
}

function checkState(st) {
  console.log(st);
  console.log("states: " + states);
  console.log("currentStateIndex: " + currentStateIndex);
  if (st === states[currentStateIndex]) {
    if (currentStateIndex === (states.length - 1)) {
      setTimeout(function() {
        generateNewState();
      }, 667);
    } else {
      currentStateIndex++;
    }
  } else {
    showError();
  }
}

function showError() {
  states = [];

  $("#level-title").text("Game Over! Press A Key to Start");

  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
}

function showPressed(btn) {
  var audio = new Audio("sounds/" + btn + ".mp3");
  audio.play();

  $("#" + btn).addClass("pressed");
  setTimeout(function() {
    $("#" + btn).removeClass("pressed");
  }, 100);
}

function showPlayed(btn) {
  var audio = new Audio("sounds/" + btn + ".mp3");
  audio.play();

  $("#" + btn).fadeOut(50);
  $("#" + btn).fadeIn(50);
}
