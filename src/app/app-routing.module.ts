import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'datenschutz', component: DataprotectionComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 50]
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
