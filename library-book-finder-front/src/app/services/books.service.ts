import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseApiUrl: string =environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl+'book')
  }

  addBook(addBookRequest: Book):  Observable<Book>{
    return this.http.post<Book>(this.baseApiUrl + 'book', addBookRequest);
  }
}
