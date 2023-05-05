const btn = document.querySelector(".btn");
const dictionary__result = document.querySelector(".dictionary__result");
const sound = document.getElementById("sound");
btn.addEventListener("click", async () => {
    let inputValue = document.querySelector("input").value
    if (inputValue !== "") {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dictionary__result.innerHTML = `
        <div class="wrapper">
                    <div class="text_area">
                        <h2 class="title">${inputValue}</h2>
                        <p class="description">
                        ${data[0].meanings[0].partOfSpeech} ${data[0].phonetic}
                        </p>
                    </div>
                    <i class="fas fa-music" onClick=playSound()></i>
                </div>
                <p class="description">
                ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="border__desscription">
                ${data[0].meanings[0].definitions[0].example || ""}
                </p>
            </div>
        `
        sound.setAttribute("src",`${data[0].phonetics[0].audio}`) 
        
    }

  
}) 
const playSound = ()=>{
    sound.play()
}