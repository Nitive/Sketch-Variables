String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.substring(1);
}

function colorFromText(text) {
  return MSColor.colorWithNSColor(NSColor.colorWithHex(text));
}
