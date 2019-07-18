var button = $('.tips-btn');
var button2 = $(`.latest-btn`);
var button3 = $(`.here-btn`);
var button4 = $(`.abroad-btn`);
var button5 = $(`.future-btn`);

var tipsSection = $(`.tipsresources`);
var latestSection = $(`.latestresources`);
var hereSection = $(`.hereresources`);
var abroadSection = $(`.abroadresources`);
var futureSection = $(`.futureresources`);


 button.on("click", selectTips);

function selectTips() {
     // console.log("you clicked the button!");
     tipsSection.toggleClass('tipsresources');
   }

button2.on("click", selectLatest);

function selectLatest(){
    // console.log("you clicked the button!");
    latestSection.toggleClass('latestresources');
}

button3.on("click", selectHere);

function selectHere(){
    // console.log("you clicked the button!");
    hereSection.toggleClass('hereresources');
}

button4.on("click", selectAbroad);

function selectAbroad(){
    // console.log("you clicked the button!");
    abroadSection.toggleClass('abroadresources');
}

button5.on("click", selectFuture);

function selectFuture(){
    // console.log("you clicked the button!");
    futureSection.toggleClass('futureresources');
}
