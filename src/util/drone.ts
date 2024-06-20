export class Drone {
  audioContext: AudioContext
  oscillator: OscillatorNode
  pitch: number
  isRunning: boolean

  constructor() {
    this.audioContext = new AudioContext()
    this.oscillator = this.audioContext.createOscillator()
    this.pitch = 1000
    this.isRunning = false
  }

  activateOsc() {
    if (this.isRunning) return

    if (!this.audioContext) {
      this.audioContext = new AudioContext()
      this.oscillator = this.audioContext.createOscillator()
    }
    this.oscillator.type = 'sine'
    this.oscillator.frequency.value = this.pitch
    this.oscillator.start(this.audioContext.currentTime)
  }

  start() {
    console.log(this.oscillator.context)
    if (this.oscillator.context.state === 'suspended') this.activateOsc()
    
    this.oscillator.connect(this.audioContext.destination)
    this.isRunning = true
  }
  stop() {
    this.oscillator.disconnect(this.audioContext.destination)
    this.isRunning = false
  }
  startStop() {
    if (this.isRunning) this.stop()
    else this.start()
  }
}