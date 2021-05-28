const signUP = document.getElementById(creatAccount);

signUP.addEventListener("click", async () => {
  //check passwords match
  const PWMain = document.getElementById(pwMain).value;
  const PWTwo = document.getElementById(pwTwo).value;

  if (PWMain !== PWTwo) {
    alert.window("Passwords do not match");
    return;
  }

  const firstNameVal = document.getElementById("firstName").value;
  const lasttNameVal = document.getElementById("lasttName").value;
  const emailVal = document.getElementById("email").value;

  const submitNewUser = await fetch("/api/user", {
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
