const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const addBtn = document.querySelector('#add-btn');
const coursesList = document.querySelector('#courses-lists');
const coursesIt = document.querySelector('#courses-item');

addBtn.addEventListener('click', addCourses);

function addCourses() {
    let course = courseName.value;
    let rating = courseRating.value;

    if(course.trim().length === 0 || rating < 1 || rating > 5 || rating.length === 0) {
        presentAlert();
        return;
    }
    
    const coursesContainer = document.createElement('ion-item');
    
    coursesContainer.innerHTML = `<strong>${course}</strong>&nbsp;- ${rating}/5`;
    coursesList.appendChild(coursesContainer);


    courseName.value = '';
    courseRating.value = '';
}

// Warning Alert
async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enter a valid Course Name and Rating Number!';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    await alert.present();
}

