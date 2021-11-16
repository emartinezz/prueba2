import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApirestService } from '../apirest.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  listado = [];
  cosas = [];
  comen = [];
  comentario;
  constructor(private activatedRouter : ActivatedRoute,
              private apirestService:ApirestService,
              private api: ApirestService,
              private router          : Router,) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(p => {
      const id = p.get('id');
      console.log(id);
      this.apirestService.getUser(id);
      this.comentario = id
      console.log(this.comentario);
      
    })
    this.api.getComent(this.comentario);
    this.comen = this.api.comen;
  }
  async atras(){
    this.router.navigate(['/home'])
    
  }

}
