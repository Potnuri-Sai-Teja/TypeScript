"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const animals = [{
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
let findSpecifictypeOfAnimals = (animals, animaltype) => __awaiter(void 0, void 0, void 0, function* () {
    let specificSpecies = animals.filter(animal => animal.type === animaltype);
    if (specificSpecies.length > 0)
        return Promise.resolve(specificSpecies);
    return Promise.reject("No Data Found");
});
let findSpecific = (animals, givenCharacter) => __awaiter(void 0, void 0, void 0, function* () {
    let specificspeciesWithStartingNameCharacter = animals.filter(animal => animal.name.startsWith(givenCharacter));
    if (specificspeciesWithStartingNameCharacter.length > 0)
        return Promise.resolve(specificspeciesWithStartingNameCharacter);
    return Promise.reject("No records found");
});
let findAges = (animals) => __awaiter(void 0, void 0, void 0, function* () {
    let sumOfAllAges = animals.reduce((prev, animal) => (prev + animal.age), 0);
    if (sumOfAllAges > 0)
        return Promise.resolve(sumOfAllAges);
    return Promise.reject("No records Found");
});
let findAll1 = (animals, animalType, givenCharacter) => __awaiter(void 0, void 0, void 0, function* () {
    let allAnimalsData = yield findSpecifictypeOfAnimals(animals, animalType);
    let specificAnimalTypeWithGivenNameStartingCharacter = yield findSpecific(allAnimalsData, givenCharacter);
    let sumOfAnimalTypeAge = yield findAges(specificAnimalTypeWithGivenNameStartingCharacter);
    if (sumOfAnimalTypeAge > 0)
        return Promise.resolve(sumOfAnimalTypeAge);
    return Promise.reject("No Records Found");
});
findAll1(animals, "dog", "B").then(response => console.log(response)).catch(response => console.log(response));
//# sourceMappingURL=practice3.js.map