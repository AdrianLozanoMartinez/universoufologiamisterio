import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JdModel } from '../../paginas/models/jd.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../../paginas/models/file-item';

@Injectable({
  providedIn: 'root'
})
export class ServiviajeService {

  private url = 'https://universoufologiamisterios.firebaseio.com/';

  private viaje_img = 'viaje';

  constructor( private http: HttpClient, private db: AngularFirestore ) { }

  crear ( crear: JdModel ){                     
    return this.http.post(`${ this.url }/viaje.json`, crear).pipe(    
        map( (variableresp: any) => {                      
          crear.id = variableresp.name;               
            return crear;                               
        })
      );
  }

  actualizar( actualizar: JdModel ){                                             

    const idTemporal = {                                                                   
        ...actualizar
      };
  
      delete idTemporal.id;                                                                       
  
      return this.http.put(`${ this.url }/viaje/${ actualizar.id }.json`, idTemporal)         
  }

  getUnElemento(id:string){                                                       
    return this.http.get(`${ this.url }/viaje/${ id }.json`); 
  }

  getTodosElementos(){                                                    

    return this.http.get(`${ this.url }/viaje.json`).pipe( map( this.variableCrearArreglo 
    ));
  }
  private variableCrearArreglo ( variableObjeto: object ){                  
  
  const variableConst: JdModel[] = [];                                   
  console.log(variableObjeto);
  
  if ( variableObjeto === null ) {                                       
    return [];
  }
  
  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: JdModel = variableObjeto[variableKeyID];
  variableObjetoHeroe.id = variableKeyID;                                     
  
  variableConst.push( variableObjetoHeroe );
  } );
  
    return variableConst;                                                    
  }

  borrarElemento( VariableId: string ){                                             

    return this.http.delete(`${ this.url }/viaje/${ VariableId }.json`);   
  }

  private guardarImagen( imagen: { nombre: string, url: string } ) {   
    this.db.collection(`/${ this.viaje_img }`).add( imagen );     
}                                        

cargarImagenesFirebase ( imagenes:FileItem[] ) {                        
    console.log(imagenes);
    
    const storageRef = firebase.storage().ref();                     


     for ( const item of imagenes ){                             
            item.estaSubiendo = true;                              

            if( item.progreso >= 100 ){                          
            continue;
            }

        
          const UploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.viaje_img }/${ item.nombreArchivo }`).put( item.archivo );      

          
        UploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,     
            ( snapshot: firebase.storage.UploadTaskSnapshot ) => item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,                        
            ( error ) => console.error('Error al subir', error ),      
            () => {                                                
                console.log('Imagen cargada correctamente');
                UploadTask.snapshot.ref.getDownloadURL().then((url) =>{   
                item.url = url;                                       
                item.estaSubiendo = false;                             

               this.guardarImagen({                                
                  nombre: item.nombreArchivo, 
                  url: item.url
                });
            });
        });
        }
}
}