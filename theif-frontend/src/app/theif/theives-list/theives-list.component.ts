import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theives-list',
  templateUrl: './theives-list.component.html',
  styleUrls: ['./theives-list.component.scss']
})
export class TheivesListComponent implements OnInit {
  theifDetail: any = [];
  constructor(private dataService: DataserviceService, private router: Router) { }

  ngOnInit() {
    this.getTheifDetails();
  }

  //to get thief details from db
  getTheifDetails() {
    let url = 'thiff';
    this.dataService.read(url).then(
      res => {
        this.theifDetail = res;
      }, err => {
        window.alert("Something went wrong");
      }
    )
  }

//to navigate to update page along with id
  updateTheif(id) {
    this.router.navigate(["/updatedetail"], { queryParams: { theifId: id } })
  }

  //to delete theif details 
  deleteTheif(id) {
    let url = "thiff/" + id;
    this.dataService.delete(url).then(
      res => {
        window.alert("Theif detail deleted successfully");
        this.getTheifDetails();
      }, err => {
        window.alert("Something went wrong")
      }
    )
  }
}
