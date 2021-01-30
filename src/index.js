import './styles.css';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
refs.stopBtn.disabled = true;

const changeColor = {
  intervalId: null,

  start() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));
