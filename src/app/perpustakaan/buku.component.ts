import { Component, OnInit} from '@angular/core';
import { Buku } from './buku.model';

@Component({
  selector: 'app-teman',
  templateUrl: './teman.component.html',
  styleUrls: ['./teman.component.css']
})
export class BukuComponent implements OnInit {

  temanList: Buku[] = [];
  constructor() { }

  ngOnInit() {
  }

  onBukuAdd(temanInfo: Buku) {
this.temanList.push(temanInfo);

}
  // onTemanEdit(temanInfo: Teman){
	//  //this.temanEdit = temanInfo;
	//  //console.log(this.temanEdit);
  // }

}
