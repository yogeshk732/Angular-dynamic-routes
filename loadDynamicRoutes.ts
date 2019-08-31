import { Injectable, Injector } from '@angular/core';
import { RequestService } from '@services/request.service';



@Injectable()
export class DynamicRouteService {

  constructor(
    private injector: Injector,
    private request: RequestService
  ) { }


  getRoute() {
    return new Promise((resolve, reject) => {
      this.request.GET('/get/slug', {}).subscribe(response => {
        resolve(response);
      }, err => {
      });
    });
  }

}

