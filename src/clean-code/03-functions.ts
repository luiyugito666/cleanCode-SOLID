(() => {

    // función para obtener información de una película por Id
    function getMovieById( Id: string ) {
        console.log({ Id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( Id: string ) {
        console.log({ Id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiobyId( Id: string ) {
        console.log({ Id });
    }
    
    // Crear una película
  interface Movie {
    title:        string,
    description:  string,
    rating:       number,
    cast:         string[] 
   }
  //como son mas de 4 parametro, es mejor crear una interface y luego desetructurarlo en la funcion
    function createMovie({title, description, rating, cast}:Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

  }
  //continuacion
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number=> {
        /* let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result; */
      //haciendo que la funcion sea mas simple
      
      if (isDead) return 1500;

      if (isSeparated) return 2500;

      return (isRetired) ? 3000 : 4000;
    }

    


})();


