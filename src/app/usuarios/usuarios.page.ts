import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  listado = [];
  id;
  constructor(private api: ApirestService,    public alertController: AlertController, 
    private alertControl    : AlertController,
    private router          : Router) { 
    
  }

  

  ngOnInit() {
  }

  async login(usuario :HTMLInputElement, clave:HTMLInputElement)
  {
    const user = usuario.value;
    const cla = clave.value;
    this.api.getUsers()
    this.listado = this.api.listado;
    
    if(this.listado.length > 0){
      for(let item of this.listado){
        if(user == item.username && cla == '1234'){
          localStorage.setItem('id',item.id);
          console.log(item.id)
          this.router.navigate(['/home'])
               
        }
        else{
          console.log('Credenciales incorrectas')
        }

      }
    }
    
  }
 
}
