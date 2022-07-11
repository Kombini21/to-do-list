import {ToDo} from './toDoFactory';


var todo1 = ToDo("casa","casa1","casa1","casa1","casa1","casa1","casa1");
var todo2 = ToDo("casa","casa1s","casa12","casa12","casa1","casa1","casa1");

todo1.createCard();
todo2.createCard();

todo2.deleteCard();
todo1.deleteCard();


