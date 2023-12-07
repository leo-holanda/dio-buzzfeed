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
      {
        statement: 'Do you take time to define your set pieces?',
        answers: [
          {
            text: 'Yes',
            outcome: 'Yes',
          },
          {
            text: 'No',
            outcome: 'No',
          },
        ],
      },
      {
        statement: 'Do you manage your players morale?',
        answers: [
          {
            text: 'Yes',
            outcome: 'Yes',
          },
          {
            text: 'No',
            outcome: 'No',
          },
        ],
      },
    ],
    profiling: answers => {
      const answersMap = new Map<string, number>();

      answers.forEach(answer => {
        answersMap.set(answer, (answersMap.get(answer) || 0) + 1);
      });

      let mostFrequentAnswer: string = 'No';
      let mostFrequentAnswerFrequency = 0;
      for (const entry of answersMap) {
        if (entry[1] > mostFrequentAnswerFrequency) {
          mostFrequentAnswerFrequency = entry[1];
          mostFrequentAnswer = entry[0];
        }
      }

      return mostFrequentAnswer;
    },
  },
  {
    title: 'Are you a good simracing player?',
    outcomes: ['Yes', 'No'],
    questions: [
      {
        statement: 'Are you familiar with tail braking?',
        answers: [
          {
            text: 'Yes',
            outcome: 'Yes',
          },
          {
            text: 'No',
            outcome: 'No',
          },
        ],
      },
      {
        statement: 'Do you respect the rules while racing?',
        answers: [
          {
            text: 'Yes',
            outcome: 'Yes',
          },
          {
            text: 'No',
            outcome: 'No',
          },
        ],
      },
      {
        statement: 'Do you know how to manage your tyres and fuel?',
        answers: [
          {
            text: 'Yes',
            outcome: 'Yes',
          },
          {
            text: 'No',
            outcome: 'No',
          },
        ],
      },
      {
        statement: 'Where does the phrase "Slow in, fast out" applies?',
        answers: [
          {
            text: 'Corner',
            outcome: 'Yes',
          },
          {
            text: 'Pits',
            outcome: 'No',
          },
        ],
      },
    ],
    profiling: answers => {
      const answersMap = new Map<string, number>();

      answers.forEach(answer => {
        answersMap.set(answer, (answersMap.get(answer) || 0) + 1);
      });

      let mostFrequentAnswer: string = 'No';
      let mostFrequentAnswerFrequency = 0;
      for (const entry of answersMap) {
        if (entry[1] > mostFrequentAnswerFrequency) {
          mostFrequentAnswerFrequency = entry[1];
          mostFrequentAnswer = entry[0];
        }
      }

      return mostFrequentAnswer;
    },
  },
];
