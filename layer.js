var modes = {
  "normal": 0,
  "darken": 1,
  "multiply": 2,
  "colorburn": 3,
  "lighten": 4,
  "screen": 5,
  "colordodge": 6,
  "overlay": 7,
  "softlight": 8,
  "hardlight": 9,
  "difference": 10,
  "exclusion": 11,
  "hue": 12,
  "saturation": 13,
  "color": 14,
  "luminosity": 15,
  "sourcein": 16,
  "sourceout": 17,
  "sourceatop": 18,
  "destinationover": 19,
  "destinationin": 20,
  "destinationout": 21,
  "destinationatop": 22
}

function applyLayerStyles(layer, key, value) {
  if (key == "fill") {
    var values = value.split(/\s+/);
    var color = value.match(/#[\da-fA-F]{0,6}/)[0];
    var modeMatches = value.match(/ [\w ]+( |$)/);
    var modeName = modeMatches ? modeMatches[0].toLowerCase().replace(/ /g, "") : "normal";
    var blendMode = modes[modeName];
    var opacityMatches = value.match(/ \d+/);
    var opacity = opacityMatches ? parseInt(opacityMatches[0].trim()) / 100 : 1;

    var context = [MSGraphicsContextSettings new];
    // It doesn't work correctly I don't know why
    // [context setOpacity:opacity];
    [context setBlendMode:blendMode];

    var fills = [[layer style] fills];
    if ([fills count] > 0) {
      if (value.indexOf("no-replace") != -1) return
      var fill = [fills objectAtIndex:0];
    } else {
      if (value.indexOf("no-add") != -1) return
      var fill = [MSStyleFill new];
      [fills addObject:fill];
    }
    [fill setColor:colorFromText(color)];
    [fill setContextSettings:context];
  }
  if (key == "x") {
    [[layer frame] setX:value];
  }
  if (key == "y") {
    [[layer frame] setY:value];
  }
  if (key == "width") {
    [[layer frame] setWidth:value];
  }
  if (key == "height") {
    [[layer frame] setHeight:value];
  }
  if (key == "opacity") {
    [[[layer style] contextSettings] setOpacity:parseFloat(value) / 100];
  }
  if (key == "blending") {
    var blendMode = modes[value.toLowerCase().replace(/ /g, "")] || "normal";
    [[[layer style] contextSettings] setBlendMode: blendMode];
  }
}
