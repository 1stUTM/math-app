// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand();
tg.enableClosingConfirmation();

// Установка темы
document.body.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color || '#ffffff');
document.body.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color || '#000000');
document.body.style.setProperty('--tg-theme-hint-color', tg.themeParams.hint_color || '#999999');
document.body.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color || '#3390ec');
document.body.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color || '#ffffff');
document.body.style.setProperty('--tg-theme-secondary-bg-color', tg.themeParams.secondary_bg_color || '#f5f5f5');

// Переключение категорий
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.formulas-section').forEach(s => s.classList.remove('active'));
        const category = btn.dataset.category;
        document.getElementById(category).classList.add('active');
    });
});

// Функции расчётов - Геометрия
function calcTriangle() {
    const a = parseFloat(document.getElementById('tri-a').value);
    const h = parseFloat(document.getElementById('tri-h').value);
    
    if (isNaN(a) || isNaN(h)) {
        showResult('tri-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = (a * h) / 2;
    showResult('tri-result', `✅ Площадь: ${result.toFixed(2)} кв. ед.`);
}

function calcCircle() {
    const r = parseFloat(document.getElementById('circle-r').value);
    
    if (isNaN(r)) {
        showResult('circle-result', '❌ Введи радиус', 'error');
        return;
    }
    
    const result = Math.PI * r * r;
    showResult('circle-result', `✅ Площадь: ${result.toFixed(2)} кв. ед.`);
}

function calcSphere() {
    const r = parseFloat(document.getElementById('sphere-r').value);
    
    if (isNaN(r)) {
        showResult('sphere-result', '❌ Введи радиус', 'error');
        return;
    }
    
    const result = (4/3) * Math.PI * Math.pow(r, 3);
    showResult('sphere-result', `✅ Объём: ${result.toFixed(2)} куб. ед.`);
}

function calcPythagoras() {
    const a = parseFloat(document.getElementById('pyth-a').value);
    const b = parseFloat(document.getElementById('pyth-b').value);
    
    if (isNaN(a) || isNaN(b)) {
        showResult('pyth-result', '❌ Введи оба катета', 'error');
        return;
    }
    
    const result = Math.sqrt(a*a + b*b);
    showResult('pyth-result', `✅ Гипотенуза: ${result.toFixed(2)}`);
}

function calcRectangle() {
    const a = parseFloat(document.getElementById('rect-a').value);
    const b = parseFloat(document.getElementById('rect-b').value);
    
    if (isNaN(a) || isNaN(b)) {
        showResult('rect-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = a * b;
    showResult('rect-result', `✅ Площадь: ${result.toFixed(2)} кв. ед.`);
}

function calcTrapezoid() {
    const a = parseFloat(document.getElementById('trap-a').value);
    const b = parseFloat(document.getElementById('trap-b').value);
    const h = parseFloat(document.getElementById('trap-h').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        showResult('trap-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = ((a + b) * h) / 2;
    showResult('trap-result', `✅ Площадь: ${result.toFixed(2)} кв. ед.`);
}

// Функции расчётов - Алгебра
function calcQuadratic() {
    const a = parseFloat(document.getElementById('quad-a').value);
    const b = parseFloat(document.getElementById('quad-b').value);
    const c = parseFloat(document.getElementById('quad-c').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult('quad-result', '❌ Введи все коэффициенты', 'error');
        return;
    }
    
    const d = b*b - 4*a*c;
    
    if (d < 0) {
        showResult('quad-result', '❌ Нет действительных корней');
        return;
    }
    
    const x1 = (-b + Math.sqrt(d)) / (2*a);
    const x2 = (-b - Math.sqrt(d)) / (2*a);
    
    showResult('quad-result', `✅ x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`);
}

function calcPower() {
    const a = parseFloat(document.getElementById('pow-a').value);
    const n = parseFloat(document.getElementById('pow-n').value);
    
    if (isNaN(a) || isNaN(n)) {
        showResult('pow-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = Math.pow(a, n);
    showResult('pow-result', `✅ Результат: ${result.toFixed(2)}`);
}

function calcFactorial() {
    const n = parseInt(document.getElementById('fact-n').value);
    
    if (isNaN(n) || n < 0) {
        showResult('fact-result', '❌ Введи неотрицательное число', 'error');
        return;
    }
    
    if (n > 170) {
        showResult('fact-result', '❌ Число слишком большое', 'error');
        return;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    if (result > 1e10) {
        showResult('fact-result', `✅ ${n}! = ${result.toExponential(2)}`);
    } else {
        showResult('fact-result', `✅ ${n}! = ${result}`);
    }
}

function calcRoot() {
    const x = parseFloat(document.getElementById('root-x').value);
    const n = parseFloat(document.getElementById('root-n').value);
    
    if (isNaN(x) || isNaN(n)) {
        showResult('root-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = Math.pow(x, 1/n);
    showResult('root-result', `✅ Корень: ${result.toFixed(4)}`);
}

function calcPercent() {
    const x = parseFloat(document.getElementById('percent-x').value);
    const p = parseFloat(document.getElementById('percent-p').value);
    
    if (isNaN(x) || isNaN(p)) {
        showResult('percent-result', '❌ Введи все значения', 'error');
        return;
    }
    
    const result = x * (p / 100);
    showResult('percent-result', `✅ ${p}% от ${x} = ${result.toFixed(2)}`);
}

// Функции расчётов - Тригонометрия
function calcSin() {
    const x = parseFloat(document.getElementById('sin-x').value);
    
    if (isNaN(x)) {
        showResult('sin-result', '❌ Введи угол', 'error');
        return;
    }
    
    const rad = x * Math.PI / 180;
    const result = Math.sin(rad);
    showResult('sin-result', `✅ sin(${x}°) = ${result.toFixed(4)}`);
}

function calcCos() {
    const x = parseFloat(document.getElementById('cos-x').value);
    
    if (isNaN(x)) {
        showResult('cos-result', '❌ Введи угол', 'error');
        return;
    }
    
    const rad = x * Math.PI / 180;
    const result = Math.cos(rad);
    showResult('cos-result', `✅ cos(${x}°) = ${result.toFixed(4)}`);
}

function calcTan() {
    const x = parseFloat(document.getElementById('tan-x').value);
    
    if (isNaN(x)) {
        showResult('tan-result', '❌ Введи угол', 'error');
        return;
    }
    
    const rad = x * Math.PI / 180;
    const result = Math.tan(rad);
    showResult('tan-result', `✅ tan(${x}°) = ${result.toFixed(4)}`);
}

function calcCot() {
    const x = parseFloat(document.getElementById('cot-x').value);
    
    if (isNaN(x)) {
        showResult('cot-result', '❌ Введи угол', 'error');
        return;
    }
    
    const rad = x * Math.PI / 180;
    const result = 1 / Math.tan(rad);
    showResult('cot-result', `✅ cot(${x}°) = ${result.toFixed(4)}`);
}

// Калькулятор
function calcExpression() {
    const expr = document.getElementById('calc-expr').value;
    
    if (!expr) {
        showResult('calc-result', '❌ Введи выражение', 'error');
        return;
    }
    
    try {
        let safeExpr = expr
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/\^/g, '**')
            .replace(/pi/g, 'Math.PI')
            .replace(/e(?![a-z])/g, 'Math.E');
        
        const result = eval(safeExpr);
        showResult('calc-result', `✅ Результат: ${result.toFixed(4)}`);
    } catch (e) {
        showResult('calc-result', '❌ Ошибка в выражении', 'error');
    }
}

// Вспомогательная функция для отображения результата
function showResult(elementId, text, type = 'success') {
    const element = document.getElementById(elementId);
    element.textContent = text;
    element.style.display = 'flex';
    
    if (type === 'error') {
        element.style.background = 'linear-gradient(135deg, #ff6b6b15 0%, #ee5a5a15 100%)';
    } else {
        element.style.background = 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)';
    }
}
