// src/app/quiz/quiz.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Question, QUIZ_QUESTIONS } from './quiz-data'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class QuizPage implements OnInit {

  currentQuestionIndex: number = 0;
  score: number = 0;
  quizFinished: boolean = false;
  currentQuestion: Question = QUIZ_QUESTIONS[0];
  feedbackMessage: string | null = null;
  answered: boolean = false;
  
  QUIZ_QUESTIONS = QUIZ_QUESTIONS; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentQuestion = QUIZ_QUESTIONS[this.currentQuestionIndex];
  }

  answerQuestion(selectedOptionIndex: number) {
    if (this.answered) return; 

    this.answered = true;
    const selectedOption = this.currentQuestion.answerOptions[selectedOptionIndex];

    if (selectedOption.isCorrect) {
      this.score++;
      this.feedbackMessage = `✅ Correto! ${selectedOption.rationale}`;
    } else {
      const correctOption = this.currentQuestion.answerOptions.find(opt => opt.isCorrect);
      this.feedbackMessage = `❌ Errado. A resposta correta é: ${correctOption?.text}. ${selectedOption.rationale}`;
    }
  }

  nextQuestion() {
    this.feedbackMessage = null;
    this.answered = false;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < QUIZ_QUESTIONS.length) {
      this.currentQuestion = QUIZ_QUESTIONS[this.currentQuestionIndex];
    } else {
      this.quizFinished = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizFinished = false;
    this.feedbackMessage = null;
    this.answered = false;
    this.currentQuestion = QUIZ_QUESTIONS[0];
  }

  getAnswerClass(optionIndex: number) {
    if (!this.answered) return '';

    const option = this.currentQuestion.answerOptions[optionIndex];
    if (option.isCorrect) {
      return 'correct-answer'; 
    } 
    return '';
  }
}