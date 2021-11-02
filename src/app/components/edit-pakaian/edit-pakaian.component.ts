import { Component, OnInit } from '@angular/core';
import { PakaianService } from '../../services/pakaian/pakaian.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-pakaian',
  templateUrl: './edit-pakaian.component.html',
  styleUrls: ['./edit-pakaian.component.css']
})
export class EditPakaianComponent implements OnInit {
  public pakaianForm: FormGroup;
  pakaianRef: any

  constructor(public pakaianService: PakaianService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router) { this.pakaianForm = this.formBuilder.group({
      Nama: [''],
      Kontak: [''],
      Alamat: [''],
      Model: [''],
      Ukuran: [''],
      
    }) }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.pakaianService.getPakaianDoc(id).subscribe(res => {
      this.pakaianRef = res;
      this.pakaianForm = this.formBuilder.group({
        Nama: [this.pakaianRef.Nama],
        Kontak: [this.pakaianRef.Kontak],
        Alamat: [this.pakaianRef.Alamat],
        Model: [this.pakaianRef.Model],
        Ukuran: [this.pakaianRef.Ukuran],
        
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.pakaianService.updatePakaian(this.pakaianForm.value, id);
    this.router.navigate(['list-pakaian']);
  };
}

