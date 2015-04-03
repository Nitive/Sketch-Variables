String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.substring(1);
}
String.prototype.repeat= function(n){
    n= n || 1;
    return Array(n+1).join(this);
}

function lg(msg, title) {
  title = (title || "");
  if (title != "") title += ": ";
  NSLog("%@%@", title, msg);
}

function colorFromText(text) {
  if (text.match(/^#[\da-f]{3}$/i))
    text = '#' + text[1].repeat(2) + text[2].repeat(2) + text[3].repeat(2);
  return MSColor.colorWithNSColor(NSColor.colorWithHex(text));
}
