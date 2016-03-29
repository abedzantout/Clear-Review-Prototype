window.onload = function () {

  document.getElementById("addCourseBtn").onclick = function () {
    var counter = document.getElementsByClassName("demo-card-square mdl-card mdl-shadow--2dp myCourses").length;
    var courses = document.getElementById("innerMyCourses");
    var span = document.createElement("span");
    span.className = "tab";
    var mainCard = document.createElement("div");
    mainCard.className = "demo-card-square mdl-card mdl-shadow--2dp myCourses";
    var cardTitle = document.createElement("div");
    cardTitle.className = "mdl-card__title mdl-card--expand";
    var header = document.createElement("h2");
    header.className = "mdl-card__title-text";
    header.innerHTML = "New Course";
    var cardDescription = document.createElement("div");
    cardDescription.className = "mdl-card__supporting-text";
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "mdl-card__actions mdl-card--border";
    var link = document.createElement("a");
    link.className = "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect";
    link.innerHTML = "View";
    var rLink = document.createElement("a");
    rLink.className = "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect";
    rLink.innerHTML = "Rate";
    rLink.href = "form/ceia_form.html";

    if (counter < 6) {


      courses.appendChild(span);
      courses.appendChild(mainCard);
      mainCard.appendChild(cardTitle);
      cardTitle.appendChild(header);
      mainCard.appendChild(cardDescription);
      mainCard.appendChild(buttonDiv);
      buttonDiv.appendChild(link);
      buttonDiv.appendChild(rLink);
      rLink.style.float = "right";

    }
    else {

      alert("you exceeded the number of credits you are allowed to register");
    }
  };


};
