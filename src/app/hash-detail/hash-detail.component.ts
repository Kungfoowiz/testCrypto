import { Component, OnInit, Input } from '@angular/core';
import { Hash } from '../hash';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HashService }  from '../hash.service';

@Component({
  selector: 'app-hash-detail',
  templateUrl: './hash-detail.component.html',
  styleUrls: ['./hash-detail.component.css']
})

export class HashDetailComponent implements OnInit {

  @Input() hash: Hash;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hashService: HashService
  ) { }

  ngOnInit() {
    this.getHash();
  }

  getHash(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hashService.getHash(id).subscribe(hash => this.hash = hash);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.hashService.updateHash(this.hash).subscribe(() => this.goBack());
  }

}
