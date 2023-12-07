import { Component, OnInit } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Answer, Quiz } from './quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bfd-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  quiz!: Quiz;
  questionIndex: number = 0;
  outcomes: string[] = [];

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
    return this.questionIndex == this.quiz.questions.length - 1;
  }

  private showOutcome(): void {
    console.log(this.quiz.profiling(this.outcomes));
  }
}
