import Swal from 'sweetalert2';

const imgH = document.querySelector('img');
const div = document.querySelector('.imgHeroes');
const divTex = document.querySelector('.text');
const buttonSortear = document.querySelector('.buttonSortear');


//const t = () => main.style.backgroundColor = 'red';

const generateRandomNumber = () => Math.round(Math.random() * 758);


const url = `https://superheroapi.com/api.php/${'5790005271022887'}/`

async function api() {
  try {
    const id = generateRandomNumber();
    const superApi = await fetch(`${url}${id}`);
    const data = await superApi.json();
    console.log(data);
    imgH.src = data.image.url;
    divTex.innerHTML = data.name;
  } catch(error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Herói não valido!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

}

buttonSortear.addEventListener('click', api);