const QUESTIONS = [
  {
    text: "В соцсетях кто-то анонимно распускает злые слухи про твоего друга. Друг сильно расстроен, а ты знаешь автора слухов. Твой метод?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Поговорю с автором лично, без свидетелей. Объясню, что так делать нельзя, попрошу удалить эти публикации и написать, что это была неправда."
      },
      {
        letter: "B",
        points: 1,
        text: "Расскажу другу, кто автор этих слухов, пусть сам решает, что делать дальше."
      },
      {
        letter: "C",
        points: 0,
        text: "Вычислю слабое место автора и сделаю так, чтобы он сам себя выдал. Если это не сработает, напишу обличающий пост."
      }
    ]
  },
  {
    text: "Сосед сверху каждую ночь слушает тяжёлый металл на полной громкости. На замечания не реагирует. Управляющая компания говорит «сами разбирайтесь». Что выберешь?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Попробую ещё раз поговорить. Или же куплю ему наушники и оставлю у двери с вежливой запиской."
      },
      {
        letter: "B",
        points: 1,
        text: "Соберу подписи с соседей и пойду в полицию писать коллективное заявление о нарушении тишины."
      },
      {
        letter: "C",
        points: 0,
        text: "В 7 утра, когда он засыпает после ночной музыки, включу свой любимый плейлист или дрель. Пусть почувствует."
      }
    ]
  },
  {
    text: "Вы нашли чужой кошелёк в парке. Внутри — 7 000 рублей и паспорт на имя молодой девушки. Как вы поступите?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Найду её в соцсетях, напишу, верну всё. Или отнесу в полицию, в ближайший МФЦ."
      },
      {
        letter: "B",
        points: 1,
        text: "Пройду мимо, это меня не касается, владелица как-нибудь разберётся."
      },
      {
        letter: "C",
        points: 0,
        text: "Найду её в соцсетях, посмотрю профиль и решу, вернуть ли все деньги или оставить часть себе на «комиссию за поиск»."
      }
    ]
  },
  {
    text: "Ты работаешь в благотворительном фонде. Выясняется, что директор тратит 70% пожертвований на «административные расходы». Ты случайно находишь документы. Как будешь действовать?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Прямо задам вопрос на общем собрании. Публично и честно."
      },
      {
        letter: "B",
        points: 1,
        text: "Соберу все документы, скопирую и отправлю в налоговую и прокуратуру анонимно. После этого уволюсь."
      },
      {
        letter: "C",
        points: 0,
        text: "Найду крупного жертвователя и тихо солью ему информацию, чтобы он сам надавил на директора. Пусть сильные наказывают сильных."
      }
    ]
  },
  {
    text: "Твой друг совершил серьёзную подлость. Друг просит тебя молчать. Если правда всплывёт — у него будут неприятности. Как ты поступишь?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Поговорю с другом, буду убеждать его признаться самому. Если он не признается — сохраню тайну, но потеряю уважение к нему."
      },
      {
        letter: "B",
        points: 1,
        text: "Буду молчать, ведь мне важен мой друг."
      },
      {
        letter: "C",
        points: 0,
        text: "Раскрою всё сам тому, кто пострадал. Или сделаю так, чтобы правда раскрылась «случайно»."
      }
    ]
  },
  {
    text: "Ты узнаёшь, что популярный блогер врёт в своих видео, ложно «затаптывая в грязь» честных людей, и многие ему верят. Твои действия?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Публично встану на сторону правды в комментариях. Найду тех, кто тоже его разоблачает, и поддержу их."
      },
      {
        letter: "B",
        points: 1,
        text: "У меня нет ресурсов бороться с системой, в которой он популярен. Просто перестану его смотреть и посоветую друзьям сделать то же самое."
      },
      {
        letter: "C",
        points: 0,
        text: "Найду его слабое место и пригрожу разоблачением, если он не прекратит. Анонимно и жёстко."
      }
    ]
  },
  {
    text: "Вы приехали в лес отдохнуть. На поляне, где вы хотели расположиться, кто-то оставил кучу мусора: бутылки, пакеты, одноразовую посуду. Что сделаете?",
    answers: [
      {
        letter: "A",
        points: 2,
        text: "Соберу чужой мусор и вывезу к контейнерам. Испорчу себе час, но лес станет чище."
      },
      {
        letter: "B",
        points: 1,
        text: "Развернусь и найду другую поляну. Не я насорил — не мне и убирать."
      },
      {
        letter: "C",
        points: 0,
        text: "Сфотографирую мусор, выложу в местный паблик с геолокацией и предупреждением, а потом передам координаты в лесничество."
      }
    ]
  }
];

