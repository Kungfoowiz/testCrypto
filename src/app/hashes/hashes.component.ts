import { Component, OnInit } from '@angular/core';
import { Hash } from '../hash';
// import { HASHES } from '../mock-hashes';
import { HashService } from '../hash.service';

@Component({
  selector: "app-hashes",
  templateUrl: "./hashes.component.html",
  styleUrls: ["./hashes.component.css"]
})
export class HashesComponent implements OnInit {
  // hashes = HASHES;
  hashes: Hash[];

  // myHash : Hash = {
  //   id: 1,
  //   hashName: 'hashName1',
  //   hashText: 'ABCZ123'
  // };

  selectedHash: Hash;

  onSelect(hash: Hash): void {
    this.selectedHash = hash;
  }

  constructor(private hashService: HashService) {}

  ngOnInit() {
    this.getHashes();
  }

  getHashes(): void {
    // this.hashes = this.hashService.getHashes();
    this.hashService.getHashes().subscribe(hashes => (this.hashes = hashes));
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.hashService
      .addHash({ hashName: name, hashText: "TCST2X8ZCN" } as Hash)
      .subscribe(hash => {
        this.hashes.push(hash);
      });
  }

  delete(hash: Hash): void {
    this.hashes = this.hashes.filter(h => h !== hash);
    this.hashService.deleteHash(hash).subscribe();
  }

}
