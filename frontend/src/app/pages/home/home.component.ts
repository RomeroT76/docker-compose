import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { User } from '../../domain/User';
import { UserApiService } from '../../services/user-api.service';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  users: User[] = [];
  isDeleteInProgress: boolean = false;

  constructor(private userApiServide: UserApiService, private messageService: MessageService) { }

  getUsers() {
    this.userApiServide.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  deleteUser(id:number) {
    this.isDeleteInProgress = true
    this.userApiServide.deleteUser(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Usuario eliminado correctamente' });
        this.isDeleteInProgress = false;
        this.getUsers();
      },
      error: () => {
        this.isDeleteInProgress = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el usuario' });
      }
    })
  }

  ngOnInit(): void {
    this.getUsers()

  }

}
