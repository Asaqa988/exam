const questions = [
    {
        question: "What is the primary objective of manual testing?",
        options: ["To eliminate the need for automation", "To verify software meets specified requirements", "To write test scripts", "To reduce development cost"],
        answer: 1 // B
    },
    {
        question: "Which testing type is usually performed first?",
        options: ["Regression Testing", "System Testing", "Unit Testing", "Acceptance Testing"],
        answer: 2 // C
    },
    {
        question: "Which document describes what needs to be tested?",
        options: ["Test Case", "Test Plan", "Requirement Specification", "Defect Report"],
        answer: 2 // C
    },
    {
        question: "What is Smoke Testing mainly used for?",
        options: ["Checking all edge cases", "Verifying critical functionalities after a build", "Performance testing", "Validating UI design"],
        answer: 1 // B
    },
    {
        question: "When should Regression Testing be performed?",
        options: ["After requirement gathering", "After every code change or bug fix", "Only before release", "Only during UAT"],
        answer: 1 // B
    },
    {
        question: "What is a test case?",
        options: ["A bug description", "A set of steps with expected results to validate functionality", "A project requirement", "A test environment"],
        answer: 1 // B
    },
    {
        question: "Which testing is done without executing the code?",
        options: ["Functional Testing", "Dynamic Testing", "Static Testing", "Regression Testing"],
        answer: 2 // C
    },
    {
        question: "Which scenario is best suited for Exploratory Testing?",
        options: ["When requirements are very detailed", "When time is limited and documentation is minimal", "When automation is mandatory", "When performance metrics are required"],
        answer: 1 // B
    },
    {
        question: "Which testing ensures that new changes have not broken existing functionality?",
        options: ["Smoke Testing", "Sanity Testing", "Regression Testing", "Integration Testing"],
        answer: 2 // C
    },
    {
        question: "Which defect priority indicates that the issue must be fixed immediately?",
        options: ["Low", "Medium", "High", "Critical"],
        answer: 3 // D
    },
    {
        question: "Which testing type is performed by end users or clients?",
        options: ["System Testing", "Integration Testing", "User Acceptance Testing (UAT)", "Regression Testing"],
        answer: 2 // C
    },
    {
        question: "What is Selenium primarily used for?",
        options: ["API testing", "Mobile application testing", "Web application automation testing", "Performance testing"],
        answer: 2 // C
    },
    {
        question: "What is the role of TestNG in Selenium automation?",
        options: ["Locating web elements", "Executing SQL queries", "Test execution, reporting, and test management", "Browser communication"],
        answer: 2 // C
    },
    {
        question: "Which locator is considered the most reliable in Selenium?",
        options: ["XPath (absolute)", "CSS Selector", "Class Name", "ID"],
        answer: 3 // D
    },
    {
        question: "What does driver.findElement() return?",
        options: ["A list of elements", "A WebDriver instance", "A WebElement", "A String"],
        answer: 2 // C
    },
    {
        question: "Which TestNG feature allows running tests in a specific order?",
        options: ["Groups", "Priority", "DependsOnMethods", "DataProvider"],
        answer: 1 // B
    },
    {
        question: "Which TestNG annotation is used to execute a test method?",
        options: ["@Test", "@Execute", "@Run", "@Method"],
        answer: 0 // A
    },
    {
        question: "What happens if findElement() cannot locate an element?",
        options: ["Returns null", "Returns an empty WebElement", "Throws NoSuchElementException", "Skips the step"],
        answer: 2 // C
    },
    {
        question: "Which Selenium method is used to open a URL?",
        options: ["driver.open()", "driver.launch()", "driver.get()", "driver.navigate()"],
        answer: 2 // C
    },
    {
        question: "What is the main difference between close() and quit()?",
        options: ["close() closes all browsers", "quit() closes only the current window", "close() closes the current window; quit() closes all windows", "They behave the same"],
        answer: 2 // C
    },
    {
        question: "Which Selenium interface represents a browser instance?",
        options: ["WebElement", "WebDriver", "BrowserDriver", "RemoteDriver"],
        answer: 1 // B
    },
    {
        question: "Which TestNG feature allows skipping a test based on condition?",
        options: ["@Ignore", "enabled = false", "@Skip", "priority = -1"],
        answer: 1 // B
    },
    {
        question: "What is the purpose of the Select class in Selenium?",
        options: ["To select checkboxes", "To handle browser pop-ups", "To interact with <select> dropdown elements", "To switch between browser windows"],
        answer: 2 // C
    },
    {
        question: "Which method of the Select class is used to select an option by visible text?",
        options: ["selectByIndex()", "selectByValue()", "selectByVisibleText()", "getFirstSelectedOption()"],
        answer: 2 // C
    },
    {
        question: "What is the main disadvantage of using Thread.sleep() in Selenium automation?",
        options: ["It waits dynamically until the element appears", "It pauses execution for a fixed time regardless of condition", "It improves test execution speed", "It handles synchronization automatically"],
        answer: 1 // B
    },
    {
        question: "What does the extends keyword do in Java?",
        options: ["Allows a class to inherit methods and variables from another class", "Allows multiple inheritance of classes", "Extends the execution time of a class", "Is used to import external libraries"],
        answer: 0 // A
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timerInterval = null;
let startTime = null;
let studentName = "";
let studentAnswers = []; // Track answers: {questionIndex, selectedOption, isCorrect}

// Constants
const INSTRUCTOR_PASSCODE = "1234"; // Simple passcode for demo
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJMx7JyT1DDRQ0HErJC8a4wZXXrm9g6OaccjzqlYfozQ8i0jZdhSkch6ImdOQR8HQ/exec"; // INSERT YOUR GOOGLE APPS SCRIPT URL HERE

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const instructorLoginScreen = document.getElementById('instructor-login-screen');
const instructorDashboardScreen = document.getElementById('instructor-dashboard-screen');

const startBtn = document.getElementById('start-btn');
const instructorAccessBtn = document.getElementById('instructor-access-btn');
const loginBtn = document.getElementById('login-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const exitDashboardBtn = document.getElementById('exit-dashboard-btn');
const exportBtn = document.getElementById('export-btn');
const clearDataBtn = document.getElementById('clear-data-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressBarFill = document.getElementById('progress-bar-fill');
const timerDisplay = document.getElementById('timer');
const scorePercentage = document.getElementById('score-percentage');
const circleStroke = document.getElementById('circle-stroke');
const correctAnswersText = document.getElementById('correct-answers');
const resultMessage = document.getElementById('result-message');
const nameInput = document.getElementById('student-name');
const nameError = document.getElementById('name-error');
const passcodeInput = document.getElementById('instructor-passcode');
const passcodeError = document.getElementById('passcode-error');
const studentDisplayName = document.getElementById('student-display-name');
const congratsName = document.getElementById('congrats-name');
const leaderboardBody = document.getElementById('leaderboard-body');

// Initialize
function init() {
    startBtn.addEventListener('click', validateAndStart);
    instructorAccessBtn.addEventListener('click', () => switchScreen(instructorLoginScreen));
    loginBtn.addEventListener('click', validateInstructorLogin);
    backToStartBtn.addEventListener('click', () => switchScreen(startScreen));
    exitDashboardBtn.addEventListener('click', () => switchScreen(startScreen));
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    clearDataBtn.addEventListener('click', clearHistory);
    exportBtn.addEventListener('click', exportToCSV);
}

function switchScreen(targetScreen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
}

function validateInstructorLogin() {
    if (passcodeInput.value === INSTRUCTOR_PASSCODE) {
        passcodeError.style.display = 'none';
        passcodeInput.value = '';
        updateLeaderboard();
        switchScreen(instructorDashboardScreen);
    } else {
        passcodeError.style.display = 'block';
    }
}

function validateAndStart() {
    studentName = nameInput.value.trim();
    if (!studentName) {
        nameError.style.display = 'block';
        return;
    }
    nameError.style.display = 'none';
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    studentAnswers = [];
    switchScreen(quizScreen);
    studentDisplayName.innerText = `Student: ${studentName}`;
    startTime = Date.now();
    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <span class="option-prefix">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });

    nextBtn.disabled = true;
    selectedOption = null;
}

function selectOption(index, element) {
    if (selectedOption !== null) return;

    selectedOption = index;
    const isCorrect = index === questions[currentQuestionIndex].answer;

    studentAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedOption: index,
        selectedText: questions[currentQuestionIndex].options[index],
        correctOption: questions[currentQuestionIndex].answer,
        correctText: questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer],
        isCorrect: isCorrect
    });

    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions[index].classList.add(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
        allOptions[questions[currentQuestionIndex].answer].classList.add('correct');
    } else {
        score++;
    }

    nextBtn.disabled = false;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerText = 'Finish Exam';
    } else {
        nextBtn.innerText = 'Next Question';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    switchScreen(resultScreen);

    const percentage = Math.round((score / questions.length) * 100);
    scorePercentage.innerText = `${percentage}%`;
    correctAnswersText.innerText = score;
    congratsName.innerText = `Well done, ${studentName}!`;

    // Progress circle animation
    circleStroke.style.strokeDasharray = `${percentage}, 100`;

    if (percentage >= 70) {
        resultMessage.innerText = "Congratulations! You passed the exam.";
        resultMessage.className = "result-message status-passed";
    } else {
        resultMessage.innerText = "Keep practicing. You did not reach the passing score.";
        resultMessage.className = "result-message status-failed";
    }

    saveScore(studentName, score, percentage, studentAnswers);
}

