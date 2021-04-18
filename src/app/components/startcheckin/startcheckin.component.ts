import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css'],
})
export class StartcheckinComponent implements OnInit {
  reservationId;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(id) {
    this.router.navigate(['/checkin', id]);
  }
}
