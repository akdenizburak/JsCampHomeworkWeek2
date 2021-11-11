/* 

1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

*/

function asalMı(...num) {
    let asalMi=true
    for(let j=0;j<num.length;j++){
        for (let i = 2; i < num[j]; i++) {
            if(num[j]%i==0){
                asalMi=false
            }
        }
        if(asalMi==true){
            console.log("Asal")
        }
        else{
            console.log("Asal Değil")
            asalMi=true
        }
    }
}
asalMı(2,4,5,6,7,8,9,11)