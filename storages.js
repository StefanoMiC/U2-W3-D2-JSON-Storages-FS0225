const me = {
  name: "Stefano",
  surname: "Miceli",
  teaching: true
};

// 4 metodi per gestire i dati nel local/sessionStorage
// .setItem("keyName", value)
// .getItem("keyName")
// .removeItem("keyName")
// .clear() // rimuove tutto quello che c'è su quel dominio indiscriminatamente

// localStorage.setItem("dayOfTheMonth", 5);

const getNumFromStorage = localStorage.getItem("dayOfTheMonth"); // tutti i dati che troviamo nello Storage saranno già stati convertiti a stringa (sempre)
// di conseguenza, prima di utilizzarli dovremmo convertili nella maniera più appropriata
console.log(parseInt(getNumFromStorage) + 10); // un numero si converte con parseInt(), parseFloat(), Number()

// salviamo l'oggetto nello storage
// localStorage.setItem("myObject", me); // la conversione automatica di un oggetto produce [object Object], si perde completamente il dato
// convertiamolo noi col metodo adeguato => JSON.stringify()

// console.log(localStorage.getItem("me"));  // il metodo getItem quando non trova un dato ritorna sempre null

// localStorage.setItem("myObject", JSON.stringify(me));

const myObjFromStorage = localStorage.getItem("myObject");

const myObjParsed = JSON.parse(myObjFromStorage);
console.log(myObjParsed.surname);

// salvare array nello storage
// localStorage.setItem("myArray", JSON.stringify([39, 50, 10, 1, 0]));
const arrayFromStorage = localStorage.getItem("myArray");
const myArrayParsed = JSON.parse(arrayFromStorage);
console.log(myArrayParsed);
