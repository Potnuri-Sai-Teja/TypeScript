
// The below is the interface structure there we can specify the list of things in a object
interface Persons {
        id:number,
        name:string,
        username:string,
        email?:string,
        phone:string,
        website:string,
        password:string,
        age:number
}


const users= [{
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
},
{
    id: 5,
    name: "Jhon",
    username: "Jhonson",
    email: "jhon@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "jhon_password",
    age: 25
},
{
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 23
},
{
    id: 4,
    name: "demon slayer",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    age: 21
}
];


const newUser:Persons = {
    id: 1,
    name: "John doe",
    username: "mrjohn",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
}

/*
Q1.Write a function to add a new record at the end of array users using spread operator,
    functions: addLast(users, temp)

*/

        function addLast(users:Array<Persons>,temp:object):object{

                return [...users,temp];
        }
      // console.log(addLast(users,newUser));

/*
Q2.Write a function to add a new record at the begining of array users using spread operator,
    functions: addFirst(users, temp)
*/

        function addFirst(users:Array<Persons>,temp:Persons):Array<Persons>{

                return [temp,...users]
        }
     //   console.log(addFirst(users,newUser))

/*
Q3. Write a  function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map 
*/

            function display(users:Array<Persons>):object{

                  return users.map(ele => {
                            return {id:ele.id,name:ele.name,userName:ele.username};
                    })

            }
      //      console.log(display(users));
  


// Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.  
// function Name ---> findSpecificStartChar(users,'B')  
// HINT : Use filter and string functions.

                function findSpecificStartChar(users:Array<Persons>,userCharacter:string):Array<Persons>{

                        return users.filter(user => user.name.startsWith(userCharacter));
                        

                }
             //  console.log(findSpecificStartChar(users,'D'));



// Q6. Write a  function which will display sum of all ages.  
// function Name ---> findSumAges(users) . 
// HINT : Use reduce functions.

                function findSumAges(users:Array<Persons>):number{
                        return users.reduce((prev:number,user)=>(prev + user.age),0)
                }
               // console.log(findSumAges(users));


// Q7. Write a  function which will display all the records with only name & ages.
// function Name ---> findAll(users) 
// HINT : Use map.

  
                function findAll(users:Array<Persons>):object{

                        return users.map(user => {
                                return {Name:user.name,Age:user.age}
                        })

                }
          //      console.log(findAll(users));





// Q8. Write a function to display sum of all ages of records having name starting with 'J'


                      function findSumOfAllAgesWithGivenCharacter(users:Array<Persons>,userCharacter:string):number {

                            //     const dataWithSpecificCharacter:Array<Object> = await findSpecificStartChar(users,userCharacter);
                            //     console.log(dataWithSpecificCharacter)
                              
                            //      let SumOfAllAgesWithGivenCharacter =10;
                            //   //  let SumOfAllAgesWithGivenCharacter:number = dataWithSpecificCharacter.reduce((prev,data) => (prev + data.age),0);
                            //     return new Promise<number>((resolve,reject)=>{
                            //             if(SumOfAllAgesWithGivenCharacter > 0) return resolve(SumOfAllAgesWithGivenCharacter)
                            //             return reject("No Records Found")
                            //     })
                            
                            let dataWithSpecificCharacter = findSpecificStartChar(users,userCharacter);
                            let SumOfAllAgesWithGivenCharacter:number = dataWithSpecificCharacter.reduce((prev:number,user:Persons) => (prev + user.age),0);        
                            return SumOfAllAgesWithGivenCharacter;
                        
                    }

               //    findSumOfAllAgesWithGivenCharacter(users,'J').then(response => console.log(response)).catch(error => console.log(error))
                
              //  console.log(findSumOfAllAgesWithGivenCharacter(users,'J'));

// Q9. Write a function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')   
// ASC -> ASCENDING/ DESC -> DESCENDING


                    function Sorting(users:Array<Persons>,typeOfSorting:string):Array<Persons>{

                            console.log(typeOfSorting+"HERE");

                            return users.sort((a,b) => {
                                    if(typeOfSorting == "ASC") return a.name.localeCompare(b.name)
                                    return b.name.localeCompare(a.name);
                            })

                    }
              //      console.log(Sorting(users,"ASC"));





// Q10 Delete an object with specific array index.
// HINT : splice 
// function : deleteRecord(users,1) // 1 means delete object with index 1 in array.

                        // here 1 specifies number of recoreds
                    function deleteRecord(users:Array<Persons>,objectIndex:number):Array<Persons>{

                            return  users.splice(objectIndex,1)
                    }
                 //   console.log(deleteRecord(users,1));




// Q11. Insert an object at specific array index.
// HINT : splice
// function : InsertRecord(users,temp,1) // 1 means inset object at index 1 in array.

                        // where objectIndex which index number new record should be save and 0 means any records need to remove and temp is object

                    function InsertRecord(users:Array<Persons>,temp:Persons,objectIndex:number):Array<Persons>{

                                 users.splice(objectIndex,0,temp);
                                 return users;
                    }
                  console.log(InsertRecord(users,newUser,1))