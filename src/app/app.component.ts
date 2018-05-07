import { ViewCompletedPipe } from './pipe/view-completed.pipe';
import { Task } from './task/task.interface';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url =
	'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'app';
	filterTask = false;
	data$;
	tasks = [];
	allTask = true;
	completeAll = true;
	completeLabel = 'Select all';
	filterLabel = 'View only complete tasks';

	constructor(private http: HttpClient) {
		this.data$ = http.get(url).subscribe((data: any[]) => {
			data.map((task) => this.createTask(task));
		});
	}

	deleteTask(idTask: number) {
		this.tasks = this.tasks.filter((task) => task.id !== idTask);
	}

	completeTask(completedTask: Task) {
		this.tasks[this.tasks.indexOf(completedTask)].completed = !completedTask.completed;
	}

	filterTasks() {
		this.filterTask = !this.filterTask;
		this.filterLabel = this.filterTask ? 'View all task' : 'View only complete tasks';
	}

	clearCompletedTasks() {
		this.tasks = this.tasks.filter((task) => !task.completed);
	}

	completeAllTasks() {
		this.tasks.map((task) => (task.completed = this.completeAll));
		this.completeAll = !this.completeAll;
		this.completeLabel = this.completeAll ? 'select all' : 'deselect all';
	}

	createTask(titleTask: string) {
		const id =
			this.tasks.length > 0
				? +this.tasks.reduce((task, current) => {
						return task.id > current.id ? task : current;
					}).id + 1
				: 1;
		const task: Task = { id: id, completed: false, title: titleTask.trim() };
		this.tasks.push(task);
	}
}
