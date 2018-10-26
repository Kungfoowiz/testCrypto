import { Injectable } from '@angular/core';

import { Hash } from './hash';
import { HASHES } from './mock-hashes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class HashService {
  private hashesUrl = "api/hashes"; // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHashes(): Observable<Hash[]> {
    this.messageService.add("HashService: fetched hashes");

    // return of (HASHES);

    return this.http.get<Hash[]>(this.hashesUrl).pipe(
      tap(hashes => this.log("fetched hashes")),
      catchError(this.handleError("getHashes", []))
    );
  }

  getTest(): Observable<string> {

    return this.http.get<string>("http://localhost:5001/api/values");
  }

  getHash(id: number): Observable<Hash> {
    // TODO: send the message _after_ fetching the hero

    // this.messageService.add(`HashService: fetched hash id=${id}`);
    // return of(HASHES.find(hash => hash.id === id));

    const url = `${this.hashesUrl}/${id}`;
    return this.http.get<Hash>(url).pipe(
      tap(_ => this.log(`fetched hash id=${id}`)),
      catchError(this.handleError<Hash>(`getHash id=${id}`))
    );
  }

  /** Log a HashService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HashService: ${message}`);
  }

  /** PUT: update the hash on the server */
  updateHash(hash: Hash): Observable<any> {
    return this.http.put(this.hashesUrl, hash, this.httpOptions).pipe(
      tap(_ => this.log(`updated hash id=${hash.id}`)),
      catchError(this.handleError<any>("updateHash"))
    );
  }

  /** POST: add a new hash to the server */
  addHash(hash: Hash): Observable<Hash> {
    return this.http.post<Hash>(this.hashesUrl, hash, this.httpOptions).pipe(
      tap((hash: Hash) => this.log(`added hash w/ id=${hash.id}`)),
      catchError(this.handleError<Hash>("addHash"))
    );
  }

  /** DELETE: delete the hash from the server */
  deleteHash(hash: Hash | number): Observable<Hash> {
    const id = typeof hash === "number" ? hash : hash.id;
    const url = `${this.hashesUrl}/${id}`;

    return this.http.delete<Hash>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hash id=${id}`)),
      catchError(this.handleError<Hash>("deleteHash"))
    );
  }

  /* GET hashes whose name contains search term */
  searchHashes(term: string): Observable<Hash[]> {
    if (!term.trim()) {
      // if not search term, return empty hash array.
      return of([]);
    }

    return this.http.get<Hash[]>(`${this.hashesUrl}/?hashName=${term}`).pipe(
      tap(_ => this.log(`found hashes matching "${term}"`)),
      catchError(this.handleError<Hash[]>("searchHashes", []))
    );
  }


}
