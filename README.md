# Web Video Player using Angular Framework and Video.js Library

This project is a web video player built using **Angular** framework and **Video.js** library.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Angular CLI
- npm or yarn

## Installation

1. Clone this repository.
2. Install the necessary dependencies using `npm install`.

## Usage

1. Create an Angular component for your video player. For example:

```typescript
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: ['./vjs-player.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef;

  @Input() options: {
    fluid: boolean;
    aspectRatio: string;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  };

  player: videojs.Player;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
