import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormularioComponent} from './componente/formulario/formulario.component';
import {APIService} from './service/api.service';
import {FormsModule} from '@angular/forms';
import {UiModule} from './ui/ui.module';
import {RetrieveComponent} from './componente/retrieve/retrieve.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RetrieveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    HttpClientModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
