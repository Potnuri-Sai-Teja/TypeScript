
let phoneNumber : number =123_456_789;
let Name : string ="TypeScript";
let isPublished : boolean = true;
// or we can use like below also denotes the same if we remove the anotation also

let age = 25;

// if we declared variable but not assigned type and data that shows 'any'
let findMyDataType;

// by using any concept we lost use of ts so avoid use of 'any'

    // findMyDataType=50;
    // findMyDataType="Hello";

    // Arrays example

  //  let numberList : number[] = [1,2,3,'4']; this type is valid in js but not work in TS
       let numberList : number[] = [1,2,3];

  //
        let Data : [number,string,boolean] =[1,"HEllo",true];

            Data.push(2);
      //  console.log(Data);
  // enum Example with data

        // PascalCase Variable first Letter should be capital

        // enum Size {Smalll=1,Medium,Large} and write this code and check index.js

        const enum Size {Smalll=1,Medium,Large}

        let mySize: Size = Size.Large;
        console.log(mySize);


  // Function Example
  
        /* explanation for below function 'income:number' it means we should assign type of a variable and 
          'calculateTax():number ' means need to specify type of data returning
          'taxYear?' here ? mark means optional parameter , if we not send any data also code work fine
          (taxYear || 2022) it means taxYear doesnot have any data then 2022 will be assined if not the data will be same having taxYear
           or we can give a Default value like 'taxYear =2022'*/

            function calculateTax(income:number,taxYear?:number): number{

                if((taxYear || 2022) < 2022) return income * 1.2
                return income * 1.3;

            }

            calculateTax(10_000);

    // Example with Objects 

        /* explanation below code from line number 61 if want to add new key it not allows so we need to specify it fast so the object
           we specifies the id : number and name:string , and retire functions is like return */

            let employee = {id:1,name:"Hello"}

            let employees : {
                    id:number;
                    name:string;
            } ={id:2,name:"john"}

            let employeesList : {
               readonly id:number;
                name:string;
                retire : (date:Date) => void
            } ={
                id:2,
                name:"john",    
                retire : (date:Date) =>{
                    console.log(date);
                }
        
               }

               // employeesList.id=5 it shows an error because id has only read option



    // Using type alieases 
    /* it is used instead of repeating code to every object of its anotation we can right once use any object example below and we need to use type keyword */

               type Employee = {
                    id:number,
                    name:string,
                    retire? : (date:Date) => void
               }

               let emp:Employee={
                    id:2,
                    name:"john"
               }

    // Using Union Types
        /* By using union type we can given variable or function more than one parameter type example below */

               function kgToLbs(weight : number | string): number{

                        if(typeof(weight) === 'number') return weight * 2.2;
                        else return parseInt(weight) * 2.2

               }
               console.log(kgToLbs(10));
               console.log(kgToLbs('10')+" With a String");

    // Intersection types

        let weightOf : number & string;
        // OR

        type Draggable ={
            drag:()=>void
        }
        type Resizeble={
            resize : () => void
        }

        type UIWidget = Draggable & Resizeble

        let textBox : UIWidget ={
            drag:()=>{},
            resize:() => {}
        }

    // Liternals Type

        let Quantity : 50 | 100 =100;

        //or
        type Quantity1 = 50 | 100;
        let quan : Quantity1 = 100;

        type NameOf = "john" | "peter"
        let checkName : NameOf =  "john"

    // Nullable type

        function greet(myName : string){
            console.log(myName.toUpperCase())
        }
       // greet(null); it is valid code in js and it rises a bug null value cannot be upper case

       function greeting(myName : string | null | undefined){
                if(myName) console.log(myName.toUpperCase())
                else console.log("This is either Null or Undefined Value")
       }
       greeting(null);

    // Optional Chaining 

       type Customer ={
            birthday? : Date
       }
       function getCustomer(id:number): Customer | null | undefined {

            return id == 0 ? null : {birthday:new Date()}
       }

       let customer = getCustomer(1);
       // optional property access operator ? . 

       // if we make birthday as optional then we can use optional keyword to access the data
       console.log(customer?.birthday);
       console.log(customer?.birthday?.getFullYear());


