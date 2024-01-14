let n = +prompt('nhập số' )
        for (let i = 1; i <=n; i++) {
            for (let j = 1; j <=i; j++) {         
                document.write("*")
                document.write("&nbsp")
            }
            document.write("<br>");
        }
        for (let x = 1; x <= n; x++) {
                for (let y = 10 - x; y > 0; y--) {
                    document.write("")
                    document.write("&nbsp&nbsp&nbsp&nbsp")
                }
                for (let k = 1; k <= x; k++) {
                    document.write("*")
                    document.write("&nbsp&nbsp")
                }
                document.write("<br>");

            }