var a = parseInt(prompt("nhap so a de in ra so nguyen to"))
        var d = 0 ;
        for(let i=0 ; i<a ;i++ ){
            for(let t = 0 ; t < a ;t ++){
                if(i%t==0){
                    d++;
                    if(d>2){
                        t++
                    }
                    else{console.log(t)}
                }
            }
        }
