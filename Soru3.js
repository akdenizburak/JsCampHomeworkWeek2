/*

3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

*/

function perfectNum(num) {
    var sum=0
    for (let i = 1; i < num; i++) {
        if (num%i==0) {
            sum+=i
        }
    }
    if(sum==num){
        console.log(num)
    }
}

for (let i= 1; i < 1000; i++) {
    perfectNum(i)
}