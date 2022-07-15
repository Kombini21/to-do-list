export function criarProjeto() {

    
    const projectsDiv = document.getElementById('w2');

    const projects = document.createElement('button');
    projects.innerHTML = 'Projeto';
    projects.setAttribute('class', 'btProjects')
    projects.addEventListener('click', carregarDiv);

    projectsDiv.appendChild(projects)

};


function carregarDiv() {

    console.log('carregarWorking');






}
