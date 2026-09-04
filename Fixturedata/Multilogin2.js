const {test:base}=require('@playwright/test');

const testdata =
[{
    
        Name: "Divya",
        email: "divyam@gmail.com",
        Password: "Magil123#",
        Interest : ["Selenium", "Testing Course"],
        Gender : "Female",
        State : "Karnataka",
        Hobbies:"Singing"
},
{
    Name : "Senthamil",
        email : "Senthamil@gmail.com",
        Password: "Magil123#",
        Interest : ["Selenium", "Testing Course"],
    Gender : "Male",
        State: "Bihar",
        Hobbies:"Swimming"
}]

const test=base.extend({
    signin:async({},use)=>
    {
        await use(testdata);
    }
})
module.exports={test,testdata};