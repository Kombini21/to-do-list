import {ToDo} from './toDoFactory';


export function toDoClick() {

    const container = document.getElementById('container');
    const btChange = document.getElementById('create-Task-Bt');

    const divInfo = document.createElement('div');
    var id = Math.floor(Math.random() * 10000);
    divInfo.setAttribute('id','infoBox');


    const divName = document.createElement('input');
    divName.setAttribute('type','text');
    divName.setAttribute('id','nameInput');
    divName.setAttribute('name','textInp');
    divName.setAttribute('value','Título');
    divName.setAttribute('class','inputsAgr');
    divInfo.appendChild(divName);

    const divDesc = document.createElement('input');
    divDesc.setAttribute('type','text');
    divDesc.setAttribute('id','descInput');
    divDesc.setAttribute('name','descInp');
    divDesc.setAttribute('value','Descrição');
    divDesc.setAttribute('class','inputsAgr');
    divInfo.appendChild(divDesc);

    const divData = document.createElement('input');
    divData.setAttribute('type','date');
    divData.setAttribute('id','dateInput');
    divData.setAttribute('name','dateInp');
    divData.setAttribute('value','Data Limite');
    divData.setAttribute('class','inputsAgr');
    divInfo.appendChild(divData);

    const divPrior = document.createElement('input');
    divPrior.setAttribute('list','prioridade');
    divPrior.setAttribute('id','prioriInput');
    divPrior.setAttribute('name','prioriInp');
    divPrior.setAttribute('class','inputsAgr');

    const divPriorData = document.createElement('datalist');
    divPriorData.setAttribute('id','prioridade');
    divPrior.appendChild(divPriorData);

    const option1 = document.createElement('option');
    option1.setAttribute('value','Baixa');
    const option2 = document.createElement('option');
    option2.setAttribute('value','Média');
    const option3 = document.createElement('option');
    option3.setAttribute('value','Alta');

    divPriorData.appendChild(option1);
    divPriorData.appendChild(option2);
    divPriorData.appendChild(option3);

    divInfo.appendChild(divPrior);


    const divAnot = document.createElement('input');
    divAnot.setAttribute('type','text');
    divAnot.setAttribute('id','anotInput');
    divAnot.setAttribute('name','anotInp');
    divAnot.setAttribute('value','Anotações');
    divAnot.setAttribute('class','inputsAgr');
    divInfo.appendChild(divAnot);

    const divCateg = document.createElement('input');
    divCateg.setAttribute('type','text');
    divCateg.setAttribute('id','categInput');
    divCateg.setAttribute('name','categInp');
    divCateg.setAttribute('value','Categoria');
    divCateg.setAttribute('class','inputsAgr');
    divInfo.appendChild(divCateg);

    const createButton = document.createElement('button');
    createButton.setAttribute('class', 'buttonsAgr');
    createButton.addEventListener('click', aceitarClick);
    createButton.setAttribute('id','createBtt');
    createButton.innerHTML = 'Criar';
    divInfo.appendChild(createButton);

    const createButton1 = document.createElement('button');
    createButton1.setAttribute('class', 'buttonsAgr');
    createButton1.addEventListener('click', recusarClick);
    createButton1.setAttribute('id','deleteBtt');
    createButton1.innerHTML = 'Não Criar';
    divInfo.appendChild(createButton1);

    container.insertBefore(divInfo, btChange);
    btChange.style.visibility = 'hidden';

};









function aceitarClick() {

    const namae = document.getElementById('nameInput').value;
    const desce = document.getElementById('descInput').value;
    const datee = document.getElementById('dateInput').value;
    const piore = document.getElementById('prioriInput').value;
    const anote = document.getElementById('anotInput').value;
    const catege = document.getElementById('categInput').value;
    

    const boxboxinfo = document.getElementById('infoBox');
    boxboxinfo.remove();
    
    var todo1 = ToDo(namae, desce, datee, piore, anote, catege);
    todo1.createCard();

    const btChange = document.getElementById('create-Task-Bt');
    btChange.style.visibility = 'visible';


};




function recusarClick() {

    const boxboxinfo = document.getElementById('infoBox');
    boxboxinfo.remove();

    const btChange = document.getElementById('create-Task-Bt');
    btChange.style.visibility = 'visible';
};



