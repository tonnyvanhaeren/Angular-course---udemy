import { type NewTaskData } from './../task/task.model';
import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancelTask = output<void>();
  createTask = output<NewTaskData>();

  protected enteredTitle = signal('');
  protected enteredSummary = signal('');
  protected enteredDueDate = signal('');

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.createTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    });
  }
}
