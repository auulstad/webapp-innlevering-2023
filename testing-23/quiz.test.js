const quizData = require('./questions.json');

describe('Quiz Questions', () => {
  quizData.questions.forEach((question, index) => {
    describe(`Question ${index + 1}: ${question.title}`, () => {
      test('answers is an array with exactly four items', () => {
        expect(Array.isArray(question.answers)).toBe(true);
        expect(question.answers.length).toBe(4);
      });

      it('should have a correct answer', () => {
        const correctAnswers = question.answers.filter((answer) => answer.correct === true);
        expect(correctAnswers).toHaveLength(1);
      });

      it('should have a helper text', () => {
        expect(question.helper).toBeDefined();
        expect(question.helper.text).toBeTruthy();
      });

      it('should have answer options with non-empty text', () => {
        question.answers.forEach((answer, answerIndex) => {
          expect(answer.answer).toBeTruthy();
        });
      });

      it('should not have duplicate questions', () => {
        const questionTitles = quizData.questions.map((question) => question.title);
        const uniqueQuestionTitles = new Set(questionTitles);
    
        expect(questionTitles.length).toBe(uniqueQuestionTitles.size);
      });

    });
  });
});
