import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent  implements OnInit {
  message: boolean = false;
  addUser: User = {
    UserName: '',
    Id: '',
    Role: '',
    Password: '',
    Login: ''
  }
  roles:string[]=["Admin","Cadastro","Leitura"];

  ngOnInit(): void{}
  constructor(private userService: UserService, private router: Router){}

  addNewUser() {
    this.userService.addUser(this.addUser).subscribe({
      next: (user) => {
        this.message = true;
        this.cleanUser();
      }
    });
  }

  removeMessage(){
    this.message = false;
  }

  cleanUser(){
    this.addUser.UserName = '';
    this.addUser.Role = '';
    this.addUser.Password = '';
    this.addUser.Login = '';
    this.addUser.Id = '';
  }
}
