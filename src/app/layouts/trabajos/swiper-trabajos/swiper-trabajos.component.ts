import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { trabajos } from '../Mantenimiento/trabajos';
register();
@Component({
  selector: 'app-swiper-trabajos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <h1>Conoce nuestro trabajo <br>
  Streams de alta calidad</h1>
     <swiper-container class="swiper-1" navigation
     >
      <swiper-slide *ngFor="let trabajo of trabajosCarrusel1">
        <img [src]="trabajo.img" [alt]="trabajo.titulo">
      </swiper-slide>
    </swiper-container>

    <!-- Segundo carrusel -->
    <swiper-container class="swiper-2" navigation>
      <swiper-slide *ngFor="let trabajo of trabajosCarrusel2">
        <img [src]="trabajo.img" [alt]="trabajo.titulo">
      </swiper-slide>
    </swiper-container>
  `,
  styleUrl: './swiper-trabajos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperTrabajosComponent { 

  trabajosCarrusel2 = [
    trabajos[7], // 'grabación reunión en parking'
    trabajos[0], // 'grabación evento kick'
    trabajos[1], // 'grabación de una escena'
    trabajos[2], // 'grabación de una entrevista'
    trabajos[3]  // 'grabación evento cocina'
  ];

  // Restantes imágenes en el primer carrusel
  trabajosCarrusel1 = [
    trabajos[4], // 'zona de postproducción'
    trabajos[5], // 'grabación de un podcast'
    trabajos[6], // 'publicidad para Choose Agencia'
    trabajos[8], // 'grabación de un juego de billar'
  ];


}
