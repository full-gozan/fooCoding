//1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
let myString = "hello this is a difficult to read sentence";
console.log(myString);


//2. Arrays!

 let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
 favoriteAnimals.push("turtle");
 console.log(favoriteAnimals);
 favoriteAnimals.splice(1,0,"meerkat");
 console.log("we added new favourite item between the index 1 and 2");
 console.log(favoriteAnimals);
 console.log("The array has a length of: " + favoriteAnimals.length);
 favoriteAnimals.splice(2,1);
 console.log(favoriteAnimals);

   for (let count =0;count<favoriteAnimals.length;count++){
    if (favoriteAnimals[count]==="meerkat")
    favoriteAnimals.splice(count,1)

  }
   for (let count =0;count<favoriteAnimals.length;count++){
    if (favoriteAnimals[count]==="meerkat")
   console.log("The item you are looking for is at index: " + favoriteAnimals[count])
 }

//More JavaScript   
//1
    let summation=(num1,num2,num3)=>{
    return num1+num2+num3;
}
//2
    let colorCar =(carColor)=>{
    return ("a "+carColor+" car ")
}
//3
    let obj={baby:0,child:6,teen:14,adult:18};
    let ages =(obj)=>{ console.log(obj)};
//4
    let vehicleType =(color,code)=>{
    if (code===1)
    console.log('a' + color +'motorbike')
    if (code ===2)
    console.log('a' + color +'car')}
//6
    let vehicle =(color,age,code)=>{ return console.log('a' + color +age+code)}
 //7   
    let vehivles =["motorbike", "caravan", "bike","truck"];
//8
vehivles[3];
//9
    let vehicle =(color,age,code)=>{ return console.log('a' + color +age+vehivles[code])}
//10
    let ad =(Arr) =>{
    var str ="";
for (let count =0;count<vehivles.length;count++){
    if (count<(vehivles.length-2))
    str += vehivles[count]+ ", "
    if (count>=(vehivles.length-1)){
        str= str + vehivles[vehivles.length-2]+" and "+ vehivles[vehivles.length-1]+"."

    }

}    console.log("Amazing Joe's Garage, we service " + str);
    }
//11
    vehivles.push("airplane");
    ad (vehivles);
//12
    let teachers ={}
//13
    myTeachers={math:"ali", chem:"noor"};
//14
 myTeachers.language="arabic";
//15 
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
if (x==y)console.log(" x nad y are stricly equall")//false
 if (x===y) console.log(" x nad y are equall but not stricly")// false
 if (z==y) console.log("z and y are  stricly equall")// true
 if (z===x) console.log(" z nad x are equall but not stricly")// false
//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//change o2 it changes o3
//change o1 never change o3
// it matters  (o3 = o2 or o2 = o3) because it is not right to assign o2 to undefined (unsigned ) variable 

//17
let bar = 42;
typeof typeof bar;
// it will return string :
// first typeOf will return the string "number" and the typeOf "number" is string 
// if we add as many as we like of typeOf it still return string 

