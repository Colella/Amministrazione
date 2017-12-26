import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {LoginComponent} from './page-components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginService} from './_services/login.service';
import {DataTableComponent} from './page-components/data-table/data-table.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {FooterComponent} from './page-components/footer/footer.component';
import {HeaderComponent} from './page-components/header/header.component';
import {SimpleGlobal} from 'ng2-simple-global';
import {ConfigService} from './_services/config.service';
import {DataTableService} from './_services/data-table.service';

export function init(config: ConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataTableComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    DataTableService,
    SimpleGlobal,
    {
      'provide': APP_INITIALIZER,
      'useFactory': init,
      'deps': [ConfigService],
      'multi': true
    },
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