function saveScore(name, score, percentage, answers) {
    const history = JSON.parse(localStorage.getItem('qa_exam_results') || '[]');
    const status = percentage >= 70 ? 'Passed' : 'Failed';
    history.push({
        name,
        score,
        percentage,
        status,
        answers,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    });

    history.sort((a, b) => b.percentage - a.percentage);
    localStorage.setItem('qa_exam_results', JSON.stringify(history));

    // Send to Google Sheets if URL is configured
    if (GOOGLE_SCRIPT_URL) {
        sendToGoogleSheets({
            name,
            score,
            percentage,
            status,
            answers: JSON.stringify(answers),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        });
    }
}

async function sendToGoogleSheets(data) {
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Essential for Google Apps Script webhooks
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        console.log('Data sent successfully to Google Sheets');
    } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
    }
}

function updateLeaderboard() {
    const history = JSON.parse(localStorage.getItem('qa_exam_results') || '[]');
    leaderboardBody.innerHTML = '';

    history.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.name}</td>
            <td>${entry.score}/${questions.length}</td>
            <td>${entry.percentage}%</td>
            <td class="status-${entry.status.toLowerCase()}">${entry.status}</td>
            <td><button class="view-details-btn" onclick="alert('Student: ${entry.name}\\nDetailed results are included in the Excel export.')">View Summary</button></td>
        `;
        leaderboardBody.appendChild(row);
    });
}

function exportToCSV() {
    const history = JSON.parse(localStorage.getItem('qa_exam_results') || '[]');
    if (history.length === 0) {
        alert("No results to export.");
        return;
    }

    let csvContent = "Date,Time,Student Name,Score,Percentage,Status";

    // Add columns for each question
    for (let i = 1; i <= questions.length; i++) {
        csvContent += `,Q${i} Selected,Q${i} Correct,Q${i} Result`;
    }
    csvContent += "\n";

    history.forEach(entry => {
        let row = `"${entry.date}","${entry.time}","${entry.name}",${entry.score},${entry.percentage}%,"${entry.status}"`;

        entry.answers.forEach(ans => {
            row += `,"${ans.selectedText.replace(/"/g, '""')}","${ans.correctText.replace(/"/g, '""')}","${ans.isCorrect ? 'Correct' : 'Incorrect'}"`;
        });

        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `QA_Exam_Results_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearHistory() {
    if (confirm("Are you sure you want to clear ALL student results? This cannot be undone.")) {
        localStorage.removeItem('qa_exam_results');
        updateLeaderboard();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const secs = (elapsed % 60).toString().padStart(2, '0');
        timerDisplay.innerText = `${mins}:${secs}`;
    }, 1000);
}

function resetQuiz() {
    switchScreen(startScreen);
    nameInput.value = '';
    nextBtn.innerText = 'Next Question';
}

init();
