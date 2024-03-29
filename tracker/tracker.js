function activeContent() {
  var currentUser = localStorage.getItem('name');

  if (currentUser) {
    $('.trackerInput').toggleClass('active');
  } else {
    $('.nameInput').toggleClass('active');
  }
}
activeContent()

var userName = $('.userName');
var submit0 = $('.submit0');
var welcomeCard = $('.welcomeCard');

var todayTrackerContainer = $('.todayTrackerContainer');
var submit = $('.submitBtn');
var logOutBtn = $('.resetName');
console.log(logOut);

submit0.on("click", welcomeName);
submit.on("click", createNewContainer);
$('.todayTrackerContainer').on("click", ".delete-btn", deleteItem);
logOutBtn.on("click", logOut);

// prints out welcome, (name) after user presses submit0 button
function welcomeName() {
  var userName = $('.userName').val();

  storeName(userName);
  appendWelcomeCard(userName);
  removeNameInput();
  addTrackerInput();
  addPastLogs();
  clearInputs0();
}

function addPastLogs() {
  $('.pastLogs').addClass('active');
}

function removePastLogs() {
  $('.pastLogs').removeClass('active');
}

function removeNameInput(){
  // delete nameInput div
  $('.nameInput').removeClass('active');
  console.log(`1`);
}

function addNameInput(){
  // delete nameInput div
  $('.nameInput').addClass('active');
  console.log(`2`);
}

function removeTrackerInput(){
  // delete trackerInput div
  $('.trackerInput').removeClass('active');
  console.log(`3`);
}

function addTrackerInput(){
  // delete trackerInput div
  $('.trackerInput').addClass('active');
  console.log(`4`);
}

function logOut(){
  // clear localStorage
  welcomeCard.text(``);

  localStorage.clear();
  removeTrackerInput();
  addNameInput();
  removePastLogs();

  // removeWelcomeText();
  console.log(`5`);
}

function removeWelcomeText(){
  event.target.parentNode.remove();
}

function storeName(userName) {
  localStorage.clear();
  localStorage.setItem('name', userName);
}

function appendWelcomeCard(userName) {
  var userInputName = localStorage.getItem('name');
  welcomeCard.text(`Welcome, ${userInputName}!`);

  console.log('user submitted name');
}



function clearInputs0(event){
  $('.userName').val("");
}

// if submit pressed again, it'll just .text the current text


// prints out the info put into the tracker on a log below
function createNewContainer() {
  var newOrg = $('.organization').val();
  var newDate = $('.date').val();
  var newHours = $('.hours').val();
  var newContactInfo = $('.contactInfo').val();
  var newContactInfo2 = $('.contactInfo2').val();
  var newContactInfo3 = $('.contactInfo3').val();
  var newReflection = $('.reflection').val();

  var newLog = {newOrg: newOrg,
                newDate: newDate,
                newHours: newHours,
                newContactInfo: newContactInfo,
                newContactInfo2: newContactInfo2,
                newContactInfo3: newContactInfo3,
                newReflection: newReflection};

  // supposed to set item, but i don't know how to set a continuous list and for it to pull it up after reloading
  // localStorage.setItem('organization', JSON.stringify(newOrg));
  // localStorage.setItem('date', newDate);
  // localStorage.setItem('hours', newHours);
  // localStorage.setItem('contactInfo', newContactInfo);
  // localStorage.setItem('contactInfo2', newContactInfo2);
  // localStorage.setItem('contactInfo3', newContactInfo3);
  // localStorage.setItem('reflection', newReflection);

  appendNewLog(newLog);
  clearInputs();
}

function appendNewLog(newLog){
  todayTrackerContainer.append(`
                                <div class = "new-log-card">
                                  <h4 class = "orgName-card"> Organization: </h4> <p> ${newLog.newOrg} </p>
                                  <h4 class = "date-card"> Date: </h4> <p> ${newLog.newDate} </p>
                                  <h4 class = "hour-card"> Amount of Hours: </h4> <p> ${newLog.newHours} </p>
                                  <h4 class = "contact-card"> Point of Contact: </h4>
                                  <h4 class = "name-card"> Name: </h4> <p> ${newLog.newContactInfo} </p>
                                  <h4 class = "email-card"> Email: </h4> <p> ${newLog.newContactInfo2} </p>
                                  <h4 class = "number-card"> Phone Number: </h4> <p> ${newLog.newContactInfo3} </p>
                                  <h4 class = "reflection-card"> Reflection: </h4> <p>${newLog.newReflection}</p>
                                  <button class="delete-btn">Delete</button>
                                </div>
                              `);
}

function deleteItem(event){
  event.target.parentNode.remove();
}

// clears the inputs on the tracker that the user input
function clearInputs(){
  $('.organization').val("");
  $('.date').val("");
  $('.contactInfo').val("");
  $('.contactInfo2').val("");
  $('.contactInfo3').val("");
  $('.reflection').val("");
}
