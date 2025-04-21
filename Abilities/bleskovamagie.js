const stormbind = {
  name: "Stormbind",
  levels: [
    {
      level: 1,
      name: "Statická jiskra",
      description: "Slabý výboj naruší nervy protivníka.",
      damage: "0 damage",
      effect: "Aspekt *Zachvění nervů* (-1 na další akci, pokud selže test Obratnosti)"
    },
    {
      level: 2,
      name: "Paralytický šok",
      description: "Výboj ochromí svaly.",
      damage: "0 damage",
      effect: "Cíl nemůže použít pohybovou akci (při neúspěchu v testu Fyzické odolnosti)"
    },
    {
      level: 3,
      name: "Elektrický zámek",
      description: "Síla výboje ztuhne celé tělo.",
      damage: "2 damage",
      effect: "Aspekt *Paralýza svalů*, cíl se nemůže pohnout bez úspěšného testu Síly"
    },
    {
      level: 4,
      name: "Sekvenční šoky",
      description: "Elektrické pulzy útočí v sérii.",
      damage: "1 damage za kolo (2 kola)",
      effect: "Aspekt *Roztřesený*"
    },
    {
      level: 5,
      name: "Bouřný řetěz",
      description: "Blesk přeskakuje mezi nepřáteli.",
      damage: "3 damage (první cíl), 2 damage (druhý)",
      effect: "Oba cíle: test Odolnosti nebo aspekt *Neovladatelné chvění*"
    },
    {
      level: 6,
      name: "Stáze blesku",
      description: "Uzamkne cíl v poli elektrické energie.",
      damage: "4 damage (při neúspěchu v testu Vůle)",
      effect: "Cíl nemůže používat pohyb, -2 na akce (2 kola)"
    },
    {
      level: 7,
      name: "Blesková výbojka",
      description: "Výboj zasáhne oblast okolo tebe.",
      damage: "5 damage",
      effect: "Aspekt *Nervový kolaps* (každý v oblasti 6 m při selhání testu Odolnosti)"
    },
    {
      level: 8,
      name: "Bouřný ortel",
      description: "Smrtící výboj pronikne tělem a myslí nepřítele.",
      damage: "8 damage",
      effect: "Paralýza na 1 kolo (při neúspěchu testu Vůle), použitelné 1× za střet"
    }
  ]
};


window.spells_lightning = [
  { id: "stormbind", ...stormbind }
];
