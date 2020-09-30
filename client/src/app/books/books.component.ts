import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component({
    selector: 'app-book',
    templateUrl: './books.component.html',
    providers: [BooksService]
})

export class BooksComponent implements OnInit {
    books: Book[];
    editBook: Book;

    constructor(private bookService: BooksService) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks().subscribe(books => (this.books = books));
    }

    add(title: string, category: string): void {
        this.editBook = undefined;
        title = title.trim();
        category = category.trim();
        if (!title) {
            return;
        }
        if (!category) {
            return;
        }

        const newBook: Book = { title, category } as Book;
        this.bookService.addBook(newBook).subscribe(book => this.books.push(book));
    }

    delete(book: Book): void {
        this.books = this.books.filter(h => h !== book);
        this.bookService.deleteBook(book.id).subscribe();
    }

    edit(book): void {
        this.editBook = book;
    }

    update(): void {
        if (this.editBook) {
            this.bookService.updateBook(this.editBook).subscribe(book => {
                const ix = book ? this.books.findIndex(h => h.id === book.id) : -1;
                if (ix > -1) {
                    this.books[ix] = book;
                }
            });
            this.editBook = undefined;
        }
    }
}

