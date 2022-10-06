const corectAnswers = ['A','C','B','C','C'];
const form = document.querySelector('form');
const deg = document.querySelector('header p');
const mydeg = document.querySelector('header p span');
const clock = document.querySelector('header .timer span');
const labels = document.querySelectorAll('label')

let t = 60;
const sec =setInterval(()=>{
    clock.textContent = t;
    if(t == 0){
        clearInterval(sec);


    }else{

        t--;
    }
},1000)

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        let score = 0;
        const userAnswer = [form.one.value, form.two.value, form.three.value, form.four.value, form.five.value];
        // const user = [form.one, form.two, form.three, form.four, form.five]
        //check answers
        userAnswer.forEach((answer , index) => {
            if(answer === corectAnswers[index]){
            score+= 20;
            function huraay(){
                mydeg.style.color = "green";
            }
            if(score == 100){
                setTimeout(huraay, 3000);
                
            }
        }
    })
    //show result
    deg.classList.remove('hide');
    scrollTo(0,0);
    let i = 0;
    const timer = setInterval(() =>{
        deg.querySelector('span').textContent = i;
        if(i === score){
            clearInterval(timer)
        }
        else{
            i++
        }
    },30)
    labels.forEach(label => {
        label.classList.remove('basic');
    })
});