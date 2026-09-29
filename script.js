// ==========================================
// ROBLOX 2018 — GAMES DATA
// ==========================================

const popularGames = [
    { name: "Jailbreak", creator: "Badimo", emoji: "🚔", players: "28.4K", rating: 4.8, color: "linear-gradient(135deg,#1e3c72,#2a5298)" },
    { name: "Adopt Me!", creator: "Uplift Games", emoji: "🐾", players: "52.1K", rating: 4.9, color: "linear-gradient(135deg,#ff9a9e,#fad0c4)" },
    { name: "Flee the Facility", creator: "M0THER", emoji: "🏃", players: "12.7K", rating: 4.7, color: "linear-gradient(135deg,#30cfd0,#330867)" },
    { name: "Phantom Forces", creator: "StyLiS Studios", emoji: "🔫", players: "18.3K", rating: 4.6, color: "linear-gradient(135deg,#434343,#000000)" },
    { name: "Murder Mystery 2", creator: "Nikilis", emoji: "🔪", players: "22.9K", rating: 4.7, color: "linear-gradient(135deg,#fa709a,#fee140)" },
    { name: "MeepCity", creator: "Alexnewtron", emoji: "🐧", players: "9.2K", rating: 4.5, color: "linear-gradient(135deg,#a8edea,#fed6e3)" },
    { name: "Natural Disaster Survival", creator: "Stickmasterluke", emoji: "🌪️", players: "11.4K", rating: 4.6, color: "linear-gradient(135deg,#667eea,#764ba2)" },
    { name: "Welcome to Bloxburg", creator: "Coeptus", emoji: "🏡", players: "34.7K", rating: 4.8, color: "linear-gradient(135deg,#43e97b,#38f9d7)" },
    { name: "Tower of Hell", creator: "YXCeptional", emoji: "🗼", players: "16.8K", rating: 4.4, color: "linear-gradient(135deg,#ff6e7f,#bfe9ff)" },
    { name: "Work at a Pizza Place", creator: "Dued1", emoji: "🍕", players: "7.3K", rating: 4.5, color: "linear-gradient(135deg,#ffecd2,#fcb69f)" }
];

const recommendedGames = [
    { name: "Prison Life", creator: "Aesthetical", emoji: "⛓️", players: "6.8K", rating: 4.3, color: "linear-gradient(135deg,#ff9a9e,#fecfef)" },
    { name: "Speed Run 4", creator: "Vurse", emoji: "⚡", players: "5.4K", rating: 4.6, color: "linear-gradient(135deg,#5ee7df,#b490ca)" },
    { name: "Epic Minigames", creator: "Typical Games", emoji: "🎯", players: "4.9K", rating: 4.7, color: "linear-gradient(135deg,#4facfe,#00f2fe)" },
    { name: "Sword Fight on the Heights", creator: "Classic", emoji: "⚔️", players: "3.2K", rating: 4.5, color: "linear-gradient(135deg,#d299c2,#fef9d7)" },
    { name: "Super Bomb Survival", creator: "Polyhex", emoji: "💣", players: "2.8K", rating: 4.6, color: "linear-gradient(135deg,#f093fb,#f5576c)" },
    { name: "Flood Escape 2", creator: "Crazyblox", emoji: "🌊", players: "8.1K", rating: 4.8, color: "linear-gradient(135deg,#2193b0,#6dd5ed)" },
    { name: "Theme Park Tycoon 2", creator: "Den_S", emoji: "🎢", players: "4.2K", rating: 4.7, color: "linear-gradient(135deg,#ee9ca7,#ffdde1)" },
    { name: "Ro-Ghoul", creator: "SushiWalrus", emoji: "👹", players: "5.7K", rating: 4.4, color: "linear-gradient(135deg,#8e2de2,#4a00e0)" },
    { name: "Booga Booga", creator: "Soybeen", emoji: "🏝️", players: "6.3K", rating: 4.5, color: "linear-gradient(135deg,#56ab2f,#a8e063)" },
    { name: "Mad City", creator: "Schwifty Studios", emoji: "🦸", players: "9.8K", rating: 4.6, color: "linear-gradient(135deg,#ff512f,#dd2476)" }
];

const upcomingGames = [
    { name: "Islands", creator: "Easy.gg", emoji: "🏝️", players: "3.1K", rating: 4.7, color: "linear-gradient(135deg,#00b4db,#0083b0)" },
    { name: "Skyblock", creator: "Stickmasterluke", emoji: "☁️", players: "1.9K", rating: 4.4, color: "linear-gradient(135deg,#7f7fd5,#86a8e7)" },
    { name: "Bee Swarm Simulator", creator: "Onett", emoji: "🐝", players: "7.2K", rating: 4.8, color: "linear-gradient(135deg,#f7971e,#ffd200)" },
    { name: "Pet Simulator", creator: "BIG Games", emoji: "🐶", players: "11.5K", rating: 4.5, color: "linear-gradient(135deg,#fc466b,#3f5efb)" },
    { name: "Assassin!", creator: "Widgeon", emoji: "🗡️", players: "2.4K", rating: 4.6, color: "linear-gradient(135deg,#141e30,#243b55)" }
];

