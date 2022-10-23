const filters = [
  {
    idFilter: 1,
    text: "High ABV (>6/0%)",
    checked: false,
    field: "abv",
    operator: ">",
    value: 6,
  },
  {
    idFilter: 2,
    text: "Classic Range",
    checked: false,
    field: "first_brewed",
    operator: "<",
    value: 2010,
  },
  {
    idFilter: 3,
    text: "Acidic (ph < 4)",
    checked: false,
    field: "ph",
    operator: "<",
    value: 4,
  },
];
export default filters;
