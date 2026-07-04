export interface CaseSnapshot {
  sector: string;
  focus: string;
  description: string;
}

// Illustrative engagement snapshots by sector — not attributed to a specific named client.
export const CASE_SNAPSHOTS: CaseSnapshot[] = [
  {
    sector: "Telecommunications",
    focus: "Operations & Digital Transformation",
    description:
      "Supported a telecommunications operator's business process optimization and digital engagement initiatives across its regional footprint.",
  },
  {
    sector: "Development Finance",
    focus: "Advisory & Market Research",
    description:
      "Provided market research and advisory support aligned with international development finance institutions' due diligence requirements.",
  },
  {
    sector: "Banking",
    focus: "Financing & Valuation",
    description:
      "Delivered valuation and financing structuring support for a commercial banking sector engagement.",
  },
  {
    sector: "Mining & Industrial",
    focus: "Safeguarding & Public Health",
    description:
      "Designed and delivered workplace HIV/AIDS prevention, safeguarding, and health screening programming for an industrial workforce.",
  },
  {
    sector: "Shipping & Logistics",
    focus: "Supply Chain & Operations",
    description:
      "Supported supply chain management and operational efficiency initiatives for a marine terminal operator.",
  },
  {
    sector: "Youth Development",
    focus: "Community Programming",
    description:
      "Partnered on community-facing behaviour change communication and youth development program delivery.",
  },
];
