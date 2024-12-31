import { TripCardItemProps } from "@/src/types";

export const recommendedTrips: TripCardItemProps[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    image: require("@/src/assets/city.png"),
    days: 2,
    nights: 3,
    pricePerPerson: 1000,
  },

  {
    id: 2,
    city: "Tokyo",
    country: "Japan",
    image: require("@/src/assets/city.png"),
    days: 5,
    nights: 6,
    pricePerPerson: 769,
  },

  {
    id: 3,
    city: "New York",
    country: "United States",
    image: require("@/src/assets/city.png"),
    days: 6,
    nights: 7,
    pricePerPerson: 450,
  },
];
