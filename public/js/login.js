const logIn = document.getElementById("LogIn")

logIn.addEventListener("click", async (event)=>{

    event.preventDefault();

    const logInEmailVal = document.getElementById("logInEmail").value.trim()    
    const logInEmailVal = document.getElementById("logInEmail").value.trim() 
    
    const logInUser = await fetch("/api/dashboard", {
        method: 'POST',
        body: {
            emial,
            password: pass,
        }
        
    }).then(res => {
        console.log('Login submitted')
    }).catch(err => {
        console.log
    })
})