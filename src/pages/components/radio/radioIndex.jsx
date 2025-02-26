import { useRef } from "react";
import { socialButtons } from '../../data/portal.json';

export default function RadioPlayer() {
  const audioRef = useRef(null);

  const playRadio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseRadio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="radio-player container">
      <img src="/images/radiomunicipal.png" alt="" width={250} />  
      <small>Emisora de Radio FM - Cultural, educativa, informativa, entretenimiento.</small>
      <audio ref={audioRef} controls className="radio-player__audio">
        <source src="https://uk6freenew.listen2myradio.com/live.mp3?typeportmount=s1_37124_stream_744360990" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="btn-seguinos-container">
            {socialButtons.map((button, index) => (
                <button 
                    key={index} 
                    className={`${button.color}`} 
                >
                    {button.name}
                    <img src={button.image} alt={button.name} />
                </button>
            ))}
        </div>

    </div>
  );
}
