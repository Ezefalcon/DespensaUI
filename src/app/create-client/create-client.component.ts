import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ClientService } from "../services/client.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SnackbarService } from "../services/snackbar.service";

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
    private snackbarService: SnackbarService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createClient() {
    if(this.form.valid) {
      let rawValue = this.form?.getRawValue();
      this.clientService.save(rawValue).subscribe(res => {
        this.snackbarService.openSnackBar('Se agrego el cliente correctamente','OK');
        this.dialogRef.close();
      });
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
    });
  }
}
