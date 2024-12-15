//tache 1 

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value); 
        await delay(1000);  
    }
    console.log("Iteration terminée !");
}



//tache 2


const mockApiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, data: "Voici les données de l'API" });
        }, 2000); 
    });
};

async function awaitCall() {
    console.log("Requête en cours...");
    try {
        const response = await mockApiCall(); 
        console.log("Données reçues :", response.data); 
    } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
    }
}


//tache 3

const mockApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; 
            if (success) {
                resolve({ success: true, data: "Voici les données de l'API" });
            } else {
                reject(new Error("Échec de l'appel API"));
            }
        }, 2000); 
    });
};
async function awaitCall() {
    console.log("Requête en cours...");
    try {
        const response = await mockApiCall(); 
        console.log("Données reçues :", response.data); 
    } catch (error) {
        console.error("Un problème est survenu :", error.message); 
        console.log("Veuillez réessayer plus tard.");
    }
}


