import { Quiz } from '../quiz/quiz.model';

export const quizzes: Quiz[] = [
  {
    title: 'Are you a good Football Manager player?',
    outcomes: ['Yes', 'No'],
    questions: [
      {
        statement: 'When your start working in a club, do you...',
        answers: [
          {
            text: 'Make your players fit your preferred tatics',
            outcome: 'No',
          },
          {
            text: 'Make your tatics fit your players',
            outcome: 'Yes',
          },
        ],
      },
    ],
    profiling: answers => {
      const answersMap = new Map<string, number>();

      answers.forEach(answer => {
        answersMap.set(
          answer.outcome,
          (answersMap.get(answer.outcome) || 0) + 1
        );
      });

      let mostFrequentAnswer: string = 'No';
      const mostFrequentAnswerFrequency = 0;
      for (const entry of answersMap) {
        if (entry[1] > mostFrequentAnswerFrequency)
          mostFrequentAnswer = entry[0];
      }

      return mostFrequentAnswer;
    },
  },
];
