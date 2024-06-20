interface FrequencyMap {
  [key: string]: number
}
const freqMap: FrequencyMap = {
  'C': 261.63,
  'C#/Db': 277.18,
  'D': 293.66,
  'D#/Eb': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#/Gb': 369.99,
  'G': 392.00,
  'G#/Ab': 415.30,
  'A': 440.00,
  'A#/Bb': 466.16,
  'B': 493.88,
}

export class Drone {
  audioContext: AudioContext
  oscillator: OscillatorNode
  envelope: GainNode
  pitch: number
  isRunning: boolean

  constructor(note = 'A') {
    this.audioContext = new AudioContext()
    this.oscillator = this.audioContext.createOscillator()
    this.envelope = this.audioContext.createGain()
    this.pitch = freqMap[note]
    this.isRunning = false
  }

  activateOsc() {
    if (this.isRunning) return

    if (!this.audioContext) {
      this.audioContext = new AudioContext()
      this.oscillator = this.audioContext.createOscillator()
      this.envelope = this.audioContext.createGain()
    }
    
    this.envelope.gain.value = 1
    // this.envelope.gain.exponentialRampToValueAtTime(1, 1)
    
    this.oscillator.type = 'triangle'
    this.oscillator.frequency.value = this.pitch
    this.oscillator.start(this.audioContext.currentTime)

    this.oscillator.connect(this.envelope)
  }
  
  start() {
    console.log(this.oscillator.context)
    if (this.oscillator.context.state === 'suspended') this.activateOsc()
      
    this.oscillator.connect(this.audioContext.destination)
    this.envelope.connect(this.audioContext.destination)
    this.isRunning = true
  }
  stop() {
    this.oscillator.disconnect(this.audioContext.destination)
    this.envelope.disconnect(this.audioContext.destination)
    this.isRunning = false
  }
  startStop() {
    if (this.isRunning) this.stop()
    else this.start()
  }
}