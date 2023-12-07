import { Routes } from '@angular/router';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: QuizSelectorComponent },
  { path: 'quiz', component: QuizComponent },
];
