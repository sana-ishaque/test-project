
// users
const renderingDivUser = document.querySelector("#user-list");
const userForm = document.querySelector('#add-user-form');


// creating user
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = userForm.email.value;
    const password = userForm.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            db.collection('users').add({
                user: userForm.email.value,
                password: userForm.password.value
            }).then(() => {
                location.reload();
            })
            console.log('registered', user);
            userForm.reset();
        })
});

// creating element

function renderuser(user) {
    console.log(user.data())
    let li = document.createElement('li');
    let email = document.createElement('span');
    let password = document.createElement('span');
    let outerDiv = document.createElement('div');
    li.setAttribute('data-id', user.id);
    email.textContent = user.data().user;
    password.textContent = user.data().password;
    // appending elements 
    outerDiv.appendChild(email);
    outerDiv.appendChild(password);
    li.appendChild(outerDiv);
    renderingDivUser.appendChild(li);
}


db.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderuser(doc);
        console.log(doc);
    });
});

