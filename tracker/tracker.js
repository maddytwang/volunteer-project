<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <title></title>
  </head>
  <body>
    <!-- where the header goes// on every single page -->
        <div class="header-all">
        <h1 class="title-all">HELLO</h1>
        <div class="menu-all">
          <a class="home" href="">Home</a>
          <a class="about" href="">About</a>
          <a class="tracker" href="">Personal Tracker</a>
          <a class="resources" href="">Resources</a>
        </div>
        </div>


    <div class = "name-input">
      <input class = "userName" type = "text" placeholder = "name">
      <button class = "submit0">Submit<button>
    </div>


    <!-- user inputs their volunteer info here -->
    <div class = "trackerInput">
      <h3> Log Your Volunteer Experience! </h3>
      <h4>Organization</h4>
      <input class = "organization" type = "text" placeholder = "Organization">

      <h4>Date</h4>
      <input class = "date" type = "date">

      <h4>Amount of Hours</h4>
      <input class = "hours" type = "number">

      <h4>Point of Contact</h4>
      <input class = "contactInfo" type = "text" placeholder= "Name">
      <input class = "contactInfo2" type = "text" placeholder= "Email">
      <input class = "contactInfo3" type = "text" placeholder= "Phone Number">

      <h4>Reflection (Optional)</h4>
      <input class = "reflection" type = "text" placeholder = "What was your experience like?">

      <!-- ideally this question: <h4>How did you feel about your experience today? </h4>
    would be answered by the user clicking an emoji button and it'll somehow export that to
  the containers/past logs-->

      <button class = "submitBtn"> Submit </button>
    </div>


    <!-- user's today info appears below in another box -->
    <div class = "pastLogs">
      <div class = "todayTrackerContainer">
        <h3> Past Logs </h3>
        <button class="left-btn">&laquo; Previous</button>
        <input class = "pastLogDate" type = "date">
        <button class="right-btn">Next &raquo;</button>
        <!-- empty until user inputs something -->
      </div>
    </div>


<!--
    calendar import
    <script src="js/daypilot/daypilot-all.min.js" type="text/javascript"></script>

    event calendar import
    <script type="text/javascript">
      var dp = new DayPilot.Calendar("dp");
      dp.viewType = "Week";
      dp.init();
    </script>

    event calendar placeholder
    <div id="dp">
      empty for now until js
    </div> -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src = 'tracker.js'></script>
  </body>
</html>
