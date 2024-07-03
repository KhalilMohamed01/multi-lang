import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-lang',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.css']
})
export class SelectLangComponent implements OnInit {
  languages = ['en', 'fr', 'de', 'es', 'nl'];
  selectedLang = 'en';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.selectedLang = savedLang;
    this.translate.use(savedLang);
  }

  changeLanguage(lang: string): void {
    this.selectedLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
