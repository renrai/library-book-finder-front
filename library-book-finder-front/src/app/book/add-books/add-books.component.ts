import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  message: boolean = false;
  addBook: Book = {
    BookName: '',
    Id: '',
    Shelf: '',
    Author: '',
    Genre: '',
    Year: 0
  }
  ngOnInit(): void{}
  constructor(private booksService: BooksService, private router: Router){}

  addNewBook() {
    this.booksService.addBook(this.addBook).subscribe({
      next: (book) => {
        this.message = true;
        this.cleanBook();
      }
    });
  }

  removeMessage(){
    this.message = false;
  }

  cleanBook(){
    this.addBook.Author = '';
    this.addBook.Shelf = '';
    this.addBook.BookName = '';
    this.addBook.Genre = '';
    this.addBook.Year = 0;
  }
}
