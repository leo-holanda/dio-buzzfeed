export type Answer = {
  text: string;
  outcome: string;
};

export type Question = {
  statement: string;
  answers: Answer[];
};

export type Quiz = {
  title: string;
  questions: Question[];
  outcomes: string[];
  profiling: (answers: string[]) => string;
};
