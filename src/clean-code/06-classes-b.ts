(
    () => {
        interface PersonProps {
            name        : string;
            gender      : Gender;
            birthdate   : Date;
        }

        type Gender = 'M'|'F';
        class Person{
            public name?        : string;
            public gender?      : Gender;
            public birthdate?   : Date;

            constructor({name, gender, birthdate}: PersonProps){
                this.name      = name;
                this.gender    = gender;
                this.birthdate = birthdate;
            }
        }

        interface UserProps {
            email     : string;
            role      : string;
            name      : string;
            gender    : Gender;
            birthdate : Date;
        }

        class User extends Person {
            public  lastAcces: Date;
            public  email: string;
            public  role: string;
            
            constructor(
                {
                    email,
                    role,
                    name,
                    gender,
                    birthdate, 
                }: UserProps

            ) {
                super({name, gender, birthdate});
                this.lastAcces = new Date();
                this.email = email;
                this.role = role;
            }
            checkCredentials() {
                return true;
            }
        }

        // const newPerson = new Person('Neil', "M", new Date('1999-2-17'));
        // console.log({newPerson});
        interface UserSettingsProps {
            workingDirectory: string;
            lastOpenFolder: string;
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;

        }
        class UserSettings extends User {
            public workingDirectory: string;
            public lastOpenFolder: string;
            constructor(
                {
                    workingDirectory,
                    lastOpenFolder,
                    email,
                    role,
                    name,
                    gender,
                    birthdate,
                }: UserSettingsProps
            ) {
                super({email, role, name, gender, birthdate});
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
            }
        }
        
        const userSettings = new UserSettings(
           { 
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'neil@gmail.com',
            role: 'Admin',
            name: 'Neil',
            gender: 'M',
            birthdate: new Date('1985-10-12')
           }
        );
        console.log({userSettings});
        
    }
)();''