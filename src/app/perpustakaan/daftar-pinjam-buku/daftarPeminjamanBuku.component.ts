import { Component, OnInit ,  EventEmitter , Output , Input } from '@angular/core';
import { Buku } from '../buku.model';
import { BukuAddComponent } from '../pinjam-buku/peminjamanBuku.component';


@Component({
  selector: 'app-teman-tampil',
  templateUrl: './daftarPeminjamanBuku.html',
  styleUrls: ['./daftarPeminjamanBuku.component.css']
})

export class DaftarPeminjamanBukuComponent implements OnInit {
jumlah = 0;
  @Input() tampilBuku: Buku[];

@Output() dariChildKeParent: EventEmitter<Buku> = new EventEmitter();
  constructor() {

}
  ngOnInit() {

  }
showname(idx: number) {
this.dariChildKeParent.emit(this.tampilBuku[idx]);
console.log(this.tampilBuku[idx]);
}

}