const creators = [
    { name: "Badimo", games: "Jailbreak", emoji: "🚔", color: "linear-gradient(135deg,#1e3c72,#2a5298)" },
    { name: "Alexnewtron", games: "MeepCity", emoji: "🐧", color: "linear-gradient(135deg,#a8edea,#5ee7df)" },
    { name: "Coeptus", games: "Bloxburg", emoji: "🏡", color: "linear-gradient(135deg,#43e97b,#38f9d7)" },
    { name: "Nikilis", games: "MM2", emoji: "🔪", color: "linear-gradient(135deg,#fa709a,#fee140)" },
    { name: "Stickmasterluke", games: "NDS", emoji: "🌪️", color: "linear-gradient(135deg,#667eea,#764ba2)" },
    { name: "Crazyblox", games: "Flood Escape", emoji: "🌊", color: "linear-gradient(135deg,#2193b0,#6dd5ed)" },
    { name: "Onett", games: "Bee Swarm", emoji: "🐝", color: "linear-gradient(135deg,#f7971e,#ffd200)" }
];

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-thumb" style="background:${game.color};">
            ${game.emoji}
            <div class="game-players-badge">${game.players}</div>
        </div>
        <div class="game-info">
            <h3>${game.name}</h3>
            <p>by ${game.creator}</p>
            <div class="game-rating">
                <span class="stars">${'★'.repeat(Math.floor(game.rating))}${'☆'.repeat(5-Math.floor(game.rating))}</span>
                <span>${game.rating.toFixed(1)}</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => {
        showGameModal(game);
    });
    return card;
}

function renderGames(containerId, games) {
    const container = document.getElementById(containerId);
    if (!container) return;
    games.forEach((g, i) => {
        const card = renderGameCard(g);
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = `all 0.4s ease ${i * 0.04}s`;
        container.appendChild(card);
        requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    });
}

function renderCreators() {
    const row = document.getElementById('creatorsRow');
    if (!row) return;
    creators.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'creator-card';
        card.innerHTML = `
            <div class="creator-avatar" style="background:${c.color};">${c.emoji}</div>
            <h4>${c.name}</h4>
            <span>${c.games}</span>
        `;
        card.style.opacity = '0';
        card.style.transition = `all 0.4s ease ${i * 0.05}s`;
        row.appendChild(card);
        requestAnimationFrame(() => card.style.opacity = '1');
    });
}

// ==========================================
// GAME MODAL (как в Roblox 2018)
// ==========================================

function showGameModal(game) {
    const existing = document.querySelector('.game-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-box">
            <button class="modal-close">✕</button>
            <div class="modal-banner" style="background:${game.color};">
                <div class="modal-emoji">${game.emoji}</div>
                <div class="modal-info-overlay">
                    <h2>${game.name}</h2>
                    <p>By ${game.creator}</p>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-stats">
                    <div>
                        <span class="modal-num">${game.players}</span>
                        <span class="modal-lbl">Playing</span>
                    </div>
                    <div>
                        <span class="modal-num">${game.rating.toFixed(1)}</span>
                        <span class="modal-lbl">Rating</span>
                    </div>
                    <div>
                        <span class="modal-num">2018</span>
                        <span class="modal-lbl">Updated</span>
                    </div>
                </div>
                <button class="modal-play-btn">▶ Play</button>
                <p class="modal-desc">Experience the classic ${game.name} gameplay that defined a generation of Roblox. Join millions of players in this timeless experience.</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.modal-overlay').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-play-btn').addEventListener('click', () => {
        modal.querySelector('.modal-play-btn').textContent = '⏳ Joining server...';
        setTimeout(() => {
            alert(`🎮 Запуск "${game.name}"...\n\n🕹️ Приятной ностальгии!`);
            modal.remove();
        }, 900);
    });
}

// ==========================================
// ANIMATION STYLES (injected)
// ==========================================

