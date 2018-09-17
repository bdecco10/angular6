import {Component, OnInit} from '@angular/core';
import {APIService} from '../../service/api.service';
import {NgForm} from '@angular/forms';
import {starWars} from '../../../assets/starWars';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private apiService: APIService) {}

  name: string;
  idade: string;
  height:string;
  
  retrive: starWars;

  public createContact(): object {

    this.apiService.getContacts().subscribe((response) => {
      this.retrive = response;
      console.log(response);
    });
    return this.retrive;
  }

  onSubmit(formulario: NgForm) {

    this.name = formulario.value.name;
    this.idade = formulario.value.idade;

    console.log(formulario.value);
  }

}
