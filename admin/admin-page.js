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






