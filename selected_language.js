const languagedeatils = {
      user1 : 'en' , 
      user2 : 'en'
}





function updateLanguage(userid , languageName, languageCode) {
    // Update  the button text
    document.getElementById(`dropdownBtn${userid}`).textContent = languageName=='English' ? languageName : 'हिन्दी ';
    

    
    // Log the selected language (optional)
    // console.log("Selected Language:", languageName, "Code:", languageCode , 'by' , userid);

    languagedeatils[userid] = languageCode ; 
}

