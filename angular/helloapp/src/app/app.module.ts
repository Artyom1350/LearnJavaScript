import { DataModule } from './data/data.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule,DataModule ],
    declarations: [ AppComponent , ChildComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }