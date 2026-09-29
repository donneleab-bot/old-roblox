// ==========================================
// ROBLOX 2015 — INSPIRED BY SCREENSHOTS
// ==========================================

// Интерактивные карточки игр
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        const game = card.dataset.game;
        const thumb = card.querySelector('.game-thumb');
        const original = thumb.textContent;
        
        thumb.textContent = '⏳';
        setTimeout(() => {
            alert(`🎮 Запуск "${game}"...\n\n🕹️ Приятной ностальгии!`);
            thumb.textContent = original;
        }, 700);
    });
});

// Живой счётчик игроков
setInterval(() => {
    document.querySelectorAll('.game-stats').forEach(el => {
        const match = el.textContent.match(/([\d,]+)/);
        if (!match) return;
        let n = parseInt(match[1].replace(/,/g, ''));
        n += Math.floor(Math.random() * 20) - 8;
        n = Math.max(10, n);
        el.textContent = `⚡ ${n.toLocaleString('en-US')} Playing`;
    });
}, 4000);

// Друзья
document.querySelectorAll('.friend-item').forEach(f => {
    f.addEventListener('click', () => {
        alert('👤 Открытие профиля друга');
    });
});

// Пасхалка в консоли
console.log('%cROBLOX', 'font-size:38px;font-weight:900;color:#e2231a;text-shadow:2px 2px 0 #000;');
console.log('%c"Powering Imagination"', 'font-size:12px;color:#2c3e50;font-style:italic;');
console.log('%c🎮 Ностальгия в каждой строчке кода ✨', 'font-size:11px;color:#4a90e2;');
