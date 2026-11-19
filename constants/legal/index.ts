import type { LegalDocContent } from "./types";
import { INFOMA_LEGAL } from "./infoma";

// Keyed by solution slug, then legal page slug (see `legalPages` in constants/solutions.ts).
export const LEGAL_CONTENT: Record<string, Record<string, LegalDocContent>> = {
  infoma: INFOMA_LEGAL,
};
