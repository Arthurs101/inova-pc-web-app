import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import {InventoryPanelComponent} from './Panels/inventory-panel/inventory-panel.component';
@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      NotFoundComponent,
      MainDashboardComponent,
      InventoryPanelComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
