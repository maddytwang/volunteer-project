var userName = $('.userName');
var submit0 = $('.submit0');

var todayTrackerContainer = $('.todayTrackerContainer');
var submit = $('.submitBtn');

submit0.on("click", welcomeName);
submit.on("click", createNewContainer);
$('.todayTrackerContainer').on("click", ".delete-btn", deleteItem);

function welcomeName() {
  // needs functioning
}

function createNewContainer() {
  var newOrg = $('.organization').val();
  var newDate = $('.date').val();
  var newContactInfo = $('.contactInfo').val();
  var newContactInfo2 = $('.contactInfo2').val();
  var newContactInfo3 = $('.contactInfo3').val();
  var newReflection = $('.reflection').val();

  var newLog = {newOrg: newOrg,
                newDate: newDate,
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

function clearInputs(){
  $('.organization').val("");
  $('.date').val("");
  $('.contactInfo').val("");
  $('.contactInfo2').val("");
  $('.contactInfo3').val("");
  $('.reflection').val("");
}
