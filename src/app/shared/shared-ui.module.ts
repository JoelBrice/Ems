import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCardComponent } from './ui/section-card/section-card.component';

@NgModule({
  declarations: [SectionCardComponent],
  imports: [CommonModule],
  exports: [SectionCardComponent]
})
export class SharedUiModule {}
