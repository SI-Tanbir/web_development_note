let object1={
    owner:'alia',
    address:{street:'talkha',city:'narikel tola'}
    product:'sada chamra'}
    
    // now making it json formate
    
    let object1Json=JSON.stringify(object1);
    console.log(object1Json);
    
    //to reverse back the json formate to strings
    
    let object1Obj= JSON.parse(object1Json);
    console.log(object1Obj);