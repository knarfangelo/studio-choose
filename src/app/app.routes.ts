import { Routes } from '@angular/router';
import { StudioComponent } from './layouts/studio/studio.component';
import { StudioChooseComponent } from './layouts/studio-choose/studio-choose.component';

export const routes: Routes = [
    {path: '', component: StudioChooseComponent},
];
