import {Component, OnInit, Input} from '@angular/core';
import {FormularioComponent} from '../formulario/formulario.component';
import {APIService} from '../../service/api.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {

  @Input()
  retrive: object;

  constructor(private formularioComponent: FormularioComponent) {}

  ngOnInit() {}

 
}
