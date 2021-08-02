import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ErrorComponent } from './componentes/error/error.component';

import { HomeComponent } from './paginas/home/home.component';
import { UfologiaComponent } from './paginas/ufologia/ufologia.component';
import { OvnisComponent } from './paginas/ufologia/ovnis/ovnis.component';
import { ArchivosComponent } from './paginas/ufologia/archivos/archivos.component';
import { BasesComponent } from './paginas/ufologia/bases/bases.component';
import { AbduccionesComponent } from './paginas/ufologia/abducciones/abducciones.component';
import { CivilizacionesComponent } from './paginas/civilizaciones/civilizaciones.component';
import { TemplosComponent } from './paginas/civilizaciones/templos/templos.component';
import { CivimisteriosComponent } from './paginas/civilizaciones/civimisterios/civimisterios.component';
import { MitologiaComponent } from './paginas/civilizaciones/mitologia/mitologia.component';
import { GeopoliticaComponent } from './paginas/geopolitica/geopolitica.component';
import { CorrupcionComponent } from './paginas/geopolitica/corrupcion/corrupcion.component';
import { IluminatisComponent } from './paginas/geopolitica/iluminatis/iluminatis.component';
import { EspiritusComponent } from './paginas/misterios/espiritus/espiritus.component';
import { CasasComponent } from './paginas/misterios/casas/casas.component';
import { ViajesComponent } from './paginas/misterios/viajes/viajes.component';
import { UniversoComponent } from './paginas/universo/universo.component';
import { ExoplanetasComponent } from './paginas/universo/exoplanetas/exoplanetas.component';
import { MarteComponent } from './paginas/universo/marte/marte.component';
import { LunaComponent } from './paginas/universo/luna/luna.component';
import { NegroComponent } from './paginas/universo/negro/negro.component';
import { GusanoComponent } from './paginas/universo/gusano/gusano.component';
import { LoginComponent } from './componentes/login/login.component';

import { AdministradorComponent } from './componentes/login/administrador/administrador.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//CRUD
import { CivimisteriosadministradorComponent } from './paginas/civilizaciones/civimisteriosadministrador/civimisteriosadministrador.component';
import { MitologiaadministradorComponent } from './paginas/civilizaciones/mitologiaadministrador/mitologiaadministrador.component';
import { TemplosadministradorComponent } from './paginas/civilizaciones/templosadministrador/templosadministrador.component';
import { CorrupcionadministradorComponent } from './paginas/geopolitica/corrupcionadministrador/corrupcionadministrador.component';
import { IluminatisadministradorComponent } from './paginas/geopolitica/iluminatisadministrador/iluminatisadministrador.component';
import { CasasadministradorComponent } from './paginas/misterios/casasadministrador/casasadministrador.component';
import { EspiritusadministradorComponent } from './paginas/misterios/espiritusadministrador/espiritusadministrador.component';
import { ViajesadministradorComponent } from './paginas/misterios/viajesadministrador/viajesadministrador.component';
import { AbduccionesadministradorComponent } from './paginas/ufologia/abduccionesadministrador/abduccionesadministrador.component';
import { ArchivosadministradorComponent } from './paginas/ufologia/archivosadministrador/archivosadministrador.component';
import { BasesadministradorComponent } from './paginas/ufologia/basesadministrador/basesadministrador.component';
import { OvnisadministradorComponent } from './paginas/ufologia/ovnisadministrador/ovnisadministrador.component';
import { ExoplanetasadministradorComponent } from './paginas/universo/exoplanetasadministrador/exoplanetasadministrador.component';
import { GusanoadministradorComponent } from './paginas/universo/gusanoadministrador/gusanoadministrador.component';
import { LunaadministradorComponent } from './paginas/universo/lunaadministrador/lunaadministrador.component';
import { MarteadministradorComponent } from './paginas/universo/marteadministrador/marteadministrador.component';
import { NegroadministradorComponent } from './paginas/universo/negroadministrador/negroadministrador.component';
import { CivimisterioclienteComponent } from './paginas/civilizaciones/civimisteriocliente/civimisteriocliente.component';
import { MitologiaclienteComponent } from './paginas/civilizaciones/mitologiacliente/mitologiacliente.component';
import { TemplosclienteComponent } from './paginas/civilizaciones/temploscliente/temploscliente.component';
import { CorrupcionclienteComponent } from './paginas/geopolitica/corrupcioncliente/corrupcioncliente.component';
import { IluminatisclienteComponent } from './paginas/geopolitica/iluminatiscliente/iluminatiscliente.component';
import { CasasclienteComponent } from './paginas/misterios/casascliente/casascliente.component';
import { EspiritusclienteComponent } from './paginas/misterios/espirituscliente/espirituscliente.component';
import { ViajesclienteComponent } from './paginas/misterios/viajescliente/viajescliente.component';
import { AbduccionesclienteComponent } from './paginas/ufologia/abduccionescliente/abduccionescliente.component';
import { ArchivosclienteComponent } from './paginas/ufologia/archivoscliente/archivoscliente.component';
import { BasesclienteComponent } from './paginas/ufologia/basescliente/basescliente.component';
import { OvnisclienteComponent } from './paginas/ufologia/ovniscliente/ovniscliente.component';
import { ExoplanetasclienteComponent } from './paginas/universo/exoplanetascliente/exoplanetascliente.component';
import { GusanoclienteComponent } from './paginas/universo/gusanocliente/gusanocliente.component';
import { LunaclienteComponent } from './paginas/universo/lunacliente/lunacliente.component';
import { MarteclienteComponent } from './paginas/universo/martecliente/martecliente.component';
import { NegroclienteComponent } from './paginas/universo/negrocliente/negrocliente.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { DirectivageneralDirective } from './paginas/directivageneral.directive';

