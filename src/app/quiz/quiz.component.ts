import { Component, OnInit } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Answer, Quiz } from './quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bfd-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  quiz!: Quiz;
  questionIndex: number = 0;
  outcomes: string[] = [];
  isQuizOver = false;
  finalOutcome!: string;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id');
    if (quizId) this.quiz = this.quizService.getQuizzes()[+quizId];
  }

  onAnswerClick(answer: Answer): void {
    this.outcomes.push(answer.outcome);
    if (this.hasAnsweredFinalQuestion()) this.showOutcome();
    else this.questionIndex += 1;
  }

  private hasAnsweredFinalQuestion(): boolean {
    this.isQuizOver = this.questionIndex == this.quiz.questions.length - 1;
    return this.isQuizOver;
  }

  private showOutcome(): void {
    this.finalOutcome = this.quiz.profiling(this.outcomes);
  }
}
