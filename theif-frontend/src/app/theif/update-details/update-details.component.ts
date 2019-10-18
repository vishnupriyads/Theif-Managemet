import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {
  theifId: string;
  theifDetail: any = {};
  constructor(private route: ActivatedRoute, private dataService: DataserviceService, private router: Router) {
    this.route.queryParams.subscribe(res => {
      this.theifId = res.theifId;
      this.getTheifById(this.theifId);
    })
  }

  ngOnInit() {
  }

//
  getTheifById(id) {
    let url = "thiff/thiffById/" + id;
    this.dataService.read(url).then(
      res => {
        this.theifDetail = res;
      }, err => {
        window.alert("Something went wrong")
      }
    )
  }

//
  update() {
    let url = "thiff/" + this.theifId;
    this.dataService.update(url, this.theifDetail).then(
      res => {
        window.alert("Successfully Updated")
        this.router.navigate(["/theiveslist"])
      }, err => {
        window.alert("Something went wrong")
      }
    )
  }
}
