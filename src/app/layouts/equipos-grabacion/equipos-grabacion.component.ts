import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { EquiposComponent } from "../../components/equipos/equipos.component";
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-equipos-grabacion',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    EquiposComponent
],
  template: `
    <header>
      <h1>Conoce nuestros equipos  de grabación y fotografía</h1>
      <main>
        <swiper-container init=false class="swiper-equipos">
          <swiper-slide>
              <app-equipos
              title="Blackmagic Pocket Cinema  6K Pr0"
              description="Camara de video y fotografía profesional"
              image="equipos/blackmagic-pocket-cinema-6k-pro.png"></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="Canon EOS 250D"
              description="Camara de video y fotografia profesional"
              image="equipos/canon-eos-250d.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="Sony A72"
              description="Camara de video y fotografia profesional"
              image="equipos/sony-a72.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="DJI Ronin RS3 mini"
              description="Estabilizador portátil y ligero. Cuenta con una potente capacidad de carga útil."
              image="equipos/dji-ronin-rs3-mini.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="Micrófonos de estudio"
              description="Micrófonos profesionales capturan audio preciso, sensible y de alta calidad."
              image="equipos/microfono-de-estudio.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="Hollyland lark m2"
              description="Micrófono inalámbrico ultraligero. Es perfecto para vloggers, podcasters, etc."
              image="equipos/hollyland-lark-m2.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="RØDECaster Pro II "
              description="Consola versátil diseñada para podcasting, grabación, mezcla y transmisión profesional."
              image="equipos/rodecaster-pro-2.png"
              ></app-equipos>
          </swiper-slide>
          <swiper-slide>
              <app-equipos
              title="Blackmagic ATEM Mini Pro"
              description="Conmutador compacto para transmisión en vivo, grabación, y producción de video."
              image="equipos/blackmagic-atem-mini-pro.png"></app-equipos>
          </swiper-slide>
          
        </swiper-container>
      </main>
    </header>

  `,
  styleUrl: './equipos-grabacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquiposGrabacionComponent {

  swiperElements = signal<SwiperContainer | null>(null);



  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-equipos');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 5000,
      spaceBetween: 50,
      initialSlide: 2,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
      centeredSlides: true,
      breakpoints: {
        0:{
          slidesPerView:1.5,
        },
        1000: {
          slidesPerView:2,
        },
        1200: {
          slidesPerView:3,
        },
        1400: {
          slidesPerView:4,
        },
        1500: {
          slidesPerView:4.3,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }


}
