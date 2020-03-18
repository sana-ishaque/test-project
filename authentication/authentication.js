// getting admin form refrences

const adminForm = document.querySelector("#adminForm");

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = adminForm.adminEmail.value;
    const password = adminForm.adminPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                window.location = '../admin/admin-page.html'; //After successful login, user will be redirected to admin-page.html
            }
        });
        console.log('signed in');
    })
        .catch(function (error) {
            console.log('error');
        });

    adminForm.adminEmail.value = '';
    adminForm.adminPassword.value = '';

});


//Handle Account Status



// Sign Out

// firebase.auth().signOut().then(function () {
//     // Sign-out successful.
// }).catch(function (error) {
//     // An error happened.
// });