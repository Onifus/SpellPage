const gravitonSnare = {
  name: "Graviton Snare",
  levels: [
    {
      level: 1,
      name: "Zvýšená tíha",
      description: "Cíl se cítí těžší a zpomalený.",
      damage: "0 damage",
      effect: "Aspekt *Zpomalený pohyb* na 1 kolo (při neúspěchu v testu Fyzické odolnosti)"
    },
    {
      level: 2,
      name: "Gravitonový tlak",
      description: "Silnější pole tlačí cíl k zemi.",
      damage: "2 damage",
      effect: "Aspekt *Sklíčený tíhou* (při neúspěchu v testu Odolnosti)"
    },
    {
      level: 3,
      name: "Zóna zpomalení",
      description: "V oblasti 3 m se pohyb nepřátel omezuje.",
      damage: "0 damage",
      effect: "Všichni uvnitř mají -2 k pohybu a zásahům. Trvá 2 kola."
    },
    {
      level: 4,
      name: "Gravitační past",
      description: "Cíl je přibit k zemi.",
      damage: "3 damage",
      effect: "Ztrácí 1 akci. Trvá 2 kola (při neúspěchu v testu Síly)"
    },
    {
      level: 5,
      name: "Stlačení prostoru",
      description: "Vzduch a tlak kolem cíle se zhroutí.",
      damage: "5 damage",
      effect: "Aspekt *Dusivá tíha*. Zasahuje až 2 cíle."
    },
    {
      level: 6,
      name: "Gravitační kolaps",
      description: "Zóna o poloměru 6 m způsobí kolaps pro nepřátele uvnitř.",
      damage: "6 damage",
      effect: "Aspekt *Přišpendlen k zemi* (při neúspěchu v testu)"
    },
    {
      level: 7,
      name: "Černá spirála",
      description: "Rotující gravitační vír vtahuje nepřátele ke středu.",
      damage: "7 damage",
      effect: "Ztráta volného pohybu pro všechny v oblasti 10 m"
    },
    {
      level: 8,
      name: "Zeropoint Collapse",
      description: "Miniaturní gravitační singularita způsobí masivní kolaps.",
      damage: "8 damage",
      effect: "Aspekt *Rozdrcený gravitací* všem v oblasti 12 m. 1× za střet."
    }
  ]
};
const graviticControl = {
  name: "Gravitic Control",
  levels: [
    {
      level: 1,
      name: "Vibrující kov",
      description: "Přinutíš malý kovový předmět (např. dýku) lehce se pohnout.",
      damage: "0 damage",
      effect: "Můžeš narušit koncentraci nebo způsobit rozptylení – +1 na následující akci proti cíli."
    },
    {
      level: 2,
      name: "Gravitační šťouch",
      description: "Popostrčíš malý předmět směrem k cíli.",
      damage: "1 damage",
      effect: "Při zásahu způsobí drobnou ránu nebo rozptýlení. Možné použít k odhození malého předmětu na 3 m."
    },
    {
      level: 3,
      name: "Přitažení zbraně",
      description: "Ovládneš dýku nebo jiný drobný kovový předmět v dosahu 6 m.",
      damage: "2 damage",
      effect: "Přilétne k cíli, zasáhne a vytvoří aspekt *Zaskočen pohybem*."
    },
    {
      level: 4,
      name: "Vířivé čepele",
      description: "Roztočíš 2 kovové předměty a zaútočíš jimi současně.",
      damage: "2 damage každý (4 celkem)",
      effect: "Můžeš zacílit 2 různé cíle nebo jeden s výhodou. Aspekt *Nebezpečné střepiny*."
    },
    {
      level: 5,
      name: "Telekinetický hod",
      description: "Vržené čepele vystřelí k cíli s gravitačním zrychlením.",
      damage: "5 damage",
      effect: "Ignoruje běžnou obranu proti střelbě. Pokud zasáhne: cíl je *Vyveden z rovnováhy*."
    },
    {
      level: 6,
      name: "Taneční zbraně",
      description: "Udržuješ v pohybu 3 kovové předměty po dobu 3 kol.",
      damage: "3 damage za kolo (libovolný cíl v dosahu 6 m)",
      effect: "Můžeš měnit cíle a směr útoků. Aspekt *Letící ocel*."
    },
    {
      level: 7,
      name: "Gravitační vír čepelí",
      description: "Vytvoříš vír z rotujících zbraní, který pohltí oblast 5 m.",
      damage: "6 damage všem uvnitř",
      effect: "Aspekt *Krví smáčený vír*, účinky trvají 1 kolo po skončení útoku."
    },
    {
      level: 8,
      name: "Gravitační mistr",
      description: "Zcela ovládáš 5 kovových zbraní současně.",
      damage: "8 damage rozdělených mezi až 5 cílů",
      effect: "Zbraně ignorují obranu, mohou zůstávat ve vzduchu a blokovat útoky. 1× za střet."
    }
  ]
};

window.spells_gravity = [
  { id: "gravitonSnare", ...gravitonSnare },
  { id: "graviticControl", ...graviticControl }
];
