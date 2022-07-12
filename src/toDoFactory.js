// This is a factory to create each To do List card.
export const ToDo = (title, description, dueDate, priority, notes, classe, checklist) => {

    // Atribui os valores a cada variavel 

   var title = title;
   var description = description;
   var dueDate = dueDate;
   var priority = priority;
   var notes = notes;
   var classe = classe;
   var checklist = checklist;
   var id = Math.floor(Math.random() * 10000);

    // Cria o card no DOM
   const createCard = () => {

    // Cria o card com seus divs para cada elemento

        const container = document.getElementById('container');

       const containerCard = document.createElement("div");
       containerCard.setAttribute('class','containercards');
       containerCard.setAttribute('id',`${id}`);
       
       const divTitle = document.createElement('div');
       divTitle.setAttribute('class','title');
       divTitle.innerHTML = title;

       const divDescription = document.createElement('div');
       divDescription.setAttribute('class','description');
       divDescription.innerHTML = description;

       const divDueDate = document.createElement('div');
       divDueDate.setAttribute('class', 'duedate');
       divDueDate.innerHTML = dueDate;

       const divPriority = document.createElement('div');
       divPriority.setAttribute('class', 'priority');
       divPriority.innerHTML = priority;

       const divNotes = document.createElement('div');
       divNotes.setAttribute('class', 'notes');
       divNotes.innerHTML = notes;

       const divClasse = document.createElement('div');
       divClasse.setAttribute('class', 'classe');
       divClasse.innerHTML = classe;

       const divChecklist = document.createElement('div');
       divChecklist.setAttribute('class', 'checklist');
       divChecklist.innerHTML = checklist;

       containerCard.appendChild(divTitle);
       containerCard.appendChild(divDescription);
       containerCard.appendChild(divDueDate);
       containerCard.appendChild(divPriority);
       containerCard.appendChild(divNotes);
       containerCard.appendChild(divClasse);
       containerCard.appendChild(divChecklist);

        const newTaskBt = document.getElementById('create-Task-Bt');

       container.insertBefore(containerCard, newTaskBt);
   }


   const deleteCard = () => {

    const container = document.getElementById(id);
    container.innerHTML = '';

   }

   return {createCard, deleteCard};
};