//Nuevo tutorial ingles enlazar base de datos con imagen firebase
import { SubidaComponent } from './paginas/subida/subida.component';
import { MostrarComponent } from './paginas/mostrar/mostrar.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms';
import { VeradministradorComponent } from './paginas/home/veradministrador/veradministrador.component';
import { CrearadministradorComponent } from './paginas/home/crearadministrador/crearadministrador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PieComponent,
    CabeceraComponent,
    UfologiaComponent,
    OvnisComponent,
    ArchivosComponent,
    BasesComponent,
    AbduccionesComponent,
    CivilizacionesComponent,
    TemplosComponent,
    CivimisteriosComponent,
    MitologiaComponent,
    GeopoliticaComponent,
    CorrupcionComponent,
    IluminatisComponent,
    EspiritusComponent,
    CasasComponent,
    ViajesComponent,
    UniversoComponent,
    ExoplanetasComponent,
    MarteComponent,
    LunaComponent,
    NegroComponent,
    GusanoComponent,
    LoginComponent,
    AdministradorComponent,
    CivimisteriosadministradorComponent,
    MitologiaadministradorComponent,
    TemplosadministradorComponent,
    CorrupcionadministradorComponent,
    IluminatisadministradorComponent,
    CasasadministradorComponent,
    EspiritusadministradorComponent,
    ViajesadministradorComponent,
    AbduccionesadministradorComponent,
    ArchivosadministradorComponent,
    BasesadministradorComponent,
    OvnisadministradorComponent,
    ExoplanetasadministradorComponent,
    GusanoadministradorComponent,
    LunaadministradorComponent,
    MarteadministradorComponent,
    NegroadministradorComponent,
    CivimisterioclienteComponent,
    MitologiaclienteComponent,
    TemplosclienteComponent,
    CorrupcionclienteComponent,
    IluminatisclienteComponent,
    CasasclienteComponent,
    EspiritusclienteComponent,
    ViajesclienteComponent,
    AbduccionesclienteComponent,
    ArchivosclienteComponent,
    BasesclienteComponent,
    OvnisclienteComponent,
    ExoplanetasclienteComponent,
    GusanoclienteComponent,
    LunaclienteComponent,
    MarteclienteComponent,
    NegroclienteComponent,
    DirectivageneralDirective,
    SubidaComponent,
    MostrarComponent,
    VeradministradorComponent,
    CrearadministradorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),   
    AngularFirestoreModule,
    //Nuevo tutorial ingles enlazar base de datos con imagen firebase
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
