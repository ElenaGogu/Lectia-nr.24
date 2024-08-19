//Exercitiul nr.1
//Creați o funcție pentru a afișa un mesaj de bun venit.

function greeting() {
    console.log( 'Hello World' );
}
greeting();

//Exercitiul nr.2
//Creați o funcție pentru a calcula aria unui dreptunghi.

function calcAriaDreptunghi(lungime, latime) {
    let aria = lungime * latime;
    console.log(aria);
    return aria;
    
}
calcAriaDreptunghi(10, 8);
calcAriaDreptunghi(20, 5); //putem chema functia cu diferiti parametri

//Exercitiul nr.3
//Creați o funcție care ia un nume ca parametru și afișează mesajul "Salut, [nume]!".

function greetingPersonalized(nume) {
    console.log("Salut, " + nume + "!")
    console.log(`Salut, ${nume}!`); //ALTA METODA, e bine de scris ambele metode pina ne
    //hotarim care-i mai bune pentru noi.
}
greetingPersonalized('Elena');

//Exercitiul nr.4
//Creați o funcție care ia un număr ca parametru și returnează dublul său.

function double(number) {
    console.log(number * 2);// sau asa il punem sau asa de mai jos.
    return number * 2;
}
console.log(double(8)); //Il folosim in interior pina la return cit si la exterior


//Exercitiul nr.5
//Creaţi o funcţie care să ne spună dacă un an e bisect sau ba.
//- Dacă un an este divizibil cu 4 și nu este divizibil cu 100, este bisect.
//- Dacă un an este divizibil cu 400, este bisect (aceasta este excepția pentru secole).

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false


//Exercitiul de exersare 

//Calcularea și afișarea ariei și perimetrului unui dreptunghi
//Creați o funcție numită rectangleProperties care primește lungimea și
//lățimea unui dreptunghi. În interiorul acesteia, definiți două funcții: 
//una pentru calcularea ariei (calculateArea) și una pentru calcularea perimetrului 
//(calculatePerimeter). Funcția principală rectangleProperties va apela aceste două 
// funcții și va afișa rezultatele.

function rectagleProperties(lenght, width) {
    function calculateArea(){
        return lenght * width;
    }
    function calculatePerimeter() {
        return 2 * (lenght + width) ;
    }

    console.log(`Aria dreptunghi este ${calculateArea()}`);
    console.log(`Perimetrul dreptunghiului este ${calculatePerimeter()}`);
}
rectagleProperties(12, 8);

//Tema pentru acasa

//Înapoi la cele două echipe de gimnastică, Delfinii și Koala! Există o nouă disciplină de gimnastică, care funcționează diferit. Fiecare echipă concurează de 3 ori, iar apoi se calculează media celor 3 scoruri (deci un punctaj mediu pe echipă).
//O echipă câștigă NUMAI dacă are cel puțin DUBLUL scorului mediu al celeilalte echipe. Altfel, nicio echipă nu câștigă!
//1. Creați o funcție „calcAverage” pentru a calcula media a 3 scoruri
//2. Folosiți funcția pentru a calcula media pentru ambele echipe
//3. Creați o funcție „checkWinner” care ia ca parametri scorul mediu al fiecărei echipe („avgDolhins” și „avgKoalas”), apoi înregistrează câștigătorul în consolă, împreună cu punctele de victorie, conform regulii de mai sus.Exemplu: „Koalas câștigă (30 vs. 13)”.
//4. Utilizați funcția „checkWinner” pentru a determina câștigătorul atât pentru DATA 1, cât și pentru DATA 2.
//5. Ignorați remizele de data aceasta.
//DATE TESTULUI 1: Delfinii scor 44, 23 și 71. Koalas scor 65, 54 și 49
//DATE TESTUL 2: Delfinii scor 85, 54 și 41. Koala scor 23, 34 și 27


//1. Funcția calcAverage pentru a calcula media a 3 scoruri
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// 2. Calcularea mediei pentru ambele echipe folosind funcția calcAverage
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// 3. Funcția checkWinner pentru a verifica câștigătorul
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Delfinii câștigă (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas câștigă (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Nicio echipă nu câștigă!');
    }
}

// 4. Determinarea câștigătorului pentru DATA 1
checkWinner(avgDolphins1, avgKoalas1);

// 4. Determinarea câștigătorului pentru DATA 2
checkWinner(avgDolphins2, avgKoalas2);



//Suplimentar:
//Sarcina 1: Conversia temperaturii din Fahrenheit în Celsius
//Creați o funcție numită fahrenheitToCelsius care primește o temperatură în grade Fahrenheit și returnează echivalentul în grade Celsius.

function fahrenheitToCelsius(fahrenheit) {
    // Formula de conversie: (Fahrenheit - 32) * 5/9 = Celsius
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(88));  
console.log(fahrenheitToCelsius(100)); 

//Sarcina 2: Calcularea ariei unui cerc
//Creați o funcție numită calculateCircleArea care primește raza unui cerc și returnează aria acestuia.


