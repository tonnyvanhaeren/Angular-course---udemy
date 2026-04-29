import { Component, EventEmitter, Input, Output, output, input, computed } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  user = input.required<User>();
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
