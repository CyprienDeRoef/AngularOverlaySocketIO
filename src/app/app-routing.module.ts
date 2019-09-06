import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { OverlayComponent } from './overlay/overlay.component';
import { StartingComponent } from './starting/starting.component';

const routes: Routes = [
  { path: '', component: InterfaceComponent },
  { path: 'interface', component: InterfaceComponent },
  {path: 'overlay', component: OverlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
