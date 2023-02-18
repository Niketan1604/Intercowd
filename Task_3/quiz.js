var count = 0;
clicks();

question_box.children[count].style.visibility = 'visible';
prev.addEventListener('click', prevq);
next.addEventListener('click', nextq);
submit.addEventListener('click',submitq);
document.addEventListener('click', clicks);

function prevq() {
    question_box.children[count].style.visibility = 'hidden';
    count--;
    question_box.children[count].style.visibility = 'visible';
}


function nextq() {
    question_box.children[count].style.visibility = 'hidden';
    count++;
    question_box.children[count].style.visibility = 'visible';
}

function clicks() {
    if (count >= 9) {
        next.style.visibility = 'hidden'
        submit.style.visibility = 'visible'
    }
    else {
        next.style.visibility = 'visible'
        submit.style.visibility = 'hidden'
    }
    if (count == 0) {
        prev.style.visibility = 'hidden'
    }
    else {
        prev.style.visibility = 'visible'
    }
}

function submitq(){
    let score=0;
    let noanswer=0;
    for(let i=1; i<=10; i++){
        let v = '';
        try{
            v = document.querySelector("input[type='radio'][name='q"+i+"']:checked").value;
        }
        catch(Exception){
            noanswer=1;
            break;
        }
        
        if(v=='y') score++;
    }
    if(noanswer==1) alert('Answer all the questions and then submit');
    else{
        btns.style.visibility="hidden";
        question_box.style.visibility="hidden";
        sidenavbar.style.visibility="hidden";

        document.body.children[1].innerHTML = 
        `        <div style="margin-top:20vh; margin-left:40vw">
                    <h1 style="letter-spacing:2px; word-spacing:10px; font-family:'Segoe UI'">Your&nbsp;Score&nbsp;is&nbsp;:&nbsp;`+score+`/10 </h1>
                 </div> `  
    }
    
}

function jumpto(i){
    question_box.children[count].style.visibility = 'hidden';
    count=i-1;
    question_box.children[count].style.visibility = 'visible';
}
