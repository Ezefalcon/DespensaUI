import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ClientService } from "../services/client.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface DialogData {
  text: string;
  onConfirm?: void;
  onCancel?: void;
}

@Component({
  selector: 'app-create-client',
  templateUrl: 'create-client.component.html',
})
export class CreateClientComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<CreateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clientService: ClientService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createClient() {
    let rawValue = this.form?.getRawValue();
    if(this.form.valid) {
      this.clientService.save(rawValue).subscribe();
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
    });
  }
}
