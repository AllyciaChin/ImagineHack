// Malaysia destinations data
const destinations = [
  {
    id: 1,
    name: "Kuala Lumpur",
    description: "Malaysia's vibrant capital city, home to the iconic Petronas Twin Towers and a melting pot of cultures.",
    image: "./img/klcc.jpg",
    highlights: ["Petronas Towers", "Bukit Bintang", "KL Tower", "Chinatown"],
    bestTime: "May to July, December to February",
    mustTry: "Nasi Lemak, Char Kuey Teow",
    activities: "Shopping, Cultural tours, Food hunting",
    funFact: "Home to the world's tallest twin towers until 2004"
  },
  {
    id: 2,
    name: "Penang (George Town)",
    description: "UNESCO World Heritage Site known for its colonial architecture, street art, and incredible street food.",
    image: "./img/penang.jpg",
    highlights: ["Street Art", "Clan Houses", "Fort Cornwallis", "Penang Hill"],
    bestTime: "December to March",
    mustTry: "Assam Laksa, Char Kuey Teow, Cendol",
    activities: "Heritage walks, Food tours, Beach relaxation",
    funFact: "Known as the 'Pearl of the Orient'"
  },
  {
    id: 3,
    name: "Langkawi",
    description: "Tropical paradise archipelago with pristine beaches, duty-free shopping, and stunning natural landscapes.",
    image: "./img/langkawi.jpg",
    highlights: ["Cable Car", "Pantai Cenang", "Eagle Square", "Underwater World"],
    bestTime: "November to April",
    mustTry: "Fresh seafood, Tropical fruits",
    activities: "Island hopping, Water sports, Mangrove tours",
    funFact: "99 islands at low tide, 104 at high tide"
  },
  {
    id: 4,
    name: "Kota Kinabalu, Sabah",
    description: "Gateway to Borneo's natural wonders, Mount Kinabalu, and vibrant markets with stunning sunsets.",
    image: "./img/kinabalu.jpg",
    highlights: ["Mount Kinabalu", "Sunset Bar", "Mari Mari Village", "Tunku Abdul Rahman Park"],
    bestTime: "March to September",
    mustTry: "Hinava, Tuaran Mee, Fresh seafood",
    activities: "Mountain climbing, Island hopping, Cultural tours",
    funFact: "Home to Malaysia's highest peak at 4,095m"
  },
  {
    id: 5,
    name: "Malacca (Melaka)",
    description: "Historic city with rich colonial heritage, traditional architecture, and multicultural influences.",
    image: "./img/malacca.jpg",
    highlights: ["Jonker Street", "A Famosa", "Christ Church", "Baba Nyonya Heritage"],
    bestTime: "June to August",
    mustTry: "Chicken Rice Balls, Cendol, Satay Celup",
    activities: "River cruise, Heritage walks, Trishaw rides",
    funFact: "Once ruled by Portuguese, Dutch, and British"
  },
  {
    id: 6,
    name: "Cameron Highlands",
    description: "Cool hill station famous for tea plantations, strawberry farms, and colonial-era charm.",
    image: "./img/cameron.jpg",
    highlights: ["BOH Tea Plantation", "Strawberry Farms", "Mossy Forest", "Time Tunnel Museum"],
    bestTime: "Year-round (cooler climate)",
    mustTry: "Fresh strawberries, Tea, Steamboat",
    activities: "Plantation tours, Jungle trekking, Farm visits",
    funFact: "Average temperature of 18-25°C year-round"
  },
  {
    id: 7,
    name: "Tioman Island",
    description: "Pristine tropical island paradise with crystal-clear waters, coral reefs, and lush rainforests.",
    image: "./img/tioman.jpg",
    highlights: ["Coral Reefs", "Juara Beach", "Asah Waterfall", "Marine Park"],
    bestTime: "March to October",
    mustTry: "Fresh grilled fish, Tropical fruits",
    activities: "Snorkeling, Diving, Jungle trekking",
    funFact: "Featured in the 1958 movie 'South Pacific'"
  },
  {
    id: 8,
    name: "Kuching, Sarawak",
    description: "Charming riverside city known as the 'Cat City', gateway to Borneo's unique culture and wildlife.",
    image: "./img/kuching.png",
    highlights: ["Sarawak River", "Cat Museum", "Semenggoh Orangutan Centre", "Kuching Waterfront"],
    bestTime: "June to August",
    mustTry: "Sarawak Laksa, Kolo Mee, Layer Cake",
    activities: "River cruises, Wildlife watching, Cultural tours",
    funFact: "Name means 'cat' in Malay, hence the cat statues everywhere"
  },
  {
    id: 9,
    name: "Genting Highlands",
    description: "Las Vegas of Malaysia - hill resort with casinos, theme parks, and cool mountain air.",
    image: "./img/genting.png",
    highlights: ["Skyway Cable Car", "Theme Parks", "Casinos", "Premium Outlets"],
    bestTime: "Year-round",
    mustTry: "International cuisine, Local delicacies",
    activities: "Gaming, Shopping, Theme park rides",
    funFact: "Built on 1,800m above sea level for cooler weather"
  },
  {
    id: 10,
    name: "Perhentian Islands",
    description: "Pristine diving paradise with white sandy beaches, crystal-clear waters, and vibrant marine life.",
    image: "./img/perhentian.png",
    highlights: ["Long Beach", "Coral Bay", "Turtle Watching", "Snorkeling Sites"],
    bestTime: "March to October",
    mustTry: "Grilled seafood, Fresh coconut water",
    activities: "Diving, Snorkeling, Beach relaxation",
    funFact: "Name means 'stopping point' for traders"
  },
  {
    id: 11,
    name: "Fraser's Hill",
    description: "A charming colonial-era hill station in the Titiwangsa Mountains, known for its cool climate and nature trails.",
    image: "./img/fraser.jpeg",
    highlights: ["The Clock Tower", "Jeriau Waterfall", "Bird Interpretive Centre", "Hemmant Trail"],
    bestTime: "March to September (drier season, better for birdwatching and trekking)",
    mustTry: "Strawberry desserts, English-style cream tea, Local Malay dishes at food courts",
    activities: "Birdwatching, Jungle trekking, Photography, Golfing",
    funFact: "Fraser's Hill hosts an annual International Bird Race attracting birdwatchers from around the world."
  },
  {
    id: 12,
    name: "Ipoh",
    description: "A heritage-rich city famous for its colonial buildings, cave temples, and booming street food scene.",
    image: "./img/ipoh.jpg",
    highlights: ["Concubine Lane", "Ipoh Railway Station", "Lost World of Tambun", "Kek Lok Tong Cave Temple"],
    bestTime: "February to July (generally dry and pleasant)",
    mustTry: "Bean Sprout Chicken (Nga Choi Kai), White Coffee, Salted Chicken",
    activities: "Café hopping, Cave temple visits, Historical walks",
    funFact: "Ipoh white coffee originated in the early 1900s and is roasted with palm oil margarine for a caramel flavor."
  }
];

