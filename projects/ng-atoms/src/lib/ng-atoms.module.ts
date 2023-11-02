import { NgModule } from '@angular/core';
import { CircleComponent } from './circle/circle.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { ImageComponent } from './image/image.component';
import {NgOptimizedImage} from "@angular/common";
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { ModalComponent } from './modal/modal.component';
import { Rotate180Component } from './rotate180/rotate180.component';



@NgModule({
  declarations: [
    CircleComponent,
    BackgroundImageComponent,
    ImageComponent,
    HeroImageComponent,
    ButtonComponent,
    LinkComponent,
    ModalComponent,
    Rotate180Component,
  ],
  imports: [
    NgOptimizedImage
  ],
  exports: [
    CircleComponent,
    BackgroundImageComponent,
    ImageComponent,
    HeroImageComponent,
    ButtonComponent,
    LinkComponent,
    ModalComponent,
    Rotate180Component,
  ]
})
export class NgAtomsModule { }
