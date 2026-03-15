const form = document.getElementById('eta-form');
const resultCard = document.getElementById('resultCard');
const etaLine = document.getElementById('etaLine');
const messageBox = document.getElementById('messageBox');
const copyBtn = document.getElementById('copyBtn');
const sendBtn = document.getElementById('sendBtn');

let activeGroupLink = '';

const toClockTime = (date) =>
  date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

const estimateArrival = ({ distanceKm, speedKmh, delayMin }) => {
  const travelMinutes = (distanceKm / speedKmh) * 60;
  const totalMinutes = Math.max(0, travelMinutes + delayMin);
  return new Date(Date.now() + totalMinutes * 60 * 1000);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const friendName = document.getElementById('friendName').value.trim();
  const distance = Number(document.getElementById('distance').value);
  const speed = Number(document.getElementById('speed').value);
  const delay = Number(document.getElementById('delay').value || 0);
  const destination = document.getElementById('destination').value.trim();
  const groupLink = document.getElementById('groupLink').value.trim();

  if (!friendName || !destination || !groupLink || distance < 0 || speed <= 0 || delay < 0) {
    etaLine.textContent = 'Please fill all fields with valid values.';
    resultCard.hidden = false;
    return;
  }

  const eta = estimateArrival({
    distanceKm: distance,
    speedKmh: speed,
    delayMin: delay,
  });

  const etaTime = toClockTime(eta);
  const message = `Heads up team: ${friendName} is estimated to arrive at ${destination} around ${etaTime}.`;

  etaLine.textContent = `${friendName} should arrive at ${destination} around ${etaTime}.`;
  messageBox.value = message;
  activeGroupLink = groupLink;
  resultCard.hidden = false;
});

copyBtn.addEventListener('click', async () => {
  if (!messageBox.value) return;

  try {
    await navigator.clipboard.writeText(messageBox.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy message';
    }, 1300);
  } catch {
    copyBtn.textContent = 'Copy failed';
  }
});

sendBtn.addEventListener('click', () => {
  if (!activeGroupLink) return;
  window.open(activeGroupLink, '_blank', 'noopener,noreferrer');
});
