import { Component, OnInit } from '@angular/core';
import { Hash } from '../hash';
import { HashService } from '../hash.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  hashes: Hash[] = [];

  result : string;
 
  constructor(private hashService: HashService) { }
 
  ngOnInit() {
    this.getHashes();
    this.getApiString();
  }
 
  getHashes(): void {
    this.hashService.getHashes().subscribe(hashes => this.hashes = hashes.slice(1, 5));
  }

  getApiString(){
    this.hashService.getTest().subscribe(result => this.result = result);
  }
}