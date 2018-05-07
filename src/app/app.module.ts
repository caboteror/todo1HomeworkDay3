import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ViewCompletedPipe } from './pipe/view-completed.pipe';
import { NewTaskDirective } from './new-task.directive';

@NgModule({
	declarations: [ AppComponent, TaskComponent, ViewCompletedPipe, NewTaskDirective ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
