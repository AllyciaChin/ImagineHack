// Game state management
let currentGame = null;
let puzzleBoard = [];
let turns = 0;
let memoryCards = [];
let flippedCards = [];
let memoryMoves = 0;

//Quiz questions
const questions = [
  {
    question: "What is the capital city of Malaysia?",
    answers: ["Kuala Lumpur", "George Town", "Johor Bahru", "Kota Kinabalu"],
    correct: 0
  },
  {
    question: "Which mountain is the highest peak in Malaysia?",
    answers: ["Mount Tahan", "Mount Kinabalu", "Mount Korbu", "Mount Brinchang"],
    correct: 1
  },
  {
    question: "What is the national flower of Malaysia?",
    answers: ["Rose", "Hibiscus", "Orchid", "Jasmine"],
    correct: 1
  },
  {
    question: "Which strait separates Peninsular Malaysia from Sumatra?",
    answers: ["Strait of Johor", "Strait of Malacca", "Strait of Singapore", "Strait of Hormuz"],
    correct: 1
  },
  {
    question: "What is the official language of Malaysia?",
    answers: ["English", "Chinese", "Malay", "Tamil"],
    correct: 2
  },
  {
    question: "Which city is known as the 'Pearl of the Orient'?",
    answers: ["Kuala Lumpur", "George Town", "Malacca", "Ipoh"],
    correct: 1
  },
  {
    question: "What is the currency of Malaysia?",
    answers: ["Ringgit", "Dollar", "Rupiah", "Baht"],
    correct: 0
  },
  {
    question: "Which Malaysian state is famous for its orangutans?",
    answers: ["Pahang", "Kelantan", "Sabah", "Terengganu"],
    correct: 2
  },
  {
    question: "What is the traditional Malay house called?",
    answers: ["Kampong", "Rumah Melayu", "Istana", "Pondok"],
    correct: 1
  },
  {
    question: "Which food is considered Malaysia's national dish?",
    answers: ["Rendang", "Nasi Lemak", "Satay", "Laksa"],
    correct: 1
  },
  {
    question: "What does 'Malaysia Truly Asia' refer to?",
    answers: ["Geography", "Tourism slogan", "Political motto", "Cultural heritage"],
    correct: 1
  },
  {
    question: "Which Malaysian state has no coastline?",
    answers: ["Pahang", "Selangor", "Negeri Sembilan", "None - all states have coastlines"],
    correct: 3
  },
  {
    question: "What is the name of Malaysia's administrative capital?",
    answers: ["Kuala Lumpur", "Putrajaya", "Shah Alam", "Cyberjaya"],
    correct: 1
  },
  {
    question: "Which festival is known as the 'Festival of Lights' in Malaysia?",
    answers: ["Hari Raya", "Chinese New Year", "Deepavali", "Christmas"],
    correct: 2
  },
  {
    question: "What is the Malaysian traditional dance called?",
    answers: ["Bharatanatyam", "Joget", "Tango", "Waltz"],
    correct: 1
  },
  {
    question: "Which Malaysian island is famous for its beaches and resorts?",
    answers: ["Penang", "Langkawi", "Tioman", "All of the above"],
    correct: 3
  },
  {
    question: "What is the name of the famous cave temple in Selangor?",
    answers: ["Batu Caves", "Gua Tempurung", "Deer Cave", "Wind Cave"],
    correct: 0
  },
  {
    question: "Which race makes up the majority of Malaysia's population?",
    answers: ["Chinese", "Indian", "Malay", "Indigenous"],
    correct: 2
  },
  {
    question: "What is the famous Malaysian tropical fruit known as the 'King of Fruits'?",
    answers: ["Rambutan", "Mangosteen", "Durian", "Jackfruit"],
    correct: 2
  },
  {
    question: "Which Malaysian city is a UNESCO World Heritage Site?",
    answers: ["Kuala Lumpur", "George Town and Malacca", "Kota Kinabalu", "Kuching"],
    correct: 1
  }
]

// Image arrays for games
const puzzleImages = [
  "./img/klcc1.png",
  "./img/klcc2.png",
  "./img/klcc3.png",
  "./img/klcc4.png",
  "./img/klcc5.png",
  "./img/klcc6.png",
  "./img/klcc7.png",
  "./img/klcc8.png",
  "./img/klcc9.png"
];

