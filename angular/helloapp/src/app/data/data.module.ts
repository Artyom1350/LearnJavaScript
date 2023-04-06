import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { DataComponent } from './data.component';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[DataComponent],
    exports:[DataComponent]
})
export class DataModule{}