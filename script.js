// Definición de la clase Libro
class Libro {
    // Constructor que inicializa las propiedades
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = false; // Por defecto, el libro no ha sido leído
    }

    // Método para marcar el libro como leído
    marcarComoLeido() {
        this.leido = true;
    }

    // Método para marcar el libro como no leído
    marcarComoNoLeido() {
        this.leido = false;
    }

    // Método para mostrar la información del libro
    informacion() {
        let estadoLeido = this.leido ? "Sí" : "No";
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${estadoLeido}`);
    }
}

// Creación de dos instancias de la clase Libro
let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Novela");
let libro2 = new Libro("1984", "George Orwell", "Ciencia ficción");

// Marcar libro1 como leído
libro1.marcarComoLeido();

// Mostrar la información de ambos libros
libro1.informacion();
libro2.informacion();
