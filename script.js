// timer to develop

const pomodoroTab=document.getElementById("pomodoro")
const shortbreakTab=document.getElementById("shortbreak")
const longbreakTab=document.getElementById("longbreak")


//console.log(shortbreakTab);

//click listner 
pomodoroTab.addEventListener("click",function()
{
   // console.log("pomodoro clicked");
    pomodoroTab.classList.add("active");
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.remove("active");
    

    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.add("active");

});


shortbreakTab.addEventListener("click",function()
{
    shortbreakTab.classList.add("active");
    longbreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");

    shortbreakTabContent.classList.add("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.remove("active");
}
);

longbreakTab.addEventListener("click",function()
{
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.add("active");
    pomodoroTab.classList.remove("active"); 

    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.add("active");
    pomodoroTabContent.classList.remove("active"); 
}
);
const pomodoroTabContent= document.getElementById("pomodoro-content")

const shortbreakTabContent= document.getElementById("shortbreak-content")
const longbreakTabContent= document.getElementById("longbreak-content")

//timer to develop
/*setInterval(function(){
console.log(new Date().toISOString())
},1000)*/

function timer(seconds)
    {const now=Date.now();
    const then=now+(seconds*1000);
    const timerinterval=setInterval(function(){
    const secondsLeft=Math.round((then-Date.now())/1000);
//console.log(secondsLeft);
    displayTime(secondsLeft,pomodoroTime);


    if (secondsLeft<1)
    {
    clearInterval(timerinterval);
    return;
    }
    },1000);

}
function displayTime(seconds,element)
{
    const minute=Math.floor( seconds/60);
    const second=seconds%60;
    console.log({minute,second});
    element.innerText=minute+":"+second;
}
   
   const pomodoroTime=document.getElementById("pomodoroTime");
    const pomodoroButton=document.getElementById("pomodoroButton");
    pomodoroButton.addEventListener("click",function(){
       const pomodoroTotalTime=1500;
        timer(pomodoroTotalTime);

        });

        const shortbreakTime=document.getElementById("shortbreakTime");
        const shortbreakButton=document.getElementById("shortbreakButton");
        shortbreakButton.addEventListener("click",function(){
           const shortbreakTotalTime=300;
            timer(shortbreakTotalTime);
    
            });
    