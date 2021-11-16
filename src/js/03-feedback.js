import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input")
};

const STORAGE_KEY = "feedba0ck-form-state";
populateTextarea();
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData)
    formData = {};
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   
    if (savedMessage) {
        const pasrsedSav = JSON.parse(savedMessage);
        const keys = Object.keys(pasrsedSav);

        for (const key of keys) {
            refs.form.elements[key].value = pasrsedSav[key];
        }
    }
}








// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     input: document.querySelector('.feedback-form input'),
// };

// let formData ={};


// const STORAGE_KEY = 'feedback-msg';

// // const storage = "feedback-form-state";

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
// refs.input.addEventListener('input', onTextareaInput)

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
// });
// const dataJSON = localStorage.getItem(STORAGE_KEY);
// const savedData = JSON.parse(dataJSON);

// populateTextarea();

// if (savedData) {
//   refs.form['email'].value = savedData.email;
//   refs.form['message'].value = savedData.message;
// }

// // function onInput(evt) {
// //   evt.preventDefault();
// //   evt.currentTarget.reset();
// //   localStorage.removeItem(STORAGE_KEY);
// // };
// // function onFormSubmit(evt) {
// //     evt.preventDefault();

// //     evt.currentTarget.reset();
// //     localStorage.removeItem('STORAGE_KEY');
// // };

// // if (refs.textarea === null) {
// //   input.currentTarget.reset();
// // }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   formData.email = refs.form.email.value;
//   formData.message = refs.form.message.value;
//     console.log(formData)
//   evt.currentTarget.reset();
//   localStorage.clear(STORAGE_KEY);
//   // STORAGE_KEY, JSON.parse(localStorage.getItem(STORAGE_KEY));
//   // localStorage.removeItem(STORAGE_KEY);
// };


// function onTextareaInput(evt) {
//   // formData[evt.target.name] = evt.target.value
// const saveDataEl = JSON.stringify(formData);
// localStorage.setItem(STORAGE_KEY, saveDataEl);
// };

// function populateTextarea() {
// const savedMessage = localStorage.getItem(STORAGE_KEY);
// // if (savedMessage) {
// //   const pasrsedSav = JSON.parse(savedMessage);
// //   formData = pasrsedSav;
// //   refs.textarea.value = pasrsedSav.message;
// //   refs.input.value = pasrsedSav.email;
// // }

// if (savedMessage && savedMessage.message) {
//   refs.textarea.value = savedMessage.message;
// }
// if (savedMessage && savedMessage.email) {
//   refs.email.value = savedMessage.email;
// }
// }

// // if (savedMessage) {
// //     const pasrsedSav = JSON.parse(savedMessage);
// //     let formData ={};
// //     formData = pasrsedSav;
// //     refs.input.value = pasrsedSav.email;
// //     refs.textarea.value = pasrsedSav.message;
// //   console.log(pasrsedSav)
// // }
// // }

// // function populateTextarea() {
// // const savedMessage = localStorage.getItem('STORAGE_KEY');

// // if (savedMessage) {
// //     const pasrsedSav = JSON.parse(savedMessage);
// //     let formData = {};
// //     formData = pasrsedSav;
// //     textareaEl.value = pasrsedSav.message;
// //     inputEl.value = pasrsedSav.email;
// //   console.log(pasrsedSav)
// // }

// // };

