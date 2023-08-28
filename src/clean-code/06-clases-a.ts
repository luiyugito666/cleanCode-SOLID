(() => { 

  type Gender = 'F' | 'M';

  class Person { 
 /*    public name: string;
    public gender: Gender;
    public birthDay: Date;
    constructor(name: string, gender: Gender, birthday: Date){
            this.name = name,
            this.gender = gender,
            this.birthDay=birthday }*/
    //el codigo anterior puede ser simplificado, declarando de la siguiente manera
    constructor(
      public name: string, 
      public gender: Gender,
      public birthday: Date){}
  
  }

  class User extends Person { 
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      
      name: string,
      gender: Gender,
      birthday:Date,
      
    ) { 
      super(name, gender, birthday);
        this.lastAccess = new Date();
    }

    checkCredential() { 
      return true;
    }
  }

  class UserSettings extends User{ 

    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday:Date,
            
    ){super(email,role,name,gender,birthday) }
  }


  const userSettings = new UserSettings(
    './user/home',
    'home',
    'lui@g.com',
    'admin',
    'lui',
    'M',
    new Date('1986-10-04')

  );
  console.log({ userSettings });

})();