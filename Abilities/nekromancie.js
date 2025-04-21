const raiseUndead = {
  name: "Raise the Dead",
  levels: [
    {
      level: 1,
      name: "Kostlivá ruka",
      description: "Vytvoříš jednu kostlivou paži, která se vynoří ze země a chytí nohu nepřítele.",
      damage: "0 damage",
      effect: "Aspekt *Zadržován mrtvými* na 1 kolo (test Obratnosti)."
    },
    {
      level: 2,
      name: "Povolání kostlivce",
      description: "Oživíš jednoduchého kostlivce, který tě poslouchá 3 kola.",
      damage: "1 damage ",
      effect: "Může bránit nebo útočit."
    },
    {
      level: 3,
      name: "Dvojitá exhumace",
      description: "Oživíš 2 kostlivce nebo jednoho zombie.",
      damage: "1 damage (celkem 2) / 2 damage",
      effect: "Zombie může zadržet nepřítele, vydrží 4 kola."
    },
    {
      level: 4,
      name: "Pochod mrtvých",
      description: "Vyvoláš až 3 kostlivce z blízkého hřbitova.",
      damage: "1 damage (celkem 3)",
      effect: "Aspekt *Hrozivý pochod*."
    },
    {
      level: 5,
      name: "Mistři hrobů",
      description: "Oživíš silného rytíře smrti.",
      damage: "4 damage",
      effect: "Aspekt *Hrůzostrašný přítel*, odstraší slabší bytosti. Trvá 3 kola."
    },
    {
      level: 6,
      name: "Armáda bezduchých",
      description: "Země praská a vylézá až 6 kostlivců.",
      damage: "1 damage (celkem 6)",
      effect: "Aspekt *Záplava těl* (znepřehlednění boje). Trvají 2 kola."
    },
    {
      level: 7,
      name: "Kletba oživení",
      description: "Každý poražený nepřítel v oblasti má šanci vstát jako nemrtvý pod tvou kontrolou.",
      damage: "0 damage",
      effect: "Koncentrace, trvá 3 kola."
    },
    {
      level: 8,
      name: "Smrtící legie",
      description: "Oživíš silnou legii nemrtvých (10+ stínových válečníků).",
      damage: "1 damage (celkem 20+)",
      effect: "Aspekt *Nezastavitelná masa*, trvá 2 kola. 1× za střet."
    }
  ]
};

window.spells_necromancy = [
  { id: "raiseUndead", ...raiseUndead }
];
