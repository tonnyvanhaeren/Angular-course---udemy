import { Component, output, input, computed } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  protected onSelectUser() {
    this.select.emit(this.user().id);
  }

  // old way with decorators
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();

  // get imagePath(): string {
  //   return 'assets/users/' + this.avatar;
  // }
}
