import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

 constructor(private booksService: BooksService){}

  ngOnInit(): void{
    this.booksService.getAllBooks()
    .subscribe({next: (books) => 
      this.books = books
    })
}
}
