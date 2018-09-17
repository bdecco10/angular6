import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {starWars} from '../../assets/starWars';
import { HttpEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {
  API_URL = 'https://swapi.co/api/people/2';
  constructor(private httpClient: HttpClient) {}
  getContacts() {
      return this.httpClient.get<starWars>(`${this.API_URL}/`);
  }

  createContact(contact) {
    return this.httpClient.get<starWars>(`${this.API_URL}/`, contact);
  }
}

