import { Injectable } from '@angular/core';
import { firebaseConfig } from '../environments/environment';
import * as firebase from 'firebase';
import flamelink from 'flamelink';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {
  fl;

  constructor() {
    console.log(firebaseConfig);
    const fireBaseApp = firebase.initializeApp(firebaseConfig);
    this.fl = flamelink(firebaseConfig);
  }

  getAllContent(content_type): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      console.log(content_type);
      this.fl.content.get(content_type)
        .then(data => {
          console.log(data);
          observer.next(Object.values(data));
          observer.complete();
        }).catch((err) => {
          observer.error(err);
        });
    });
  }

  getMediaUrl(id): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.fl.storage.getURL(id)
        .then(data => {
          observer.next(data);
          observer.complete();
        }).catch((err) => {
          observer.error(err);
      });
    });
  }
}
