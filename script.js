// ==========================================
// ROBLOX 2015 — SCRIPT
// ==========================================

// Плавное появление панелей
document.querySelectorAll('.panel').forEach((panel, i) => {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(10px)';
    panel.style.transition = `all 0.35s ease ${i * 0.03}s`;
    requestAnimationFrame(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';
    });
});

// Клик по игре — "запуск"
document.querySelectorAll('.btn-play').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.closest('.game-row');
        const title = row.querySelector('.game-title').textContent;
        btn.textContent = '⏳ Loading...';
        setTimeout(() => {
            alert(`🎮 Запуск "${title}"...\n\n🕹️ Приятной ностальгии!`);
            btn.textContent = '▶ Play';
        }, 900);
    });
});

// Живой счётчик игроков
setInterval(() => {
    document.querySelectorAll('.game-players').forEach(el => {
        const match = el.textContent.match(/([\d.]+)(K?)/);
        if (!match) return;
        let n = parseFloat(match[1]);
        n += (Math.random() - 0.5) * 0.8;
        n = Math.max(0.5, n);
        el.innerHTML = `<span class="dot"></span> ${n.toFixed(1)}K playing`;
    });
}, 3000);

// Клик по другу
document.querySelectorAll('.friend, .online-item').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const name = el.querySelector('span, a').textContent;
        alert(`👤 Открытие профиля: ${name}`);
    });
});

// Клик по группе
document.querySelectorAll('.group-card').forEach(el => {
    el.addEventListener('click', () => {
        const name = el.querySelector('span').textContent;
        alert(`👥 Группа: ${name}`);
    });
});

// Клик по предмету каталога
document.querySelectorAll('.cat-item').forEach(el => {
    el.addEventListener('click', () => {
        const name = el.querySelector('span').textContent;
        const price = el.querySelector('em').textContent;
        if (confirm(`Купить "${name}" за ${price}?`)) {
            alert('✅ Покупка совершена!');
        }
    });
});

// Консольная пасхалка
console.log('%cROBLOX', 'font-size:38px;font-weight:900;color:#e2231a;text-shadow:2px 2px 0 #000;letter-spacing:-2px;');
console.log('%c2015 — POWERING IMAGINATION', 'font-size:12px;color:#888;letter-spacing:2px;');
console.log('%c🎮 Это был год, когда сайт изменился навсегда...', 'font-size:11px;color:#4a9d00;');
console.log('%c📜 Друзья до сих пор спорят: старый дизайн был лучше или новый?', 'font-size:11px;color:#0055a5;font-style:italic;');
