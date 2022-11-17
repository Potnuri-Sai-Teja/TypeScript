interface Working{
    isWorking:boolean
    printWorkingOrNot() : string
}
// i am making this class should be export and use it in practice5_modules.ts file
export class Employees implements Working{

    // Name:string;
    // Age:number;
    // Position:string;
    // Role:string;

    // constructor(empName:string,empAge:number,position:string,workingRole:string,public isWorking:boolean){
    //     this.Name = empName;
    //     this.Age = empAge;
    //     this.Position = position;
    //     this.Role = workingRole
    // }

        // instead of making like above we can do that 
        constructor(public Name:string,public Age:number,public Position:string,public Role:string,public isWorking:boolean){

        }


         display():void{
                console.log(this.Name +" As  "+this.Position+" Role of "+this.Role)
        }

        printWorkingOrNot(): string {
            
            return `${this.Name} ${this.isWorking ? 'is' : 'isnot'} Working `
        }

}
class Company extends Employees {

    
            id:string='';
            email:string = '';



        createAccount():void{ 
            let companyName:string ="Imag"
            let emailid:string = "@imaginnovate.com"
            this.id= companyName.concat(this.Name,Math.floor(Math.random() * 1000).toString());
            this.email = this.Name.toLowerCase().concat(emailid)
            console.log("Employee Id : "+this.id)
            console.log("Employee EmailId : "+this.email)
        }

}


let emp1 = new Company("Teja",25,"Intern","Front End Developer",true);

let emp2:Employees = new Company("Teja",25,"Intern","Front End Developer",true);


//emp1.createAccount();
// emp2.crateAccount();  it never allows us to take the child class data because we given type as a parent class

enum DaysOfWeek{
    SUN,MON,TUE,WED,THU,FRI,SAT
}

let Day : DaysOfWeek;

Day=DaysOfWeek.THU;
//console.log(Day);
// example with Genetics 

        class Q1 extends Employees {

        }
        class Q2 extends Employees{

        }

        // function employeeEcho(person:any){

        //     return person;

        // }

// the type of checking is any here

        // T make a sence that what a type input your getting that will be the return type
        // function employeeEcho<T>(person:T):T{
        //    // person.Name here even if its extended from Employee i cant access the data
        //     return person;

        // }
        
// Now Checking is Q1
        // we are making that that object will extends the parent here
        function employeeEcho<T extends Employees>(person:T):T{
            person.Name;
            return person;

        }
        
        let Q11= new Q1("Teja",25,"Intern","Front End Developer",true);



        let checking = employeeEcho(Q11)
