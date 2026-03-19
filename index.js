const questions = [
    {
        question: "Коя е най-голямата планета в Слънчевата система?",
        answers: ["Сатурн", "Юпитер", "Нептун", "Уран"],
        correct: "Юпитер"
    },
    {
        question: "Колко континента има на Земята?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Коя е най-дългата река в света?",
        answers: ["Амазонка", "Нил", "Янцзъ", "Мисисипи"],
        correct: "Нил"
    },
    {
        question: "Колко страни има в Европейския съюз?",
        answers: ["25", "27", "30", "32"],
        correct: "27"
    },
    {
        question: "Кой е авторът на 'Хамлет'?",
        answers: ["Чарлс Дикенс", "Уилям Шекспир", "Джейн Остин", "Марк Твен"],
        correct: "Уилям Шекспир"
    },
    {
        question: "Коя е столицата на Австралия?",
        answers: ["Сидни", "Мелбърн", "Канбера", "Бризбън"],
        correct: "Канбера"
    },
    {
        question: "Колко кости има в човешкото тяло?",
        answers: ["196", "206", "216", "226"],
        correct: "206"
    },
    {
        question: "Коя е най-малката държава в света?",
        answers: ["Монако", "Сан Марино", "Ватикана", "Лихтенщайн"],
        correct: "Ватикана"
    },
    {
        question: "Колко елемента има в периодичната таблица?",
        answers: ["108", "112", "118", "124"],
        correct: "118"
    },
    {
        question: "Коя е най-високата планина в света?",
        answers: ["К2", "Еверест", "Килиманджаро", "Монблан"],
        correct: "Еверест"
    },
    {
        question: "Коя е най-голямата държава по площ?",
        answers: ["Китай", "САЩ", "Канада", "Русия"],
        correct: "Русия"
    },
    {
        question: "Кой е изобретил телефона?",
        answers: ["Томас Едисон", "Никола Тесла", "Александър Бел", "Бенджамин Франклин"],
        correct: "Александър Бел"
    },
    {
        question: "Колко цвята има в дъгата?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Коя е най-населената държава в света?",
        answers: ["Индия", "Китай", "САЩ", "Индонезия"],
        correct: "Индия"
    },
    {
        question: "Коя е най-дълбоката точка на океана?",
        answers: ["Бермудски триъгълник", "Мариански окоп", "Тонга окоп", "Пуерто Рико окоп"],
        correct: "Мариански окоп"
    },
    {
        question: "Колко хромозоми има човек?",
        answers: ["44", "46", "48", "50"],
        correct: "46"
    },
    {
        question: "Кой е написал 'Дон Кихот'?",
        answers: ["Лопе де Вега", "Мигел де Сервантес", "Франческо Петрарка", "Данте Алигиери"],
        correct: "Мигел де Сервантес"
    },
    {
        question: "Коя е химическата формула на водата?",
        answers: ["HO", "H2O", "H3O", "HO2"],
        correct: "H2O"
    },
    {
        question: "В коя година е кацнал човек на Луната?",
        answers: ["1965", "1967", "1969", "1971"],
        correct: "1969"
    },
    {
        question: "Колко планети има в Слънчевата система?",
        answers: ["7", "8", "9", "10"],
        correct: "8"
    },
    {
        question: "Кой е написал 'Война и мир'?",
        answers: ["Достоевски", "Толстой", "Чехов", "Тургенев"],
        correct: "Толстой"
    },
    {
        question: "Коя е столицата на Бразилия?",
        answers: ["Рио де Жанейро", "Сао Пауло", "Бразилия", "Салвадор"],
        correct: "Бразилия"
    },
    {
        question: "Колко е скоростта на светлината?",
        answers: ["200 000 км/с", "250 000 км/с", "300 000 км/с", "350 000 км/с"],
        correct: "300 000 км/с"
    },
    {
        question: "Кой е изобретил електрическата крушка?",
        answers: ["Никола Тесла", "Томас Едисон", "Александър Бел", "Джеймс Уат"],
        correct: "Томас Едисон"
    },
    {
        question: "Коя е най-голямата пустиня в света?",
        answers: ["Сахара", "Гоби", "Антарктида", "Арабска"],
        correct: "Антарктида"
    },
    {
        question: "Колко са нотите в музикалната гама?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Кой е първият президент на САЩ?",
        answers: ["Томас Джеферсън", "Бенджамин Франклин", "Джордж Вашингтон", "Абрахам Линкълн"],
        correct: "Джордж Вашингтон"
    },
    {
        question: "Коя е най-старата цивилизация в света?",
        answers: ["Египетска", "Гръцка", "Месопотамска", "Китайска"],
        correct: "Месопотамска"
    },
    {
        question: "Колко секунди има в един час?",
        answers: ["2400", "3200", "3600", "4000"],
        correct: "3600"
    },
    {
        question: "Кой е открил пеницилина?",
        answers: ["Луи Пастьор", "Александър Флеминг", "Мария Кюри", "Робърт Кох"],
        correct: "Александър Флеминг"
    },
    {
        question: "Колко въглероден атом има в CO2?",
        answers: ["1", "2", "3", "4"],
        correct: "1"
    },
    {
        question: "Кой е написал 'Престъпление и наказание'?",
        answers: ["Толстой", "Чехов", "Достоевски", "Гогол"],
        correct: "Достоевски"
    },
    {
        question: "Коя е столицата на Япония?",
        answers: ["Осака", "Киото", "Токио", "Хирошима"],
        correct: "Токио"
    },
    {
        question: "Колко е броят Пи до втория знак?",
        answers: ["3.12", "3.14", "3.16", "3.18"],
        correct: "3.14"
    },
    {
        question: "В коя година е основан Google?",
        answers: ["1996", "1998", "2000", "2002"],
        correct: "1998"
    },
    {
        question: "Кой е написал теорията на относителността?",
        answers: ["Нютон", "Айнщайн", "Хокинг", "Планк"],
        correct: "Айнщайн"
    },
    {
        question: "Колко страни граничат с България?",
        answers: ["4", "5", "6", "7"],
        correct: "5"
    },
    {
        question: "Кой е първият човек в космоса?",
        answers: ["Нийл Армстронг", "Юрий Гагарин", "Алан Шепард", "Валентина Терешкова"],
        correct: "Юрий Гагарин"
    },
    {
        question: "Коя е най-твърдата природна субстанция?",
        answers: ["Платина", "Злато", "Диамант", "Титан"],
        correct: "Диамант"
    },
    {
        question: "Колко хромозоми има в човешка полова клетка?",
        answers: ["16", "23", "32", "46"],
        correct: "23"
    },
    {
        question: "Кой е написал 'Илиада'?",
        answers: ["Софокъл", "Омир", "Еврипид", "Есхил"],
        correct: "Омир"
    },
    {
        question: "Коя е най-дълбоката езеро в света?",
        answers: ["Каспийско море", "Байкал", "Танганика", "Супериор"],
        correct: "Байкал"
    },
    {
        question: "В коя година пада Берлинската стена?",
        answers: ["1987", "1988", "1989", "1990"],
        correct: "1989"
    },
    {
        question: "Колко е атомното число на водорода?",
        answers: ["1", "2", "3", "4"],
        correct: "1"
    },
    {
        question: "Кой е изобретил радиото?",
        answers: ["Томас Едисон", "Никола Тесла", "Гулиелмо Маркони", "Хайнрих Херц"],
        correct: "Гулиелмо Маркони"
    },
    {
        question: "Коя е столицата на Канада?",
        answers: ["Торонто", "Монреал", "Ванкувър", "Отава"],
        correct: "Отава"
    },
    {
        question: "Колко неврона има в човешкия мозък?",
        answers: ["10 милиона", "100 милиона", "86 милиарда", "1 трилион"],
        correct: "86 милиарда"
    },
    {
        question: "Кой е написал 'Фауст'?",
        answers: ["Шилер", "Гьоте", "Кафка", "Ницше"],
        correct: "Гьоте"
    },
    {
        question: "В коя година е основана НАСА?",
        answers: ["1952", "1955", "1958", "1961"],
        correct: "1958"
    },
    {
        question: "Колко е масата на Земята в кг?",
        answers: ["5.97 × 10²⁴", "3.97 × 10²⁴", "7.97 × 10²⁴", "1.97 × 10²⁴"],
        correct: "5.97 × 10²⁴"
    },
    {
        question: "Кой е открил закона за гравитацията?",
        answers: ["Галилей", "Айнщайн", "Нютон", "Кеплер"],
        correct: "Нютон"
    }
];

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer");
const result = document.getElementById("otgovor");
let correct = 0;
let wrong = 0;


function loadQuestion(index) {
    let current = questions[index];
    question.innerText = current.question;
    buttons[0].innerText = current.answers[0];
    buttons[1].innerText = current.answers[1];
    buttons[2].innerText = current.answers[2];
    buttons[3].innerText = current.answers[3];
    };

loadQuestion(0);

let currentIndex = 0;
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        checkAnswer(this.innerText);
    });
});

function checkAnswer(answer) {   
    if (answer === questions[currentIndex].correct) {
        result.innerText = "Правилно! ✅";
        correct++;
    } else {
        result.innerText = "Грешно! ❌";
        result.innerText = `Грешно! ❌ Верният отговор е: ${questions[currentIndex].correct}`;
        wrong++;
    }
    setTimeout(nextQuestion, 2500);
    result.style.visibility = "visible";
setTimeout(() => {
    result.style.visibility = "hidden";
}, 2500);  // изчакай 1 секунда и мини напред
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion(currentIndex);
        result.innerText = "";
    } else {
        result.style.visibility = "visible"
        result.innerText = `Верни: ${correct} | Грешни: ${wrong}`;
    }
}
