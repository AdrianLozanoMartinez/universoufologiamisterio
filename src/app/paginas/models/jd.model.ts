export class JdModel {        
    id: string;
    titulo: string;
    descripcion: string;
    fecha: string;
    novedad: boolean;
    imagen: string;
    web: string;
  
    constructor() {
        this.novedad = true;                 
    }
  }