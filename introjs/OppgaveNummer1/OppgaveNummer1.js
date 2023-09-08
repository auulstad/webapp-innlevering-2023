const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

  console.log(text);

  // Del teksten inn i ord ved mellomrom
  const ordListe = text.split(" ");

  console.log(ordListe);
  // Velg det første ordet som utgangspunkt for sammenligningen
  let lengsteOrd = ordListe[0];

  console.log("Ordet i fokus akkurat nå: " + lengsteOrd);
  // Gå gjennom hvert ord i listen fra det andre ordet
  for (let i = 1; i < ordListe.length; i++) {
    const ord = ordListe[i];

    // Fjern eventuelle spesialtegn (f.eks. komma, punkt) fra ordet
    const rentOrd = ord.replace(/[.,]?$/, "");; // Endret regular expression-uttrykket

    // Sjekk om lengden til dette ordet er større enn lengden til det nåværende lengste ordet
    if (rentOrd.length > lengsteOrd.length) {
      lengsteOrd = rentOrd;
    }
  }

console.log("Det lengste ordet er: " + lengsteOrd);
