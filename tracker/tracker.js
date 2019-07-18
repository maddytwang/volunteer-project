var userName = $('.userName');
var submit0 = $('.submit0');
var welcomeCard = $('.welcomeCard');

var todayTrackerContainer = $('.todayTrackerContainer');
var submit = $('.submitBtn');

submit0.on("click", welcomeName);
submit.on("click", createNewContainer);
$('.todayTrackerContainer').on("click", ".delete-btn", deleteItem);
$('.welcomeCard').on("click", ".resetName", deleteItem);

// prints out welcome, (name) after user presses submit0 button
function welcomeName() {
  var userName = $('.userName').val();

  appendWelcomeCard(userName);
  storeName(userName);
  clearInputs0();
}

function appendWelcomeCard(userName) {
  welcomeCard.append(`
                      <p class = "welcomeUser"> Welcome, ${userName}!
                      <button class = "resetName">Reset</button>
                      `);

  console.log('user submitted name');
}

function storeName(userName) {
  userName.preventDefault();
  var name = $('.userName').val();
  localStorage.clear();
  localStorage.setItem('name', name);
}

function clearInputs0(event){
  $('.userName').val("");
}



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
