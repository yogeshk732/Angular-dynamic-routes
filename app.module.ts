import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { AppComponent } from './app.components/app.component';
import { DynamicRouteService } from '@services/loadDynamicRoutes';
import { dynamicRoutes } from '@route/routing-urls';
export function initializeApp(injector: Injector, appInitService: DynamicRouteService) {
  return (): Promise<any> => {

    const getDynamiRoutes = appInitService.getRoute();
    getDynamiRoutes.then((resp) => {
      dynamicRoutes(injector, resp);
    });
    return appInitService.getRoute();


  };
}


@NgModule({
  imports: [],

  declarations: [ ],
  entryComponents: [],
  providers: [

    DynamicRouteService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [Injector, DynamicRouteService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
