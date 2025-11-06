const cards = [
  { src: "../img/cat.jpg", answer: "cat", hint: "pet" },
  { src: "https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png", answer: "tree", hint: "big plant" },
  { src: "https://www.quantamagazine.org/wp-content/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg", answer: "sun", hint: "star" },
  { src: "https://cdn.shopify.com/s/files/1/1588/9573/files/102867__90150.jpg?v=1697586108", answer: "brush", hint: "you use it on your hair" }
];
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const img = document.getElementById("img");
const answerBtn = document.getElementById("answerBtn");
const hintBtn = document.getElementById("hintBtn");
const score = document.getElementById("score");
const reset = document.getElementById("reset");

let index = 0;
let scoreNum = 0;

function checkAnswer(){
    if(answer.value != cards[index].answer){
         message.classList.remove("hidden");
         message.innerHTML = "";
         message.innerHTML = "Wrong Answer"
         answer.value = ''
         console.log("Wrong Answer" ,index)
    }else if(answer.value == cards[index].answer){
        if(index == cards.length-1){
         scoreNum += 10;
         img.classList.remove("blur-lg")
         message.classList.remove("hidden");
         message.innerHTML = "";
         message.innerHTML = "You win"
         score.innerHTML = '';
         score.innerHTML = `Score: ${scoreNum}`
         answer.value = ''
          setTimeout(()=>{
         index = 0;
         scoreNum = 0;
         score.innerHTML = `Score: ${scoreNum}`
         img.classList.add("blur-lg")
         img.src = cards[index].src
         message.classList.remove("hidden");
         message.innerHTML = "";
         console.log(index)
          },1000)
         return
        }
         index = index + 1;
         img.classList.remove("blur-lg")
         scoreNum += 10;
         message.classList.remove("hidden")
         message.innerHTML = "";
         message.innerHTML = "right Answer";
         score.innerHTML = '';
         score.innerHTML = `Score: ${scoreNum}`
         setTimeout(()=>{
         img.classList.add("blur-lg")
         img.src = cards[index].src
         message.classList.add("hidden");
         answer.value = ''
         console.log("Right Answer" ,index)
         },2000)

    }
    

}
function Hint(){
    message.classList.remove("hidden");
    message.innerHTML = '';
    message.innerHTML = `${cards[index].hint}`
    return
}