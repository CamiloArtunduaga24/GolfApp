import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password)
  }
}
