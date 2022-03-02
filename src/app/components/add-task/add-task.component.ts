import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: any;
  day: any;
  reminder: boolean = false;
  showAddTask: any;
  subscription: Subscription;

  constructor(private uiSevice: UiService) {
    this.subscription = this.uiSevice.onToggle().subscribe(
      value => {
        this.showAddTask = value;
      })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // TO DO EMIT EVENT
    this.onAddTask.emit(newTask)
    this.text = ''
    this.day = ''
    this.reminder = false;
  }

}
