import CatchFruit from './CatchFruit';
import Audio from './libs/Audio';
import horse from '../audios/horse.mp3'

window.game = new CatchFruit({
    name: 'Catch Fruit'
});

let audio = new Audio(horse, 'bg');
audio.embed({
    autoPlay: true
});
// audio.element.play();