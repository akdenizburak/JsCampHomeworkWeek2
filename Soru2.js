/*

2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

*/

function friendNumb(num1,num2) {
    var remainder1=0
    var remainder2=0
    for (let i = 1; i < num1; i++) {
        if(num1%i==0){
            remainder1+=i
        }
    }
    for (let i = 1; i < num2; i++) {
        if (num2%i==0) {
            remainder2+=i
        }
    }
    if (remainder1==num2 && remainder2==num1) {
        console.log(`${num1} ve ${num2} arkadaş sayılardır.`)
    }
    else{
        console.log(`${num1} ve ${num2} arkadaş sayı değiller.`)
    }
}
friendNumb(284,220)