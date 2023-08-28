//Aplicando el principio de responasabilidad
//Priorizando la composicion frente a la herencia




(() => { 

  type Gender = 'F' | 'M';

  interface PersonProps { 
      name: string, 
      gender: Gender,
      birthday: Date

  }

  class Person { 

    public name: string; 
    public gender: Gender;
    public birthday: Date;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
      
     }
    
  
  }

  interface UserProps { 
   
    email: string;
    role: string;
    
  }

  class User{ 

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({email, role}:UserProps) {
    
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
            
    }

    checkCredential() { 
      return true;
    }
  }

  interface SettingsProps { 

     lastOpenFolder: string;
     workingDirectory: string;
     

  }

  class Settings{ 
    public workingDirectory: string;
    public lastOpenFolder: string;
   
    constructor(
      { workingDirectory,
        lastOpenFolder, }:SettingsProps
               
    ) {
      
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps { 

     lastOpenFolder: string;
     email: string;
     role: string;
     name: string;
     gender: Gender;
     workingDirectory: string;
     birthday: Date;

  }

  class UserSettings { 
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthday,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }:UserSettingsProps) { 
      this.person = new Person({name, gender, birthday});
      this.user = new User({email, role});
      this.settings= new Settings({lastOpenFolder,workingDirectory})
      
      }

  }
  const userSettings = new UserSettings(
    {
      birthday: new Date('1986-10-04'),
      email: 'lui@g.com',
      gender: 'M',
      lastOpenFolder: 'home',
      name: 'lui',
      role: 'admin',
      workingDirectory: './user/home',

    });
  console.log({ userSettings });

})();