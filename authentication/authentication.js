// getting admin form refrences

const adminForm = document.querySelector("#adminForm");

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = adminForm.adminEmail.value;
    const password = adminForm.adminPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                window.location = '../admin/mainPage.html'; //After successful login, user will be redirected to admin-page.html
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

// user
const userForm = document.querySelector("#userForm");

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = userForm.userEmail.value;
    const password = userForm.userPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                window.location = '../admin/taskList.html'; //After successful login, user will be redirected to taskList.html
            }
        });
        console.log('signed in');
    })
        .catch(function (error) {
            console.log('error');
        });

        userForm.userEmail.value = '';
        userForm.userPassword.value = '';

});

//Handle Account Status



// Sign Out

// firebase.auth().signOut().then(function () {
//     // Sign-out successful.
// }).catch(function (error) {
//     // An error happened.
// });