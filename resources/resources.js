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
     tipsSection.css("display", "block");
     latestSection.css("display", "none");
     hereSection.css("display", "none");
     abroadSection.css("display", "none");
     futureSection.css("display", "none");

     tipsSection.toggleClass('tipsresources');
   }

button2.on("click", selectLatest);

function selectLatest(){
    // console.log("you clicked the button!");
    tipsSection.css("display", "none");
    latestSection.css("display", "block");
    hereSection.css("display", "none");
    abroadSection.css("display", "none");
    futureSection.css("display", "none");
    latestSection.toggleClass('latestresources');
}

button3.on("click", selectHere);

function selectHere(){
  tipsSection.css("display", "none");
  latestSection.css("display", "none");
  hereSection.css("display", "block");
  abroadSection.css("display", "none");
  futureSection.css("display", "none");
    // console.log("you clicked the button!");
    hereSection.toggleClass('hereresources');
}

button4.on("click", selectAbroad);

function selectAbroad(){
  tipsSection.css("display", "none");
  latestSection.css("display", "none");
  hereSection.css("display", "none");
  abroadSection.css("display", "block");
  futureSection.css("display", "none");
    // console.log("you clicked the button!");
    abroadSection.toggleClass('abroadresources');
}

button5.on("click", selectFuture);

function selectFuture(){
  tipsSection.css("display", "none");
  latestSection.css("display", "none");
  hereSection.css("display", "none");
  abroadSection.css("display", "none");
  futureSection.css("display", "block");
    // console.log("you clicked the button!");
    futureSection.toggleClass('futureresources');
}
