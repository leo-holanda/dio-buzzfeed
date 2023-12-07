import { Component, OnInit } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { Quiz } from '../quiz/quiz.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bfd-quiz-selector',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-selector.component.html',
  styleUrl: './quiz-selector.component.scss',
})
export class QuizSelectorComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }
}
