//images
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  clientes: any[] = new Array<any>();//   --> VIDEO COMPRADO

  constructor( private db: AngularFirestore //   --> VIDEO COMPRADO
     ) { }

  ngOnInit() {
    //this.service.getImageDetailList();//Llama al servicio a la función de conseguir listado de imagen
  this.db.collection('universoufologiamisterio').valueChanges().subscribe((resultado)=>{//   --> VIDEO COMPRADO
    this.clientes=resultado;
  })
  }

}
