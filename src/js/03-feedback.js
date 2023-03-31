import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector('.feedback-form');
const formData = {};

formRef.addEventListener('input', throttle(onSaveDataStorage, 500));
formRef.addEventListener('submit', onSubmit);

restoreFormInput();

function onSaveDataStorage() {
    formData.email = formRef.email.value;
    formData.message = formRef.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function restoreFormInput() {
    const savedData = localStorage.getItem(STORAGE_KEY);
        try {
            const restoreData = JSON.parse(savedData);
            formRef.email.value = restoreData.email;
            formRef.message.value = restoreData.message;
            }
        catch (error) { console.log(error.name) };
    
};
function onSubmit(e) {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
        return console.log('Заповніть всі поля')
    };
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};  
