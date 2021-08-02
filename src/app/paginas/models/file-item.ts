export class FileItem{

    public archivo: File;                              
    public nombreArchivo: string;                  
    public url: string;                             
    public estaSubiendo: boolean;                   
    public progreso: number;                        

    constructor( archivo2: File ){              

        this.archivo = archivo2;                    
        this.nombreArchivo = archivo2.name;         
        this.estaSubiendo = false;                  
        this.progreso = 0;                          

    }
}