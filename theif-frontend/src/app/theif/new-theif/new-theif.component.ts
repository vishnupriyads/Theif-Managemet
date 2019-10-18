import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-new-theif',
  templateUrl: './new-theif.component.html',
  styleUrls: ['./new-theif.component.scss']
})
export class NewTheifComponent implements OnInit {
  details: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataserviceService) { }

  ngOnInit() {
    this.details = this.formBuilder.group({
      name: [""],
      age: [""],
      gender: [""],
      mobileNumber: [""],
      crime: [""],
      section: [""]
    })
  }
  //to post form details to the db using create service
  addDetails() {
    let url = "thiff";
    this.dataService.create(url, this.details.value).then(
      res => {
        window.alert("Thieves details added succesfully");
      }, err => {
        window.alert("Something went wrong")
      }
    )
  }
}


