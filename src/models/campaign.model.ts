export interface Campaign {
  /**
   * campaign name
   */
  name: string;

  /**
   * campaign status
   */
  status: string;

  /**
   * campaign startDate value
   */
  startDate: Date;

  /**
   * campaign endDate value
   */
  endDate: Date;

  /**
   * campaign impression value
   */
  impression: number;

  /**
   * campaign clicks value
   */
  clicks: number;

  /**
   * campaign acos value
   */
  acos: number;
}
