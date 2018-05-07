import { Task } from './task.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: [ './task.component.scss' ]
})
export class TaskComponent implements OnInit {
	@Input() task;
	editing = false;

	constructor() {}

	@Output() deleteTask = new EventEmitter<number>();
	@Output() completeTask = new EventEmitter<Task>();
	@Output() editTask = new EventEmitter<string>();

	onDeleteTask(id: number) {
		this.deleteTask.emit(id);
	}

	onCompleteTask(task: Task) {
		this.completeTask.emit(task);
	}

	edit() {
		this.editing = true;
	}

	onEditTask(title: string) {
		this.editTask.emit(title);
	}
	ngOnInit() {}
}