const memoryImages = [
  "./img/mmy1.jpeg",
  "./img/mmy2.jpeg",
  "./img/mmy3.jpg",
  "./img/mmy4.png",
  "./img/mmy5.jpg",
  "./img/mmy6.jpg",
  "./img/mmy7.jpg",
  "./img/mmy8.jpeg"
];

// Main navigation functions
function showGame(gameId) {
  document.getElementById('game-menu').style.display = 'none';
  document.getElementById(gameId).classList.remove('hidden');
  currentGame = gameId;

  // Initialize the selected game
  if (gameId === 'game1') initPuzzle();
  if (gameId === 'game2') initQuiz();
  if (gameId === 'game3') initMemory();
}

function returnToMenu() {
  document.getElementById('game-menu').style.display = 'block';
  document.querySelectorAll('.game-section').forEach(section => {
    section.classList.add('hidden');
  });
  currentGame = null;
}

// Slider Puzzle Game
function initPuzzle() {
  puzzleBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  shuffleArray(puzzleBoard);
  turns = 0;
  document.getElementById('turns').textContent = turns;
  renderPuzzle();
}

function renderPuzzle() {
  const board = document.getElementById('puzzle-board');
  board.innerHTML = '';
  board.className = 'puzzle-grid';

  puzzleBoard.forEach((num, index) => {
    const tile = document.createElement('div');
    tile.className = 'puzzle-tile';
    tile.onclick = () => moveTile(index);

    if (num === 0) {
      tile.style.background = 'transparent';
    } else {
      // Create image element for puzzle piece
      const img = document.createElement('img');
      img.src = puzzleImages[num - 1];
      img.alt = `Puzzle piece ${num}`;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '0.3rem';
      img.draggable = false;
      tile.appendChild(img);
      tile.style.background = 'white';
    }

    board.appendChild(tile);
  });
}

function moveTile(index) {
  const emptyIndex = puzzleBoard.indexOf(0);
  const validMoves = [
    emptyIndex - 1, emptyIndex + 1,
    emptyIndex - 3, emptyIndex + 3
  ].filter(i => {
    if (i < 0 || i > 8) return false;
    if (emptyIndex % 3 === 0 && i === emptyIndex - 1) return false;
    if (emptyIndex % 3 === 2 && i === emptyIndex + 1) return false;
    return true;
  });

  if (validMoves.includes(index)) {
    [puzzleBoard[index], puzzleBoard[emptyIndex]] = [puzzleBoard[emptyIndex], puzzleBoard[index]];
    turns++;
    document.getElementById('turns').textContent = turns;
    renderPuzzle();

    if (puzzleBoard.join('') === '123456780') {
      setTimeout(() => alert(`🎉 Congratulations! You solved it in ${turns} moves!`), 100);
    }
  }
}

function resetPuzzle() {
  initPuzzle();
}

// Memory Game
function initMemory() {
  memoryCards = [];
  memoryImages.forEach((image, index) => {
    memoryCards.push(
      { id: index * 2, image, flipped: false, matched: false },
      { id: index * 2 + 1, image, flipped: false, matched: false }
    );
  });
  shuffleArray(memoryCards);
  flippedCards = [];
  memoryMoves = 0;
  document.getElementById('memory-moves').textContent = memoryMoves;
  renderMemory();
}

function renderMemory() {
  const board = document.getElementById('memory-board');
  board.innerHTML = '';
  board.className = 'memory-grid';

  memoryCards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = `memory-card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`;
    cardElement.onclick = () => flipCard(index);

    if (card.flipped || card.matched) {
      // Show image when flipped
      const img = document.createElement('img');
      img.src = card.image;
      img.alt = 'Memory card';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '0.5rem';
      img.draggable = false;
      cardElement.appendChild(img);
      cardElement.style.background = 'white';
    } else {
      // Show question mark when not flipped
      cardElement.textContent = '?';
      cardElement.style.background = 'linear-gradient(45deg, #6b7280, #374151)';
      cardElement.style.fontSize = '2rem';
      cardElement.style.color = '#d1d5db';
    }

    board.appendChild(cardElement);
  });
}

