import { Injectable } from '@angular/core';
import { Quiz } from '../quiz/quiz.model';
import { quizzes } from './quiz.data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizzes: Quiz[] = quizzes;

  constructor() {}

  getQuizzes(): Quiz[] {
    return [...this.quizzes];
  }
}
