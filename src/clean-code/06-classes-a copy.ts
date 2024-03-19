(
    () => {
        type Gender = 'M'|'F';
        class Person{
            public name?: string;
            public gender?: Gender;
            public birthdate?: Date;
            constructor(name:string, gender:Gender, birthdate: Date){
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }
        class User extends Person {
            public  lastAcces: Date;
            constructor(
                public email: string,
                public role: string,
                name: string,
                gender: Gender,
                birthdate: Date,

            ) {
                super(name, gender, birthdate);
                this.lastAcces = new Date();
            }
            checkCredentials() {
                return true;
            }
        }

        // const newPerson = new Person('Neil', "M", new Date('1999-2-17'));
        // console.log({newPerson});
        class UserSettings extends User {
            constructor(
                public workingDirectory: string,
                public lastOpenFolder: string,
                email: string,
                role: string,
                name: string,
                gender: Gender,
                birthdate: Date,
            ) {
                super(email, role, name, gender, birthdate);
            }
        }

        const userSettings = new UserSettings(
            '/usr/home',
            '/home',
            'neil@gmail.com',
            'Admin',
            'Neil',
            'M',
            new Date('1985-10-12')
        );
        console.log({userSettings});
        
    }
)();''