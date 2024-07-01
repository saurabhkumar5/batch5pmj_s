// square pattern
// let a = "*";
//     a = "**"
//     a = "***"
//     console.log(a)


//  for(let i = 0; i<5; i++){ //row
         
//      let row = ''; //'"*"
//     for(let j = 0; j<5; j++){  //column
//            row = row+"* ";  
//     }

//     console.log(row)
    

//  }



// for(let i = 0; i<5; i++){  //row
    
//       let a = ''
//     for(let j = 0; j<=i; j++){  //column
//         a = a+'* '
//     }
//     console.log(a)
// }



for(let i = 0; i<5; i++){

      let a = ''
    for(let j = 0; j<5-i; j++){
            
        a = a+'* '
    }
    console.log(a)
}