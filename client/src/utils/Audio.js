import success from '../fx/success.mp3'
import ReactHowler from 'react-howler'
import {Howl, Howler} from 'howler';
// https://github.com/goldfire/howler.js#global-methods
//https://notificationsounds.com/notification-sounds

const audios = success

var sound = new Howl({
  src: [success],
  onend: function (){
      console.log("finished")
  }
});

export default function playAudio(){
  sound.play();
}
