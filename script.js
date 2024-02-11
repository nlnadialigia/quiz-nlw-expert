const questions = [
  {
    question: "Qual signo do zodíaco é associado ao elemento fogo?",
    answers: ["Áries", "Touro", "Peixes"],
    rightAnswer: 0,
  },
  {
    question: "Qual planeta rege o signo de Gêmeos?",
    answers: ["Mercúrio", "Vênus", "Marte"],
    rightAnswer: 0,
  },
  {
    question:
      "Qual é o signo do zodíaco que é representado pelo símbolo do caranguejo?",
    answers: ["Câncer", "Leão", "Virgem"],
    rightAnswer: 0,
  },
  {
    question: "Qual é a casa astrológica associada ao trabalho e à saúde?",
    answers: ["Casa 6", "Casa 10", "Casa 12"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o elemento associado ao signo de Libra?",
    answers: ["Ar", "Fogo", "Terra"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o regente do signo de Virgem?",
    answers: ["Mercúrio", "Vênus", "Marte"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o oposto astrológico de Áries?",
    answers: ["Libra", "Touro", "Escorpião"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o planeta regente do signo de Leão?",
    answers: ["Sol", "Lua", "Mercúrio"],
    rightAnswer: 0,
  },
  {
    question:
      "Qual é a casa astrológica associada aos relacionamentos e parcerias?",
    answers: ["Casa 7", "Casa 3", "Casa 11"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o elemento associado ao signo de Escorpião?",
    answers: ["Água", "Ar", "Fogo"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o regente do signo de Sagitário?",
    answers: ["Júpiter", "Saturno", "Urano"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o oposto astrológico de Touro?",
    answers: ["Escorpião", "Gêmeos", "Capricórnio"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o planeta regente do signo de Capricórnio?",
    answers: ["Saturno", "Júpiter", "Urano"],
    rightAnswer: 0,
  },
  {
    question:
      "Qual é a casa astrológica associada à criatividade, romance e filhos?",
    answers: ["Casa 5", "Casa 9", "Casa 2"],
    rightAnswer: 0,
  },
  {
    question: "Qual é o elemento associado ao signo de Aquário?",
    answers: ["Ar", "Água", "Fogo"],
    rightAnswer: 0,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
let countCorrectAnswers = 0;

for (const item of questions) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.question;

  for (const answer of item.answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    const input = dt.querySelector("input");
    dt.querySelector("span").textContent = answer;

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();
  quiz.append(quizItem);
}
