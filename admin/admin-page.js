// task

const renderingDiv = document.querySelector("#tasks-list");
const form = document.querySelector('#add-task-form');

// create element & render 
function rendertasks(doc) {
    let li = document.createElement('li');
    let task = document.createElement('span');
    let description = document.createElement('span');
    let cross = document.createElement('div');
    let outerDiv = document.createElement('div');

    cross.classList.add("del")
    li.setAttribute('data-id', doc.id);

    task.textContent = doc.data().task;
    description.textContent = doc.data().description;
    cross.textContent = 'x';

    // appending elements 
    outerDiv.appendChild(task);
    outerDiv.appendChild(description);
    li.appendChild(outerDiv);
    li.appendChild(cross);
    renderingDiv.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('tasks').doc(id).delete();
    });

}

// getting data
db.collection('tasks').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        rendertasks(doc);
        console.log(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('tasks').add({
        task: form.task.value,
        description: form.description.value
    }).then(() => {
        location.reload()
    });
    form.task.value = '';
    form.description.value = '';

    console.log(doc.data)
});


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






