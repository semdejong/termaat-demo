/**
 * URL-mapping voor dit concept.
 * Bestaande .html-paden wijzen naar het overeenkomstige pad.
 * De website van Schildersbedrijf A.F. ter Maat zelf blijft ongewijzigd.
 */
export const htmlMigration = [
  { source: "/index.html", destination: "/" },
  { source: "/index.php", destination: "/" },
  { source: "/schilderwerk.html", destination: "/schilderwerk" },
  { source: "/wandafwerking.html", destination: "/wandafwerking" },
  { source: "/beglazing.html", destination: "/beglazing" },
  { source: "/referenties.html", destination: "/referenties" },
  { source: "/contact.html", destination: "/contact" },
] as const;
