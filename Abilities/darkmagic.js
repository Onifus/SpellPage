 const veilOfIllusions = {
		name: "Veil of Illusions",
		levels: [
		  {
			level: 1,
			name: "Stínový klam",
			description: "Vytvoří krátkou iluzi (zvuk, siluetu), která zmate protivníka.",
			damage: "žádné",
			effect: "Aspekt *Zmatený* na 1 kolo (při neúspěchu testu Vnímání)"
		  },
		  {
			level: 2,
			name: "Dvojník",
			description: "Vytvoří iluzorní kopii jako obranu.",
			damage: "žádné",
			effect: "Aspekt *Iluzorní dvojník*, 50% šance zamezení zásahu (při neúspěchu testu)"
		  },
		  {
			level: 3,
			name: "Maska stínu",
			description: "Staneš se neviditelným ve stínech, pokud nezaútočíš.",
			damage: "žádné",
			effect: "Aspekt *Neviditelný v temnotě*"
		  },
		  {
			level: 4,
			name: "Bludiště iluzí",
			description: "Změníš okolní prostor iluzemi.",
			damage: "žádné",
			effect: "Ztráta akce (při neúspěchu Vnímání nebo Prozkoumání), trvání 3 kola"
		  },
		  {
			level: 5,
			name: "Řev stínů",
			description: "Iluze děsu paralyzuje okolí.",
			damage: "2 damage",
			effect: "Aspekt *Otřesený* na 2 kola (při neúspěchu testu Vůle)"
		  },
		  {
			level: 6,
			name: "Temné divadlo",
			description: "Komplexní iluze pro manipulaci nebo past.",
			damage: "žádné",
			effect: "Aspekt *Důvěryhodná iluze* nebo *Past klamu*"
		  },
		  {
			level: 7,
			name: "Zrcadlový svět",
			description: "Vtáhneš nepřátele do iluzorní dimenze.",
			damage: "žádné",
			effect: "Útoky proti tobě mají 50% šanci minout. Trvání 2 kola, vyžaduje koncentraci."
		  },
		  {
			level: 8,
			name: "Iluze skutečnosti",
			description: "Vytvoříš naprosto věrohodnou iluzi.",
			damage: "4 damage",
			effect: "Aspekt *Zlomená mysl* (při neúspěchu testu Vůle)"
		  }
		]
	  };
	  
 const shadowLance = {
		name: "Shadow Lance",
		levels: [
		  {
			level: 1,
			name: "Basic Shadow Lance",
			description: "Vytvoříš kopí z temné energie a mrštíš ho na cíl.",
			damage: "1 damage (+1, pokud cíl ve stínu nebo slabém světle)",
			effect: "žádný"
		  },
		  {
			level: 2,
			name: "Enhanced Shadow Lance",
			description: "Silnější kopí, které účinněji zasáhne cíl.",
			damage: "2 damage (+1, pokud cíl ve stínu nebo slabém světle)",
			effect: "žádný"
		  },
		  {
			level: 3,
			name: "Greater Shadow Lance",
			description: "Střela zasáhne více cílů.",
			damage: "3 damage (+1, pokud cíl ve stínu); průraz až na 2 další cíle v linii",
			effect: "žádný"
		  },
		  {
			level: 4,
			name: "Master Shadow Lance",
			description: "Kopí má vyšší destruktivní sílu.",
			damage: "4 damage (+1 ve stínu); průraz až na 3 další cíle",
			effect: "žádný"
		  },
		  {
			level: 5,
			name: "Shadow Lance: Shadow Mastery",
			description: "Zničující vlna temnoty míří kupředu.",
			damage: "5 damage (+1 ve stínu); průraz až na 4 cíle",
			effect: "žádný"
		  },
		  {
			level: 6,
			name: "Shadow Lance: Mastery Unleashed",
			description: "Nezastavitelná vlna temné síly.",
			damage: "6 damage (+1 ve stínu); průraz až na 5 cílů",
			effect: "žádný"
		  },
		  {
			level: 7,
			name: "Shadow Lance: Shadow Devastation",
			description: "Síla působí fyzické i mentální škody.",
			damage: "7 damage (+1 ve stínu); průraz až na 6 cílů",
			effect: "žádný"
		  },
		  {
			level: 8,
			name: "Shadow Lance: Apocalypse",
			description: "Ultimátní temná střela, pohlcující vše v cestě.",
			damage: "8 damage (+1 ve stínu); průraz až na 7 cílů",
			effect: "žádný"
		  }
		]

	  };
	  
	  
 const callFromDarkness = {
    name: "Call from the Darkness",
    levels: [
		  {
			level: 1,
			name: "Šeptající stín",
			description: "Cíl slyší zlověstné hlasy, které narušují jeho koncentraci.",
			damage: "1 damage",
			effect: "Aspekt *Rozrušený myslí* na 1 kolo (při neúspěchu v testu Vůle)"
		  },
		  {
			level: 2,
			name: "Temné doteky",
			description: "Stínové prsty se natahují k mysli cíle a narušují ji.",
			damage: "2 damage",
			effect: "Aspekt *Neviditelné škrábance* (může být využit pro budoucí útoky)"
		  },
		  {
			level: 3,
			name: "Stínové šeptání",
			description: "Přízrak útočí na myšlenky několika nepřátel najednou.",
			damage: "3 damage každému cíli (max 2 cíle)",
			effect: "žádný (při neúspěchu v testu Vůle)"
		  },
		  {
			level: 4,
			name: "Zvolání z temnot",
			description: "Temný přízrak pronásleduje cíl a útočí na jeho mysl.",
			damage: "4 damage při každém neúspěšném hodu Vůle",
			effect: "Aspekt *Sleduje mě to…*, trvá 3 kola"
		  },
		  {
			level: 5,
			name: "Přízraky zoufalství",
			description: "Tři přízraky napadají mysl všech v okolí.",
			damage: "5 damage každému v okruhu 6 m (při neúspěchu v testu Vůle)",
			effect: "Aspekt *Duševní zlomení*"
		  },
		  {
			level: 6,
			name: "Hlas Prázdnoty",
			description: "Přízračný hlas zahltí mysl cíle a naruší jeho schopnosti.",
			damage: "6 damage",
			effect: "Cíl nemůže 1 kolo používat aspekty, trvá 2 kola"
		  },
		  {
			level: 7,
			name: "Pochod duchů",
			description: "Zástup přízraků přechází bojištěm a napadá mysl všech.",
			damage: "7 damage všem v oblasti 10 m (při neúspěchu v testu Vůle)",
			effect: "Aspekt *Hroutící se mysl*"
		  },
		  {
			level: 8,
			name: "Stínová invokace",
			description: "Bytost z temnoty vstoupí do mysli cíle a převezme kontrolu.",
			damage: "8 damage (při neúspěchu v testu Vůle)",
			effect: "Cíl na 1 kolo ztrácí kontrolu nad postavou, 1× za střet"
		  }
		]

  };
  
  const voidRift = {
  name: "Void Rift",
 levels: [
  {
    level: 1,
    name: "Stínový prasklin",
    description: "Malý portál nad rukou vystřelí jeden stínový šíp.",
    damage: "1 damage",
    effect: "Přesnost +1. Trvá 1 kolo."
  },
  {
    level: 2,
    name: "Záblesk prázdnoty",
    description: "Portál vystřelí 2 projektily.",
    damage: "1 damage každý (2 damage celkem)",
    effect: "Lze mířit na různé cíle."
  },
  {
    level: 3,
    name: "Stabilní trhlina",
    description: "Portál vydrží déle a vystřeluje projektily opakovaně.",
    damage: "2 damage za kolo (2 kola)",
    effect: "Lze jednou za trvání upravit směr střelby."
  },
  {
    level: 4,
    name: "Stínová salva",
    description: "Portál vyšle sérii projektilů.",
    damage: "3 damage za kolo",
    effect: "Může přerušit koncentrovaný útok nepřítele."
  },
  {
    level: 5,
    name: "Volně plovoucí trhlina",
    description: "Portál lze otevřít vzdáleně.",
    damage: "4 damage celkem",
    effect: "Lze vytvořit až 5 m od uživatele. Trvá více kol."
  },
  {
    level: 6,
    name: "Rozšířená stínová brána",
    description: "Trhlina se zvětšuje a pohybuje.",
    damage: "5 damage za kolo",
    effect: "Působí v oblasti 6 m. Trvá 2 kola."
  },
  {
    level: 7,
    name: "Dimenzionální rozervání",
    description: "Portál trhá strukturu reality.",
    damage: "6 damage/portal",
    effect: "Aspekt *Roztržená struktura*. Může být aktivní 2 portály zároveň (1× za scénu)."
  },
  {
    level: 8,
    name: "Nicota probuzená",
    description: "Masivní portál způsobující extrémní destrukci.",
    damage: "20(rozdělené mezi cíle)",
    effect: "Každý v oblasti hází na Vůli, jinak získá aspekt *Zírám do nicoty*. 1× za střet."
  }
]

};
const boneWings = {
  name: "Bone Wings",
  levels: [
	  {
		level: 1,
		name: "Stínový záškub",
		description: "Na zádech se na okamžik objeví kostěné křídlo.",
		damage: "žádné",
		effect: "+1 k zastrašení nebo úhybu před útokem. Efekt trvá 1 akci."
	  },
	  {
		level: 2,
		name: "Obrana z kostí",
		description: "Křídla na chvíli ztvrdnou a odkloní slabší útok.",
		damage: "-1 damage (projektil/magie)",
		effect: "1× za střet lze zrušit 1 damage z dálkového nebo magického útoku"
	  },
	  {
		level: 3,
		name: "Temné roztažení",
		description: "Křídla se plně zformují a pomáhají v boji.",
		damage: "žádné",
		effect: "Rychlý přesun o 2 m nebo aspekt *Kostěný štít*"
	  },
	  {
		level: 4,
		name: "Ohnivzdorná křídla",
		description: "Kostěná křídla slouží jako obranná bariéra proti projektilům.",
		damage: "-2 damage (dálkový útok)",
		effect: "2× za scénu lze snížit útok z dálky o 2 damage. Trvá 2 kola"
	  },
	  {
		level: 5,
		name: "Základní vzlet",
		description: "Umožňuje krátký let do výšky.",
		damage: "žádné",
		effect: "Vzlet do výšky 2–3 m na 1 kolo. Možnost překvapit nebo se vyhnout útoku zblízka"
	  },
	  {
		level: 6,
		name: "Kostěný přelet",
		description: "Plně funkční let na několik kol.",
		damage: "žádné",
		effect: "Let až 5 kol. Výhoda při útocích shora, vyhýbání se pozemním efektům"
	  },
	  {
		level: 7,
		name: "Ochranný kokon",
		description: "Křídla se kolem tebe zformují do neproniknutelného štítu.",
		damage: "žádné",
		effect: "Ignoruješ 1 celý útok. Aspekt *Kostěná pevnost* na 1 kolo"
	  },
	  {
		level: 8,
		name: "Temný Archanděl",
		description: "Získáváš monumentální černá křídla s mocí vládnout vzduchu.",
		damage: "žádné",
		effect: "Let po dobu 10 minut, možnost blokovat útok (1× za kolo), zastrašit. Automatický aspekt *Pán nebes temnoty*"
	  }
	]

};

