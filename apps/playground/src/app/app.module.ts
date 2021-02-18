import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RiveModule } from 'ng-rive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { SheepComponent } from './sheep/sheep.component';
import { ResizeComponent } from './resize/resize.component';

@NgModule({
  declarations: [
    AppComponent,
    SheepComponent,
    ResizeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RiveModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSliderModule,
    MatInputModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sheep',
      pathMatch: 'full'
    }, {
      path: 'sheep',
      component: SheepComponent
    }, {
      path: 'resize',
      component: ResizeComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}