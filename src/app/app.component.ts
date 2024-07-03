import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginFormComponent,CommonModule, SelectLangComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
