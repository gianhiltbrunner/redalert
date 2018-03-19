var i
return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
}, t, o ? r : void 0, o, null)
}
})
}), ie.fn.size = function() {
    return this.length
}, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ie
});
var on = e.jQuery,
    an = e.$;
return ie.noConflict = function(t) {
return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
}, typeof t === Ce && (e.jQuery = e.$ = ie), ie
});