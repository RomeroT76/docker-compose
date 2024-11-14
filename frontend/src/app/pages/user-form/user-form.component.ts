import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ButtonModule, RouterModule, InputTextModule, InputNumberModule, CardModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  userForm!: FormGroup;
  isSaveInProgress: boolean = false;
  edit: boolean = false;

  constructor(private fb: FormBuilder, private userApiService: UserApiService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.edit = true
      this.getUser(+id!)
    }
  }

  getUser(id: number) {
    this.userApiService.getUser(id).subscribe({
      next: res => {
        this.userForm.patchValue(res);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No encontrado' });
        this.router.navigateByUrl('/');
      }
    })
  }

  createUser() {
    if (this.userForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos e intente nuevamente' });
      return
    }
    this.isSaveInProgress = true;
    this.userApiService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Usuario registrado correctamente' });
        this.isSaveInProgress = false;
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.isSaveInProgress = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos e intente nuevamente' });
      }
    })
  }

  updateUser() {
    if (this.userForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos e intente nuevamente' });
      return
      this.isSaveInProgress = true;
    }
    this.userApiService.updateUser(this.userForm.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Modificado', detail: 'Usuario modificado correctamente' });
        this.isSaveInProgress = false;
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.isSaveInProgress = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos e intente nuevamente' });
      }
    })
  }

}