function calculateCircleArea(radius) {
    // Formula de calcul a ariei unui cerc: π * raza^2
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

console.log(calculateCircleArea(5));  
console.log(calculateCircleArea(15)); 
console.log(calculateCircleArea(2)); 

//Formula de calcul: Aria unui cerc se calculează folosind formula 
//area = 𝜋 * raza 2
area=π*raza 

//Metoda Math.PI: Aceasta returnează valoarea constantă a lui π (aproximativ 3.14159).
//Metoda Math.pow: Aceasta este folosită pentru a ridica raza la puterea a doua (raza2).


//Sarcina 3: Verificarea parității unui număr
//Creați o funcție numită isEven care primește un număr întreg și returnează true dacă numărul este par și false dacă este impar.
//Puteți utiliza operatorul de rest % pentru a verifica paritatea:
//Un număr este par dacă n%2=0

function isEven(number) {
    // Verificăm dacă restul împărțirii la 2 este 0
    return number % 2 === 0;
}

console.log(isEven(4));  // true (par)
console.log(isEven(7));  // false (impar)


//Sarcina 4: Conversia unor minute în ore și minute
//Creați o funcție numită convertMinutes care primește un număr de minute. În interiorul acesteia, definiți două funcții: una pentru a extrage numărul de ore (extractHours) și una pentru a extrage minutele rămase (extractMinutes). Funcția principală va apela aceste două funcții și va afișa rezultatele.

function convertMinutes(totalMinutes) {

    function extractHours(minutes) {
        return Math.floor(minutes / 60);
    }

    function extractRemainingMinutes(minutes) {
        return minutes % 60;
    }

    const hours = extractHours(totalMinutes);
    const minutes = extractRemainingMinutes(totalMinutes);

   
    console.log(`${totalMinutes} minute se convertesc în ${hours} ore și ${minutes} minute.`);
}

convertMinutes(135); 
convertMinutes(60);


//Sarcina 5: Calculul și afișarea indicelui masei corporale (BMI)
//Sarcina constă în crearea unei funcții care să calculeze indicele de masă corporală (BMI) pentru o persoană, bazat pe înălțimea și greutatea acesteia. BMI-ul se evaluează într-o categorie (subponderal, normal, supraponderal, obez) și se afișează un mesaj corespunzător. Principiul pentru caterogii: subponderat sub 18.5 (BMI), normal (18.5-25), supraponderat (25-30) mai mare de 30 - obez.

function calculateBMI(weight, height) {
    // Formula de calcul pentru BMI: greutate (kg) / (înălțime (m) ^ 2)
    const bmi = weight / Math.pow(height, 2);
    return bmi;
}

function evaluateBMI(bmi) {
    if (bmi < 18.5) {
        return 'Subponderal';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Supraponderal';
    } else {
        return 'Obez';
    }
}

function displayBMIMessage(weight, height) {
    
    const bmi = calculateBMI(weight, height);

    
    const category = evaluateBMI(bmi);


    console.log(`Indicele masei corporale (BMI) este ${bmi.toFixed(2)}, ceea ce înseamnă că ești ${category}.`);
}


displayBMIMessage(70, 1.75); // Normal
displayBMIMessage(50, 1.6);  // Subponderal
displayBMIMessage(85, 1.75); // Supraponderal
displayBMIMessage(95, 1.6);  // Obez


//Sarcina 6: Calculator de rata de schimb valutar
//Creați un calculator care să convertească diferite valute (USD, EUR, RON, GBP) în MDL
//Creați o funcție getExchangeRate(fromCurrency) care să returneze rata de schimb pentru o monedă dată ca parametru. Utilizați structura if-else pentru a determina rata de schimb.
//USD: 18.5
//EUR: 19.5
//RON: 4.8
//GBP: 20.6
//Creați o funcție calculateAmount(initialAmount, rate) care să calculeze suma convertită utilizând rata de schimb și suma inițială.
//Creați funcția principală convertCurrency(amount, fromCurrency) care să utilizeze cele două funcții anterioare pentru a efectua conversia.
//Afișați un mesaj în consolă care să spună câti MDL vor fi obținute după conversie.



// Funcția care returnează rata de schimb pentru o monedă dată
function getExchangeRate(fromCurrency) {
    if (fromCurrency === 'USD') {
        return 18.5;
    } else if (fromCurrency === 'EUR') {
        return 19.5;
    } else if (fromCurrency === 'RON') {
        return 4.8;
    } else if (fromCurrency === 'GBP') {
        return 20.6;
    } else {
        return null; // Returnăm null dacă moneda nu este recunoscută
    }
}

function calculateAmount(initialAmount, rate) {
    return initialAmount * rate;
}


function convertCurrency(amount, fromCurrency) {
    const rate = getExchangeRate(fromCurrency);
    
    if (rate !== null) {
        const convertedAmount = calculateAmount(amount, rate);
        console.log(`${amount} ${fromCurrency} este echivalent cu ${convertedAmount} MDL.`);
    } else {
        console.log(`Moneda ${fromCurrency} nu este recunoscută.`);
    }
}

convertCurrency(100, 'USD');  
convertCurrency(100, 'EUR');  
convertCurrency(100, 'RON');  
convertCurrency(100, 'GBP');  
convertCurrency(100, 'JPY');  



