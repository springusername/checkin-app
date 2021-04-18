import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
})
export class CheckinComponent implements OnInit {
  checkInResponse;
  noOfBags;
  data: any;
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.service.getReservation(id).subscribe((res) => {
      this.data = res;
    });
  }

  checkin(noOfBags) {
    var checkInRequest: any = new Object();
    checkInRequest.id = this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags = noOfBags;

    this.service.checkin(checkInRequest).subscribe((res) => {
      this.checkInResponse = res;
    });
    this.router.navigate(['/confirm']);
  }
}
