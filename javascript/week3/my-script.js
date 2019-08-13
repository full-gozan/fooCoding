let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
let myString = "hello this is a difficult to read sentence";
console.log(myString);
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

let summation=(num1,num2,num3)=>{
    return num1+num2+num3;
}

let colorCar =(carColor)=>{
    return ("a "+carColor+" car ")
}
let obj={baby:0,child:6,teen:14,adult:18};
let ages =(obj)=>{ console.log(obj)};
let vehicleType =(color,code)=>{
    if (code===1)
    console.log('a' + color +'motorbike')
    if (code ===2)
    console.log('a' + color +'car')}
    let vehicle =(color,age,code)=>{ return console.log('a' + color +age+code)}
    
    let vehivles =["motorbike", "caravan", "bike","truck"];
    let vehicle =(color,age,code)=>{ return console.log('a' + color +age+vehivles[code])}
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
    vehivles.push("airplane");
    ad (vehivles);


    let teachers ={}
    teachers.math= "ali";

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//change o2 it changes o3
//change o1 never change o3
// it matters  (o3 = o2 or o2 = o3) because it is not right to assign o2 to undefined (unsigned ) variable 


let bar = 42;
typeof typeof bar;
// it will return string :
// first typeOf will return the string "number" and the typeOf "number" is string 
// if we add as many as we like of typeOf it still return string 

