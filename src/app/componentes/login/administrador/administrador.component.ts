import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosusuarioService } from '../serviciosusuario/serviciosusuario.service';
//Control y valores
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   //--> VIDEO COMPRADO

import { AngularFireStorage } from '@angular/fire/storage';//   --> VIDEO COMPRADO

import { finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  //imgSrc: string = '../../../assets/imagenes/drop-images.png';//Declaramos variable y por defecto mostramos una imagen
  
  imgSrc: string; //Quitamos de aquí para ponerlo en el reset
  selectedImage: any =null;

  formularioCliente: FormGroup;//   --> VIDEO COMPRADO
  porcentajeSubida: number =0;
  urlImagen: string=''

  constructor( private servicefire: ServiciosusuarioService,
               private router: Router,
               private db: AngularFirestore, //   --> VIDEO COMPRADO
               private storage: AngularFireStorage, //   --> VIDEO COMPRADO
               private fb:FormBuilder//   --> VIDEO COMPRADO
              ) { }

  ngOnInit() {
   //VALIDACIONES --> VIDEO COMPRADO
   this.formularioCliente = this.fb.group({
     titulo: ['', Validators.required],
     imageUrl: ['', Validators.required],
     descripcion: ['', Validators.required],
     weburl: ['', Validators.required],
     fecha: ['', Validators.required],
     novedad: ['', Validators.required],
     categoria: ['', Validators.required]
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

  salir(){                             
    this.servicefire.logout();               
    this.router.navigateByUrl('/login');     
  }

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
    this.db.collection('universoufologiamisterio').add(this.formularioCliente.value).then((termino)=>{
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
      let ruta = 'universoufologiamisterio/'+nombre+extension;
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
