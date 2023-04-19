export interface Keyword {
  /**
   * keyword name
   */
  name: string;

  /**
   * keyword match type such as exact or board
   */
  matchType: string;

  /**
   * keyword bid value
   */
  bid: number;

  /**
   * keyword bid value defined on db
   */
  suggestedBid: number;
}
