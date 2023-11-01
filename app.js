const scores = document.querySelectorAll("input");
const grade = document.querySelectorAll(".subject-grade");
const totalScore = document.querySelector(".total-score");
const averageScore = document.querySelector(".average-score");
const remark = document.querySelector(".remark");
const resultBtn = document.querySelector(".submit");
const resetBtn = document.querySelector(".reset");
const box = document.querySelectorAll(".grade");

resultBtn.addEventListener("click", submit);

function submit(){

    let result = 0;
    let average = 0;
    let num = Array.from(scores);


    for(var i = 0; i < num.length; i++){

        if(num[i].value > 100 || num[i].value < 0 || num[i].value === ""){
            num[i].value = 0;

        }else if(num[i].value >= 70){
            grade[i].innerHTML = "A";
            box[i].style.background = "rgba(136, 255, 132, 0.801)";
            result = result + parseInt(num[i].value);
            average = result/num.length;

        }else if(num[i].value > 59 && num[i].value < 70){
            grade[i].innerHTML = "B";
            box[i].style.background = "rgba(136, 255, 132, 0.801)";
            result = result + parseInt(num[i].value);
            average = result/num.length;

        }else 
            if(num[i].value >= 50 && num[i].value <= 59){
            grade[i].innerHTML = "C";
            box[i].style.background = "rgba(253, 255, 132, 0.801)";
            result = result + parseInt(num[i].value);
            average = result/num.length;

        }else if(num[i].value >= 45 && num[i].value <= 49){
            grade[i].innerHTML = "D";
            box[i].style.background = "rgba(253, 255, 132, 0.801)"
            result = result + parseInt(num[i].value);
            average = result/num.length;
             
        }else if(num[i].value >= 40 && num[i].value <= 44){
            grade[i].innerHTML = "E";
            box[i].style.background = "#ffa64bf8"
            result = result + parseInt(num[i].value);
            average = result/num.length;
             
        }else if(num[i].value >= 0 || num[i].value <=39){
            grade[i].innerHTML = "F";
            box[i].style.background = "rgba(255, 132, 132, 0.801)"
            result = result + parseInt(num[i].value);
            average = result/num.length;

        }else{
            return
        }
    }
    totalScore.innerHTML = result;
    averageScore.innerHTML = average;
    if (average > 50) {
        remark.innerHTML = "You Passed!!!";
    } else {
        remark.innerHTML = "You Failed!!!";
    }
}

resetBtn.addEventListener("click", reset);
function reset(){
  window.location.reload();
  return
}