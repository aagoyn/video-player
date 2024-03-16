import { Component, OnInit } from '@angular/core';

import videojs from 'video.js';

@Component({
    selector: 'app-vidplay',
    templateUrl: './vidplay.component.html',
    styleUrls: ['./vidplay.component.css']
})
export class VideoPlayerComponent implements OnInit {

    player: any;

    constructor() { }

    ngOnInit(): void {
        this.player = videojs('my-video', {
            controlBar: {
                volumePanel: {
                    inline: false
                }
            },
        })
    }

    play(): void {
        this.player.play();
    }

    replay(): void {
        this.player.currentTime(0);
        this.player.play();
    }

    forward(): void {
        const currentTime = this.player.currentTime();
        this.player.currentTime(currentTime + 10);
    }

    backward(): void {
        const currentTime = this.player.currentTime();
        this.player.currentTime(currentTime - 10);
    }

    pause(): void {
        this.player.pause();
    }

}
