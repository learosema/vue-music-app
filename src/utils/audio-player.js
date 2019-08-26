// mostly adapted from my former codepen demo: 
// https://codepen.io/terabaud/pen/BYdjdx?editors=0010

import { clientId } from '../../soundcloud.config'

class AudioPlayer {

  constructor() {
    this.audio = null;
    this.mediaSrc = null;
    this.gain = null;
    this.endedCallbacks = [];
    this.progressCallbacks = [];
  }

  initAudioContext() {
    if (! this.AC) {
      this.AC = new AudioContext();
      this.analyser = this.AC.createAnalyser();
      this.analyser.fftSize = 512;
      this.buffer = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.connect(this.AC.destination);
    }
  }

  muteAudio(fadeOutDelay) {
    let lastAudio = this.audio;
    let lastMediaSrc = this.mediaSrc;
    let lastGain = this.gain;
    this.audio = null;
    this.mediaSrc = null;
    this.gain = null;
    if (lastAudio) {
      lastGain.gain.exponentialRampToValueAtTime(0.01, this.AC.currentTime + fadeOutDelay / 1e3);
      setTimeout(() => {
        lastAudio.pause();
        lastGain.disconnect();
        lastMediaSrc.disconnect();
      }, fadeOutDelay);
    }
  }

  onEnded(callback) {
    this.endedCallbacks.push(callback);
  }

  onTimeUpdate(callback) {
    this.progressCallbacks.push(callback);
  }

  get currentTime() {
    if (this.audio) {
      return this.audio.currentTime;
    }
    return NaN;
  }

  get duration() {
    if (this.audio) {
      return this.audio.duration;
    }
    return NaN;
  }


  play(streamUrl) {
    this.initAudioContext();
    if (this.audio) {
      this.muteAudio(0);
    }
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous";
    this.audio.src = streamUrl + `?client_id=${clientId}`;
    // this.audio.playbackRate = 1.5
    this.audio.play();
    this.audio.onended = (e) => {
      this.muteAudio(0);
      this.endedCallbacks.forEach(callback => {
        callback(e);
      });
    }
    this.audio.ontimeupdate = (e) => {
      this.progressCallbacks.forEach(callback => {
        callback(e);
      });
    }
    this.mediaSrc = this.AC.createMediaElementSource(this.audio)
    this.gain = this.AC.createGain();
    this.mediaSrc.connect(this.gain);
    this.gain.connect(this.analyser);
  }
}

export const audioPlayer = new AudioPlayer();