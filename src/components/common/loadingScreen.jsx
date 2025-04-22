const LoadingScreen = ({ progress }) => {
  const motivationalTexts = [
    "You are almost there...",
    "Keep going, you're doing great!",
    "Success is within reach!",
    "Just a little more to go!",
    "Almost there, don't stop!",
    "Success! You made it!"
  ];

  const currentText = motivationalTexts[Math.floor(progress / 20)];

  return (
    <div className="loading-screen_container BGINICIO">
      <div className="loading-screen">
        <div className="loading-screen__logo">
          <img src="./images/logo-new-2020.svg" alt="Logo" className="loading-screen__logo-img" />
        </div>
        <div className="loading-screen__loading-container">
          <progress
            id="loading-bar"
            className="loading-screen__progress-bar"
            value={progress}
            max="100"
          ></progress>
          <span className="loading-screen__loading-counter">{progress}%</span>
        </div>
        <div className="loading-screen__motivational-text">{currentText}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
