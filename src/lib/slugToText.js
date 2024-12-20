export default function slugToText(slug) {
  let c = "";

  for (let i = 0; i < slug.length; i++) {
    if (slug[i] !== "-") {
      c += slug[i];
    } else {
      c += " ";
    }
  }

  return c;
}
