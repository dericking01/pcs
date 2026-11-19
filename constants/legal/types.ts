export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

export interface LegalDocContent {
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
  deletionForm?: boolean;
}
