$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger, .header__navbar, .header__navbar_active').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

function quiz() {
    let name = prompt("What is your name?");
    let country = prompt(
      "Which country has the largest animation culture in the world?"
    );
    if (country === "japan") {
      alert("Yes, " + name + "! That's right!");
    } else {
      alert("No, " + name + "! It's Japan)");
    }
    let email = prompt(
      "Leave your email if you like my site or for additional quiz))"
    );
    alert("Great! I'll text you soon))");
  }

  let button = document.querySelector(".main-quiz__btn");
  button.addEventListener("click", quiz);

