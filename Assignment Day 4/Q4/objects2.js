let obj=[

    //array 0    
    {
        name:"Neha",
        age:25,
        country:"India",
        hobbies:["painting", "dancing", "singing"],

    },

    //array 1
    {
        name:"Rahul",
        age:30,
        country:"India",
        hobbies:["writing", "singing"],

    },

    //array 2
    {
        name:"Joss",
        age:31,
        country:"Dubai",
        hobbies:["painting","travelling", "gardening"],

    },

    //array 3
    {
        name:"Taylor",
        age:37,
        country:"Ireland",
        hobbies:["reading", "swimming"],

    },

    //array 4
    {
        name:"Amit",
        age:27,
        country:"India",
        hobbies:["painting", "dancing", "singing"],

    },

    
]
    console.log(obj);


    console.log("Objects having age less than 30: ");
 
    function agef(){
        for(let i=0;i<5;i++){
        if (obj[i].age<30){
            console.log(obj[i]);
        }
    }
    }
    agef();


    console.log("Objects having Country as India: ");
 
    function countryf(){
        for(let i=0;i<5;i++){
        if (obj[i].country=="India"){
            console.log(obj[i]);
        }
     }
    }
    
    countryf();



    


