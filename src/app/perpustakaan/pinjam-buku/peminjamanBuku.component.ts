import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { Buku } from '../buku.model';
import { BukuService } from '../buku.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './peminjamanBuku.component.html',
  styleUrls: ['./peminjamanBuku.component.css'],
  providers: [ BukuService ]
})

export class BukuAddComponent implements OnInit {
  jumlah = 0;
@Output()tambahBukuAdd = new EventEmitter<Buku>();
inputInfo: Buku = new Buku();
@Input() tampilBuku: Buku[];


  constructor(private temanservice: BukuService) { }

  ngOnInit() {

  }
  tambahBuku(inputJudul: HTMLInputElement) {
    this.tambahBukuAdd.emit(this.temanservice.convertBuku(this.inputInfo));
    this.inputInfo = new Buku();
console.log(this.tampilBuku);
  }
}
