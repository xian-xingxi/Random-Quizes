//Random Quiz
"use strict";

//Event Listener
document.getElementById("btn").addEventListener("click", results);

//Event Functions
function results() {
  //Inputs
  let in1 = document.getElementById("in1").value;
  let in2 = document.getElementById("in2").value;
  let in3 = document.getElementById("in3").value;
  let in4 = document.getElementById("in4").value;
  let in5 = document.getElementById("in5").value;

  //To Lowercase Case
  in1 = in1.toLowerCase();
  in2 = in2.toLowerCase();
  in3 = in3.toLowerCase();
  in4 = in4.toLowerCase();
  in5 = in5.toLowerCase();

  /*Number of Correct*/
  let correct = 0;
  /*Number of Correct*/
  let incorrect = 0;

  //Question 1
  /*Multiple Answer*/
  if (
    in1 == "canada" ||
    in1 == "canadians" ||
    in1 == "canadian" ||
    in1 == "canada country" ||
    in1 == "country canada" ||
    in1 == "canadian country" ||
    in1 == "country canadian" ||
    in1 == "canadas"
  ) {
    /*Update Number of Correct*/
    correct++;
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("input1").innerHTML = " 'Correct!' ";
    document.getElementById("input1").style.color = "green";
  } else {
    /*Update Number of Incorrect*/
    incorrect++;
    document.getElementById("output2").innerHTML = incorrect;
    document.getElementById("input1").innerHTML = "'Come On!' ";
    document.getElementById("input1").style.color = "red";
  }

  //Question 2
  /*Multiple Answer*/
  if (in2 == "cardinal" || in2 == "cardinal piece") {
    /*Update Number of Correct*/
    correct++;
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("input2").innerHTML = " 'You're Smart!' ";
    document.getElementById("input2").style.color = "green";
  } else {
    /*Update Number of Incorrect*/
    incorrect++;
    document.getElementById("output2").innerHTML = incorrect;
    document.getElementById("input2").innerHTML = "'Almost!' ";
    document.getElementById("input2").style.color = "red";
  }
  //Question 3
  /*Entry*/
  if (in3 == 10) {
    /*Update Number of Correct*/
    correct++;
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("input3").innerHTML = " 'Excellent!' ";
    document.getElementById("input3").style.color = "green";
  } else {
    /*Update Number of Incorrect*/
    incorrect++;
    document.getElementById("output2").innerHTML = incorrect;
    document.getElementById("input3").innerHTML = "'Try Harder!' ";
    document.getElementById("input3").style.color = "red";
  }

  //Question 4
  /*Multiple Answer*/
  if (
    in4 == "justin trudeau" ||
    in4 == "prime minister trudeau" ||
    in4 == "prime minister justin trudeau" ||
    in4 == "mr.trudeau" ||
    in4 == "mr trudeau" ||
    in4 == "president trudeau" ||
    in4 == "president justin trudeau" ||
    in4 == "justin" ||
    in4 == "trudeau"
  ) {
    /*Update Number of Correct*/
    correct++;
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("input4").innerHTML = " 'Nice!' ";
    document.getElementById("input4").style.color = "green";
  } else {
    /*Update Number of Incorrect*/
    incorrect++;
    document.getElementById("output2").innerHTML = incorrect;
    document.getElementById("input4").innerHTML = "'So Close!' ";
    document.getElementById("input4").style.color = "red";
  }

  //Question 5
  /*Multiple Answer*/
  if (
    in5 == "justin bieber" ||
    in5 == "bieber" ||
    in5 == "justin" ||
    in5 == "mr.bieber" ||
    in5 == "mr bieber" ||
    in5 == "e"
  ) {
    /*Update Number of Correct*/
    correct++;
    document.getElementById("output1").innerHTML = correct;
    document.getElementById("input5").innerHTML = " 'Good Job!' ";
    document.getElementById("input5").style.color = "green";
  } else {
    /*Update Number of Incorrect*/
    incorrect++;
    document.getElementById("output2").innerHTML = incorrect;
    document.getElementById("input5").innerHTML =
      "'You Can Do Better Next Time!' ";
    document.getElementById("input5").style.color = "red";
  }

  /*Show Results*/
  let resultsum = (correct / 5) * 100;

  /*Final*/
  if (resultsum >= 80) {
    /*Show If Passed*/
    document.body.style.backgroundColor = "green";
    document.getElementById("show").innerHTML = "Nice Job! You Passed!";
    document.getElementById("show").style.fontSize = "20px";
    document.getElementById("show").style.color = "green";
  } else if (resultsum <= 80) {
    /*Show If Failed*/
    document.getElementById("show").innerHTML = " 'Better Luck Next Time! '";
    document.getElementById("show").style.fontSize = "20px";
    document.getElementById("show").style.color = "red";
    document.body.style.backgroundColor = "red";
  }

  //Outputs
  document.getElementById("output1").innerHTML = correct;
  document.getElementById("output1").style.color = "blue";
  document.getElementById("output2").innerHTML = resultsum;
  document.getElementById("output2").style.color = "blue";
  document.getElementById("percent").style.color = "red";
}
