import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StudioComponent } from "../studio/studio.component";
import { MarcasComponent } from "../marcas/marcas.component";
import { AdaptamosContenidoComponent } from "../adaptamos-contenido/adaptamos-contenido.component";
import { TrabajosComponent } from "../trabajos/trabajos.component";
import { EquipoComponent } from "../equipo/equipo.component";
import { EquiposGrabacionComponent } from "../equipos-grabacion/equipos-grabacion.component";

@Component({
  selector: 'app-studio-choose',
  standalone: true,
  imports: [
    CommonModule,
    StudioComponent,
    MarcasComponent,
    AdaptamosContenidoComponent,
    TrabajosComponent,
    EquipoComponent,
    EquiposGrabacionComponent
],
  template: `
    <app-studio></app-studio>
    <app-marcas></app-marcas>
    <app-adaptamos-contenido></app-adaptamos-contenido>
    <app-trabajos></app-trabajos>
    <app-equipos-grabacion></app-equipos-grabacion>
    <app-equipo></app-equipo>
  `,
  styleUrl: './studio-choose.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioChooseComponent { }
