var rgt = document.querySelector(".register");
var login = document.querySelector(".login-form");
var title = document.querySelector(".form-title");
var register = document.querySelector(".register-form");
var loginbtn = document.querySelector(".login-btn");
var registerbtn = document.querySelector(".register-btn");
var isLogin = true;
var linputs = document.querySelectorAll(".login-form input");
var rinputs = document.querySelectorAll(".register-form input");
var lmsg = document.querySelectorAll(".login-form .err-msg");
var rmsg = document.querySelectorAll(".register-form .err-msg");

const USERNAME = "admin";
const PASSWORD = "123456789";

rgt.addEventListener("click", function () {
  if (isLogin) {
    login.classList.add("d-none");
    register.classList.remove("d-none");
    rgt.innerText = "Sign in";
    title.innerText = "Register Form";
    linputs.forEach((item) => {
      if (!item.classList.contains("login-btn")) {
        item.value = "";
      }
    });
    lmsg.forEach((item) => {
      item.innerHTML = "";
    });
  } else {
    login.classList.remove("d-none");
    register.classList.add("d-none");
    rgt.innerText = "Sign up";
    title.innerText = "Login Form";
    rinputs.forEach((item) => {
      if (!item.classList.contains("register-btn")) {
        item.value = "";
      }
    });
    rmsg.forEach((item) => {
      item.innerHTML = "";
    });
  }
  isLogin = !isLogin;
});

loginbtn.addEventListener("click", function () {
  var inputs = document.querySelectorAll(".login-form input");
  var msg = document.querySelectorAll(".login-form .err-msg");
  var username = inputs[0];
  var password = inputs[1];
  if (password.value != "" && username.value != "") {
    if (username.value === USERNAME && password.value === PASSWORD) {
      msg[2].innerHTML = "";
      setTimeout(() => alert("Login success"), 200);
    } else {
      msg[2].innerHTML = "Invalid username or password";
    }
  } else {
    if (username.value == "") {
      msg[0].innerHTML = "username is empty";
    } else {
      msg[0].innerHTML = "";
    }
    if (password.value == "") {
      msg[1].innerHTML = "password is empty";
    } else {
      msg[1].innerHTML = "";
    }
  }
});

registerbtn.addEventListener("click", function () {
  var inputs = document.querySelectorAll(".register-form input");
  var msg = document.querySelectorAll(".register-form .err-msg");
  var username = inputs[0];
  var password = inputs[1];
  var repass = inputs[2];
  if (username.value != "" && password.value != "" && repass.value != "") {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.value !== repass.value) {
      msg[2].innerHTML = "password didn't match";
    } else {
      if (!password.value.match(regex)) {
        msg[1].innerHTML =
          "password must be at least 8 character, contain number and text";
      } else {
        msg[1].innerHTML = "";
        msg[2].innerHTML = "";
        msg[0].innerHTML = "";
        linputs.forEach((item) => {
          if (!item.classList.contains("login-btn")) {
            item.value = "";
          }
        });
        login.classList.remove("d-none");
        register.classList.add("d-none");
        rgt.innerText = "Sign up";
        title.innerText = "Login Form";
      }
    }
  } else {
    if (username.value == "") {
      msg[0].innerHTML = "username is empty";
    } else {
      msg[0].innerHTML = "";
    }
    if (password.value == "") {
      msg[1].innerHTML = "password is empty";
    } else {
      msg[1].innerHTML = "";
    }
  }
});
