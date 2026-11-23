/**
 * The address printed on every public legal page.
 *
 * One constant, because Play and both policies have to agree — a user who cannot reach
 * support is a `Data safety` failure. Change it here and every page follows.
 */
export const contactEmail = "dunitelabs.support@gmail.com";

export type LegalSection = {
  heading: string;
  /** Trusted, in-repo HTML: paragraphs, lists and tables only. */
  html: string;
  contact?: boolean;
};
