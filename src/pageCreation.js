import './style.css';
import { toDoClick } from './onClickToDoCreation';
import { criarProjeto } from './projetosDiv';


const fullcont = document.getElementById('fullCont');
const cont = document.getElementById('container');



const heading = document.createElement('div');
heading.setAttribute('id','siteHead');
fullcont.appendChild(heading);

const heading1 = document.createElement('div');
heading1.setAttribute('id','heading1');
heading1.innerHTML = 'To-Do-List';
heading.appendChild(heading1);



const sideCol = document.createElement('div');
sideCol.setAttribute('id', 'sideCl');
fullcont.appendChild(sideCol);

const sideW1 = document.createElement('div');
sideW1.setAttribute('id', 'w1');
sideW1.innerHTML = 'To-dos';
sideCol.appendChild(sideW1);

const sideW2 = document.createElement('div');
sideW2.setAttribute('id', 'w2');
sideW2.innerHTML = 'Projetos';
sideCol.appendChild(sideW2);

const sideW3 = document.createElement('div');
sideW3.setAttribute('id', 'projetosaba');
sideCol.appendChild(sideW3);

const sideW4 = document.createElement('button');
sideW4.setAttribute('id', 'w3'); 
sideW4.innerHTML = 'Criar Projeto';
sideW4.addEventListener('click',criarProjeto);
sideCol.appendChild(sideW4);





const bottomheading = document.createElement('div');
bottomheading.setAttribute('id', 'bottom');
fullcont.appendChild(bottomheading);

const bottomW1 = document.createElement('div');
bottomW1.setAttribute('id', 'bottomW1');
bottomW1.innerHTML = 'Made by Gabriel Terrazas - Kb';
bottomheading.appendChild(bottomW1);





const cardsLeg = document.createElement('div');
cardsLeg.setAttribute('id','cardsleg');
cont.appendChild(cardsLeg);

const cardsLegW1 = document.createElement('div');
cardsLegW1.setAttribute('class', 'cardsLeg');
cardsLegW1.innerHTML = 'Título';
cardsLeg.appendChild(cardsLegW1);

const cardsLegW2 = document.createElement('div');
cardsLegW2.setAttribute('class', 'cardsLeg');
cardsLegW2.innerHTML = 'Descrição';
cardsLeg.appendChild(cardsLegW2);

const cardsLegW3 = document.createElement('div');
cardsLegW3.setAttribute('class', 'cardsLeg');
cardsLegW3.innerHTML = 'Data Final';
cardsLeg.appendChild(cardsLegW3);

const cardsLegW4 = document.createElement('div');
cardsLegW4.setAttribute('class', 'cardsLeg');
cardsLegW4.innerHTML = 'Prioridade';
cardsLeg.appendChild(cardsLegW4);

const cardsLegW5 = document.createElement('div');
cardsLegW5.setAttribute('class', 'cardsLeg');
cardsLegW5.innerHTML = 'Anotações';
cardsLeg.appendChild(cardsLegW5);

const cardsLegW6 = document.createElement('div');
cardsLegW6.setAttribute('class', 'cardsLeg');
cardsLegW6.innerHTML = 'Categoria';
cardsLeg.appendChild(cardsLegW6);

const cardsLegW7 = document.createElement('div');
cardsLegW7.setAttribute('class', 'cardsLeg');
cardsLegW7.innerHTML = 'Check';
cardsLeg.appendChild(cardsLegW7);

const newTaskBt = document.createElement('button');
newTaskBt.setAttribute('class', 'createTaskBt');
newTaskBt.setAttribute('id', 'create-Task-Bt');
newTaskBt.innerHTML = 'New Task';
newTaskBt.addEventListener('click', toDoClick)
cont.appendChild(newTaskBt);
