const chart = LightweightCharts.createChart(document.getElementById('chart'), {
    layout: {
        background: { color: '#0b0f14' },
        textColor: '#d1d5db',
    },
    grid: {
        vertLines: { color: '#1f2933' },
        horzLines: { color: '#1f2933' },
    },
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    },
});

const lineSeries = chart.addLineSeries({
    color: '#22c55e',
    lineWidth: 2,
});

// стартова демо-ціна
let price = 100.0;
const priceEl = document.getElementById('price');

// початкові дані
let data = [];
let time = Math.floor(Date.now() / 1000);

for (let i = 0; i < 30; i++) {
    data.push({ time: time - (30 - i) * 60, value: price });
}

lineSeries.setData(data);

// симуляція руху ціни
setInterval(() => {
    const change = (Math.random() - 0.5) * 1.5;
    price = Math.max(100, Math.min(120, price + change));

    const newPoint = {
        time: Math.floor(Date.now() / 1000),
        value: price,
    };

    data.push(newPoint);
    lineSeries.update(newPoint);

    priceEl.textContent = `$${price.toFixed(2)}`;
}, 2000);
