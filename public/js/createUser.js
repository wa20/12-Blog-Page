const signUP = document.getElementById('creatAccount');

signUP.addEventListener("click", async (event) => {

  event.preventDefault();

  //check passwords match
  const PWMain = document.getElementById('PWMain').value.trim();
  const PWTwo = document.getElementById('PWCheck').value.trim();

  if (PWMain !== PWTwo) {
    alert.window("Passwords do not match");
    return;
  }

  const firstNameVal = document.getElementById("firstName").value.trim();
  const lasttNameVal = document.getElementById("lasttName").value.trim();
  const emailVal = document.getElementById("emailSignUp").value.trim()
  // username need to create

  const submitNewUser = await fetch("/api/createUser", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstNameVal,
      lastName: lasttNameVal,
      email: emailVal,
      password: PWMain,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (submitNewUser.ok) {
    //redirect to homepage
    document.location.replace("/dashboard")
  } else {
    alert("Sign Up Failed");
  }
});
