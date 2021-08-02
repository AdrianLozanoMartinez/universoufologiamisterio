import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../login/model/usuario.model';
import { ServiciosusuarioService } from '../login/serviciosusuario/serviciosusuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel ();
  botonRecordar = false;

  constructor( private servicefire: ServiciosusuarioService,
               private router: Router ) { }

  ngOnInit() {
    if( localStorage.getItem('email') ){                    
      this.usuario.email = localStorage.getItem('email');     
      this.botonRecordar = true;                              
      }
  }

  login (form:NgForm){                                          
    if(form.invalid){                                               
    return;
    }

    Swal.fire({                                                  
      allowOutsideClick: false,                                       
      icon: 'info',                                                   
      text: 'Espere por favor',
      background: 'black'
    });
      
      Swal.showLoading();

    // console.log(this.usuario);                                          
    // console.log('Imprimir si el formulario es válido');


    this.servicefire.login( this.usuario ).subscribe( resp => {   
      // console.log (resp); 

      Swal.close(); 

      if( this.botonRecordar ){                        
        localStorage.setItem('email', this.usuario.email);   
        }
        
      this.router.navigateByUrl('/administrador');

      }, (err) => {                                                 
      
          console.log (err);
          console.log (err.error.error.message);
      
          Swal.fire({                                              
            icon: 'error',                                              
            title: 'Error al autenticar',                               
            text: err.error.error.message
          });

        });

  }
  
}
