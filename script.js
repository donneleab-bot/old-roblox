// ===== ДАННЫЕ ИГР =====
const games = [
    { name: "Natural Disaster Survival", emoji: "🌪️", players: "3.2K", color: "linear-gradient(135deg, #667eea, #764ba2)", creator: "Stickmasterluke" },
    { name: "Jailbreak", emoji: "🚔", players: "8.1K", color: "linear-gradient(135deg, #f093fb, #f5576c)", creator: "Badimo" },
    { name: "Adopt Me!", emoji: "🐾", players: "12.4K", color: "linear-gradient(135deg, #4facfe, #00f2fe)", creator: "Uplift Games" },
    { name: "Tower of Hell", emoji: "🗼", players: "5.7K", color: "linear-gradient(135deg, #43e97b, #38f9d7)", creator: "YXCeptional" },
    { name: "Murder Mystery 2", emoji: "🔪", players: "6.3K", color: "linear-gradient(135deg, #fa709a, #fee140)", creator: "Nikilis" },
    { name: "Welcome to Bloxburg", emoji: "🏡", players: "4.9K", color: "linear-gradient(135deg, #30cfd0, #330867)", creator: "Coeptus" },
    { name: "MeepCity", emoji: "🐧", players: "2.1K", color: "linear-gradient(135deg, #a8edea, #fed6e3)", creator: "Alexnewtron" },
    { name: "Work at a Pizza Place", emoji: "🍕", players: "1.8K", color: "linear-gradient(135deg, #ff9a9e, #fecfef)", creator: "Dued1" },
    { name: "Prison Life", emoji: "⛓️", players: "3.4K", color: "linear-gradient(135deg, #ffecd2, #fcb69f)", creator: "Aesthetical" },
    { name: "Speed Run 4", emoji: "🏃", players: "2.7K", color: "linear-gradient(135deg, #ff6e7f, #bfe9ff)", creator: "Vurse" },
    { name: "Epic Minigames", emoji: "🎯", players: "1.9K", color: "linear-gradient(135deg, #5ee7df, #b490ca)", creator: "Typical Games" },
    { name: "Sword Fighting", emoji: "⚔️", players: "1.2K", color: "linear-gradient(135deg, #d299c2, #fef9d7)", creator: "Classic" }
];

// ===== РЕНДЕР ИГР =====
const grid = document.getElementById('gamesGrid');

games.forEach((game, i) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animation = `fadeIn 0.5s ease ${i * 0.05}s both`;
    card.innerHTML = `
        <div class="game-thumb" style="background: ${game.color};" data-players="👥 ${game.players}">
            ${game.emoji}
        </div>
        <div class="game-info">
            <h3>${game.name}</h3>
            <p>by ${game.creator}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        alert(`🎮 Запуск "${game.name}"...\n\nНостальгия активирована! 🕹️`);
    });
    grid.appendChild(card);
});

// ===== АНИМАЦИЯ ПОЯВЛЕНИЯ =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ===== ЭФФЕКТ КЛИКА =====
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('game-card') || e.target.classList.contains('catalog-item')) {
        // Визуальный отклик уже в CSS
    }
});

// ===== ПАСХАЛКА =====
console.log('%c🎮 ROBLOX CLASSIC 2012 🎮', 'font-size: 20px; color: #7ed321; font-weight: bold; text-shadow: 2px 2px 0 #000;');
console.log('%c"Powering Imagination" — ностальгия в каждой строчке кода ✨', 'font-size: 13px; color: #0055a5; font-style: italic;');

// ===== ЖИВОЙ СЧЁТЧИК ОНЛАЙН =====
const onlineStat = document.querySelector('.stat-num');
if (onlineStat) {
    let base = 247891;
    setInterval(() => {
        base += Math.floor(Math.random() * 20) - 8;
        onlineStat.textContent = base.toLocaleString('en-US').replace(/,/g, ',');
    }, 3000);
}
