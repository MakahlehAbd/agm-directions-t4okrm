import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    AgmDirectionModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[GoogleMapsAPIWrapper]
})
export class AppModule { }
