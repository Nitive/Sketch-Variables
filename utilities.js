String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.substring(1);
}
String.prototype.repeat= function(n){
    n= n || 1;
    return Array(n+1).join(this);
}

function colorFromText(text) {
  log(text)
  var alpha = 1
  if (text.match(/-\d{1,3}/)) {
    alpha = Math.min(parseInt(text.split('-')[1]) / 100, 1)
    text = text.split('-')[0]
  }
  if (text.match(/^#[\da-f]{3}(-\d{1,3})?$/i))
    text = '#' + text[1].repeat(2) + text[2].repeat(2) + text[3].repeat(2);
  return MSColor.colorWithNSColor(NSColor.colorWithHex_alpha(text, alpha));
}
