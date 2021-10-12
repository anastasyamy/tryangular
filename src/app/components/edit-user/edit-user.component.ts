import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editForm: FormGroup;
  userRef: any


  constructor(public userService: UserService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router) {this.editForm = this.formBuilder.group({
      nis: [''],
      nama: [''],
      ttl: [''],
      alamat: [''],
      goldar: [''],
      email: [''],
      kontak: [''],

    }) }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.userService.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        nis: [this.userRef.nis],
        nama: [this.userRef.nama],
        ttl: [this.userRef.ttl],
        alamat: [this.userRef.alamat],
        goldar: [this.userRef.goldar],
        email: [this.userRef.email],
        kontak: [this.userRef.kontak]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['list-users']);
  };
}
