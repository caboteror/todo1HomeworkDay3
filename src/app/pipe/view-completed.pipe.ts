import { Task } from './../task/task.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'viewCompleted'
})
export class ViewCompletedPipe implements PipeTransform {
	transform(tasks: Task[], args?: any): any {
		if (args) {
			return tasks.filter((task) => task.completed === args);
		} else {
			return tasks;
		}
	}
}