function flipCard(index) {
  if (flippedCards.length === 2 || memoryCards[index].flipped || memoryCards[index].matched) return;

  memoryCards[index].flipped = true;
  flippedCards.push(index);
  renderMemory();

  if (flippedCards.length === 2) {
    setTimeout(() => {
      const [first, second] = flippedCards;
      if (memoryCards[first].image === memoryCards[second].image) {
        memoryCards[first].matched = true;
        memoryCards[second].matched = true;
      } else {
        memoryCards[first].flipped = false;
        memoryCards[second].flipped = false;
      }
      flippedCards = [];
      memoryMoves++;
      document.getElementById('memory-moves').textContent = memoryMoves;
      renderMemory();

      if (memoryCards.every(card => card.matched)) {
        setTimeout(() => alert(`🎉 Congratulations! You completed it in ${memoryMoves} moves!`), 100);
      }
    }, 1000);
  }
}

function resetMemory() {
  initMemory();
}

// Quiz Game
// Quiz game state
let quizState = {
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  isActive: false
};

// Quiz interface creation functions
function createQuizInterface() {
  const quizContent = document.getElementById('quiz-content');

  quizContent.innerHTML = `
        <div class="quiz-container">
            <!-- Start Screen -->
            <div id="quiz-start-screen" class="quiz-screen active">
                <div class="quiz-welcome">
                    <h2>Ready to test your Malaysia knowledge?</h2>
                    <p>You'll get 5 random questions about Malaysia. Good luck!</p>
                    <button id="quiz-start-btn" class="quiz-btn quiz-btn-primary">Start Quiz</button>
                </div>
            </div>

            <!-- Question Screen -->
            <div id="quiz-question-screen" class="quiz-screen">
                <div class="quiz-header">
                    <span id="quiz-question-number">Question 1 of 5</span>
                    <span id="quiz-score">Score: 0</span>
                </div>
                
                <div class="quiz-question-container">
                    <h3 id="quiz-question-text"></h3>
                    <div id="quiz-answers-container" class="quiz-answers-container"></div>
                </div>

                <button id="quiz-next-btn" class="quiz-btn quiz-btn-primary" style="display: none;">Next Question</button>
            </div>

            <!-- Results Screen -->
            <div id="quiz-results-screen" class="quiz-screen">
                <div class="quiz-results">
                    <h2>🎉 Quiz Complete!</h2>
                    <div class="quiz-score-display">
                        <span id="quiz-final-score">0</span>
                        <span class="quiz-score-label">out of 5</span>
                    </div>
                    <p id="quiz-score-message"></p>
                    <button id="quiz-restart-btn" class="quiz-btn quiz-btn-primary">Play Again</button>
                </div>
            </div>
        </div>
    `;

  // Add event listeners
  document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
  document.getElementById('quiz-next-btn').addEventListener('click', nextQuizQuestion);
  document.getElementById('quiz-restart-btn').addEventListener('click', restartQuiz);
}

// Initialize quiz game
function initQuiz() {
  if (!quizState.isActive) {
    quizState.isActive = true;
    createQuizInterface();
    addQuizStyles();
  }
}

// Start quiz
function startQuiz() {
  // Reset game state
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;
  quizState.selectedAnswer = null;

  // Select 5 random questions
  quizState.currentQuestions = getRandomQuizQuestions(5);

  // Show question screen
  showQuizScreen('question');
  displayQuizQuestion();
}

// Get random questions from the database
function getRandomQuizQuestions(count) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function displayQuizQuestion() {
  const question = quizState.currentQuestions[quizState.currentQuestionIndex];
  document.getElementById('quiz-question-number').textContent = `Question ${quizState.currentQuestionIndex + 1} of 5`;
  document.getElementById('quiz-score').textContent = `Score: ${quizState.score}`;
  document.getElementById('quiz-question-text').textContent = question.question;
  // Clear previous answers
  const answersContainer = document.getElementById('quiz-answers-container');
  answersContainer.innerHTML = '';

  // Create answer buttons
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-answer-btn';
    button.textContent = answer;
    button.addEventListener('click', () => selectQuizAnswer(index));
    answersContainer.appendChild(button);
  });

  document.getElementById('quiz-next-btn').style.display = 'none';
  quizState.selectedAnswer = null;
}

function selectQuizAnswer(answerIndex) {
  if (quizState.selectedAnswer !== null) return; // Prevent multiple selections
  quizState.selectedAnswer = answerIndex;
  const question = quizState.currentQuestions[quizState.currentQuestionIndex];
  const answerButtons = document.querySelectorAll('.quiz-answer-btn');

  // Disable all buttons
  answerButtons.forEach(btn => btn.classList.add('disabled'));

  // Show correct/incorrect feedback
  answerButtons.forEach((btn, index) => {
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === quizState.selectedAnswer && index !== question.correct) {
      btn.classList.add('incorrect');
    }
  });

  // Update score if correct
  if (quizState.selectedAnswer === question.correct) {
    quizState.score++;
    document.getElementById('quiz-score').textContent = `Score: ${quizState.score}`;
  }
  document.getElementById('quiz-next-btn').style.display = 'block';
}

