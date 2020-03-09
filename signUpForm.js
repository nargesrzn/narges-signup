function submit() {
  if (document.getElementById("name").value == "") {
    document.getElementById("name-error").innerHTML = "Name can't be empty";
    document.getElementById("name").style.border = "red solid 1px";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }
  if (document.getElementById("last-name").value == "") {
    document.getElementById("last-name-error").innerHTML =
      "Last Name can't be empty";
    document.getElementById("last-name").style.border = "red solid 1px";
  } else {
    document.getElementById("last-name-error").innerHTML = "";
  }
  if (document.getElementById("email").value == "") {
    document.getElementById("email-error").innerHTML = "Email can't be empty";
    document.getElementById("email").style.border = "red solid 1px";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (document.getElementById("password").value == "") {
    document.getElementById("password-error").innerHTML =
      "Password can't be empty";
    document.getElementById("password").style.border = "red solid 1px";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
}
