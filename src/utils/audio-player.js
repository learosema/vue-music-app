// mostly adapted from my former codepen demo: 
// https://codepen.io/terabaud/pen/BYdjdx?editors=0010

class AudioPlayer {

  constructor(AC) {
    this.audio = null;
    this.mediaSrc = null;
    this.gain = null;
  }

  initAudioContext() {
    if (! this.AC) {
      this.AC = new AudioContext()
      this.analyser = this.AC.createAnalyser()
      this.analyser.fftSize = 512
      this.buffer = new Uint8Array(this.analyser.frequencyBinCount)
      this.analyser.connect(this.AC.destination)  
    }
  }

  fadeOut(fadeOutDelay) {
    let lastAudio = this.audio
    let lastMediaSrc = this.mediaSrc
    let lastGain = this.gain
    this.audio = null
    this.mediaSrc = null
    this.gain = null
    if (lastAudio) {
      lastGain.gain.exponentialRampToValueAtTime(0.01, this.AC.currentTime + fadeOutDelay/1e3)
      setTimeout(() => {        
        lastAudio.pause()            
        lastGain.disconnect()
        lastMediaSrc.disconnect()
      }, 10 + fadeOut)  
    }
  }

  play(streamUrl) {
    this.initAudioContext();
    if (this.audio) {
      this.muteAudio(3000)
    }
    if (index == this.currentIndex) {
      // user pressed stop
      this.currentIndex = -1 
      return
    }
    this.currentIndex = index
    this.audio = new Audio()
    this.audio.crossOrigin = "anonymous"
    this.audio.src = streamUrl + `?client_id=${clientId}`
    // this.audio.playbackRate = 1.5
    this.audio.play()
    this.audio.onended = () => {
      this.muteAudio(0)
      this.currentIndex = -1 
      // this.selectTrack((this.currentIndex + 1) % this.tracks.length)
    }
    this.mediaSrc = this.AC.createMediaElementSource(this.audio)
    this.gain = this.AC.createGain()
    this.mediaSrc.connect(this.gain)
    this.gain.connect(this.analyser)      
  }
}

export const audioPlayer = new AudioPlayer();