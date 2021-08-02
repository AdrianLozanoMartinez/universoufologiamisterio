import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { JdModel } from '../../models/jd.model';
// import { NgForm } from '@angular/forms';
// import { ServicivimisterioService } from '../../servicio/servicivimisterio.service';
// import Swal from 'sweetalert2';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { FileItem } from '../../models/file-item';
// import { Router } from '@angular/router';
//Control y valores
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   //--> VIDEO COMPRADO

import { AngularFireStorage } from '@angular/fire/storage';//   --> VIDEO COMPRADO

// import { finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-crearadministrador',
  templateUrl: './crearadministrador.component.html',
  styleUrls: ['./crearadministrador.component.css']
})
export class CrearadministradorComponent implements OnInit {
/*jd = new JdModel();   

  archivos: FileItem[] = [];  

  estaSobreElemento = false;   

  constructor( private servicio: ServicivimisterioService,
               private Route: ActivatedRoute) { }


  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
    console.log(variable_Id);

    if ( variable_Id !== 'nuevo' ){                                         
    this.servicio.getUnElemento(variable_Id).subscribe( (variable_respuesta: JdModel) => {   
        console.log(variable_respuesta);

        this.jd = variable_respuesta;                                     
        this.jd.id = variable_Id;                                      
      });
      }
  }

  guardar( coge: NgForm ){        

    if ( coge.invalid ){          
       console.log('Formulario no válido');
        return;
    }

    Swal.fire({                                                                                    
      title: 'Espere',                                                                                 
      text: 'Guardando información',                                                                   
      icon: 'info',                                                                                    
      allowOutsideClick: false,
      background: 'black'                                                                         
      });
      Swal.showLoading();                                                                                 
  
      let peticion: Observable<any>;   

    if (this.jd.id){                                                                               

      peticion = this.servicio.actualizar(this.jd);                          
      peticion.subscribe( respuesta => {

        Swal.fire({                                                                                  
        title: this.jd.titulo,                                                                     
        text: 'Se actualizó correctamente',                                                              
        icon: 'success',
        background: 'black'                                                                                       
        });
      });

  }else{

        peticion = this.servicio.crear(this.jd);                                
        peticion.subscribe( variableRespu => {                                               
        Swal.fire({
        title: this.jd.titulo,
        text: 'Se guardó correctamente',
        icon: 'success',
        background: 'black'     
        });
    });

  }

    console.log(coge);                   
    console.log(this.jd);                         

  }

 cargarImagenes(){                                                  
    this.servicio.cargarImagenesFirebase( this.archivos );        
  }

  limpiarArchivos(){                                    
    this.archivos = [];                                
}*/


//imgSrc: string = '../../../assets/imagenes/drop-images.png';//Declaramos variable y por defecto mostramos una imagen
jd = true;

imgSrc: string; //Quitamos de aquí para ponerlo en el reset
selectedImage: any =null;

formularioCliente: FormGroup;//   --> VIDEO COMPRADO
porcentajeSubida: number =0;
urlImagen: string=''

constructor( 
            //  private router: Router,
             private db: AngularFirestore, //   --> VIDEO COMPRADO
             private storage: AngularFireStorage, //   --> VIDEO COMPRADO
             private fb:FormBuilder//   --> VIDEO COMPRADO
            ) { }

ngOnInit() {
 //VALIDACIONES --> VIDEO COMPRADO
 this.formularioCliente = this.fb.group({
   titulo: ['', Validators.required],
   imageUrl: [''],
   descripcion: [''],
   weburl: [''],
   fecha: [''],
   novedad: [''],
   categoria: ['']
 })
  this.resetform();//del otro video ingles
}

//Mostrar previamente la imagen antes de subirla
/*showPreview(event:any){
    if(event.target.files && event.target.files[0]){//Si cumple muestra.
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;//carga (onload) la imagen (imgSrc) como string declarada arriba igual al resultado (result)
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];//selectedImage declaramos arriba como null. selectedImage coge la imagen
    }
    else{//Sino se muestra por defecto esta imagen
      this.imgSrc = '../../../assets/imagenes/drop-images.png';
      this.selectedImage = null;//selectedImage se declara null para no coger imagen
    }
}*/



resetform(){//del otro video ingles
  this.formularioCliente.reset();
  this.formularioCliente.setValue({
    titulo: '',
    imageUrl: '',
    descripcion: '',
    weburl: '',
    fecha: '',
    novedad: '',
    categoria: ''
  });
  this.imgSrc='../../../assets/imagenes/drop-images.png';//Lo quitamos de la variable de arriba para reiniciarlo aquí
  this.selectedImage=null;//Ponemos la selección en nulo para quitarla al reiniciar
}

//   --> VIDEO COMPRADO
agregar(){
  this.formularioCliente.value.imgUrl= this.urlImagen
  console.log(this.formularioCliente.value);
  // ;
  this.db.collection('ultimasnoticias').add(this.formularioCliente.value).then((termino)=>{
    console.log('Registro creado');
    this.resetform();//del otro video ingles
  })
}
//   --> VIDEO COMPRADO
subirImagen(evento){
  if(evento.target.files.length>0){

    //ingles
    const reader = new FileReader();
    reader.onload = (e:any) => this.imgSrc = e.target.result;//carga (onload) la imagen (imgSrc) como string declarada arriba igual al resultado (result)
    reader.readAsDataURL(evento.target.files[0]);
    this.selectedImage = evento.target.files[0];//selectedImage declaramos arriba como null. selectedImage coge la imagen

    //comprado
    let nombre = new Date().getTime().toString()
    let archivo = evento.target.files[0] //o file o archivo
    console.log(evento);
    let extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'))
    let ruta = 'ultimasnoticias/'+nombre+extension;
    const referencia = this.storage.ref(ruta)
    const tarea = referencia.put(archivo)
    tarea.then((objeto)=> {
      console.log('Imagen subida')

      referencia.getDownloadURL().subscribe((url)=>{
        console.log(url);
        this.urlImagen=url;
      })
    })
    tarea.percentageChanges().subscribe((porcentaje)=>{
      this.porcentajeSubida = parseInt( porcentaje.toString());
    })
  }
  else{//Sino se muestra por defecto esta imagen
    this.imgSrc = '../../../assets/imagenes/drop-images.png';
    this.selectedImage = null;//selectedImage se declara null para no coger imagen
  }
}
}