import { Component, OnInit, OnDestroy } from '@angular/core';
import { SucursalesService } from '../../services/sucursales/sucursales.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public sucursales: any;
  public subscription_sucursales: Subscription;

  constructor(private sucursales_service: SucursalesService) { }

  ngOnInit(): void {
    this.subscription_sucursales = this.sucursales_service.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  ngOnDestroy(){
    this.subscription_sucursales.unsubscribe();
  }

}
