import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';

import { AppComponent } from './app.component';

import { ErrorComponent } from './componentes/error/error.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

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
import { UniversoComponent } from './paginas/universo/universo.component';
import { ExoplanetasComponent } from './paginas/universo/exoplanetas/exoplanetas.component';
import { MarteComponent } from './paginas/universo/marte/marte.component';
import { LunaComponent } from './paginas/universo/luna/luna.component';
import { NegroComponent } from './paginas/universo/negro/negro.component';
import { GusanoComponent } from './paginas/universo/gusano/gusano.component';
import { EspiritusComponent } from './paginas/misterios/espiritus/espiritus.component';
import { CasasComponent } from './paginas/misterios/casas/casas.component';
import { ViajesComponent } from './paginas/misterios/viajes/viajes.component';
import { LoginComponent } from './componentes/login/login.component';

import { AdministradorComponent } from './componentes/login/administrador/administrador.component';

import { LoginguardGuard } from './componentes/login/guard/loginguard.guard';                                                                        //Guard

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
import { ExoplanetasadministradorComponent } from './paginas/universo/exoplanetasadministrador/exoplanetasadministrador.component';
import { GusanoadministradorComponent } from './paginas/universo/gusanoadministrador/gusanoadministrador.component';
import { LunaadministradorComponent } from './paginas/universo/lunaadministrador/lunaadministrador.component';
import { MarteadministradorComponent } from './paginas/universo/marteadministrador/marteadministrador.component';
import { NegroadministradorComponent } from './paginas/universo/negroadministrador/negroadministrador.component';

//Nuevo tutorial ingles enlazar base de datos con imagen firebase
import { SubidaComponent } from './paginas/subida/subida.component';
import { MostrarComponent } from './paginas/mostrar/mostrar.component';

import { VeradministradorComponent } from './paginas/home/veradministrador/veradministrador.component';
import { CrearadministradorComponent } from './paginas/home/crearadministrador/crearadministrador.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },                                    
  { path: 'home', component: HomeComponent},                     
  { path: 'pie', component: PieComponent},                       
  { path: 'cabecera', component: CabeceraComponent},             
  { path: 'appcomponente', component: AppComponent },
  { path: 'ufologia', component: UfologiaComponent, canActivate: [LoginguardGuard]},
  { path: 'ovnis', component: OvnisComponent, canActivate: [LoginguardGuard]},
  { path: 'archivos', component: ArchivosComponent, canActivate: [LoginguardGuard]},
  { path: 'bases', component: BasesComponent, canActivate: [LoginguardGuard]},
  { path: 'abducciones', component: AbduccionesComponent, canActivate: [LoginguardGuard]},
  { path: 'civilizaciones', component: CivilizacionesComponent, canActivate: [LoginguardGuard]},
  { path: 'templos', component: TemplosComponent, canActivate: [LoginguardGuard]},
  { path: 'civimisterios', component: CivimisteriosComponent, canActivate: [LoginguardGuard]},
  { path: 'mitologia', component: MitologiaComponent, canActivate: [LoginguardGuard]},
  { path: 'geopolitica', component: GeopoliticaComponent, canActivate: [LoginguardGuard]},
  { path: 'corrupcion', component: CorrupcionComponent, canActivate: [LoginguardGuard]},
  { path: 'iluminatis', component: IluminatisComponent, canActivate: [LoginguardGuard]},
  { path: 'universo', component: UniversoComponent, canActivate: [LoginguardGuard]},
  { path: 'exoplanetas', component: ExoplanetasComponent, canActivate: [LoginguardGuard]},
  { path: 'marte', component: MarteComponent, canActivate: [LoginguardGuard]},
  { path: 'luna', component: LunaComponent, canActivate: [LoginguardGuard]},
  { path: 'negro', component: NegroComponent, canActivate: [LoginguardGuard]},
  { path: 'gusano', component: GusanoComponent, canActivate: [LoginguardGuard]},
  { path: 'espiritus', component: EspiritusComponent, canActivate: [LoginguardGuard]},
  { path: 'casas', component: CasasComponent, canActivate: [LoginguardGuard]},
  { path: 'viajes', component: ViajesComponent, canActivate: [LoginguardGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'administrador', component: AdministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'cma/:id', component: CivimisteriosadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'mia/:id', component: MitologiaadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'tea/:id', component: TemplosadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'coa/:id', component: CorrupcionadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'ila/:id', component: IluminatisadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'caa/:id', component: CasasadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'esa/:id', component: EspiritusadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'via/:id', component: ViajesadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'aba/:id', component: AbduccionesadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'ara/:id', component: ArchivosadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'baa/:id', component: BasesadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'ova/:id', component: OvnisadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'exax/:id', component: ExoplanetasadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'aga/:id', component: GusanoadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'lua/:id', component: LunaadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'mma/:id', component: MarteadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'nea/:id', component: NegroadministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'civimisteriocliente', component: CivimisterioclienteComponent, }, 
  { path: 'mitologiacliente', component: MitologiaclienteComponent, }, 
  { path: 'temploscliente', component: TemplosclienteComponent, }, 
  { path: 'corrupcioncliente', component: CorrupcionclienteComponent, }, 
  { path: 'iluminatiscliente', component: IluminatisclienteComponent, }, 
  { path: 'casascliente', component: CasasclienteComponent, }, 
  { path: 'espirituscliente', component: EspiritusclienteComponent, }, 
  { path: 'viajescliente', component: ViajesclienteComponent, }, 
  { path: 'abduccionescliente', component: AbduccionesclienteComponent, }, 
  { path: 'archivoscliente', component: ArchivosclienteComponent, }, 
  { path: 'basescliente', component: BasesclienteComponent, }, 
  { path: 'ovniscliente', component: OvnisclienteComponent, }, 
  { path: 'exoplanetascliente', component: ExoplanetasclienteComponent, }, 
  { path: 'gusanocliente', component: GusanoclienteComponent, }, 
  { path: 'lunacliente', component: LunaclienteComponent, }, 
  { path: 'martecliente', component: MarteclienteComponent, }, 
  { path: 'negrocliente', component: NegroclienteComponent, }, 
  { path: 'veradministrador', component: VeradministradorComponent, }, 
  { path: 'crearadministrador/:id', component: CrearadministradorComponent, }, 
  //Nuevo tutorial ingles enlazar base de datos con imagen firebase
  { path: 'subir', component: SubidaComponent, }, 
  { path: 'mostrar', component: MostrarComponent, }, 
  { path: '**', component: ErrorComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);