import { Routes, Router } from '@angular/router';

export const routesUrl: Routes = [
];


export function dynamicRoutes(injector, resp) {


  if (resp && resp['data'] && resp['data'].length > 0) {
    const router: Router = injector.get(Router);


    for (let o of resp['data']) {
      let templateDirectory = '../components/pages/pages.module#PagesModule';

      if (o.template === 'contact') {
        templateDirectory = 'CONTACT MODULE HERE';
      }

      if (o.template === 'blog') {
        templateDirectory = 'BLOG LIST MODULE HERE';
      }

      if (o.template === 'blog') {
        router.config.push({
          path: 'blog/:slug',
          loadChildren: 'BLOG DETAIL MODULE HERE',
          data: { slug: o.slug }
        });
      }

      router.config.push({
        path: o.slug,
        loadChildren: templateDirectory,
        data: { slug: o.slug }
      });

      router.config.push({
        path: `${o.slug}/:id`,
        loadChildren: templateDirectory,
        data: { slug: o.slug }
      });
    }
    router.config.push({
      path: '**',
      loadChildren: 'PAGE NOT FOUND MODULE HERE'
    });
    router.resetConfig(router.config);
  }
}
