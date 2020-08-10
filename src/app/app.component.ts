import {Component, ViewEncapsulation} from '@angular/core';
import {MatTable} from '@angular/material/table';

class Todo{ //una clase que nos mapee todo el list
  description: string; //una descripciòn de tipo string
  isDone: boolean; //boleano que nos diga si està hecha la tarea
}
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Test';

  public todos: Todo[]=[]; // arraw de todos, de tipo todo que està vacio
  public description: string; //variable para agregar un nuevo todo

  addNewTodo(): void { //mètodo para agregar los todos
    this.todos.push({ //hace push a nuestro arraw de todos
      description: this.description, //ingresar un  nuevo objeto
      isDone: false
    });
    this.description = null; //para agregar un nuevo todo y la caja de texto estè libre
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t=> t.description !== todo.description );
  }
}

