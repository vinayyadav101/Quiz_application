

 let display_quation = document.getElementById("quation");

 let currentQuation = 1;
 let score = 0;

let checkIndex = 0;



let quations = [
    {
        quation: "What is the correct way to declare a variable in JavaScript?",

        answer : [
            { text: "let myVar = 10;", correct : false},
            { text:"var myVar = 10;", correct : false},
            { text: "const myVar = 10;", correct : false},
            { text: "all of the above" ,correct : true}
        ]
    },
    {
        quation: "Which of the following is a falsy value in JavaScript?",

        answer: [
            { text: "0", correct : false},
            { text:"false", correct : false},
            { text: "undefined", correct : false},
            { text: "all of the above" ,correct : true}
        ]
    },
    {
        quation:"Which operator is used for equality without type coercion in JavaScript?",
        answer: [
            {text:"===", correct:true},
            {text:"==", correct:false},
            {text:"=", correct:false},
            {text:"!==", correct:false}
        ]
    },
    {
        quation:"What is the correct way to comment a single line in JavaScript?",
        answer: [
            {text:"// This is a comment", correct:true},
            {text:"/* This is a comment */", correct:false},
            {text:"<!-- This is a comment -->", correct:false},
            {text:"% This is a comment %", correct:false}
        ]
    },
    {
        quation:"What is the purpose of the setTimeout() function in JavaScript?",
        answer: [
            {text:"To set the text of an element", correct:false},
            {text:"To execute a function after a specified delay", correct:true},
            {text:"To change the color of an element", correct:false},
            {text:"To create a new object", correct:false}
        ]
    },
    {
        quation:"Which of the following is not a valid JavaScript data type?",
        answer: [
            {text:"String", correct:false},
            {text:"Object", correct:false},
            {text:"Function", correct:false},
            {text:"Character", correct:true}
        ]
    },
]



function Start_quiz() {

    document.getElementById("start").classList.add("display")
    document.getElementById("inner_container").classList.remove("display")
    
    ShowQuation(quations);

}


function ShowQuation(quation) {



    let quation_answer = quation.at(checkIndex)

    let options = quation_answer.answer;



    document.getElementById("quation").innerText = quation_answer.quation;
    
    
    document.getElementById("option1").innerText = options.at(0).text
    document.getElementById("option2").innerText = options.at(1).text
    document.getElementById("option3").innerText = options.at(2).text
    document.getElementById("option4").innerText = options.at(3).text


    if (currentQuation < quation.length) {
        document.getElementById("currentQuation").innerText = currentQuation 
        document.getElementById("total_quation").innerText = `/${quation.length}`
        
    } else {
        document.getElementById("currentQuation").innerText = currentQuation 
        document.getElementById("next").classList.add("display")
        document.getElementById("button").classList.remove("display")
    }
    
}

function chackAnswer(index , quation) {

    let indexArray =[1,2,3,4]

     if (quation.at(checkIndex).answer.at(index).correct) {
        document.getElementById(`option${index + 1}`).classList.add("green");
        
        LockOption(indexArray , index)

        score++

    } else {

        document.getElementById(`option${index + 1}`).classList.add("red");

        LockOption(indexArray , index)
        
    }

}

function LockOption(indexArray , index) {
    if (indexArray.includes(index + 1)) {

        let array = indexArray.filter(value => value !== index + 1)

        document.getElementById(`option${array.at(0)}`).attributes.removeNamedItem("onclick");
        document.getElementById(`option${array.at(1)}`).attributes.removeNamedItem("onclick");
        document.getElementById(`option${array.at(2)}`).attributes.removeNamedItem("onclick");
    }
}

function NextQuation() {
    document.getElementById("score").innerText = score

        document.getElementById(`option1`).setAttribute("onclick" , "chackAnswer(0 , quations)");
        document.getElementById(`option2`).setAttribute("onclick" , "chackAnswer(1 , quations)");
        document.getElementById(`option3`).setAttribute("onclick" , "chackAnswer(2 , quations)");
        document.getElementById(`option4`).setAttribute("onclick" , "chackAnswer(3 , quations)");

        for (let index = 1; index <= 4; index++) {
            
            if (document.getElementById(`option${index}`).classList.contains("green") ||document.getElementById(`option${index}`).classList.contains("red") ) {
                document.getElementById(`option${index}`).classList.remove("green" ,"red")
            }
            
        }
        checkIndex++
        currentQuation++
    ShowQuation(quations)
    
}

function submitQuiz() {
    document.getElementById("inner_container").classList.add("display");
    document.getElementById("result").classList.remove("display")

    if (score > 3) {

        document.getElementById("result_msg").innerText = "congratulation"
        document.getElementById("total_score").innerText = score
        
    } else {

        document.getElementById("result_msg").innerText = "Try next time"
        
        document.getElementById("total_score").innerText = score
    }
    
}

function restart_quiz() {
    location.reload()
    
}

