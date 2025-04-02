interface Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

class TodoList {

    private todos: Todo[] = [];

    constructor() {
        this.todos = [];
    }

    add(title: string) {
        const todo: Todo = {
            id: this.todos.length + 1,
            title,
            completed: false,
            createdAt: new Date(),
        };

        this.todos.push(todo);
    }

    remove(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    display() {
        console.log("Todo List:", this.todos);
    }
}

const todoList = new TodoList();

todoList.add("Buy groceries");
todoList.add("Buy groceries");
todoList.add("Buy groceries");
todoList.add("Buy groceries");
todoList.add("Buy groceries");

todoList.display();

todoList.remove(1);

todoList.display();

todoList.remove(2);

todoList.display();

todoList.remove(3);

todoList.display();

