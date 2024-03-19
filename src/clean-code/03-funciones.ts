(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }


    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }

   interface movieProperties {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title, description, rating, cast}: movieProperties ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    interface Actor {
        fullName: string;
        birthdate: Date;
    }
    function createActor( { fullName, birthdate }: Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // continuar 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if ( isDead ) {
            return 1500;
        } 
        
        if ( isSeparated ) {
            return 2500;
        }
        
        return isRetired ? 3000:4000;

    }


})();




