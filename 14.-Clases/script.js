/* 
?Crea una clase Libro (listo) */
class Book{
    constructor(title,author,year,gender){
        this.title = title
        this.author = author
        this.year = year 
        this.gender = gender
        /* 
        ?La clase libro tendrá título, autor, año y género. (listo) */
        /* 
        *Con el constructor especificamos los parametros titulo autor año y genero */
    }

    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
        /* 
        ?Crea un método que devuelva toda la información del libro (listo) */
        /* 
        *Los metodos se  escriben fuera del constructor y estan relacionados con los objetos, cuando se nombran las variables debe llevar this.*/
    }

    getAuthor(){
        return this.author
        /* 
        *se crea este metodo para retornar los autores y facilitar la creacion de la funcion showAuthors */
    }

    getGender(){
        return this.gender
        /* 
        *metodo para retornar los generos y facilitar la creacion de la funcion showGender */
    }
}

let books = []
/* 
?Pide 3 libros y guárdalos en un array (listo) */
/* 
*Se crea un array vacio y luego con el ciclo se pide el ingreso de los datos */

while(books.length < 3){
    let title = prompt('Ingrese el titulo del libro')
    let author = prompt('Ingrese el autor del libro')
    let year = prompt('Ingrese el año en el que fue escrito el libro')
    let gender = prompt('Ingrese el genero del libro (aventura-terror-fantasia) del libro').toLocaleLowerCase()
    /* 
    ?Los libros se introducirán al arrancar el programa pidiendo los datos con prompt. */

    if(title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')){
/*  
    ?Validar que los campos no se introduzcan vacíos (listo)
    ?Validar que el año sea un número y que tenga 4 dígitos
    ?Validar que el género sea: aventuras, terror o fantasía */

    /* 
    *se verifica si la entrada de datos no esta vacia, el negativo de is non a number (- x - = +) se tenga una longitud de 4 y por ultimo que tenga una opcion valida (por eso se encierra entre comillas) */
        books.push(new Book(title, author, year, gender))

        /* 
        *se sube al array books un nuevo book con los argumentos que son las entradas, (no se especifica el nombre del objeto book, solo se sube como book) */
    }
}

const showAllBooks = () => {
    console.log(books)
    /* 
    ?Crea una función que muestre todos los libros */
    /* 
    *la funcion solo muestra el array books*/
}

const showAuthors = () =>{
    let authors = []

    for(const book of books){
        authors.push(book.getAuthor());
    }
     /*
     ?Crea una función que muestre los autores ordenados alfabéticamente */
    console.log(authors.sort());
    /* 
    *crea una array vacio que contendra los autores y con un ciclo for recorre el array books, se sube al array authors los autores de ese libro que representa book en cada iteracion, para conseguir el autor se debe crear un metodo para la clase libro que retorne solo los autores, para finalizar fuera del ciclo se muestra por consola authors.sort() para que salgan ordenados alfabeticamente */
}

const showGender = () => {
    const gender = prompt('introduce el genero a buscar')

    for(const book of books){
        if(book.getGender() == gender){
            console.log(book.bookInfo())
           /*  
           ?Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información */
           /*

           *la funcion pide un genero como entrada, luego recorre el array books con un ciclo for, donde cada iteracion, si se cumple la condicion de que el genero retornado del libro y el metodo getGender es igual al genero de entrada, muestre por consola la info de los libros que sean de ese genero */
        }
    }
}

showAllBooks()