const isDemoMode = true;

if (isDemoMode) {
  window.addEventListener("beforeunload", function () {
    localStorage.clear();
  });
}


// Game state
let visitedDestinations = new Set();
let achievements = [];

// Achievement definitions
const achievementList = [
  { id: 'first_stamp', threshold: 1, title: 'First Steps', description: 'You got your first passport stamp!' },
  { id: 'explorer', threshold: 3, title: 'Explorer', description: 'You\'ve visited 3 destinations!' },
  { id: 'adventurer', threshold: 6, title: 'Adventurer', description: 'Halfway through your Malaysian journey!' },
  { id: 'wanderer', threshold: 9, title: 'Wanderer', description: 'You\'re becoming a Malaysia expert!' },
  { id: 'master_traveler', threshold: 12, title: 'Master Traveler', description: 'You\'ve explored all of Malaysia! Congratulations!' }
];

// Initialize the passport
function initPassport() {
  loadStoredData();
  renderDestinations();
  updateStats();
  setupEventListeners();
}

// Load data from localStorage
function loadStoredData() {
  const stored = localStorage.getItem('malaysia_passport');
  if (stored) {
    const data = JSON.parse(stored);
    visitedDestinations = new Set(data.visited || []);
    achievements = data.achievements || [];
  }
}

// Save data to localStorage
function saveData() {
  const data = {
    visited: Array.from(visitedDestinations),
    achievements: achievements
  };
  localStorage.setItem('malaysia_passport', JSON.stringify(data));
}

// Render destinations
function renderDestinations() {
  const grid = document.getElementById('destinations_grid');
  grid.innerHTML = '';

  destinations.forEach(destination => {
    const isVisited = visitedDestinations.has(destination.id);

    const card = document.createElement('div');
    card.className = `destination_card ${isVisited ? 'visited' : ''}`;

    card.innerHTML = `
            <div class="destination_image" style="background-image: url('${destination.image}')">
                ${isVisited ? '<div class="passport-stamp">VISITED<br>✓</div>' : ''}
            </div>
            <div class="destination_info">
                <h3 class="destination_name">${destination.name}</h3>
                <p class="destination_description">${destination.description}</p>
                <div class="destination_highlights">
                    ${destination.highlights.slice(0, 3).map(highlight =>
      `<span class="highlight-tag">${highlight}</span>`
    ).join('')}
                </div>
                <button class="stamp_button ${isVisited ? 'stamped' : ''}" 
                        onclick="${isVisited ? 'showDestinationDetails(' + destination.id + ')' : 'stampDestination(' + destination.id + ')'}">
                    ${isVisited ? '👁️ View Details' : '📍 Stamp Passport'}
                </button>
            </div>
        `;

    // Add click handler for card
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('stamp_button')) {
        showDestinationDetails(destination.id);
      }
    });

    grid.appendChild(card);
  });
}

