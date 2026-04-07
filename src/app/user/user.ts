import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserType } from '../Models/User';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  userData = signal<UserType[]>([]);
  // constructor(private userService: UserService) {}
  userService = inject(UserService);

  name = signal<string>('');
  username = signal<string>('');
  email = signal<string>('');

  form=signal<boolean>(false);

  editId=signal<number>(0);
  editname = signal<string>(this.name());
  editusername = signal<string>(this.username());
  editemail = signal<string>(this.email());

  ngOnInit(): void {
    this.fetchUsers();
  }

  // userService=inject(UserService);
  // userData  = toSignal<UserType[]>(this.userService.getUser())

  private fetchUsers() {
    this.userService.getUser().subscribe((data: UserType[]) => {
      this.userData.set(data);
      console.log(this.userData());
    });
  }

  SubmitForm() {
    const payload: UserType = {
      id: 0,
      name: this.name(),
      username: this.username(),
      email: this.email(),
    };
    this.userService.addUser(payload).subscribe(() => {
      this.fetchUsers();
      this.name.set('');
      this.username.set('');
      this.email.set('');
    });
  }

  deleteUser(id: number): void {
    this.userService.DeleteUser(id).subscribe({
      next: () => {
        this.userData.update((users) => users.filter((user) => user.id !== id));
      },
      error: (err) => {
        console.error('Delete failed', err);
      },
    });
  }

  openForm(id:number,name:string,username:string,email:string){
    this.form.set(true);
    this.editId.set(id);
    this.editname.set(name);
    this.editusername.set(username);
    this.editemail.set(email);
  }
  closeForm(){
    this.form.set(false);
  }

  UpdateUser(id:number){
    const editPayload:UserType = {
      id:this.editId(),
      name:this.editname(),
      username:this.editusername(),
      email:this.editemail()
    }
    this.userService.UpdateUser(id,editPayload).subscribe(()=>{
      this.fetchUsers()
      this.form.set(false)
    })
  }
}
