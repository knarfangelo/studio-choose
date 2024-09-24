import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { TrabajosResponsiveComponent } from "../../components/trabajos-responsive/trabajos-responsive.component";
import { SwiperOptions } from 'swiper/types';
import { register, SwiperContainer } from 'swiper/element';
register();
@Component({
  selector: 'app-trabajos',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    TrabajosResponsiveComponent
],
  template: `
    <header>
      <h1>Portafolio</h1>
      <main>
        <div class="panel-1">
          <img src="trabajos/trabajo1.png" alt="">
          <img  src="trabajos/trabajo3.png" alt="">
        </div>
        <div class="panel-2">
          <img class="img2" src="trabajos/trabajo4.jpg" alt="">
          <img src="trabajos/trabajo2.png" alt="">
        </div>
      </main>
      <swiper-container init=false class="swiper-trabajos">
        <swiper-slide>
        <app-trabajos-responsive
        image="trabajos/trabajo1.png"
        ></app-trabajos-responsive>
        </swiper-slide>
        <swiper-slide>
        <app-trabajos-responsive
        image="trabajos/trabajo2.png">
        </app-trabajos-responsive>
        </swiper-slide>
        <swiper-slide>
        <app-trabajos-responsive
        image="trabajos/trabajo3.png"></app-trabajos-responsive>
        </swiper-slide>
        <swiper-slide>
        <app-trabajos-responsive
        image="trabajos/trabajo4.jpg"></app-trabajos-responsive>
        </swiper-slide>
      </swiper-container>
    </header>
  `,
  styleUrl: './trabajos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajosComponent {



  swiperElements = signal<SwiperContainer | null>(null);



  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-trabajos');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 1.5,
      speed: 1000,
      spaceBetween: 25,
      initialSlide: 1,
      centeredSlides: true,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }



}
