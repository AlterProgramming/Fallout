const fields = {
  batteryLevel: document.getElementById("batteryLevel"),
  temperature: document.getElementById("temperature"),
  cpuLoad: document.getElementById("cpuLoad"),
  brightness: document.getElementById("brightness"),
  radio: document.getElementById("radio"),
};

const outputs = {
  batteryLevel: document.getElementById("batteryLevelValue"),
  temperature: document.getElementById("temperatureValue"),
  cpuLoad: document.getElementById("cpuLoadValue"),
  brightness: document.getElementById("brightnessValue"),
  radio: document.getElementById("radioValue"),
};

const scoreEl = document.getElementById("score");
const verdictEl = document.getElementById("verdict");
const insightsEl = document.getElementById("insights");

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toScore() {
  const batteryLevel = Number(fields.batteryLevel.value);
  const temperature = Number(fields.temperature.value);
  const cpuLoad = Number(fields.cpuLoad.value);
  const brightness = Number(fields.brightness.value);
  const radio = Number(fields.radio.value);

  const batteryPenalty = clamp((100 - batteryLevel) * 0.45, 0, 44);
  const tempPenalty = clamp((temperature - 30) * 2.2, 0, 40);
  const cpuPenalty = cpuLoad * 0.2;
  const brightnessPenalty = brightness * 0.08;
  const radioPenalty = radio * 0.08;

  const strain = batteryPenalty + tempPenalty + cpuPenalty + brightnessPenalty + radioPenalty;
  const ruggedness = Math.round(clamp(100 - strain, 0, 100));

  return {
    ruggedness,
    batteryLevel,
    temperature,
    cpuLoad,
    brightness,
    radio,
  };
}

function verdict(score) {
  if (score >= 75) {
    return {
      text: "Stable under current battery strain.",
      cssClass: "ok",
    };
  }

  if (score >= 50) {
    return {
      text: "Moderate stress detected — reduce heavy tasks soon.",
      cssClass: "warn",
    };
  }

  return {
    text: "High strain risk — cool down and charge to improve resilience.",
    cssClass: "risk",
  };
}

function generateInsights(metrics) {
  const notes = [];

  if (metrics.temperature >= 40) {
    notes.push("Battery temperature is high; thermal pressure is the largest ruggedness drag.");
  }

  if (metrics.batteryLevel <= 20) {
    notes.push("Battery level is low; reserve capacity is limited for peak performance.");
  }

  if (metrics.cpuLoad >= 75) {
    notes.push("CPU pressure is elevated; close background apps or pause gaming sessions.");
  }

  if (metrics.brightness >= 80) {
    notes.push("Display brightness is expensive right now; lower it to reduce immediate drain.");
  }

  if (metrics.radio >= 80) {
    notes.push("Connectivity stack is heavy; disable unused radios to trim battery strain.");
  }

  if (notes.length === 0) {
    notes.push("No critical stressors detected. Current battery load profile is balanced.");
  }

  return notes;
}

function syncOutput(field, suffix) {
  outputs[field].textContent = `${fields[field].value}${suffix}`;
}

function render() {
  syncOutput("batteryLevel", "%");
  syncOutput("temperature", "°C");
  syncOutput("cpuLoad", "%");
  syncOutput("brightness", "%");
  syncOutput("radio", "%");

  const metrics = toScore();
  scoreEl.textContent = String(metrics.ruggedness);

  const status = verdict(metrics.ruggedness);
  verdictEl.textContent = status.text;
  verdictEl.className = `verdict ${status.cssClass}`;

  const notes = generateInsights(metrics);
  insightsEl.innerHTML = "";
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    insightsEl.appendChild(li);
  });
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", render);
});

render();
