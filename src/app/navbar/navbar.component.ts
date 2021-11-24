import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CreateClientComponent } from "../create-client/create-client.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clientId?: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onInputChange(e: any) {
    console.log(e.target.value)
  }

  onCreateClient() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: '250px',
      data: {text: 'test'},
    });
  }
}
