// let  roman ="xxx"
// let romanNumber = 
// {
//     1: "x", 5: "x", 10: "10", 50: "l", 100: "c", 500: "d", 1000: "m"
// }
// for(i in roman)
// // {
// //     for(x in romanNumber)
// //     {
// //         console.log(roman.charAt(i))
// //         console.log(romanNumber.${x})
// //     }
// // }



// // let table3 = table1.concat(table2)

// for(a=0;a<table2.length;a++)
// {
//     console.log(table2[a],"/")
//     for(x=0;x<table1.length;x++)
//     {
//         console.log(table2[a],"---",table1[x])
//         if(table2[a]>table1[x])
//         {
//             console.log("place",x)
//         }
//         else if(table2[a]==table1[x])
//         {
        
//             console.log("place",x)
//         }
//         else
//         {

//         }
       
//     }
// }

function camelCase(str){
	let words =0
	for(let i in str)	(str.charAt(i)==str.charAt(i).toUpperCase())? words +=1:false
	if(!str.length) return 0
	return words+1
}

console.log(camelCase("jeNeDiraisRien"))