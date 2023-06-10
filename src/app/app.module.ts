import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Redux
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './app.reducers';

// Effects
import { UserEffect } from './effects/user.effects';
import { TeacherEffect } from './effects/teacher.effects';
import { StudentEffect } from './effects/student.effects';
import { ClassEffect } from './effects/class.effects';
import { EnrollmentEffect } from './effects/enrollment.effects';
import { GradeEffect } from './effects/grade.effects';
import { EvaluationEffect } from './effects/evaluation.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NotesComponent } from './components/notes/notes.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    NotesComponent,
    AdministrationComponent,
    FooterComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([
      UserEffect,
      TeacherEffect,
      StudentEffect,
      ClassEffect,
      EnrollmentEffect,
      GradeEffect,
      EvaluationEffect
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    UserEffect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
