console.log("funciona");



let projects = document.querySelectorAll('.cardProject');
const modalsHTML = document.querySelectorAll('.modal');
const modals = Array.from(modalsHTML );
const btnClose = document.querySelectorAll('.closeModal');


projects.forEach((project, index) => {
    project.addEventListener('click', () =>
    {
        modals[index].classList.remove('d-none');
    });
});
// modals.forEach(modal => {
//     projects.addEventListener('click', () => {
//     modal.classList.remove('d-none')
// })
// })
// }







btnClose.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        modals[index].classList.add('d-none');
    });
});
    
// function openModal(){
//     addEventListener('click', () => 
//     {
//         modals.forEach(modal => {
//             modal.classList.remove('d-none')
//         });
//     })
// }
   

    // modal0.classList.add('d-none')  
    //   modal1.classList.add('d-none')
    //   modal2.classList.add('d-none')


// let modal = document.getElementsByClassName('modal')
// let

//function closeModal
