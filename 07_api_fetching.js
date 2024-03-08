  //API=> Application Programming Interface;
        //in API fetching we generally ask for a response by sending the request to the user
        //fetch api provides an interface for fetching (sending/receiving) resources
        //It uses request and response object.
        //The fetch() method is used to fetch a resource(data).
        // let promise = fetch(url,[options]); 
        //when in fetch method options section we are not sharing anything than it mean that the request is of GET type
        //GET request=> When we wan't that from API we should get some data or when we want to recieve data than we use it
        const URL = "https://cat-fact.herokuapp.com/facts";
        const factHeading = document.querySelector("#fact");
        const gen = document.querySelector("#btn");
        //In the response section of this promise we will get status: 200 which mean that request is sucessfull and now you can access the data thrrough api
        
        const getFacts = async ()=>{
            console.log("Getting data......")
            let randgen = Math.floor(Math.random()*4);
            let response1 = await fetch(URL);   //here in fetch() method we are using GET request
            let data = await response1.json();
            factHeading.innerHTML = data[randgen].text;
        
    };
    gen.addEventListener("click", getFacts);
    
    // function  getFacts() 
        
    // {
    //     fetch(URL).then((response)=>{
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         factHeading.innerHTML = data[2].text;
    //     });
    // }
    // gen.addEventListener("click",getFacts);     
    //When you see its output on console you will notice that it has some different output its not same as the browser request so to understand that we should know some termelogies
    // AJAX is Asynchronous JS and XML 
    //XML in earlier days of programming generally data comes in the form of XML format but Now it comes in the form of JSON
    //JSON =>It is Javascript Object Notation(The data will be in the form of Javascript object)
    //AJAJ => (asynchronous javascript and JSON)
    //We recieve API response but we have to convert it into javascript objects so we use json() method

    //Request and Response

    //header section of the code has additional inforamtion of the API including API
