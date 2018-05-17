import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginPageComponent } from './containers/login-page.component';
import { LoginFormComponent } from './components/login-form.component';

import { AuthService } from './services/auth.service';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';
import { MaterialModule } from '../material';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule,
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }])
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService]
})
export class RootAuthModule {}