const RESULTS = [
  {
    min: 12,
    max: 14,
    title: "Миротворец",
    description: "Ты веришь в диалог, добро и человечность. Даже когда тебя предают, ты сохраняешь лицо и ищешь созидательные пути. Иногда ты слишком мягок с теми, кто не заслуживает второго шанса. Кто-то называет это слабостью. Но ты знаешь, что это не так. Ведь именно такие, как ты, не дают миру окончательно погрузиться в хаос."
  },
  {
    min: 9,
    max: 11,
    title: "Принципиальный тактик",
    description: "Ты за человечность, но не абсолютно всепрощающую. Оставаясь верным своим принципам, ты готов проявить гибкость, но не подлость. Тебя сложно обмануть, но легко переубедить."
  },
  {
    min: 6,
    max: 8,
    title: "Человек компромисса",
    description: "Каждый день ты выбираешь между удобством и совестью. Ты не святой, но и не злодей. Твоя мораль гибка — в одной ситуации простишь, в другой накажешь. Тебя трудно просчитать, и это твоя сила."
  },
  {
    min: 3,
    max: 5,
    title: "Системный мститель",
    description: "Ты устал от того, что добрые проигрывают. Ты выбираешь жёсткие методы, но пока без прямого беззакония. Репутационные убийства, информационные атаки, публичный позор — твоё оружие. Главное — не сорваться окончательно."
  },
  {
    min: 0,
    max: 2,
    title: "Справедливость любой ценой",
    description: "Ты решил, что цель оправдывает средства. Ты не доверяешь ни системе, ни дипломатии. Только ты знаешь, как надо. Ты готов разрушать карьеры, жизни и репутации ради правды. Вопрос только в том: заметишь ли ты, когда сам станешь тем монстром, с кем боролся?"
  }
];

const QUEST_SUMMARIES = {
  light: "Разумовский-Добродетель видит в тебе союзника и помогает Ватсону в борьбе с Мориарти: дело получает огласку в социальной сети «Вместе».",
  dark: "Чумной Доктор узнаёт в тебе союзника по борьбе с опасной «болезнью общества» и присоединяется к Ватсону против Мориарти.",
  neutral: "Разумовский всё равно занимает сторону Ватсона: в каждом есть светлая и тёмная сторона, а Мориарти слишком опасен, чтобы оставаться в стороне."
};

const screens = {
  home: document.getElementById("homeScreen"),
  question: document.getElementById("questionScreen"),
  result: document.getElementById("resultScreen")
};

const startButton = document.getElementById("startButton");
const homeButton = document.getElementById("homeButton");
const questionCount = document.getElementById("questionCount");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const resultTitle = document.getElementById("resultTitle");
const scoreValue = document.getElementById("scoreValue");
const lightValue = document.getElementById("lightValue");
const darkValue = document.getElementById("darkValue");
const scaleLight = document.getElementById("scaleLight");
const scaleDark = document.getElementById("scaleDark");
const resultDescription = document.getElementById("resultDescription");
const questSummary = document.getElementById("questSummary");

let currentQuestion = 0;
let score = 0;

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo(0, 0);
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  answersContainer.innerHTML = "";
}

function startQuiz() {
  resetQuiz();
  renderQuestion();
  showScreen("question");
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const questionNumber = currentQuestion + 1;

  window.scrollTo(0, 0);
  questionCount.textContent = `Вопрос ${questionNumber} из ${QUESTIONS.length}`;
  progressBar.style.width = `${((questionNumber - 1) / QUESTIONS.length) * 100}%`;
  questionText.textContent = question.text;
  answersContainer.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `
      <span class="answer-letter">${answer.letter}</span>
      <span class="answer-text">${answer.text}</span>
    `;
    button.addEventListener("click", () => selectAnswer(answer.points));
    answersContainer.append(button);
  });
}

function selectAnswer(points) {
  score += points;
  currentQuestion += 1;

  if (currentQuestion >= QUESTIONS.length) {
    progressBar.style.width = "100%";
    window.setTimeout(showResult, 160);
    return;
  }

  renderQuestion();
}

function getResultByScore(totalScore) {
  return RESULTS.find((result) => totalScore >= result.min && totalScore <= result.max);
}

function getQuestSummary(lightPercent) {
  if (lightPercent >= 60) {
    return QUEST_SUMMARIES.light;
  }

  if (lightPercent <= 39) {
    return QUEST_SUMMARIES.dark;
  }

  return QUEST_SUMMARIES.neutral;
}

function showResult() {
  const lightPercent = Math.round((score / 14) * 100);
  const darkPercent = 100 - lightPercent;
  const result = getResultByScore(score);

  resultTitle.textContent = result.title;
  scoreValue.textContent = score;
  lightValue.textContent = `Свет ${lightPercent}%`;
  darkValue.textContent = `Тьма ${darkPercent}%`;
  scaleLight.style.width = `${lightPercent}%`;
  scaleDark.style.width = `${darkPercent}%`;
  resultDescription.textContent = result.description;
  questSummary.textContent = getQuestSummary(lightPercent);

  showScreen("result");
}

startButton.addEventListener("click", startQuiz);
homeButton.addEventListener("click", () => {
  resetQuiz();
  showScreen("home");
});
