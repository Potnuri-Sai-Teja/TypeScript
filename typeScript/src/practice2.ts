
interface Animal{
    species:string,
    name:string,
    age:number
}
interface User {
    name:string,
    animals : Animal[];
}



const persons = [{
    name: "Joe",

    animals: [{
            species: "dog",
            name: "Bolt",
            age: 23

        },
        {
            species: "cat",
            name: "Billy",
            age: 24
        },

    ]
},
{
    name: "Bob",
    animals: [{
        species: "dog",
        name: "Snoopy",
        age: 20
    },
    {
        species: "dog",
        name: "cappy",
        age: 10
    },
    {
        species: "turtle",
        name: "Hii",
        age: 15
    }
   ]
},

{
    name: "Slobby",
    animals: [{
            species: "cat",
            name: "Snoopy",
            age: 15
        },
        {
            species: "turtle",
            name: "cappy",
            age: 15
        },
        {
            species: "dog",
            name: "cappy",
            age: 10
        }

    ]
}
];



// Q1.Display only person names.

        let personNames = (persons:Array<User>):Array<string> => {

                    return persons.map(myUser => myUser.name);

        }
     //   console.log(personNames(persons));
   

    // Q2.Display only person animals list.

        let animalsList1 = (persons:Array<User>):Array<Animal> => {

                    let animalsData:Array<Animal> = [];
               // console.log(persons.length+"person length");
                 persons.map((myUser) => {
                        animalsData.push(...myUser.animals);
                })
                return animalsData;

        }

        //console.log(animalsList(persons));
   
    // Q3.Display the total count of animals in person array.

            let eachPeronAnimalsCount = (persons:Array<User>):Array<object> =>{

                return persons.map(user => {
                        return {Name:user.name,CountAnimals : user.animals.length}
                })

            }
        //    console.log(personAnimalsCount(persons));

   
    // Q4.Display all names of owner who has species as dog

                let findOwnerNamesWhoHavingSpecificSpeciesName = (persons:Array<User>,animalType:string):Array<string> => {

                      return  persons.filter(user => {

                          let particularSpecies:Animal | undefined =  user.animals.find(animal => animal.species === animalType)
                            return Boolean(particularSpecies)
                        }).map(user => user.name)

                }

              //  console.log(ownersOfDogs(persons,"turtle"))

   
    // Q5 Display all names of owner who has species as dog and turtle

    /*Explanation for below code we need to filter names of owners who having Dogs and Turtle and then from person.animals.species we cant get 
      the data  so person.animals we can get the animals list then we need to check every object in the animals array of object to check every element
      we can use forEach loop to read each element in every person animals list so includes will fin the if required species is availble or not
      then set.add function add the element of each person so set will not allow the duplicate values so we get only dog and turtle ,So now
      set having some elements if we find the size of set if we get size 2 then we are searching for 2 species so we get the entire object 
      from that result we get person names by using map function */

                
                let findNamesOfOwnersHavingDogAndTurtle = (persons:Array<User>):Array<string> =>{

                       return persons.filter(user => {
                            let set = new Set();
                            user.animals.forEach(animals => ["dog","turtle"].includes(animals.species) && set.add(animals.species));
                            return set.size == 2
                        }).map(user => user.name)

                }

             //   console.log(owners(persons))
   
    // Q6 Does all owner has dog as species Justify.

                let AllOwnersHavingDog = (persons:Array<User>,animalType:string):boolean => {
                    
                      let ownersListHavingSpecificSpecies =  persons.filter(user => {
                        let checkSpeciceAvailble = user.animals.find(animal => animal.species == animalType )
                        return checkSpeciceAvailble;
                        }).map(person => person.name)
                        if(ownersListHavingSpecificSpecies.length == persons.length) return true;
                        return false;

                }
             //   console.log(AllOwnersHavingDog(persons,"dog"))
   
    // Q7 Does some owner has turtle please specify name of turtle.

                let namesOfSpecificSpecies = (persons:Array<User>,animalType:string):Array<string> => {

                        let animalsAll:Array<string> = animalsList1(persons).filter((item) => item.species === animalType).map((listOfTurtles) => listOfTurtles.name);
                        return animalsAll;
                    }
              //  console.log(namesOfSpecificSpecies(persons,"dog"))
    // Q8 Display name of Owner along with his total count of animals.

                    let ownerAlongWithHisTotalCount = (persons:Array<User>):Array<object> => {

                                return eachPeronAnimalsCount(persons);
                    }
                   // console.log(ownerAlongWithHisTotalCount(persons));

    
    // Q9 Display list of all animals.
                
                    let listOfAnimals = (persons:Array<User>):Array<Animal> =>{

                        return animalsList1(persons);
                    }
                  //  console.log(listOfAnimals(persons));
   
    // Q10 Display list of only dogs
                    // if we want to pass any function as a parameter then type should be 'Function' 
                    let listOfSpecificSpecies = (AnimalsList:Array<Animal>,animalType:string):Array<Animal> => {
                        
                            let listOfSpecificSpecies = AnimalsList.filter(animal => animal.species === animalType)
                            return listOfSpecificSpecies;
                    }
                 //   console.log(listOfSpecificSpecies(animalsList(persons),"dog"));
                    
    // Q11 Display the count of all dogs in Array persons
                    let findspecificSpeciesCount = (AnimalsList:Array<Animal>,animalType:string):number => {

                            let AnimalsListWithSpecificSpecies:number = AnimalsList.filter(animal => animal.species === animalType).length;
                            return AnimalsListWithSpecificSpecies;
                    }
                   //   console.log(findspecificSpeciesCount(animalsList(persons),"dog"));
   
    // Q12 Display names of owner who has all species such as dog cat and turtle.

                    
                let findNamesOfOwnersHavingDogAndTurtleAndCat = (persons:Array<User>):Array<string> =>{

                       return persons.filter(user => {
                            let set = new Set();
                            user.animals.forEach(animals => ["dog","turtle","cat"].includes(animals.species) && set.add(animals.species));
                            return set.size == 3
                        }).map(user => user.name)

                }
            //console.log(findNamesOfOwnersHavingDogAndTurtleAndCat(persons));



    // Q13 Display the record for species as dog and name as 'Snoopy'

                let findSpeciesWithSpecificTypeAndName = (AnimalsList:Array<Animal>,animaType:string,animalName:string):Array<Animal> =>{

                        let findDataHavingSpecificSpeciesAndName = AnimalsList.filter(animal => animal.species === animaType && animal.name === animalName )
                        return findDataHavingSpecificSpeciesAndName;
                }
             //   console.log(findSpeciesWithSpecificTypeAndName(animalsList(persons),"dog","Snoopy"));

                
    // Q14 Sort all records based on name of owner in ascending and descending

                let sortingWithPersonName = (persons:Array<User>,typeOfSorting:string):Array<User> => {

                            let sortingOfData = persons.sort((a,b) => {

                                    if(typeOfSorting === "ASC") return a.name.localeCompare(b.name);
                                    return b.name.localeCompare(a.name);

                            })
                            return sortingOfData;
                }
               // console.log(sortingWithPersonName(persons,"AS"))

    
    // Q15 Display list of all dogs whose name starts with 'S'

                let findlistOfSpeciesAndNameStartsWithSpecificCharacter = (AnimalsList:Array<Animal>,animaltype:string,characterStartsWith:string):Array<Animal> => {

                            return AnimalsList.filter((animalData:Animal) => {
                                return animaltype.includes(animalData.species) && animalData.name.startsWith(characterStartsWith)
                            })
                         
                }
             //   console.log(findlistOfSpeciesAndNameStartsWithSpecificCharacter(animalsList(persons),"dog","S"))


    
              // Q17 Display average age of dogs.

                let averageAgeOfSpecificSpecies = (AnimalList:Array<Animal>,animalType:string):number =>{

                            let avgOfSpecificSpecicesAge:number = 0;
                            let sumOfAgeOfSpecificSpecies:number =   AnimalList.filter(animal => animal.species === animalType).reduce((prev,animal) =>(prev + animal.age),0)
                            let CountOFSpecificSpecies:number = AnimalList.filter(animal => animal.species == animalType).length;
                            if(CountOFSpecificSpecies > 0)  avgOfSpecificSpecicesAge = Math.round(sumOfAgeOfSpecificSpecies/CountOFSpecificSpecies);

                            return avgOfSpecificSpecicesAge
                }
             //   console.log(averageAgeOfSpecificSpecies(animalsList(persons),"dog"))
             

    // Q16 Display list average ages of animal species.

                let result:Array<object>=[];


                let listAvgOfAnimalSpecies = (AnimalData:Array<Animal>):Array<object> => {

                        let listOfSpecificSpecies:string[]=[]; 
                        AnimalData.map(animal => {
                                if(!listOfSpecificSpecies.includes(animal.species)){
                                    listOfSpecificSpecies.push(animal.species)   
                                }
                        })      
                        listOfSpecificSpecies.forEach(animalSpecie => {

                           let Age = averageAgeOfSpecificSpecies(AnimalData,animalSpecie);
                           result.push({Name:animalSpecie,avgAge:Age})

                        })
                        return result;

                }

                    console.log(listAvgOfAnimalSpecies(animalsList1(persons)));


        
   

 
    // Q18 Display sum of all ages of animals whose species is turtle.

 

    
 









  