import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  keyword: string;
}

@Component({
  selector: 'app-keyword-add-dialog-pres',
  templateUrl: './keyword-add-dialog-pres.component.html',
  styleUrls: ['./keyword-add-dialog-pres.component.scss']
})
export class KeywordAddDialogPresComponent {

  constructor(
    public dialogRef: MatDialogRef<KeywordAddDialogPresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  /**
   * Save keyword list
   */
  public save(){
    this.dialogRef.close(this.data.keyword.split('\n'));
  }
}
