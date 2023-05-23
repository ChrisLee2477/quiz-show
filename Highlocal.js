var initials = document.getElementById("initials")
var saveButton = document.getElementById("save")

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    testResult=initials.value
    localStorage.setItem("name", testResult)
    localStorage.getItem("score" , score)

    results = {
        name: testResult,
        score: score
    }
    
    
})





