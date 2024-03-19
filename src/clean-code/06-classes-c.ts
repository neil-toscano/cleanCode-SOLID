// Aplicando el principio de Responsabilidad Unica
// Priorizar la composicion frente a la herencia
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
        }

        class User {
            public  lastAcces: Date;
            public  email: string;
            public  role: string;
            
            constructor(
                {
                    email,
                    role,
                }: UserProps

            ) {
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
        interface SettingsProps {
            workingDirectory: string;
            lastOpenFolder: string;
        }
        class Settings {
            public workingDirectory: string;
            public lastOpenFolder: string;
            constructor(
                {
                    workingDirectory,
                    lastOpenFolder,
                }: SettingsProps
            ) {
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
            }
        }
        


        interface UserSettingsProps {
            workingDirectory: string;
            lastOpenFolder: string;
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;

        }
        class UserSettings {
            public person: Person;
            public user: User;
            public settings: SettingsProps;

            constructor(
                {
                    name,
                    gender,
                    birthdate,
                    email,
                    role,
                    workingDirectory,
                    lastOpenFolder,
                }: UserSettingsProps
            ) {
                this.person = new Person({name,gender,birthdate});
                this.user = new User({email, role});
                this.settings = new Settings({workingDirectory, lastOpenFolder});
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