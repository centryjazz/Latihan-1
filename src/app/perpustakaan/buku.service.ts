import { Injectable } from '@angular/core';
import { Buku } from './buku.model';
@Injectable({
  providedIn: 'root'
})
export class BukuService {
jumlah = 0;
  constructor() { }
    convertBuku(temanInfo: Buku): Buku {
      temanInfo.isbn = temanInfo.isbn.toUpperCase();
      return temanInfo;
  }

}
