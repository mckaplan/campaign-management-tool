import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { Campaign } from 'src/models';

@Component({
  selector: 'app-campaign-list-pres',
  templateUrl: './campaign-list-pres.component.html',
  styleUrls: ['./campaign-list-pres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignListPresComponent {
  /**
   * value of campaign list to show list
   */
  @Input()
  public campaigns: Campaign[] | null = [];

  /**
   * set model for list model
   */
  selection = new SelectionModel<Campaign>(true, []);

  /**
   * avalibility of columns to show
   */
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

  /**
   * Calculate total impression value
   * @returns total impression value
   */
  getTotalImpression() {
    return this.campaigns?.map((campaign) => campaign.impression).reduce((acc,curr) => acc+curr,0);
  }

  /**
   * Calculate total clicks value
   * @returns total clicks value
   */
  getTotalClicks() {
    return this.campaigns?.map((campaign) => campaign.clicks).reduce((acc,curr) => acc+curr,0);
  }

  /**
   * Calculate total acos value
   * @returns total acos value
   */
  getTotalAcos(){
    return this.campaigns?.map((campaign) => campaign.acos).reduce((acc,curr) => acc+curr,0);
  }
}
