import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CreateClientComponent } from "../create-client/create-client.component";
import { ClientService } from "../services/client.service";
import { Client } from "../shared/models/client";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clientId?: number;
  currentClient: Client | undefined = undefined;

  constructor(public dialog: MatDialog,
              private clientService: ClientService) { }

  ngOnInit(): void {
  }

  onInputChange(e: any) {
    if(e.target.value) {
      this.clientService.findById(e.target.value).subscribe(res => {
        this.currentClient = res as Client;
        this.clientService.setCurrentClient(this.currentClient);
      });
    }
  }

  onCreateClient() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: '250px',
      data: {text: 'test'},
    });
  }
}
