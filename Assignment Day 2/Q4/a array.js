let array=["lenovo","acer","sony","hp","dell","sony","asus","apple"];


console.log("Program to search for elements with \"a\" in array of strings");

console.log("Original array is "+array);

console.log("Elements with \"a\" are:")

for(let i=0;i<array.length;i++){ 
    let element=array[i];
        if (element.indexOf("a")!=-1 ){
            console.log(element);
        }
        

}