import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'personajes', loadChildren: './personajes/personajes.module#PersonajesPageModule' },
  { path: 'darth-vader', loadChildren: './darth-vader/darth-vader.module#DarthVaderPageModule' },
  { path: 'chewbacca', loadChildren: './chewbacca/chewbacca.module#ChewbaccaPageModule' },
  { path: 'general-grievus', loadChildren: './general-grievus/general-grievus.module#GeneralGrievusPageModule' },
  { path: 'padme-amidala', loadChildren: './padme-amidala/padme-amidala.module#PadmeAmidalaPageModule' },
  { path: 'yoda', loadChildren: './yoda/yoda.module#YodaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
