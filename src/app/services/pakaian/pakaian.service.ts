import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pakaian } from './pakaian.model';

@Injectable({
  providedIn: 'root'
})
export class PakaianService {
    constructor(private angularFirestore: AngularFirestore) { }
    getPakaianDoc(id) {
      return this.angularFirestore
      .collection('pakaian-collection')
      .doc(id)
      .valueChanges()
  }
  getPakaianList() { 
    return this.angularFirestore
    .collection("pakaian-collection")
    .snapshotChanges();
   }
   createPakaian(pakaian: Pakaian) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("pakaian-collection")
        .add(pakaian)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }
  
  deletePakaian(pakaian) {
    return this.angularFirestore
      .collection("pakaian-collection")
      .doc(pakaian.id)
      .delete();
  }
  
  updatePakaian(pakaian: Pakaian, id) {
    return this.angularFirestore
      .collection("pakaian-collection")
      .doc(id)
      .update({
        Nama: pakaian.Nama,
        Kontak: pakaian.Kontak,
        Alamat: pakaian.Alamat,
        Model: pakaian.Model,
        Ukuran: pakaian.Ukuran,
        
      });
  }
  }

