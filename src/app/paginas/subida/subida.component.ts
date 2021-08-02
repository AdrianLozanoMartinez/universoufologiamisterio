import { Component, OnInit } from '@angular/core';
//COMPONENTE DE AGREGAR CLIENTE EN VIDEO COMPRADO

//Control y valores
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   //--> VIDEO COMPRADO

import { AngularFireStorage } from '@angular/fire/storage';//   --> VIDEO COMPRADO

import { finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-subida',
  templateUrl: './subida.component.html',
  styleUrls: ['./subida.component.css']
})
export class SubidaComponent implements OnInit {
//Imagen
//imgSrc: string = '../../../assets/imagenes/drop-images.png';//Declaramos variable y por defecto mostramos una imagen
  
  /*imgSrc: string; //Quitamos de aquí para ponerlo en el reset
  selectedImage: any =null;

  //Al hacer submit (onSubmit)
  //isSubmitted: boolean=false;
  isSubmitted: boolean;//Quitamos el false porque lo controlamos abajo en el reset

  //Validar
  formTemplate = new FormGroup({//Para manejar los valores
    caption : new FormControl('', Validators.required),
    category : new FormControl(''),
    imageUrl : new FormControl('',Validators.required)
  })
*/
formularioCliente: FormGroup;//   --> VIDEO COMPRADO
porcentajeSubida: number =0;
urlImagen: string=''

  constructor( private storage: AngularFireStorage, //   --> VIDEO COMPRADO
    private fb:FormBuilder,//   --> VIDEO COMPRADO
    private db: AngularFirestore ) { }//   --> VIDEO COMPRADO

  ngOnInit() {
   //VALIDACIONES --> VIDEO COMPRADO
   this.formularioCliente = this.fb.group({
     nombre: ['', Validators.required],
     category: ['', Validators.required],
     correo: ['', Validators.required],
     cedula: ['', Validators.required],
     fechaNacimiento: ['', Validators.required],
     telefono: ['', Validators.required],
     imageUrl: ['', Validators.required]
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
  }

  //Pulsar botón
  onSubmit(formValue){
    this.isSubmitted = true;
    //Si el formulario es valido lo metemos en la carpeta que elijamos (categoria - bird, vehicle, animal)
    if(this.formTemplate.valid){//Si la variable que subimos formTemplate es valida, ya que es la que controla todo (required...) que está arriba
        //var filePath = `images/${this.selectedImage.name}_${new Date().getTime()}`;//images/ es la carpeta fija. metemos la imagen seleccionada (el nombre solo (name)) con el tiempo (new Date().getTime())
        var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;//${formValue.category}/ es la carpeta dinámica, lo metemos según lo que elijamos si vehiculo, bird o animal que declaramos antes
        //split('.').slice(0,-1).join('.') para que no se vea la extensión 
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
          finalize(()=>{
            fileRef.getDownloadURL().subscribe((url)=>{
              formValue['imageUrl'] = url;
              //Llama a la función de coger (push) la imagen y metemos formValue que es el valor que cogemos de todo el formulario
              this.service.insertImageDetails(formValue);
              //Para reiniciar al pulsar botón
              this.resetform();
            })
          })
        ).subscribe();
    }
  }

//Control
 get formControls(){
    return this.formTemplate['controls'];//formTemplate, lo coge de la zona de validar y controls del grupo de control de formTemplate
  }*/

  resetform(){//del otro video ingles
    this.formularioCliente.reset();
    this.formularioCliente.setValue({
      nombre: '',
      category: '',
      correo: '',
      cedula: '',
      fechaNacimiento: '',
      telefono: '',
      imageUrl: ''
    });
    
    
    
    /*
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption:'',
      imageUrl:'',
      category:'Animal'
    });
    this.imgSrc='../../../assets/imagenes/drop-images.png';//Lo quitamos de la variable de arriba para reiniciarlo aquí
    this.selectedImage=null;//Ponemos la selección en nulo para quitarla al reiniciar
    this.isSubmitted=false;//Lo quitamos de la variable de arriba para reiniciarlo aquí*/
  }
//   --> VIDEO COMPRADO
  agregar(){
    this.formularioCliente.value.imgUrl= this.urlImagen
    console.log(this.formularioCliente.value);
    this.db.collection('universoufologiamisterio').add(this.formularioCliente.value).then((temrino)=>{
      console.log('Registro creado');
      this.resetform();//del otro video ingles
    })
  }
//   --> VIDEO COMPRADO
  subirImagen(evento){
    if(evento.target.files.length>0){

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
  }


}
