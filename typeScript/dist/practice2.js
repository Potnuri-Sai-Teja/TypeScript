"use strict";
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
let personNames = (persons) => {
    return persons.map(myUser => myUser.name);
};
let animalsList1 = (persons) => {
    let animalsData = [];
    persons.map((myUser) => {
        animalsData.push(...myUser.animals);
    });
    return animalsData;
};
let eachPeronAnimalsCount = (persons) => {
    return persons.map(user => {
        return { Name: user.name, CountAnimals: user.animals.length };
    });
};
let findOwnerNamesWhoHavingSpecificSpeciesName = (persons, animalType) => {
    return persons.filter(user => {
        let particularSpecies = user.animals.find(animal => animal.species === animalType);
        return Boolean(particularSpecies);
    }).map(user => user.name);
};
let findNamesOfOwnersHavingDogAndTurtle = (persons) => {
    return persons.filter(user => {
        let set = new Set();
        user.animals.forEach(animals => ["dog", "turtle"].includes(animals.species) && set.add(animals.species));
        return set.size == 2;
    }).map(user => user.name);
};
let AllOwnersHavingDog = (persons, animalType) => {
    let ownersListHavingSpecificSpecies = persons.filter(user => {
        let checkSpeciceAvailble = user.animals.find(animal => animal.species == animalType);
        return checkSpeciceAvailble;
    }).map(person => person.name);
    if (ownersListHavingSpecificSpecies.length == persons.length)
        return true;
    return false;
};
let namesOfSpecificSpecies = (persons, animalType) => {
    let animalsAll = animalsList1(persons).filter((item) => item.species === animalType).map((listOfTurtles) => listOfTurtles.name);
    return animalsAll;
};
let ownerAlongWithHisTotalCount = (persons) => {
    return eachPeronAnimalsCount(persons);
};
let listOfAnimals = (persons) => {
    return animalsList1(persons);
};
let listOfSpecificSpecies = (AnimalsList, animalType) => {
    let listOfSpecificSpecies = AnimalsList.filter(animal => animal.species === animalType);
    return listOfSpecificSpecies;
};
let findspecificSpeciesCount = (AnimalsList, animalType) => {
    let AnimalsListWithSpecificSpecies = AnimalsList.filter(animal => animal.species === animalType).length;
    return AnimalsListWithSpecificSpecies;
};
let findNamesOfOwnersHavingDogAndTurtleAndCat = (persons) => {
    return persons.filter(user => {
        let set = new Set();
        user.animals.forEach(animals => ["dog", "turtle", "cat"].includes(animals.species) && set.add(animals.species));
        return set.size == 3;
    }).map(user => user.name);
};
let findSpeciesWithSpecificTypeAndName = (AnimalsList, animaType, animalName) => {
    let findDataHavingSpecificSpeciesAndName = AnimalsList.filter(animal => animal.species === animaType && animal.name === animalName);
    return findDataHavingSpecificSpeciesAndName;
};
let sortingWithPersonName = (persons, typeOfSorting) => {
    let sortingOfData = persons.sort((a, b) => {
        if (typeOfSorting === "ASC")
            return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });
    return sortingOfData;
};
let findlistOfSpeciesAndNameStartsWithSpecificCharacter = (AnimalsList, animaltype, characterStartsWith) => {
    return AnimalsList.filter((animalData) => {
        return animaltype.includes(animalData.species) && animalData.name.startsWith(characterStartsWith);
    });
};
let averageAgeOfSpecificSpecies = (AnimalList, animalType) => {
    let avgOfSpecificSpecicesAge = 0;
    let sumOfAgeOfSpecificSpecies = AnimalList.filter(animal => animal.species === animalType).reduce((prev, animal) => (prev + animal.age), 0);
    let CountOFSpecificSpecies = AnimalList.filter(animal => animal.species == animalType).length;
    if (CountOFSpecificSpecies > 0)
        avgOfSpecificSpecicesAge = Math.round(sumOfAgeOfSpecificSpecies / CountOFSpecificSpecies);
    return avgOfSpecificSpecicesAge;
};
let result = [];
let listAvgOfAnimalSpecies = (AnimalData) => {
    let listOfSpecificSpecies = [];
    AnimalData.map(animal => {
        if (!listOfSpecificSpecies.includes(animal.species)) {
            listOfSpecificSpecies.push(animal.species);
        }
    });
    listOfSpecificSpecies.forEach(animalSpecie => {
        let Age = averageAgeOfSpecificSpecies(AnimalData, animalSpecie);
        result.push({ Name: animalSpecie, avgAge: Age });
    });
    return result;
};
console.log(listAvgOfAnimalSpecies(animalsList1(persons)));
//# sourceMappingURL=practice2.js.map