function translateText(text, to_language) {


    fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: text,
            to_language: to_language
        })
    })
    .then(response => {
        if (!response.ok) {
            // throw new Error(`Error: ${response.status} ${response.statusText}`);
            console.log("error to translate text ");
            
        }
        return response.json();
    })
    .then(data => {
        console.log("Translation Response:", data);
    })
    .catch(error => {
        console.error("Failed to fetch translation:");
    });
}

// Example usage
translateText("Hello, world!", "hi");