const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .game-modal {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: modalFade 0.2s ease;
    }
    .modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.65);
        backdrop-filter: blur(2px);
    }
    .modal-box {
        position: relative;
        background: #fff;
        border-radius: 12px;
        width: 90%;
        max-width: 460px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        animation: modalPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .modal-close {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 3;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(0,0,0,0.4);
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s;
    }
    .modal-close:hover { background: rgba(0,0,0,0.6); }
    .modal-banner {
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
    .modal-emoji {
        font-size: 90px;
        filter: drop-shadow(0 8px 20px rgba(0,0,0,0.3));
        animation: float 4s ease-in-out infinite;
    }
    .modal-info-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 40px 20px 16px;
        background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
        color: #fff;
    }
    .modal-info-overlay h2 {
        font-size: 22px;
        font-weight: 800;
        margin-bottom: 2px;
        letter-spacing: -0.3px;
    }
    .modal-info-overlay p {
        font-size: 12px;
        opacity: 0.85;
    }
    .modal-body { padding: 20px; }
    .modal-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 16px;
        text-align: center;
    }
    .modal-stats > div {
        background: #f5f6f7;
        border-radius: 8px;
        padding: 10px;
    }
    .modal-num {
        display: block;
        font-size: 18px;
        font-weight: 800;
        color: #191919;
    }
    .modal-lbl {
        display: block;
        font-size: 10px;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 2px;
    }
    .modal-play-btn {
        width: 100%;
        background: linear-gradient(to bottom, #00b06f, #008a56);
        color: #fff;
        font-size: 16px;
        font-weight: 800;
        padding: 14px;
        border-radius: 8px;
        letter-spacing: 0.5px;
        transition: all 0.15s;
        box-shadow: 0 3px 0 #005f3c;
    }
    .modal-play-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 0 #005f3c;
    }
    .modal-play-btn:active {
        transform: translateY(2px);
        box-shadow: 0 1px 0 #005f3c;
    }
    .modal-desc {
        font-size: 12px;
        color: #666;
        line-height: 1.6;
        margin-top: 14px;
    }
    @keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes modalPop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
`;
document.head.appendChild(modalStyles);

// ==========================================
// HERO CAROUSEL
// ==========================================

const heroSlides = [
    { tag: "FEATURED EVENT", title: "Ready Player One", desc: "Explore the OASIS in the official Roblox event. Limited rewards await!", emoji: "🎮", bg: "linear-gradient(110deg, #1a2a6c 0%, #b21f1f 60%, #fdbb2d 100%)" },
    { tag: "NEW UPDATE", title: "Jailbreak Season 4", desc: "New vehicles, weapons, and heists. Escape the prison your way.", emoji: "🚔", bg: "linear-gradient(110deg, #232526, #414345, #e2231a)" },
    { tag: "SUMMER EVENT", title: "Adopt Me Summer", desc: "Adopt legendary pets and build your dream home with friends.", emoji: "🐾", bg: "linear-gradient(110deg, #f2994a, #f2c94c, #56ccf2)" },
    { tag: "COMMUNITY", title: "Bloxy Awards 2018", desc: "Vote for your favourite games and creators of the year!", emoji: "🏆", bg: "linear-gradient(110deg, #4b0082, #8b00ff, #e2231a)" }
];

let currentSlide = 0;
const slideEl = document.querySelector('.hero-slide');
const dotsEl = document.querySelectorAll('.hero-dots span');

function setSlide(i) {
    if (!slideEl) return;
    const s = heroSlides[i];
    slideEl.style.background = s.bg;
    slideEl.querySelector('.hero-tag').textContent = s.tag;
    slideEl.querySelector('h1').textContent = s.title;
    slideEl.querySelector('p').textContent = s.desc;
    slideEl.querySelector('.hero-art').textContent = s.emoji;
    dotsEl.forEach((d, idx) => d.classList.toggle('active', idx === i));
}

dotsEl.forEach((dot, i) => dot.addEventListener('click', () => {
    currentSlide = i;
    setSlide(i);
}));

setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    setSlide(currentSlide);
}, 5000);

// ==========================================
// INIT
// ==========================================

renderGames('popularGames', popularGames);
renderGames('recommendedGames', recommendedGames);
renderGames('upcomingGames', upcomingGames);
renderCreators();

// Живой счётчик игроков
setInterval(() => {
    document.querySelectorAll('.game-players-badge').forEach(badge => {
        const match = badge.textContent.match(/([\d.]+)(K?)/);
        if (!match) return;
        let n = parseFloat(match[1]);
        n += (Math.random() - 0.5) * 0.5;
        n = Math.max(0.5, n);
        badge.textContent = n.toFixed(1) + 'K';
    });
}, 2500);

// ==========================================
// CONSOLE EASTER EGG
// ==========================================

console.log('%cROBLOX', 'font-size: 42px; font-weight: 900; color: #e2231a; text-shadow: 2px 2px 0 #000; letter-spacing: -2px;');
console.log('%c2018 — Powering Imagination ✨', 'font-size: 14px; color: #888; font-style: italic;');
console.log('%c🍪 Fun fact: Это был год, когда Adopt Me взлетел до небес.', 'font-size: 12px; color: #00b06f;');
