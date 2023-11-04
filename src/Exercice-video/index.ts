interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  startEvents(): void;
  playToggle(): void;
  stopPlayer(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElementes: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElementes.videoPlayer;
    this.playButton = videoPlayerElementes.playButton;
    this.stopButton = videoPlayerElementes.stopButton;
  }

  startEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stopPlayer();
    });
  }
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stopPlayer(): void {
    if (!this.videoPlayer.paused) {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    }
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.startEvents();
