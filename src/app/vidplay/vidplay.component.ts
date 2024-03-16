import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
    selector: 'app-vidplay',
    templateUrl: './vidplay.component.html',
    styleUrls: ['./vidplay.component.css']
})
export class VideoPlayerComponent implements OnInit {
    player: any;
    isPlaying: boolean = false; // Tambahkan variabel isPlaying

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
        if (this.isPlaying) {
            this.player.pause();
            this.isPlaying = false;
        } else {
            this.player.play();
            this.isPlaying = true;
        }
    }

    pause(): void {
        if (this.isPlaying) {
            this.player.pause();
            this.isPlaying = false;
        } else {
            this.player.play();
            this.isPlaying = true;
        }
    }

    replay(): void {
        this.player.currentTime(0);
        this.player.play();
        this.isPlaying = true;
    }

    forward(): void {
        const currentTime = this.player.currentTime();
        this.player.currentTime(currentTime + 10);
    }

    backward(): void {
        const currentTime = this.player.currentTime();
        this.player.currentTime(currentTime - 10);
    }
}
