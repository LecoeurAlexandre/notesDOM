let nbNotes=0, noteMax=0, noteMin=20, moyNotes=0, displayMax, displayWorse, displayMoy;

addNotes = () => {
    nbNotes = prompt("Combien de notes souhaitez-vous saisir ?");

    for(i=0; i<nbNotes; i++) {
        let note = Number(prompt(`Veuillez saisir la note ${i+1}`))
    
        //moyenne
        moyNotes += note;
    
        //note max
        if(note>noteMax) {
            noteMax = note
        }
    
        //note min
        if(note<noteMin) {
            noteMin = note
        }
    
        const oneNote = document.querySelector("#onenote");
        oneNote.innerHTML += `<p>Note saisie : ${note} </p>`
    
    }
}

// Calc moyenne
moyNotes = Math.round(moyNotes/nbNotes);

// Sélection des id
displayMax = document.querySelector("#bestnote");
displayWorse = document.querySelector("#worsenote");
displayMoy = document.querySelector("#moynote");

// Affichage
displayMax.innerHTML = `La meilleure note est ${noteMax}/20.`
displayWorse.innerHTML = `La pire note est ${noteMin}/20.`
displayMoy.innerHTML = `La moyenne est de ${moyNotes}/20.`

console.log("Ma note max est :"+noteMax);
console.log("Ma note min est :"+noteMin);
console.log("Ma moyenne est :"+moyNotes);