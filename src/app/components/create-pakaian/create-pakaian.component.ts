import { Component, OnInit } from '@angular/core';
import { PakaianService } from '../../services/pakaian/pakaian.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'create-pakaian',
  templateUrl: './create-pakaian.component.html',
  styleUrls: ['./create-pakaian.component.css']
})
export class CreatePakaianComponent implements OnInit {

  public pakaianForm: FormGroup;

  constructor(public pakaianService: PakaianService,
    public formBuilder: FormBuilder,
    public router: Router) { this.pakaianForm = this.formBuilder.group({
      Nama: [''],
      Kontak: [''],
      Alamat: [''],
      Model: [''],
      Ukuran: [''],
      
    })       }

  ngOnInit(): void {
  }
  onSubmit() {
    this.pakaianService.createPakaian(this.pakaianForm.value);
    this.router.navigate(['list-pakaian']); 
   };
}
