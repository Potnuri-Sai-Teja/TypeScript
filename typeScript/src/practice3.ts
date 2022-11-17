
interface AnimalData{
    name:string,
    age:number,
    type:string
}


const animals:Array<AnimalData> = [{
    name: 'Butters',
    age: 3,
    type: 'dog'
},
{
    name: 'Lizzy',
    age: 6,
    type: 'dog'
},
{
    name: 'Red',
    age: 1,
    type: 'cat'
},
{
    name: 'Boey',
    age: 4,
    type: 'dog'
},
];


// Q1.Write a promise function to display all types having dog.
// funtion: findDogs(data)
// Hint: Filter

    let findSpecifictypeOfAnimals =  async (animals:Array<AnimalData>,animaltype:string):Promise<Array<AnimalData>> => {

                let specificSpecies:Array<AnimalData> = animals.filter(animal => animal.type === animaltype);

                if(specificSpecies.length > 0) return Promise.resolve(specificSpecies);
                return Promise.reject("No Data Found")      
    }
 //   findSpecifictypeOfAnimals(animals,"dog").then(response => console.log(response)).catch(response => console.log(response));

 
// Q2 Write a promise function to display all names starting with "B".
// function: findSpecific(data, 'b');
// Hint: filter

    let findSpecific = async(animals:Array<AnimalData>,givenCharacter:string):Promise<Array<AnimalData>> => {

                let specificspeciesWithStartingNameCharacter = animals.filter(animal => animal.name.startsWith(givenCharacter))
                if(specificspeciesWithStartingNameCharacter.length > 0) return Promise.resolve(specificspeciesWithStartingNameCharacter)
                return Promise.reject("No records found");
    }
 
    //findSpecific(animals,"B").then(response => console.log(response)).catch(response => console.log(response));
 

// Q3.Write a promise function to display sum of all ages.
// function: findAges(data)
// Hint: reduce

        let findAges = async (animals:Array<AnimalData>):Promise<number> => {

            let sumOfAllAges = animals.reduce((prev,animal)=>(prev+animal.age),0)
                if(sumOfAllAges > 0) return Promise.resolve(sumOfAllAges)
                return Promise.reject("No records Found");
        }
        //   findAges(animals).then(response => console.log(response)).catch(response => console.log(response));


// Q5.Write async function to call all above function Q1 Q2 Q3 Q4.
// function: async function findAll() {}

        let findAll1 = async (animals:Array<AnimalData>,animalType:string,givenCharacter:string):Promise<number> => {

                let allAnimalsData = await findSpecifictypeOfAnimals(animals,animalType);
                let specificAnimalTypeWithGivenNameStartingCharacter = await findSpecific(allAnimalsData,givenCharacter);
                let sumOfAnimalTypeAge = await findAges(specificAnimalTypeWithGivenNameStartingCharacter);
                if(sumOfAnimalTypeAge > 0) return Promise.resolve(sumOfAnimalTypeAge)
                return Promise.reject("No Records Found");

        }
        findAll1(animals,"dog","B").then(response => console.log(response)).catch(response => console.log(response));




        