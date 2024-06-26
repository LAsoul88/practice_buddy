interface FrequencyMap {
  [key: string]: number
}
export const freqMap: FrequencyMap = {
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
  frequency: number
  isRunning: boolean

  constructor(note = 'A') {
    this.audioContext = new AudioContext()
    this.oscillator = new OscillatorNode(this.audioContext)
    // this.oscillator = this.audioContext.createOscillator()
    // this.envelope = this.audioContext.createGain()
    this.envelope = new GainNode(this.audioContext)
    this.frequency = freqMap[note]
    this.isRunning = false
  }

  activateOsc() {
    if (this.isRunning) return

    if (!this.audioContext) {
      this.audioContext = new AudioContext()
      this.oscillator = new OscillatorNode(this.audioContext)
      this.envelope = new GainNode(this.audioContext)
    }
    this.oscillator.type = 'sine'
    this.oscillator.frequency.value = this.frequency
    this.oscillator.connect(this.envelope)
    this.envelope.connect(this.audioContext.destination)
    this.oscillator.start()
    
    this.envelope.gain.value = -0.7 

  }
  
  start() {
    if (this.oscillator.context.state === 'suspended') this.activateOsc()
    
    this.oscillator.frequency.value = this.frequency
    this.envelope.connect(this.audioContext.destination)
    this.oscillator.connect(this.audioContext.destination)
    this.isRunning = true
  }
  stop() {
    this.oscillator.disconnect()
    // this.envelope.disconnect()
    this.isRunning = false
  }
  startStop() {
    if (this.isRunning) this.stop()
    else this.start()
  }
}