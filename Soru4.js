/*
4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/

function asalMı(num) {
    let asalMi=true
    for (let i = 2; i < num; i++) {
        if(num%i==0){
            asalMi=false
        }
    }
    if(asalMi==true){
        console.log(num)
    }
}

for (let i = 2; i < 1000; i++){
    asalMı(i)
}