const signUP = document.getElementById(creatAccount)

signUP.addEventListener("click", () => {

    //check passwords match
    const PWMain = document.getElementById(pwMain).value;
    const PWTwo = document.getElementById(pwTwo).value;

    if(PWMain !== PWTwo) {
       alert.window('Passwords do not match');
       return;
    } 

    const firstName = document.getElementById('firstName').value
    const lasttName = document.getElementById('lasttName').value
    const email = document.getElementById('email').value

    





})