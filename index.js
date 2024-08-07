//loading page 
//slider makes images bigger


const questions=[   {
    'ques': "Which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JS",
    'd': "Node",
    'correct': "a"
},
{
    'ques': "Which of the following is used for styling web pages?",
    'a': "HTML",
    'b': "CSS",
    'c': "Python",
    'd': "Java",
    'correct': "b"
},
{
    'ques': "Which language is used for web development?",
    'a': "JavaScript",
    'b': "Python",
    'c': "C++",
    'd': "All of the above",
    'correct': "d"
},
{
    'ques': "Which of the following is a JavaScript library?",
    'a': "React",
    'b': "Django",
    'c': "Flask",
    'd': "Laravel",
    'correct': "a"
},
{
    'ques': "Which of the following is not a programming language?",
    'a': "HTML",
    'b': "Python",
    'c': "C#",
    'd': "Java",
    'correct': "a"
}
];

let index=0;
const ques=document.getElementsByClassName('ques')
const quesbox=document.getElementById('quesbox');
const optionbox=document.querySelectorAll('.options')
let total=questions.length;
let wrong=0,right=0;
const loadup=()=>{
if(index==total){ 
   endquiz();
}
reset()
const data=questions[index];
console.log(data);
quesbox.innerText=`${index+1}) ${data.ques}`;
optionbox[0].nextElementSibling.innerText=data.a
optionbox[1].nextElementSibling.innerText=data.b
optionbox[2].nextElementSibling.innerText=data.c
optionbox[3].nextElementSibling.innerText=data.d
}

const reset=()=>{
    optionbox.forEach((e)=>{
e.checked=false;
    })
}

const endquiz=()=>{
    document.getElementsByClassName('quiz')[0].innerHTML=`<h3 style="color:blue; margin:0 auto; "> thank you for giving quiz
    ${right}/${total} is correct</h3>`;
}

const submitquiz=()=>{
    const data=questions[index];
    let ans=getanswer();
    console.log(ans);
    
    if(ans==data.correct){
        right++;

    }
    else{
    const ans=document.createElement('p');
    ans.innerHTML=` wrong right ans was ${data.correct}`
ques[0].append(ans);
        wrong++;
    }
    index++;
   
    
    loadup();
    return;
}
const getanswer=()=>{
    let ans;
   
    optionbox.forEach((e)=>{
if(e.checked){
    ans=e.value;
    console.log(e.val);
    
}
    })
return ans;
}


loadup()
// const btn=document.getElementById('btn')
// btn.addEventListener("click",submitquiz)