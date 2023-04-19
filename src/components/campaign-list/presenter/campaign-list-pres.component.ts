import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'src/models';

@Component({
  selector: 'app-campaign-list-pres',
  templateUrl: './campaign-list-pres.component.html',
  styleUrls: ['./campaign-list-pres.component.scss']
})
export class CampaignListPresComponent {
  @Input()
  public campaigns: Campaign[] | null = [];
  selection = new SelectionModel<Campaign>(true, []);
  displayedColumns: string[] = ['select','name', 'status', 'startDate', 'endDate', 'impression', 'clicks', 'acos'];

  constructor() {

  }

  /**
   * check all checkbox is selected
  */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.campaigns!.length;
    return numSelected === numRows;
  }

  /**
   * Selects all rows if they are not all selected; otherwise clear selection
   */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.campaigns!.forEach(row => this.selection.select(row));
  }
}
