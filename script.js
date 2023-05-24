var timeEl = document.querySelector(".time");
var startQuizButt = document.querySelector(".startQuiz")
var questionBox = document.querySelector(".quizArea")
var ans1 = document.querySelector(".response1")
var ans2 = document.querySelector(".response2")
var ans3 = document.querySelector(".response3")
var ans4 = document.querySelector(".response4")
var p1 = document.createElement("p")
var body = document.querySelector("div")
var save = document.querySelector(".save")


var score = 0
var secondsLeft = 50;
var index = 0

questions =[{
    question: "What does js stand for in the file type",
    Ans4: "JavaScript",
    Ans1: "Java Sunday",
    Ans2: "Jimmy Staurt",
    Ans3: "Stuart Little",
    correctAns: "JavaScript"
}
,
{
    question: "What do you put right after the name of a function in JavaScript",
    Ans1: "{}",
    Ans2: ",",
    Ans3: "()",
    Ans4: "!!!!!",
    correctAns: "()"
}
,
{
    question: "Who is the playable character in the Zelda games",
    Ans1: "Zelda",
    Ans2: "Link",
    Ans3: "Tingle",
    Ans4: "Navi",
    correctAns: "Link"
}]

function questionCycle(){
        
        questionBox.innerHTML = Object.values(questions)[index].question
        ans1.textContent = Object.values(questions)[index].Ans1
        ans2.textContent = Object.values(questions)[index].Ans2
        ans3.textContent = Object.values(questions)[index].Ans3
        ans4.textContent = Object.values(questions)[index].Ans4
        
    }




function setTime(){
    var timerInterval = setInterval(function() {
        
        timeEl.textContent = secondsLeft
        console.log(secondsLeft)
        if(secondsLeft <= 0){
            clearInterval(timerInterval)
            //highscore()
            location.href="./highscore.html"
        }
        secondsLeft--;
    }, 1000)
}


function hadleButtonClick(event){

        if(event.target === ans1  && (ans1.textContent === Object.values(questions)[index].correctAns)){
            console.log("Button 1")
            var correctTrue = true;
        
        } else if((event.target === ans2) && (ans2.textContent === Object.values(questions)[index].correctAns)){
            console.log("button 2")
            var correctTrue = true;
        } else if((event.target === ans3)  && (ans3.textContent === Object.values(questions)[index].correctAns)){
            var correctTrue = true;
            console.log("button 3")
        } else if((event.target === ans4) && (ans4.textContent === Object.values(questions)[index].correctAns)){
            var correctTrue = true;
            console.log("button 4")
        }else{
            console.log("you are wrong")
            correctTrue = false;
        }
        
        console.log(Object.values(questions)[index].correctAns)

    if(correctTrue){
       document.body.appendChild(p1)
       p1.textContent = "You are correct"
       score = score + 100

    }else{
        document.body.appendChild(p1)
        p1.textContent = "You are wrong"
        secondsLeft = secondsLeft - 2
    }
        index = index + 1

        if(index >= questions.length){
           //highscore()
           location.href="./highscore.html"
        }else{
            questionCycle()
        }
        localStorage.setItem("score",score)
}

//function highscore (){
   // body.style.display ="none";
  //  timeEl.style.display = "none";
  //  p1.style.display= "none";
  //  var initails = document.createElement("INPUT");
  //  initails.setAttribute("type", "text");
  //  document.body.append(initails)
   // save.style.display = "block";
//}

//function scoreBoard(){
//    testResults = initails.values
//    localStorage.setItem("name" , testResults)
//}

    


function start(){
    setTime();
    startQuizButt.style.display = "none";
    ans1.style.display = "block";
    ans2.style.display = "block";
    ans3.style.display = "block";
    ans4.style.display = "block";
    questionBox.innerHTML = Object.values(questions)[index].question
    ans1.textContent = Object.values(questions)[index].Ans1
    ans2.textContent = Object.values(questions)[index].Ans2
    ans3.textContent = Object.values(questions)[index].Ans3
    ans4.textContent = Object.values(questions)[index].Ans4
}


ans1.addEventListener("click", hadleButtonClick)
ans2.addEventListener("click", hadleButtonClick)
ans3.addEventListener("click", hadleButtonClick)
ans4.addEventListener("click", hadleButtonClick)
startQuizButt.addEventListener("click", start)
//save.addEventListener("click",scoreBoard)
