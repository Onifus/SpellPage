(function () {
  const spellListContainer = document.getElementById("spellList");
  const spellModal = document.getElementById("spellModal");

  const spellIcon = document.getElementById("spellIcon"); // Ikona může být null
  const spellTitle = document.getElementById("spellTitle");
  const spellLevel = document.getElementById("spellLevel");
  const spellDescription = document.getElementById("spellDescription");

  let currentSpell = null;
  let currentLevel = 0;

  const allSpells =
    window.spells_necromancy ||
    window.spells_dark ||
    window.spells_gravity ||
    window.spells_lightning ||
    [];

  const spells = {};
  allSpells.forEach((spell) => {
    spells[spell.id] = spell;
  });

  function openSpell(id) {
    currentSpell = spells[id];
    currentLevel = 0;
    updateModal();
    spellModal.style.display = "block";
  }

  function closeModal() {
    spellModal.style.display = "none";
  }

  function updateModal() {
    const levelData = currentSpell.levels[currentLevel];

    if (spellIcon && currentSpell.iconLevels) {
      spellIcon.src = currentSpell.iconLevels[currentLevel] || "";
      spellIcon.style.display = "block";
    } else if (spellIcon) {
      spellIcon.style.display = "none";
    }

    spellLevel.textContent = "Level " + levelData.level;
    spellTitle.textContent = levelData.name;

    const descHTML = `
      <div class="detail-section">
        <span class="detail-label">Popis:</span><br>${levelData.description}
      </div>
      <div class="detail-section">
        <span class="detail-label">Poškození:</span> <span class="damage">${levelData.damage || "žádné"}</span>
      </div>
      <div class="detail-section">
        <span class="detail-label">Efekt:</span> <span class="effect">${highlightAspects(
          levelData.effect || "žádný"
        )}</span>
      </div>
    `;

    spellDescription.innerHTML = descHTML;
  }

  function highlightAspects(text) {
    return text.replace(/\*([^*]+)\*/g, (match, aspectName) => {
      const tooltip = getAspectTooltip(aspectName.trim());
      return `<span class="tooltip">${aspectName}<span class="tooltiptext">${tooltip}</span></span>`;
    });
  }

  function getAspectTooltip(name) {
    return window.aspectInfo?.[name] || "Popis aspektu není dostupný.";
  }

  function prevLevel() {
    if (currentLevel > 0) {
      currentLevel--;
      updateModal();
    }
  }

  function nextLevel() {
    if (currentLevel < currentSpell.levels.length - 1) {
      currentLevel++;
      updateModal();
    }
  }

  window.openSpell = openSpell;
  window.closeModal = closeModal;
  window.prevLevel = prevLevel;
  window.nextLevel = nextLevel;

  window.onclick = function (event) {
    if (event.target === spellModal) {
      closeModal();
    }
  };

  allSpells.forEach((spell) => {
    const spellDiv = document.createElement("div");
    spellDiv.className = "spell";
    spellDiv.onclick = () => openSpell(spell.id);

    // Vloží ikonu pouze pokud existuje
    if (spell.iconLevels && spell.iconLevels[0]) {
      const icon = document.createElement("img");
      icon.src = spell.iconLevels[0];
      icon.alt = spell.name;
      spellDiv.appendChild(icon);
    }

    const title = document.createElement("h3");
    title.textContent = spell.name;

    const desc = document.createElement("p");
    desc.textContent = spell.levels[0].name;

    spellDiv.appendChild(title);
    spellDiv.appendChild(desc);

    spellListContainer.appendChild(spellDiv);
  });
})();
