const speech =  window.speechSynthesis;
speech.cancel()


function speakContent( event  ) {

 
 
    const text = event.target.textContent ; 
    if (window.speechSynthesis.speaking) {
        
        // toggle click to stop seaking 
        speech.cancel()
        return; 
    }

    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = /[अ-ह]/.test(text) ? 'hi-IN' : 'en-US';
    utterance.pitch = 1; // Default pitch
    utterance.rate = 1; // Default rate

    // Event listeners for debugging
    // utterance.onstart = () => console.log("Speech started");
    utterance.onend = () => {
                              speech.cancel(); 
                                          }

    utterance.onerror = (event) => {
                                  speech.cancel();
                                        }

 
    speech.speak(utterance);
}