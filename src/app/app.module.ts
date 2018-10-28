import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { Test } from './components/test-componnet/test.component';

// modules
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { TaskingModule } from './components/tasking/tasking.module';
import { AuthModule } from './components/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    Test
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskingModule,
    AuthModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
