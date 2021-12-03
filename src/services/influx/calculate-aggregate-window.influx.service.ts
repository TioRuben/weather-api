export const calculateAggregateWindow = (start: Date, end: Date): string => {
  const diff = end.getTime() - start.getTime();
  if (diff < 60 * 60 * 1000) {
    return "1s";
  }
  if (diff < 24 * 60 * 60 * 1000) {
    return "5m";
  }
  if (diff < 30 * 24 * 60 * 60 * 1000) {
    return "15m";
  }
  if (diff < 365 * 24 * 60 * 60 * 1000) {
    return "12h";
  }
  return "30d";
};
