// Programación orientada a objetos
// Una clase en JS es una plantilla para crear objetos, que comparten mismas propiedades y métodos 
// Una clase es un molde que descruve como serán los objetos y que podrán hacer

class Product {
   constructor(productName = '', productPrice){
    this.productName = productName;
    this.productPrice = productPrice;
   }


formatProduct(){
    return`El producto ${this.productName} tiene un precio de ${this.productPrice}`
}
};

const product1 = new Product("Remote control", 15000)
const product2 = new Product("SSD", 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

// Herencia en JS 
// La herencia en JS permite que los objetos reutilicen propiedades y métodos de otros

class Book extends Product {
    constructor(bookName, bookPrice, isbn){
      super('', bookPrice);
      this.isbn = isbn;
      this.bookName = bookName;
    }

    formatBook(){
        return`${super.formatProduct()} y su ISBN es ${this.isbn}`
    }
};

const book1 = new Book("El perfume", 20000, 123579);

console.log(book1);
console.log(book1.formatBook());

