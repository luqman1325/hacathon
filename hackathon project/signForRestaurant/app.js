let register = () => {}
    // let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let auth = firebase.auth()
function chalao(){

    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {

            firebase.database().ref(`user/${res.user.uid}`).set({
                username : username.value,
                email : email.value,
                password : password.value,
            })
            .then(() =>{
                let successDiv = document.getElementById("successDive");
            successDiv.innerHTML = "user register successfully";
            successDiv.style.display ="block";
            username.value ="";
            email.value ="";
            password.value ="";
            errorDiv.style.value ="";
            setTimeout(() => {
                window.location = "login.html"
            },1000)    
                })

        })
        .catch((err) => {
            
        })
}

let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then ((res) => {
        localStorage.setItem(`uid` ,res.user.uid)
        let successDiv = document.getElementById("successDiv");
            successDiv.innerHTML = "user Login successfully";
            successDiv.style.display = "block";
            email.value ="";
            password.value ="";
            errorDiv.style.display ="none"
            setTimeout(() => {
                window.location = "profil.html"
            },1000)

    })
    .catch((error) => {
        let errorDiv = document.getElementById("errorDiv");
        errorDiv.innerHTML =err.message;
        errorDiv.style.display ="block"
    });

}


