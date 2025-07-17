let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
    });
};


document.querySelector("button").addEventListener("click", () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value];

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
});
