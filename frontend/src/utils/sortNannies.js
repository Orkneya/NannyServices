export function sortNannies(list, filter) {
  return [...list].sort((a, b) => {
    switch (filter) {
      case "A to Z":
        return a.name.localeCompare(b.name);
      case "Z to A":
        return b.name.localeCompare(a.name);
      case "Less than $20":
        return a.price_per_hour < 20 ? -1 : 1;
      case "Greater than $20":
        return a.price_per_hour > 20 ? -1 : 1;
      case "Popular":
        return b.rating - a.rating;
      case "No Popular":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });
}
