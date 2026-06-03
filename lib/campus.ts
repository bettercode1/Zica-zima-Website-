/** ZICA ZIMA PCMC — Gera's Imperium Gateway campus */
export const CAMPUS_ADDRESS_FULL =
  "C701 - C706, Gera's Imperium Gateway, Nashik Phata Metro Station, Pimpri, Pune";

export const CAMPUS_ADDRESS_LINES = [
  "C701 - C706, Gera's Imperium Gateway,",
  'Nashik Phata Metro Station, Pimpri, Pune',
] as const;

/** Opens Google Maps at the new campus (Nashik Phata / Gera Imperium Gateway) */
export const CAMPUS_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    "C701-C706 Gera's Imperium Gateway Nashik Phata Metro Station Pimpri Pune"
  );
