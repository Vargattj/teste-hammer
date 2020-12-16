export interface Participant {
  id: number;
  name: string;
  drink: boolean;
  guest?: {
    exists: boolean;
    name: string;
    drink: boolean;
  };
}
