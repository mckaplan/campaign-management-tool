export interface ProductKeyword {
  /**
   * Product's keyword name
   */
  name: string;

  /**
   * Product's keyword match type such as exact or board
   */
  matchType: string;

  /**
   * Product's keyword bid value
   */
  bid: number;

  /**
   * Product's keyword bid value defined on db
   */
  suggestedBid: number;

  isActive: boolean;
}
