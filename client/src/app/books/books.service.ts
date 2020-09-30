import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './book';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class BooksService {
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('BooksService');
    }

    getBooks(): Observable<Book[]> {
        return this.http
            .get<Book[]>('http://localhost:8000/api/books')
            .pipe(catchError(this.handleError('getBooks', [])));
    }

    addBook(book: Book): Observable<Book> {
        return this.http
            .post<Book>('http://localhost:8000/api/books', book)
            .pipe(catchError(this.handleError('addBook', book)));
    }

    deleteBook(id: number): Observable<{}> {
        const url = `http://localhost:8000/api/books/${id}`;
        return this.http
            .delete(url)
            .pipe(catchError(this.handleError('deleteBook')));
    }

    updateBook(book: Book): Observable<Book> {
        return this.http
            .put<Book>(`http://localhost:8000/api/books/${book.id}`, book)
            .pipe(catchError(this.handleError('updateBook', book)));
    }
}
