let loginform = document.querySelector(".loginform");
let registerform = document.querySelector(".registerform");
let loginlink = document.querySelector(".loginlink");
let registerlink = document.querySelector(".registerlink");
let loginbtn = document.querySelector(".loginbtn");
let registerbtn = document.querySelector(".registerbtn");
let msgs = document.querySelectorAll(".msg");
let inps = document.querySelectorAll(".myinp");

let accounts = [
  {
    username: "admin",
    password: "admin@123",
  },
];

function clearMessage() {
  msgs.forEach(function (item) {
    item.innerText = "";
  });
}

function clearInput() {
  inps.forEach(function (item) {
    item.value = "";
    item.classList.remove("inperr");
  });
}

registerlink.addEventListener("click", function () {
  loginform.classList.add("d-none");
  registerform.classList.remove("d-none");
  loginlink.classList.remove("active");
  registerlink.classList.add("active");
  clearMessage();
  clearInput();
});

loginlink.addEventListener("click", function () {
  loginform.classList.remove("d-none");
  registerform.classList.add("d-none");
  loginlink.classList.add("active");
  registerlink.classList.remove("active");
  clearMessage();
  clearInput();
});

function checkAccount({ username, password }) {
  let filterAccount = accounts.filter(function (item) {
    return item.username == username && item.password == password;
  });
  return filterAccount.length > 0;
}

function checkAccountExist({ username, password }) {
  let filterAccount = accounts.filter(function (item) {
    return item.username == username;
  });
  return filterAccount.length > 0;
}

loginbtn.addEventListener("click", function () {
  let inputs = document.querySelectorAll(".loginform .myinp");
  let msgs = document.querySelectorAll(".loginform .msg");
  let username = inputs[0].value;
  let password = inputs[1].value;
  if (username && password) {
    if (checkAccount({ username, password })) {
      alert("Logged in");
    } else {
      msgs[2].innerText = "username or password is not correct";
      inps[2].classList.add("inperr");
    }
  } else {
    if (!username) {
      msgs[0].innerText = "username cannot be blank";
      inps[0].classList.add("inperr");
    }
    if (!password) {
      msgs[1].innerText = "password cannot be blank";
      inps[1].classList.add("inperr");
    }
  }
});

registerbtn.addEventListener("click", function () {
  let inputs = document.querySelectorAll(".registerform .myinp");
  let msgs = document.querySelectorAll(".registerform .msg");
  let username = inputs[0].value;
  let password = inputs[1].value;
  let repassword = inputs[2].value;
  if (username && password && repassword) {
    if (password == repassword) {
      if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        if (!checkAccountExist({ username, password })) {
          accounts.push({ username, password });
          let cfm = confirm("Register success");
          if (cfm) {
            loginform.classList.remove("d-none");
            registerform.classList.add("d-none");
            loginlink.classList.add("active");
            registerlink.classList.remove("active");
            clearInput();
          }
        } else {
          msgs[3].innerHTML = "account already exist";
        }
      } else {
        msgs[1].innerText =
          "password must be at least 8 charactor, contains at least 1 letter and 1 number";
        inputs[1].classList.add("inperr");
      }
    } else {
      msgs[2].innerText = "password didnot match";
      inputs[2].classList.add("inperr");
    }
  } else {
    if (!username) {
      msgs[0].innerText = "username cannot be blank";
      inputs[0].classList.add("inperr");
    }
    if (!password) {
      msgs[1].innerText = "password cannot be blank";
      inputs[1].classList.add("inperr");
    }
    if (!repassword) {
      msgs[2].innerText = "please confirm your password";
      inputs[2].classList.add("inperr");
    }
  }
});

inps.forEach(function (item) {
  item.addEventListener("click", function () {
    inps.forEach(function (item) {
      item.classList.remove("inperr");
    });
    clearMessage();
  });
});
