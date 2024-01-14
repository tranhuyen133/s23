var n=+prompt("Nhập n:");
var sum =0;
for(var i = 0;i<n;i++){
    if(n%i==0){
        sum+=i;
    }
}
    if(n==sum){
        console.log('sô hoàn hảo');
    }else{
        console.log('không phải sô hoàn hảo');
    }
    
