document.addEventListener('DOMContentLoaded',initApp);

function initApp(){
    sessionStorage.setItem("highestScore",0);
    document.getElementById('play').addEventListener("click",(event)=>{
        event.preventDefault();
        let randomNum = Math.floor(Math.random()*200);
        let randDisplay = document.getElementsByClassName('pageNumber')[0];
        randDisplay.textContent = randomNum;
        let runsDisplay = document.getElementsByClassName('runs')[0];
        let wktsDisplay = document.getElementsByClassName('wkts')[0];
        if(randomNum % 10 !== 0){
            runsDisplay.textContent = parseInt(runsDisplay.textContent) + randomNum % 10;
        }
        else{
            wktsDisplay.textContent = parseInt(wktsDisplay.textContent) + 1;
        }
        if(parseInt(wktsDisplay.textContent) === 3){
            resetContent();
        }
    })
}
document.getElementsByClassName('reset')[0].addEventListener('click',(event)=>{
    let imgDisplay = document.getElementsByTagName('img')[1];
    imgDisplay.classList.toggle('hidden');

    /*let imgDisplay1 = document.getElementsByTagName('img')[2];
    imgDisplay1.classList.toggle('hidden');*/

    let finalScoreDisplay = document.getElementsByClassName('page')[0];
    finalScoreDisplay.textContent = "Page Number";
    let runsDisplay = document.getElementsByClassName('runs')[0];
    runsDisplay.textContent = 0;
    let wktsDisplay = document.getElementsByClassName('wkts')[0];
    wktsDisplay.textContent = 0;
})
function resetContent(){
    
    let finalScoreDisplay = document.getElementsByClassName('page')[0];
    let runsDisplay = document.getElementsByClassName('runs')[0];
    finalScoreDisplay.textContent = "Final Score :"+runsDisplay.textContent;

    let highestScoreDisplay = document.getElementsByClassName('hs')[0];
    console.log(parseInt(runsDisplay.textContent));
    console.log(parseInt(sessionStorage.getItem("highestScore")));

    if(parseInt(runsDisplay.textContent) > parseInt(sessionStorage.getItem("highestScore"))){
        sessionStorage.setItem("highestScore",parseInt(runsDisplay.textContent));
        highestScoreDisplay.textContent = sessionStorage.getItem("highestScore");
        finalScoreDisplay.textContent += "   Great!! New High Score Unlocked!!"
        let imgDisplay = document.getElementsByTagName('img')[1];
        imgDisplay.classList.toggle('hidden');
    }
    else{
        finalScoreDisplay.textContent += "   Not the highest scrore, keep trying :)";
        let imgDisplay1 = document.getElementsByTagName('img')[2];
        setTimeout(()=>{imgDisplay1.classList.toggle('hidden');},3000);
        setTimeout(()=>{imgDisplay1.classList.toggle('hidden');},3000);

    }
    
    

    runsDisplay.textContent = 0;
    let wktsDisplay = document.getElementsByClassName('wkts')[0];
    wktsDisplay.textContent = 0;
    
}