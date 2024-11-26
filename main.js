// Telegram WebApp Initialization
let tg = window.Telegram.WebApp;
tg.expand();

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
let username = tg.initDataUnsafe.user.first_name;
p.innerText = username;
usercard.appendChild(p);

const categories = {
    news: [
        { name: "BBC", url: "https://www.bbc.com" },
        { name: "CNN", url: "https://www.cnn.com" },
        { name: "РБК", url: "https://www.rbc.ru" },
        { name: "ТАСС", url: "https://tass.ru" },
        { name: "РИА Новости", url: "https://ria.ru" }
    ],
    games: [
        { name: "Miniclip", url: "https://www.miniclip.com" },
        { name: "Kongregate", url: "https://www.kongregate.com" },
        { name: "Armor Games", url: "https://armorgames.com" }
    ],
    search: [
        { name: "Google", url: "https://www.google.com" },
        { name: "Bing", url: "https://www.bing.com" },
        { name: "Yandex", url: "https://www.yandex.ru" }
    ],
    neural: [
        { name: "OpenAI", url: "https://www.openai.com" },
        { name: "DeepAI", url: "https://deepai.org" },
        { name: "Hugging Face", url: "https://huggingface.co" }
    ]
};

function showCategory(category) {
    const iconsDiv = document.getElementById('icons');
    iconsDiv.innerHTML = ''; // Очистка предыдущих прямоугольников
    categories[category].forEach(site => {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        iconDiv.onclick = () => window.open(site.url, '_blank');
        iconDiv.innerHTML = `<br>${site.name}`; // Убираем иконки, оставляем только текст
        iconsDiv.appendChild(iconDiv);
    });
}

function showMenu() {
    document.getElementById('menuPopup').style.display = 'block';
}

function hideMenu() {
    document.getElementById('menuPopup').style.display = 'none';
}

// Функция для смены темы
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeToggleButton = document.getElementById('themeToggle');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Светлая тема';
    } else {
        themeToggleButton.textContent = 'Темная тема';
    }
}

function shareApp() {
    let referralLink = `https://t.me/Tsites_bot?start`;
    var shareText = `${username} приглашает вас исследовать интернет внутри телеграм! Не упустите такую возможность!`;
    var encodedUrl = encodeURIComponent(referralLink);
    var encodedText = encodeURIComponent(shareText);
    var telegramUrl = "https://t.me/share/url?url=" + encodedUrl + "&text=" + encodedText;
    window.open(telegramUrl, "_blank");
}
