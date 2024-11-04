let  recognition; 


// Check if the browser supports SpeechRecognition
if  ( !('webkitSpeechRecognition' in window ||  'SpeechRecognition' in window) ){console.error("Speech recognition not supported in this browser.");}

else{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = false; // Final results only
    recognition.maxAlternatives = 1; // Get the best result



} 







const music = new Audio("notification.mpeg");






function startRecording(userid){

   try {
    
 

   if(recognition){ recognition.lang =  languagedeatils[userid]
    // console.log(recognition.lang);
    
    recognition.start();




    recognition.onstart=(event)=>{
        scaleUp(userid)
        music.play();

        // console.log("starteddddd");
        
    }





    // Event fired if speech recognition gets a result  successfully 
    recognition.onresult = (event) => {

    
        let userSpeech = event.results[0][0].transcript; // Get recognized speech as string
        // console.log("User said:", userSpeech);




        document.getElementById(`${userid}currentmessage`).innerText = userSpeech
        userid=='user1'?   document.getElementById(`user2currentmessage`).innerText = "translating.........." :   document.getElementById(`user1currentmessage`).innerText = "translating.........." 


        if(languagedeatils['user1']!=languagedeatils['user2']){
            //    transalte using api 
            // update for second user 

            // userSpeech = userSpeech + "updated "
          
            //  console.log("translatin start");
             

            fetch("https://server-for-text-translation.onrender.com/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: userSpeech,
                    to_language: languagedeatils[userid=='user1'?'user2':'user1']
                })
            })
            .then(response => {
                if (!response.ok) {
                    // throw new Error(`Error: ${response.status} ${response.statusText}`);
                    console.log("error to translate text ");
                    
                }
                return response.json();
            })
            .then( data  => {

                // console.log("got data" , data );
                
                if(userid=='user1'){

                    document.getElementById(`user2currentmessage`).innerText = data.translatedText
    
                 
            }
            else{
                document.getElementById(`user1currentmessage`).innerText = data.translatedText
    
    
            }
            })
            .catch(error => {
                console.error("Failed to fetch translation:");
            });




        }

        else{

            userid=='user1'?   document.getElementById(`user2currentmessage`).innerText = userSpeech :   document.getElementById(`user1currentmessage`).innerText = userSpeech


        }




        
    };





    recognition.onend = () => {
        scaleDown(userid)
        music.play();

        // console.log("Speech recognition ended.");

    };


    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

}

else{
    console.log("speech recog var is empty")
}


} catch (error) {

    console.log("recognition is in listening mode , so cant restart it ===> aborting current listening mode ");
    recognition.abort();
    
    
    
}


    
} 