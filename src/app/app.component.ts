import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'bfd-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
