import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppShellComponent } from './layout/app-shell.component';

@NgModule({
  declarations: [NavbarComponent, AppShellComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppShellComponent]
})
export class CoreModule {}
