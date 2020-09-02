let array=["lenovo","acer","sony","hp","dell","sony","asus","apple"];


console.log("Program to search for elements with \"a\" in array of strings");

console.log("Original array is ");
for(let i=0; i<array.length; i++)
{
 console.log(i+1  + " " + array[i]);
}

console.log("Reverse array is: ")
for(let i=array.length -1; i>=0; i--)
{
    console.log(i+1 + " " + array[i]);
}