// Stamp a destination
function stampDestination(destinationId) {
  if (!visitedDestinations.has(destinationId)) {
    visitedDestinations.add(destinationId);
    saveData();
    renderDestinations();
    updateStats();
    checkAchievements();

    // Show achievement animation
    const destination = destinations.find(d => d.id === destinationId);
    showStampAnimation(destination.name);
  }
}

// Show stamp animation
function showStampAnimation(destinationName) {
  // Create temporary stamp animation
  const stampEl = document.createElement('div');
  stampEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: #28a745;
        color: white;
        padding: 2rem;
        border-radius: 50%;
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
        z-index: 1500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transition: transform 0.5s ease;
    `;
  stampEl.innerHTML = `STAMPED!<br>${destinationName}`;

  document.body.appendChild(stampEl);

  // Animate
  setTimeout(() => {
    stampEl.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 100);

  setTimeout(() => {
    stampEl.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => document.body.removeChild(stampEl), 500);
  }, 2000);
}

// Show destination details modal
function showDestinationDetails(destinationId) {
  const destination = destinations.find(d => d.id === destinationId);
  const modal = document.getElementById('destination_modal');
  const modalBody = document.getElementById('modal_body');

  const isVisited = visitedDestinations.has(destinationId);

  modalBody.innerHTML = `
        <div class="modal_destination_image" style="background-image: url('${destination.image}')"></div>
        <h2 class="modal_title">${destination.name} ${isVisited ? '✅' : ''}</h2>
        <p class="modal_description">${destination.description}</p>
        
        <div class="modal_details">
            <div class="detail_item">
                <div class="detail_label">Best Time to Visit</div>
                <div class="detail_value">${destination.bestTime}</div>
            </div>
            <div class="detail_item">
                <div class="detail_label">Must Try</div>
                <div class="detail_value">${destination.mustTry}</div>
            </div>
            <div class="detail_item">
                <div class="detail_label">Activities</div>
                <div class="detail_value">${destination.activities}</div>
            </div>
            <div class="detail_item">
                <div class="detail_label">Fun Fact</div>
                <div class="detail_value">${destination.funFact}</div>
            </div>
        </div>
        
        <div class="destination_highlights">
            <strong>Top Attractions:</strong><br>
            ${destination.highlights.map(highlight =>
    `<span class="highlight-tag">${highlight}</span>`
  ).join('')}
        </div>
        
        ${!isVisited ? `
            <button class="stamp_button" onclick="stampDestination(${destination.id}); closeModal();" style="margin-top: 1rem;">
                📍 Stamp This Destination
            </button>
        ` : `
            <div style="text-align: center; margin-top: 1rem; color: #28a745; font-weight: bold;">
                ✅ You've visited this destination!
            </div>
        `}
    `;

  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  document.getElementById('destination_modal').style.display = 'none';
}

// Update statistics
function updateStats() {
  const stampsCollected = document.getElementById('stamps_collected');
  const totalDestinations = document.getElementById('total_destinations');
  const progressFill = document.getElementById('progress_fill');
  const progressText = document.getElementById('progress_text');

  const visitedCount = visitedDestinations.size;
  const totalCount = destinations.length;
  const percentage = (visitedCount / totalCount) * 100;

  stampsCollected.textContent = visitedCount;
  totalDestinations.textContent = totalCount;
  progressFill.style.width = percentage + '%';

  // Update progress text
  if (visitedCount === 0) {
    progressText.textContent = "Start your Malaysian adventure!";
  } else if (visitedCount < totalCount / 2) {
    progressText.textContent = "Great start! Keep exploring Malaysia!";
  } else if (visitedCount < totalCount) {
    progressText.textContent = "You're doing amazing! Almost there!";
  } else {
    progressText.textContent = "🎉 Congratulations! You've explored all of Malaysia!";
  }
}

// Check and award achievements
function checkAchievements() {
  const visitedCount = visitedDestinations.size;

  achievementList.forEach(achievement => {
    if (visitedCount >= achievement.threshold && !achievements.includes(achievement.id)) {
      achievements.push(achievement.id);
      showAchievement(achievement);
    }
  });

  saveData();
}

// Show achievement popup
function showAchievement(achievement) {
  const popup = document.getElementById('achievement_popup');
  const achievementText = document.getElementById('achievement_text');

  achievementText.innerHTML = `<strong>${achievement.title}</strong><br>${achievement.description}`;

  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 4000);
}

// Setup event listeners
function setupEventListeners() {
  // Modal close handlers
  const modal = document.getElementById('destination_modal');
  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Achievement popup click to close
  document.getElementById('achievement_popup').addEventListener('click', () => {
    document.getElementById('achievement_popup').classList.remove('show');
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initPassport);

// Add some fun console messages
console.log('🇲🇾 Welcome to the Malaysia Digital Passport!');
console.log('Collect all 10 stamps and become a Master Traveler!');