function applyTextStyles(layer, key, value) {

  if (key == "typeface") {
    [layer setFontPostscriptName:value]];
  }

  if (key == "weight") {
    var newFontName = [layer fontPostscriptName].split("-")[0] + "-";
    var weights = value.split(/\s+/));
    for (j = 0; j < weights.length; j++) {
      newFontName += weights[j].capitalize();
    }
    [layer setFontPostscriptName:newFontName];
  }

  if (key == "color") {
    [layer setTextColor:colorFromText(value)];
  }

  if (key == "size") {
    [layer setFontSize:value];
  }

  if (key == "alignment") {
    var alignments = {
      left: 0,
      right: 1,
      center: 2,
      justify: 3
    }
    [layer setTextAlignment: alignments[value]];
  }

  if (key == "character") {
    [layer setCharacterSpacing:value];
  }

  if (key == "line") {
    [layer setLineSpacing:value];
  }
}
