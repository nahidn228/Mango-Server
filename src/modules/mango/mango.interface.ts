export interface IMango {
  name: string;
  variety: string;
  unit: "kg" | "pound";
  price: string;
  stock: string;
  origin: string;
  season: "fall" | "summer" | "winter";
}
