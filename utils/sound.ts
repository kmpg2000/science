
// Simple retro sound synthesizer using Web Audio API
// No external assets required

let ctx: AudioContext | null = null;

const ensureCtx = () => {
  if (!ctx) {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    ctx = new AudioContext();
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
};

export const playCorrect = () => {
  const c = ensureCtx();
  const t = c.currentTime;

  // High pitched chime (C5 -> E5)
  const osc = c.createOscillator();
  const gain = c.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(523.25, t); 
  osc.frequency.setValueAtTime(659.25, t + 0.1); 
  
  gain.gain.setValueAtTime(0.1, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.4);
  
  osc.connect(gain);
  gain.connect(c.destination);
  
  osc.start();
  osc.stop(t + 0.4);
};

export const playIncorrect = () => {
  const c = ensureCtx();
  const t = c.currentTime;

  // Low pitched buzz (Sawtooth)
  const osc = c.createOscillator();
  const gain = c.createGain();
  
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.linearRampToValueAtTime(100, t + 0.3);
  
  gain.gain.setValueAtTime(0.15, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.3);
  
  osc.connect(gain);
  gain.connect(c.destination);
  
  osc.start();
  osc.stop(t + 0.3);
};

export const playClick = () => {
  const c = ensureCtx();
  const t = c.currentTime;

  // Short blip
  const osc = c.createOscillator();
  const gain = c.createGain();
  
  osc.type = 'square';
  osc.frequency.setValueAtTime(800, t);
  
  gain.gain.setValueAtTime(0.05, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
  
  osc.connect(gain);
  gain.connect(c.destination);
  
  osc.start();
  osc.stop(t + 0.05);
};

export const playDrum = () => {
  const c = ensureCtx();
  const t = c.currentTime;
  
  const osc = c.createOscillator();
  const gain = c.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(100, t);
  osc.frequency.exponentialRampToValueAtTime(20, t + 0.2);

  gain.gain.setValueAtTime(0.2, t);
  gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

  osc.connect(gain);
  gain.connect(c.destination);

  osc.start();
  osc.stop(t + 0.2);
};