const phantomPhase = {
  name: "Phantom Phase",
  levels: [
    {
  level: 1,
  name: "Potlačená přítomnost",
  description: "Uživatel potlačí svou magickou auru, čímž se stává obtížně detekovatelným pro magické senzory a kouzla.",
  damage: "0",
  effect: "Aspekt *Zatemněná aura* (nelze detekovat magickými prostředky po dobu 1 kola)"
	},
    {
      level: 2,
      name: "Fázové kmitání",
      description: "Tvá forma lehce vibruje mezi světy. Slabší vnímání tě nepostřehne.",
      damage: "0",
      effect: "Aspekt *Rozostřený obraz* (nepřítel potřebuje úspěšný test Vnímání ke zjištění tvé polohy)"
    },
    {
      level: 3,
      name: "Narušení reality",
      description: "Na krátkou chvíli vstoupíš do paralelní roviny. Můžeš projít skrze tenkou překážku.",
      damage: "0",
      effect: "Možnost jednou projít skrze stěnu / ztratit přímý dohled. + aspekt *Mimo dosah* na 1 kolo"
    },
    {
      level: 4,
      name: "Stín mezi světy",
      description: "Částečně se stáváš nehmotným, útoky proti tobě mají 50% šanci minout.",
      damage: "0",
      effect: "Aspekt *Fázová existence* – test Útoku proti tobě má -2"
    },
    {
      level: 5,
      name: "Přechodový vír",
      description: "Můžeš se na 1 kolo přesunout do paralelní dimenze a stát se zcela neviditelným.",
      damage: "0",
      effect: "Cíl tě nemůže zacílit ani sledovat. Návrat na stejné místo."
    },
    {
      level: 6,
      name: "Polorealita",
      description: "Pohybuješ se v mezeře mezi světy. Během 2 kol tě nelze zasáhnout běžnými zbraněmi.",
      damage: "0",
      effect: "Získáváš aspekt *Mimo čas a prostor* – odolnost vůči běžným útokům"
    },
    {
      level: 7,
      name: "Temná dimenze",
      description: "Dočasně vstoupíš do jiné roviny. Získáváš volný pohyb skrze překážky.",
      damage: "0",
      effect: "3 kola v jiné dimenzi. Vracej se zpět jen při vlastní vůli. Neviditelný."
    },
    {
      level: 8,
      name: "Jedna noha v nicotě",
      description: "Stáváš se tvorem mezi světy. 1× za střet můžeš aktivně *zmizet* na 2 kola.",
      damage: "0",
      effect: "Plná fázová neviditelnost + možnost libovolného návratu. Imunní vůči fyzickým útokům."
    }
  ]
};

  
window.spells_dark = [
  { id: "veilOfIllusions", ...veilOfIllusions },
  { id: "shadowLance", ...shadowLance },
  { id: "callFromDarkness", ...callFromDarkness },
  { id: "voidRift", ...voidRift },
  { id: "boneWings", ...boneWings },
  { id: "phantomPhase", ...phantomPhase }
];
