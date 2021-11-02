import { Component, OnInit } from '@angular/core';
import { PakaianService } from '../../services/pakaian/pakaian.service';
import { Pakaian } from '../../services/pakaian/pakaian.model';

@Component({
  selector: 'list-pakaian',
  templateUrl: './list-pakaian.component.html',
  styleUrls: ['./list-pakaian.component.css']
})
export class ListPakaianComponent implements OnInit {

  Pakaians: Pakaian[];

  constructor(private pakaianService: PakaianService) { }

  ngOnInit(): void {
    this.pakaianService.getPakaianList().subscribe(res => {
      this.Pakaians = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Pakaian
        };
      })
      console.log(this.Pakaians);
    }); 
    console.log("try");
  }
  removePakaian = pakaian => this.pakaianService.deletePakaian(pakaian);
}
