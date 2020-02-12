
class Activity {
  constructor(titleInput, minInput, secInput, category) {
    this.title = titleInput;
    this.minutes = minInput;
    this.seconds = secInput;
    this.category = category;
  }
  createCard(buttonArray) {
      for (var i = 0; i < buttonArray.length; i++) {
        if (buttonArray[i].classList.contains('active')) {
          var activeBorder = buttonArray[i].id;
        }
      }
    noActivitiesNotice.remove();
    var loggedActivity = document.createElement('div');
    loggedActivity.classList.add('activity-card');
    loggedActivity.classList.add('shadow');
    loggedActivity.classList.add('card-text');
    loggedActivity.innerHTML =
    ` <div class="card-border ${activeBorder}">
        <p class="chosen-category chosen">${this.category}</p>
        <div class="chosen-time">
          <p class="chosen-min">${this.minutes} MIN
          </p>
          <p class="chosen-sec"> ${this.seconds} SECONDS
          </p>
        </div>
      </div>
      <p class="chosen-title chosen">${this.title}</p>`;
    return loggedActivity;
  }
  // changeBorderColor(buttonArray) {
  //   for (var i = 0; i < buttonArray.length; i++) {
  //     if (buttonArray[i].classList.contains('active')) {
  //       var activeBorder = buttonArray[i].id;
  //     }
  //   }
  // }


};
