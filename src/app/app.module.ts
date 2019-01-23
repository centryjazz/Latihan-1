import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BukuComponent } from './perpustakaan/buku.component';
import { BukuAddComponent } from './perpustakaan/pinjam-buku/peminjamanBuku.component';
import { DaftarPeminjamanBukuComponent } from './perpustakaan/daftar-pinjam-buku/daftarPeminjamanBuku.component';
import { HoverHightlightDirective } from './hover-hightlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuAddComponent,
    DaftarPeminjamanBukuComponent,
	HoverHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
