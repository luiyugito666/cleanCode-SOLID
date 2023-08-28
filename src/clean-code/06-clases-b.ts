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
    birthday: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
    
  }

  class User extends Person { 

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({email, role,  name,gender,birthday}:UserProps) {
      super({ name, gender, birthday });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
            
    }

    checkCredential() { 
      return true;
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

  class UserSettings extends User{ 
    public workingDirectory: string;
    public lastOpenFolder: string;
   
    constructor(
      {workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthday}:UserSettingsProps          
    ) {
      super({email, role, name, gender, birthday})
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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