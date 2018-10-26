import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hash } from '../hash';
import { HashService } from '../hash.service';

@Component({
  selector: 'app-hash-search',
  templateUrl: './hash-search.component.html',
  styleUrls: [ './hash-search.component.css' ]
})
export class HashSearchComponent implements OnInit {
  hashes$: Observable<Hash[]>;
  private searchTerms = new Subject<string>();

  constructor(private hashService: HashService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.hashes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hashService.searchHashes(term)),
    );
  }
}