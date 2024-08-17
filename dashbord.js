

import {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "./firebase.js"
console.log(app,auth,createUserWithEmailAndPassword)
// Sign up new users
let sing_btn = document.getElementById('sing-btn');
sing_btn.addEventListener('click', function(){
   let Sname = document.getElementById('Sname');
   let email = document.getElementById('Semail');
   let password = document.getElementById('Spassward');
   createUserWithEmailAndPassword(auth, email.value, password.value)
   .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      Swal.fire({
         title: "success",
         text: "Account created successfully!",
         icon: "success"
       });
       if(sing_up_form.style.display !=="none"){
          sing_in_form.style.display = "block"
          sing_up_form.style.display = "none"
       }
      console.log("user",user)
    }).catch((error) => {
   //   console.log("error",error.message)
   //  const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorMessage)
    Swal.fire({
      title: "error",
      text: errorMessage,
      icon: "error"
    });
    // ..
  });

})

// End Sign up new users


// Sign in existing users

let singin_btn = document.getElementById('singin-btn');

singin_btn.addEventListener('click',function(){
   let email = document.getElementById('Iemail');
   let password = document.getElementById('Ipassward');

   signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    Swal.fire({
      title: "success",
      text: "Signed in successfully!",
      icon: "success"
    });
    console.log(user)
    window.location = "https://github.com/G-Mustafa1"
  })
  .catch((error) => {
   //  const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      title: "error",
      text: errorMessage,
      icon: "error"
    });
  });
})


// End Sign in existing users


let dashboard = document.getElementById('dashboard');
dashboard.addEventListener('click', function(){
   console.log("hy")
   signOut(auth).then(() => {
      // Sign-out successful.
      Swal.fire({
         title: "success",
         text: "Sign out successfully!",
         icon: "success"
       });
      //  window.location.href = "../index.html"
    }).catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        title: "error",
        text: errorMessage,
        icon: "error"
      });
      // An error happened.
    });
})


let create_account1 = document.getElementById('create-account1');
let create_account2 = document.getElementById('create-account2');
let sing_in_form = document.getElementById('sing_in_form');
let sing_up_form = document.getElementById('sing_up_form');
create_account2.addEventListener('click',function(){
   if(sing_in_form.style.display !== "none"){
      sing_up_form.style.display = "block"
      sing_in_form.style.display = "none"
   }
})
create_account1.addEventListener('click', function(){
   if(sing_up_form.style.display !== "none"){
      sing_in_form.style.display = "block"
      sing_up_form.style.display = "none"
   }
})


let sing_out = document.getElementById('sing-out');
sing_out.addEventListener('click', function(){
  console.log("hy");
    
})