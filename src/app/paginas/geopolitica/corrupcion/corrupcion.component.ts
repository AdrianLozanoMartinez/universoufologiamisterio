import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2'
// import { ServicivimisterioService } from '../../servicio/servicivimisterio.service';
// import { JdModel } from '../../models/jd.model'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';


// export interface Item { nombre: string; url:string; } 


// export interface Item { nombre: string; url:string; } 


@Component({
  selector: 'app-corrupcion',
  templateUrl: './corrupcion.component.html',
  styleUrls: ['./corrupcion.component.css']
})
export class CorrupcionComponent implements OnInit {

  
  /*clientes: any[] = new Array<any>();

  // jd: JdModel[] = []; 

  // private itemsCollection: AngularFirestoreCollection<Item>;                 
  // items: Observable<Item[]>;  

  constructor( private db: AngularFirestore
    // private servicio: ServicivimisterioService, private afs: AngularFirestore 
    ) { 
    // this.itemsCollection = afs.collection<Item>('civimisterio');             
    // this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    this.db.collection('civimisterios').valueChanges().subscribe((resultado)=>{//   --> VIDEO COMPRADO
      this.clientes=resultado;
    })
    /*this.servicio.getTodosElementos().subscribe( variableRespuestaTodos => {     
      console.log(variableRespuestaTodos);
      this.jd = variableRespuestaTodos;                                                  
    });
    /*Swal.fire({
      title : '<h1>¡¡¡En construcción!!!</h1>',
      text: 'Disculpen las molestias',
      icon: 'warning', 
      iconHtml: '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
      showConfirmButton: false,
      background: 'black',
    })*/
  //}

 /* borrarUnElemento(  VariableModel: JdModel, i: number ){                       

    Swal.fire({
      title: '¿Estás seguro?',
      text: `Está seguro que desea borrar a ${ VariableModel.titulo }`,     
      icon: 'question',
      showConfirmButton: true,                                                  
      showCancelButton: true,
      background: 'black',
      confirmButtonColor:'red',
      cancelButtonColor: 'green'                                                    
    }).then(variableContestacion => {                                       
      if (variableContestacion.value){                                      
          

          this.jd.splice(i, 1);                                                  
  

          this.servicio.borrarElemento( VariableModel.id ).subscribe();         
      }
    });   
           
  }*/

  clientes: any[] = new Array<any>();//   --> VIDEO COMPRADO

  constructor( private db: AngularFirestore //   --> VIDEO COMPRADO
     ) { }

  ngOnInit() {
    //this.service.getImageDetailList();//Llama al servicio a la función de conseguir listado de imagen
  this.db.collection('corrupcion').valueChanges().subscribe((resultado)=>{//   --> VIDEO COMPRADO
    this.clientes=resultado;
  })
  }
}