// Move to next question or show results
function nextQuizQuestion() {
  quizState.currentQuestionIndex++;
  if (quizState.currentQuestionIndex < quizState.currentQuestions.length) {
    displayQuizQuestion();
  } else {
    showQuizResults();
  }
}

// Show results screen
function showQuizResults() {
  document.getElementById('quiz-final-score').textContent = quizState.score;

  // Set message based on score
  let message = '';
  if (quizState.score === 5) {
    message = "Perfect! You're a true Malaysia expert! 🏆";
  } else if (quizState.score >= 4) {
    message = "Excellent! You know Malaysia very well! 🌟";
  } else if (quizState.score >= 3) {
    message = "Good job! You have solid knowledge about Malaysia! 👏";
  } else if (quizState.score >= 2) {
    message = "Not bad! Keep learning about Malaysia! 📚";
  } else {
    message = "Keep exploring Malaysia to learn more! 🧭";
  }
  document.getElementById('quiz-score-message').textContent = message;
  showQuizScreen('results');
}

// Show specific quiz screen
function showQuizScreen(screenName) {
  document.querySelectorAll('.quiz-screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(`quiz-${screenName}-screen`).classList.add('active');
}

// Restart quiz
function restartQuiz() {
  showQuizScreen('start');
}

// Add quiz-specific styles
function addQuizStyles() {
  // Check if styles already added
  if (document.getElementById('quiz-styles')) return;

  const style = document.createElement('style');
  style.id = 'quiz-styles';
  style.textContent = `
        .quiz-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            overflow: hidden;
            max-width: 800px;
            margin: 0 auto;
        }

        .quiz-screen {
            padding: 2rem;
            display: none;
            text-align: center;
        }

        .quiz-screen.active {
            display: block;
        }

        .quiz-welcome h2 {
            color: #333;
            margin-bottom: 1rem;
            font-size: 1.8rem;
        }

        .quiz-welcome p {
            color: #666;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

        .quiz-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
        }

        #quiz-question-number {
            font-weight: bold;
            color: #667eea;
        }

        #quiz-score {
            font-weight: bold;
            color: #333;
            background: #f8f9fa;
            padding: 0.5rem 1rem;
            border-radius: 20px;
        }

        .quiz-question-container {
            text-align: left;
            margin-bottom: 2rem;
        }

        #quiz-question-text {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 1.5rem;
            line-height: 1.4;
        }

        .quiz-answers-container {
            display: grid;
            gap: 1rem;
        }

        .quiz-answer-btn {
            background: white;
            border: 2px solid #e9ecef;
            padding: 1rem;
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            position: relative;
        }

        .quiz-answer-btn:hover {
            border-color: #667eea;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
        }

        .quiz-answer-btn.correct {
            background: #d4edda;
            border-color: #28a745;
            color: #155724;
        }

        .quiz-answer-btn.incorrect {
            background: #f8d7da;
            border-color: #dc3545;
            color: #721c24;
        }

        .quiz-answer-btn.disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        .quiz-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .quiz-btn:hover {
            background: #5a6fd8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .quiz-btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .quiz-results {
            text-align: center;
        }

        .quiz-results h2 {
            color: #333;
            margin-bottom: 1rem;
            font-size: 2rem;
        }

        .quiz-score-display {
            font-size: 4rem;
            font-weight: bold;
            color: #667eea;
            margin: 2rem 0;
        }

        .quiz-score-label {
            font-size: 1.5rem;
            color: #666;
            margin-left: 1rem;
        }

        #quiz-score-message {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 2rem;
        }

        @media (max-width: 600px) {
            .quiz-screen {
                padding: 1.5rem;
            }
            
            .quiz-header {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
            
            #quiz-question-text {
                font-size: 1.1rem;
            }
            
            .quiz-score-display {
                font-size: 3rem;
            }
        }
    `;

  document.head.appendChild(style);
}

// Function to be called when game2 (quiz) is selected
function startGame2() {
  initQuiz();
}

// Initialize the quiz module
console.log('Malaysia Quiz module loaded successfully!');

// Utility functions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
