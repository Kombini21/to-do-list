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

    // Cria o card no DOM
   const createCard = () => {

    // Cria o card com seus divs para cada elemento

        const container = document.getElementById('container');

       const containerCard = document.createElement("div");
       containerCard.setAttribute('class','containercards');
       
       const divTitle = document.createElement('div');
       divTitle.setAttribute('class','title');

       const divDescription = document.createElement('div');
       divDescription.setAttribute('class','description');

       const divDueDate = document.createElement('div');
       divDueDate.setAttribute('class', 'duedate');

       const divPriority = document.createElement('div');
       divPriority.setAttribute('class', 'priority');

       const notes = document.createElement('div');
       notes.setAttribute('class', 'notes');

       const classe = document.createElement('div');
       classe.setAttribute('class', 'classe');

       const checklist = document.createElement('div');
       checklist.setAttribute('class', 'checklist');

       containerCard.appendChild(divTitle);
       containerCard.appendChild(divDescription);
       containerCard.appendChild(divDueDate);
       containerCard.appendChild(divPriority);
       containerCard.appendChild(notes);
       containerCard.appendChild(classe);
       containerCard.appendChild(checklist);
       container.appendChild(containerCard);
   }

   return {createCard};
};



