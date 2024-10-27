var _ = function (t) {
  return document.getElementById(t);
};
function ce(t, e, n, o) {
  var r;
  return (
    o
      ? ((r = document.createElement("input")).setAttribute("type", t),
        r.setAttribute("value", n))
      : ((r = document.createElement(t)).innerHTML = n),
    (r.id = e),
    r
  );
}
function setClass(t, e) {
  _(t).setAttribute("class", e);
}
(Array.prototype._forEach = function (t) {
  var e = this.length;
  if ("function" != typeof t) throw TypeError();
  for (var n = arguments[1], o = e; o > 0; o--)
    o in this && t.call(n, this[o], o, this);
}),
  Array.prototype.forEach ||
    (Array.prototype.forEach = function (t) {
      if (void 0 === this || this === null) throw TypeError();
      var e = Object(this),
        n = e.length >>> 0;
      if ("function" != typeof t) throw TypeError();
      for (var o = arguments[1], r = 0; r < n; r++)
        r in e && t.call(o, e[r], r, e);
    }),
  (Object.prototype.addEvent = function (t, e) {
    this.addEventListener
      ? this.addEventListener(t, e, !1)
      : this.attachEvent && this.attachEvent("on" + t, e);
  }),
  (Object.prototype.clone = function () {
    var t = this instanceof Array ? [] : {};
    for (i in this)
      "clone" != i &&
        (this[i] && "object" == typeof this[i]
          ? (t[i] = this[i].clone())
          : (t[i] = this[i]));
    return t;
  });
