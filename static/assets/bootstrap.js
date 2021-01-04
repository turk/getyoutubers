if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            a = o.attr("data-target");
        a || (a = o.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === a ? [] : a);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                a = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, a)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            a = i.data();
        e += "Text", null == a.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == a[e] ? this.options[e] : a[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : a.slide;
            o || i.data("bs.carousel", o = new n(this, a)), "number" == typeof e ? o.to(e) : r ? o[r]() : a.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            a = (n + o) % this.$items.length;
        return this.$items.eq(a)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            a = i || this.getItemForDirection(e, o),
            r = this.interval,
            s = "next" == e ? "left" : "right",
            l = this;
        if (a.hasClass("active")) return this.sliding = !1;
        var u = a[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(a)]);
                h && h.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, o.addClass(s), a.addClass(s), o.one("bsTransitionEnd", function() {
                a.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(c)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            a = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (a.hasClass("carousel")) {
            var r = t.extend({}, a.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (r.interval = !1), e.call(a, r), s && a.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(a).each(function() {
            var i = t(this),
                o = e(i),
                a = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", a)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        a = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.7", r.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var a = e(o),
                r = a.hasClass("open");
            if (n(), !r) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (a.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    r = o.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && o.find(a).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, r.prototype.toggle).on("keydown.bs.dropdown.data-api", a, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                a = o.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            a || o.data("bs.modal", a = new n(this, r)), "string" == typeof e ? a[e](i) : r.show && a.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var a = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(a)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            a = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = a.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, a.data(), i.data());
        i.is("a") && n.preventDefault(), a.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(a, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                a = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, a)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), a = o.length; a--;) {
            var r = o[a];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var s = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                a = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), a.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && a.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(s);
            u && (s = s.replace(l, "") || "top"), a.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                h = a[0].offsetWidth,
                c = a[0].offsetHeight;
            if (u) {
                var f = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && d.bottom + c > p.bottom ? "top" : "top" == s && d.top - c < p.top ? "bottom" : "right" == s && d.right + h > p.width ? "left" : "left" == s && d.left - h < p.left ? "right" : s, a.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, d, h, c);
            this.applyPlacement(g, s);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            a = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(s) && (s = 0), e.top += r, e.left += s, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != a && (e.top = e.top + a - u);
        var d = this.getViewportAdjustedDelta(n, e, l, u);
        d.left ? e.left += d.left : e.top += d.top;
        var h = /top|bottom/.test(n),
            c = h ? 2 * d.left - o + l : 2 * d.top - a + u,
            f = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(c, i[0][f], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && a.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            a = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var a = window.SVGElement && n instanceof window.SVGElement,
            r = i ? {
                top: 0,
                left: 0
            } : a ? null : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, l, r)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - a - r.scroll,
                l = e.top + a - r.scroll + i;
            s < r.top ? o.top = r.top - s : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var u = e.left - a,
                d = e.left + a + n;
            u < r.left ? o.left = r.left - u : d > r.right && (o.left = r.left + r.width - d)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                a = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, a)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                a = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(a), e.trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function a() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = i.find("> .active"),
            s = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                a = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, a)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            a = this.$element.offset(),
            r = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= a.top) && "bottom" : !(t - i >= o + r) && "bottom";
        var s = null == this.affixed,
            l = s ? o : a.top,
            u = s ? r : e;
        return null != n && n >= o ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                a = i.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (a = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof a && (a = i.bottom(this.$element));
            var s = this.getState(r, e, o, a);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: r - e - a
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && a.toggle && /show|hide/.test(e) && (a.toggle = !1), o || n.data("bs.collapse", o = new i(this, a)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var a = t.Event("show.bs.collapse");
                if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var a = e(o),
            r = a.data("bs.collapse"),
            s = r ? "toggle" : o.data();
        n.call(a, s)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                a = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, a)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                a = /^#./.test(o) && t(o);
            return a && a.length && a.is(":visible") && [
                [a[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            a = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = a[a.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != a[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(a[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
    }
}(function() {
    var t;
    return function() {
        function t(e, n, i) {
            function o(r, s) {
                if (!n[r]) {
                    if (!e[r]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(r, !0);
                        if (a) return a(r, !0);
                        var u = new Error("Cannot find module '" + r + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = n[r] = {
                        exports: {}
                    };
                    e[r][0].call(d.exports, function(t) {
                        var n = e[r][1][t];
                        return o(n ? n : t)
                    }, d, d.exports, t, e, n, i)
                }
                return n[r].exports
            }
            for (var a = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
            return o
        }
        return t
    }()({
        1: [function(t, e) {
            function n(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/i,
                        n = /^#([a-fA-F0-9]{6})$/i,
                        i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                        o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                        a = /(\w+)/,
                        r = [0, 0, 0],
                        s = 1,
                        l = t.match(e);
                    if (l) {
                        l = l[1];
                        for (var u = 0; u < r.length; u++) r[u] = parseInt(l[u] + l[u], 16)
                    } else if (l = t.match(n)) {
                        l = l[1];
                        for (var u = 0; u < r.length; u++) r[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
                    } else if (l = t.match(i)) {
                        for (var u = 0; u < r.length; u++) r[u] = parseInt(l[u + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(o)) {
                        for (var u = 0; u < r.length; u++) r[u] = Math.round(2.55 * parseFloat(l[u + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(a)) {
                        if ("transparent" == l[1]) return [0, 0, 0, 0];
                        if (r = b[l[1]], !r) return
                    }
                    for (var u = 0; u < r.length; u++) r[u] = v(r[u], 0, 255);
                    return s = s || 0 == s ? v(s, 0, 1) : 1, r[3] = s, r
                }
            }

            function i(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]),
                            o = v(parseInt(n[1]), 0, 360),
                            a = v(parseFloat(n[2]), 0, 100),
                            r = v(parseFloat(n[3]), 0, 100),
                            s = v(isNaN(i) ? 1 : i, 0, 1);
                        return [o, a, r, s]
                    }
                }
            }

            function o(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]),
                            o = v(parseInt(n[1]), 0, 360),
                            a = v(parseFloat(n[2]), 0, 100),
                            r = v(parseFloat(n[3]), 0, 100),
                            s = v(isNaN(i) ? 1 : i, 0, 1);
                        return [o, a, r, s]
                    }
                }
            }

            function a(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }

            function r(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }

            function s(t) {
                var e = n(t);
                return e ? e[3] : (e = i(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
            }

            function l(t) {
                return "#" + y(t[0]) + y(t[1]) + y(t[2])
            }

            function u(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? d(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }

            function d(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function h(t, e) {
                if (e < 1 || t[3] && t[3] < 1) return c(t, e);
                var n = Math.round(t[0] / 255 * 100),
                    i = Math.round(t[1] / 255 * 100),
                    o = Math.round(t[2] / 255 * 100);
                return "rgb(" + n + "%, " + i + "%, " + o + "%)"
            }

            function c(t, e) {
                var n = Math.round(t[0] / 255 * 100),
                    i = Math.round(t[1] / 255 * 100),
                    o = Math.round(t[2] / 255 * 100);
                return "rgba(" + n + "%, " + i + "%, " + o + "%, " + (e || t[3] || 1) + ")"
            }

            function f(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }

            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function g(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }

            function m(t) {
                return x[t.slice(0, 3)]
            }

            function v(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function y(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var b = t(5);
            e.exports = {
                getRgba: n,
                getHsla: i,
                getRgb: a,
                getHsl: r,
                getHwb: o,
                getAlpha: s,
                hexString: l,
                rgbString: u,
                rgbaString: d,
                percentString: h,
                percentaString: c,
                hslString: f,
                hslaString: p,
                hwbString: g,
                keyword: m
            };
            var x = {};
            for (var w in b) x[b[w]] = w
        }, {
            5: 5
        }],
        2: [function(t, e) {
            var n = t(4),
                i = t(1),
                o = function(t) {
                    if (t instanceof o) return t;
                    if (!(this instanceof o)) return new o(t);
                    this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    };
                    var e;
                    "string" == typeof t ? (e = i.getRgba(t), e ? this.setValues("rgb", e) : (e = i.getHsla(t)) ? this.setValues("hsl", e) : (e = i.getHwb(t)) && this.setValues("hwb", e)) : "object" == typeof t && (e = t, void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e))
                };
            o.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return i.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return i.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return i.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return i.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return i.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return i.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return i.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return i.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        n = t.luminosity();
                    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb,
                        e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return e < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        n = (e[0] + t) % 360;
                    return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var n = this,
                        i = t,
                        o = void 0 === e ? .5 : e,
                        a = 2 * o - 1,
                        r = n.alpha() - i.alpha(),
                        s = ((a * r === -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * o + i.alpha() * (1 - o))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, n = new o,
                        i = this.values,
                        a = n.values;
                    for (var r in i) i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
                    return n
                }
            }, o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, o.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, o.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, o.prototype.setValues = function(t, e) {
                var i, o = this.values,
                    a = this.spaces,
                    r = this.maxes,
                    s = 1;
                if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) o[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                    s = e.a
                } else if (void 0 !== e[a[t][0]]) {
                    var l = a[t];
                    for (i = 0; i < t.length; i++) o[t][i] = e[l[i]];
                    s = e.alpha
                }
                if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t) return !1;
                var u;
                for (i = 0; i < t.length; i++) u = Math.max(0, Math.min(r[t][i], o[t][i])), o[t][i] = Math.round(u);
                for (var d in a) d !== t && (o[d] = n[t][d](o[t]));
                return !0
            }, o.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, o.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
            }, "undefined" != typeof window && (window.Color = o), e.exports = o
        }, {
            1: 1,
            4: 4
        }],
        3: [function(t, e) {
            function n(t) {
                var e, n, i, o = t[0] / 255,
                    a = t[1] / 255,
                    r = t[2] / 255,
                    s = Math.min(o, a, r),
                    l = Math.max(o, a, r),
                    u = l - s;
                return l == s ? e = 0 : o == l ? e = (a - r) / u : a == l ? e = 2 + (r - o) / u : r == l && (e = 4 + (o - a) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = (s + l) / 2, n = l == s ? 0 : i <= .5 ? u / (l + s) : u / (2 - l - s), [e, 100 * n, 100 * i]
            }

            function i(t) {
                var e, n, i, o = t[0],
                    a = t[1],
                    r = t[2],
                    s = Math.min(o, a, r),
                    l = Math.max(o, a, r),
                    u = l - s;
                return n = 0 == l ? 0 : u / l * 1e3 / 10, l == s ? e = 0 : o == l ? e = (a - r) / u : a == l ? e = 2 + (r - o) / u : r == l && (e = 4 + (o - a) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = l / 255 * 1e3 / 10, [e, n, i]
            }

            function o(t) {
                var e = t[0],
                    i = t[1],
                    o = t[2],
                    a = n(t)[0],
                    r = 1 / 255 * Math.min(e, Math.min(i, o)),
                    o = 1 - 1 / 255 * Math.max(e, Math.max(i, o));
                return [a, 100 * r, 100 * o]
            }

            function a(t) {
                var e, n, i, o, a = t[0] / 255,
                    r = t[1] / 255,
                    s = t[2] / 255;
                return o = Math.min(1 - a, 1 - r, 1 - s), e = (1 - a - o) / (1 - o) || 0, n = (1 - r - o) / (1 - o) || 0, i = (1 - s - o) / (1 - o) || 0, [100 * e, 100 * n, 100 * i, 100 * o]
            }

            function s(t) {
                return Q[JSON.stringify(t)]
            }

            function l(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
                var o = .4124 * e + .3576 * n + .1805 * i,
                    a = .2126 * e + .7152 * n + .0722 * i,
                    r = .0193 * e + .1192 * n + .9505 * i;
                return [100 * o, 100 * a, 100 * r]
            }

            function u(t) {
                var e, n, i, o = l(t),
                    a = o[0],
                    r = o[1],
                    s = o[2];
                return a /= 95.047, r /= 100, s /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, n = 500 * (a - r), i = 200 * (r - s), [e, n, i]
            }

            function d(t) {
                return W(u(t))
            }

            function h(t) {
                var e, n, i, o, a, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return a = 255 * l, [a, a, a];
                n = l < .5 ? l * (1 + s) : l + s - l * s, e = 2 * l - n, o = [0, 0, 0];
                for (var u = 0; u < 3; u++) i = r + 1 / 3 * -(u - 1), i < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, o[u] = 255 * a;
                return o
            }

            function c(t) {
                var e, n, i = t[0],
                    o = t[1] / 100,
                    a = t[2] / 100;
                return 0 === a ? [0, 0, 0] : (a *= 2, o *= a <= 1 ? a : 2 - a, n = (a + o) / 2, e = 2 * o / (a + o), [i, 100 * e, 100 * n])
            }

            function f(t) {
                return o(h(t))
            }

            function p(t) {
                return a(h(t))
            }

            function m(t) {
                return s(h(t))
            }

            function v(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    o = Math.floor(e) % 6,
                    a = e - Math.floor(e),
                    r = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * a),
                    l = 255 * i * (1 - n * (1 - a)),
                    i = 255 * i;
                switch (o) {
                    case 0:
                        return [i, l, r];
                    case 1:
                        return [s, i, r];
                    case 2:
                        return [r, i, l];
                    case 3:
                        return [r, s, i];
                    case 4:
                        return [l, r, i];
                    case 5:
                        return [i, r, s]
                }
            }

            function y(t) {
                var e, n, i = t[0],
                    o = t[1] / 100,
                    a = t[2] / 100;
                return n = (2 - o) * a, e = o * a, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n]
            }

            function x(t) {
                return o(v(t))
            }

            function w(t) {
                return a(v(t))
            }

            function _(t) {
                return s(v(t))
            }

            function k(t) {
                var e, n, i, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (u > 1 && (s /= u, l /= u), e = Math.floor(6 * a), n = 1 - l, i = 6 * a - e, 0 != (1 & e) && (i = 1 - i), o = s + i * (n - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = n,
                    g = o,
                    b = s;
                    break;
                    case 1:
                            r = o,
                        g = n,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = n,
                        b = o;
                        break;
                    case 3:
                            r = s,
                        g = o,
                        b = n;
                        break;
                    case 4:
                            r = o,
                        g = s,
                        b = n;
                        break;
                    case 5:
                            r = n,
                        g = s,
                        b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function S(t) {
                return n(k(t))
            }

            function M(t) {
                return i(k(t))
            }

            function D(t) {
                return a(k(t))
            }

            function C(t) {
                return s(k(t))
            }

            function T(t) {
                var e, n, i, o = t[0] / 100,
                    a = t[1] / 100,
                    r = t[2] / 100,
                    s = t[3] / 100;
                return e = 1 - Math.min(1, o * (1 - s) + s), n = 1 - Math.min(1, a * (1 - s) + s), i = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * n, 255 * i]
            }

            function P(t) {
                return n(T(t))
            }

            function I(t) {
                return i(T(t))
            }

            function O(t) {
                return o(T(t))
            }

            function A(t) {
                return s(T(t))
            }

            function F(t) {
                var e, n, i, o = t[0] / 100,
                    a = t[1] / 100,
                    r = t[2] / 100;
                return e = 3.2406 * o + a * -1.5372 + r * -.4986, n = o * -.9689 + 1.8758 * a + .0415 * r, i = .0557 * o + a * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i]
            }

            function R(t) {
                var e, n, i, o = t[0],
                    a = t[1],
                    r = t[2];
                return o /= 95.047, a /= 100, r /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * a - 16, n = 500 * (o - a), i = 200 * (a - r), [e, n, i]
            }

            function L(t) {
                return W(R(t))
            }

            function N(t) {
                var e, n, i, o, a = t[0],
                    r = t[1],
                    s = t[2];
                return a <= 8 ? (n = 100 * a / 903.3, o = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((a + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + o, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3), [e, n, i]
            }

            function W(t) {
                var e, n, i, o = t[0],
                    a = t[1],
                    r = t[2];
                return e = Math.atan2(r, a), n = 360 * e / 2 / Math.PI, n < 0 && (n += 360), i = Math.sqrt(a * a + r * r), [o, i, n]
            }

            function E(t) {
                return F(N(t))
            }

            function Y(t) {
                var e, n, i, o = t[0],
                    a = t[1],
                    r = t[2];
                return i = r / 360 * 2 * Math.PI, e = a * Math.cos(i), n = a * Math.sin(i), [o, e, n]
            }

            function z(t) {
                return N(Y(t))
            }

            function H(t) {
                return E(Y(t))
            }

            function B(t) {
                return Z[t]
            }

            function V(t) {
                return n(B(t))
            }

            function $(t) {
                return i(B(t))
            }

            function j(t) {
                return o(B(t))
            }

            function U(t) {
                return a(B(t))
            }

            function q(t) {
                return u(B(t))
            }

            function G(t) {
                return l(B(t))
            }
            e.exports = {
                rgb2hsl: n,
                rgb2hsv: i,
                rgb2hwb: o,
                rgb2cmyk: a,
                rgb2keyword: s,
                rgb2xyz: l,
                rgb2lab: u,
                rgb2lch: d,
                hsl2rgb: h,
                hsl2hsv: c,
                hsl2hwb: f,
                hsl2cmyk: p,
                hsl2keyword: m,
                hsv2rgb: v,
                hsv2hsl: y,
                hsv2hwb: x,
                hsv2cmyk: w,
                hsv2keyword: _,
                hwb2rgb: k,
                hwb2hsl: S,
                hwb2hsv: M,
                hwb2cmyk: D,
                hwb2keyword: C,
                cmyk2rgb: T,
                cmyk2hsl: P,
                cmyk2hsv: I,
                cmyk2hwb: O,
                cmyk2keyword: A,
                keyword2rgb: B,
                keyword2hsl: V,
                keyword2hsv: $,
                keyword2hwb: j,
                keyword2cmyk: U,
                keyword2lab: q,
                keyword2xyz: G,
                xyz2rgb: F,
                xyz2lab: R,
                xyz2lch: L,
                lab2xyz: N,
                lab2rgb: E,
                lab2lch: W,
                lch2lab: Y,
                lch2xyz: z,
                lch2rgb: H
            };
            var Z = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                Q = {};
            for (var J in Z) Q[JSON.stringify(Z[J])] = J
        }, {}],
        4: [function(t, e) {
            var n = t(3),
                i = function() {
                    return new l
                };
            for (var o in n) {
                i[o + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(o);
                var a = /(\w+)2(\w+)/.exec(o),
                    r = a[1],
                    s = a[2];
                i[r] = i[r] || {}, i[r][s] = i[o] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
                        return i
                    }
                }(o)
            }
            var l = function() {
                this.convs = {}
            };
            l.prototype.routeSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
            }, l.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, l.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space,
                        o = this.convs[n];
                    e = i[n][t](o), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                l.prototype[t] = function() {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = i
        }, {
            3: 3
        }],
        5: [function(t, e) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        6: [function(e, n, i) {
            ! function(e, o) {
                "object" == typeof i && "undefined" != typeof n ? n.exports = o() : "function" == typeof t && t.amd ? t(o) : e.moment = o()
            }(this, function() {
                "use strict";

                function t() {
                    return Pi.apply(null, arguments)
                }

                function i(t) {
                    Pi = t
                }

                function o(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function a(t) {
                    return null != t && "[object Object]" === Object.prototype.toString.call(t)
                }

                function r(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }

                function s(t) {
                    return void 0 === t
                }

                function l(t) {
                    return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
                }

                function u(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function d(t, e) {
                    var n, i = [];
                    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                    return i
                }

                function h(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function c(t, e) {
                    for (var n in e) h(e, n) && (t[n] = e[n]);
                    return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function f(t, e, n, i) {
                    return De(t, e, n, i, !0).utc()
                }

                function p() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }

                function g(t) {
                    return null == t._pf && (t._pf = p()), t._pf
                }

                function m(t) {
                    if (null == t._isValid) {
                        var e = g(t),
                            n = Ii.call(e.parsedDateParts, function(t) {
                                return null != t
                            }),
                            i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
                        t._isValid = i
                    }
                    return t._isValid
                }

                function v(t) {
                    var e = f(NaN);
                    return null != t ? c(g(e), t) : g(e).userInvalidated = !0, e
                }

                function y(t, e) {
                    var n, i, o;
                    if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = g(e)), s(e._locale) || (t._locale = e._locale), Oi.length > 0)
                        for (n = 0; n < Oi.length; n++) i = Oi[n], o = e[i], s(o) || (t[i] = o);
                    return t
                }

                function b(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Ai === !1 && (Ai = !0, t.updateOffset(this), Ai = !1)
                }

                function x(t) {
                    return t instanceof b || null != t && null != t._isAMomentObject
                }

                function w(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }

                function _(t) {
                    var e = +t,
                        n = 0;
                    return 0 !== e && isFinite(e) && (n = w(e)), n
                }

                function k(t, e, n) {
                    var i, o = Math.min(t.length, e.length),
                        a = Math.abs(t.length - e.length),
                        r = 0;
                    for (i = 0; i < o; i++)(n && t[i] !== e[i] || !n && _(t[i]) !== _(e[i])) && r++;
                    return r + a
                }

                function S(e) {
                    t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function M(e, n) {
                    var i = !0;
                    return c(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
                            for (var o, a = [], r = 0; r < arguments.length; r++) {
                                if (o = "", "object" == typeof arguments[r]) {
                                    o += "\n[" + r + "] ";
                                    for (var s in arguments[0]) o += s + ": " + arguments[0][s] + ", ";
                                    o = o.slice(0, -2)
                                } else o = arguments[r];
                                a.push(o)
                            }
                            S(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), i = !1
                        }
                        return n.apply(this, arguments)
                    }, n)
                }

                function D(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), Fi[e] || (S(n), Fi[e] = !0)
                }

                function C(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function T(t) {
                    var e, n;
                    for (n in t) e = t[n], C(e) ? this[n] = e : this["_" + n] = e;
                    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function P(t, e) {
                    var n, i = c({}, t);
                    for (n in e) h(e, n) && (a(t[n]) && a(e[n]) ? (i[n] = {}, c(i[n], t[n]), c(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                    for (n in t) h(t, n) && !h(e, n) && a(t[n]) && (i[n] = c({}, i[n]));
                    return i
                }

                function I(t) {
                    null != t && this.set(t)
                }

                function O(t, e, n) {
                    var i = this._calendar[t] || this._calendar.sameElse;
                    return C(i) ? i.call(e, n) : i
                }

                function A(t) {
                    var e = this._longDateFormat[t],
                        n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }

                function F() {
                    return this._invalidDate
                }

                function R(t) {
                    return this._ordinal.replace("%d", t)
                }

                function L(t, e, n, i) {
                    var o = this._relativeTime[n];
                    return C(o) ? o(t, e, n, i) : o.replace(/%d/i, t)
                }

                function N(t, e) {
                    var n = this._relativeTime[t > 0 ? "future" : "past"];
                    return C(n) ? n(e) : n.replace(/%s/i, e)
                }

                function W(t, e) {
                    var n = t.toLowerCase();
                    Hi[n] = Hi[n + "s"] = Hi[e] = t
                }

                function E(t) {
                    return "string" == typeof t ? Hi[t] || Hi[t.toLowerCase()] : void 0
                }

                function Y(t) {
                    var e, n, i = {};
                    for (n in t) h(t, n) && (e = E(n), e && (i[e] = t[n]));
                    return i
                }

                function z(t, e) {
                    Bi[t] = e
                }

                function H(t) {
                    var e = [];
                    for (var n in t) e.push({
                        unit: n,
                        priority: Bi[n]
                    });
                    return e.sort(function(t, e) {
                        return t.priority - e.priority
                    }), e
                }

                function B(t, e, n) {
                    var i = "" + Math.abs(t),
                        o = e - i.length,
                        a = t >= 0;
                    return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + i
                }

                function V(t, e, n, i) {
                    var o = i;
                    "string" == typeof i && (o = function() {
                        return this[i]()
                    }), t && (Ui[t] = o), e && (Ui[e[0]] = function() {
                        return B(o.apply(this, arguments), e[1], e[2])
                    }), n && (Ui[n] = function() {
                        return this.localeData().ordinal(o.apply(this, arguments), t)
                    })
                }

                function $(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
                }

                function j(t) {
                    var e, n, i = t.match(Vi);
                    for (e = 0, n = i.length; e < n; e++) Ui[i[e]] ? i[e] = Ui[i[e]] : i[e] = $(i[e]);
                    return function(e) {
                        var o, a = "";
                        for (o = 0; o < n; o++) a += C(i[o]) ? i[o].call(e, t) : i[o];
                        return a
                    }
                }

                function U(t, e) {
                    return t.isValid() ? (e = q(e, t.localeData()), ji[e] = ji[e] || j(e), ji[e](t)) : t.localeData().invalidDate()
                }

                function q(t, e) {
                    function n(t) {
                        return e.longDateFormat(t) || t
                    }
                    var i = 5;
                    for ($i.lastIndex = 0; i >= 0 && $i.test(t);) t = t.replace($i, n), $i.lastIndex = 0, i -= 1;
                    return t
                }

                function G(t, e, n) {
                    ho[t] = C(e) ? e : function(t) {
                        return t && n ? n : e
                    }
                }

                function Z(t, e) {
                    return h(ho, t) ? ho[t](e._strict, e._locale) : new RegExp(Q(t))
                }

                function Q(t) {
                    return J(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, o) {
                        return e || n || i || o
                    }))
                }

                function J(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function X(t, e) {
                    var n, i = e;
                    for ("string" == typeof t && (t = [t]), l(e) && (i = function(t, n) {
                            n[e] = _(t)
                        }), n = 0; n < t.length; n++) co[t[n]] = i
                }

                function K(t, e) {
                    X(t, function(t, n, i, o) {
                        i._w = i._w || {}, e(t, i._w, i, o)
                    })
                }

                function tt(t, e, n) {
                    null != e && h(co, t) && co[t](e, n._a, n, t)
                }

                function et(t) {
                    return nt(t) ? 366 : 365
                }

                function nt(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                }

                function it() {
                    return nt(this.year())
                }

                function ot(e, n) {
                    return function(i) {
                        return null != i ? (rt(this, e, i), t.updateOffset(this, n), this) : at(this, e)
                    }
                }

                function at(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function rt(t, e, n) {
                    t.isValid() && !isNaN(n) && ("FullYear" === e && nt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), dt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
                }

                function st(t) {
                    return t = E(t), C(this[t]) ? this[t]() : this
                }

                function lt(t, e) {
                    if ("object" == typeof t) {
                        t = Y(t);
                        for (var n = H(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
                    } else if (t = E(t), C(this[t])) return this[t](e);
                    return this
                }

                function ut(t, e) {
                    return (t % e + e) % e
                }

                function dt(t, e) {
                    if (isNaN(t) || isNaN(e)) return NaN;
                    var n = ut(e, 12);
                    return t += (e - n) / 12, 1 === n ? nt(t) ? 29 : 28 : 31 - n % 7 % 2
                }

                function ht(t, e) {
                    return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || So).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone
                }

                function ct(t, e) {
                    return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[So.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function ft(t, e, n) {
                    var i, o, a, r = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) a = f([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? (o = _o.call(this._shortMonthsParse, r), o !== -1 ? o : null) : (o = _o.call(this._longMonthsParse, r), o !== -1 ? o : null) : "MMM" === e ? (o = _o.call(this._shortMonthsParse, r), o !== -1 ? o : (o = _o.call(this._longMonthsParse, r), o !== -1 ? o : null)) : (o = _o.call(this._longMonthsParse, r), o !== -1 ? o : (o = _o.call(this._shortMonthsParse, r), o !== -1 ? o : null))
                }

                function pt(t, e, n) {
                    var i, o, a;
                    if (this._monthsParseExact) return ft.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                        if (o = f([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                        if (!n && this._monthsParse[i].test(t)) return i
                    }
                }

                function gt(t, e) {
                    var n;
                    if (!t.isValid()) return t;
                    if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = _(e);
                        else if (e = t.localeData().monthsParse(e), !l(e)) return t;
                    return n = Math.min(t.date(), dt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
                }

                function mt(e) {
                    return null != e ? (gt(this, e), t.updateOffset(this, !0), this) : at(this, "Month")
                }

                function vt() {
                    return dt(this.year(), this.month())
                }

                function yt(t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || xt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Co), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function bt(t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || xt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = To), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }

                function xt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i = [],
                        o = [],
                        a = [];
                    for (e = 0; e < 12; e++) n = f([2e3, e]), i.push(this.monthsShort(n, "")), o.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
                    for (i.sort(t), o.sort(t), a.sort(t), e = 0; e < 12; e++) i[e] = J(i[e]), o[e] = J(o[e]);
                    for (e = 0; e < 24; e++) a[e] = J(a[e]);
                    this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function wt(t, e, n, i, o, a, r) {
                    var s = new Date(t, e, n, i, o, a, r);
                    return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
                }

                function _t(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function kt(t, e, n) {
                    var i = 7 + e - n,
                        o = (7 + _t(t, 0, i).getUTCDay() - e) % 7;
                    return -o + i - 1
                }

                function St(t, e, n, i, o) {
                    var a, r, s = (7 + n - i) % 7,
                        l = kt(t, i, o),
                        u = 1 + 7 * (e - 1) + s + l;
                    return u <= 0 ? (a = t - 1, r = et(a) + u) : u > et(t) ? (a = t + 1, r = u - et(t)) : (a = t, r = u), {
                        year: a,
                        dayOfYear: r
                    }
                }

                function Mt(t, e, n) {
                    var i, o, a = kt(t.year(), e, n),
                        r = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
                    return r < 1 ? (o = t.year() - 1, i = r + Dt(o, e, n)) : r > Dt(t.year(), e, n) ? (i = r - Dt(t.year(), e, n), o = t.year() + 1) : (o = t.year(), i = r), {
                        week: i,
                        year: o
                    }
                }

                function Dt(t, e, n) {
                    var i = kt(t, e, n),
                        o = kt(t + 1, e, n);
                    return (et(t) - i + o) / 7
                }

                function Ct(t) {
                    return Mt(t, this._week.dow, this._week.doy).week
                }

                function Tt() {
                    return this._week.dow
                }

                function Pt() {
                    return this._week.doy
                }

                function It(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Ot(t) {
                    var e = Mt(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function At(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
                }

                function Ft(t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }

                function Rt(t, e) {
                    return t ? o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }

                function Lt(t) {
                    return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                }

                function Nt(t) {
                    return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                }

                function Wt(t, e, n) {
                    var i, o, a, r = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) a = f([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? (o = _o.call(this._weekdaysParse, r), o !== -1 ? o : null) : "ddd" === e ? (o = _o.call(this._shortWeekdaysParse, r), o !== -1 ? o : null) : (o = _o.call(this._minWeekdaysParse, r), o !== -1 ? o : null) : "dddd" === e ? (o = _o.call(this._weekdaysParse, r), o !== -1 ? o : (o = _o.call(this._shortWeekdaysParse, r), o !== -1 ? o : (o = _o.call(this._minWeekdaysParse, r), o !== -1 ? o : null))) : "ddd" === e ? (o = _o.call(this._shortWeekdaysParse, r), o !== -1 ? o : (o = _o.call(this._weekdaysParse, r), o !== -1 ? o : (o = _o.call(this._minWeekdaysParse, r), o !== -1 ? o : null))) : (o = _o.call(this._minWeekdaysParse, r), o !== -1 ? o : (o = _o.call(this._weekdaysParse, r), o !== -1 ? o : (o = _o.call(this._shortWeekdaysParse, r), o !== -1 ? o : null)))
                }

                function Et(t, e, n) {
                    var i, o, a;
                    if (this._weekdaysParseExact) return Wt.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                        if (o = f([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (a = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[i] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                        if (!n && this._weekdaysParse[i].test(t)) return i
                    }
                }

                function Yt(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = At(t, this.localeData()), this.add(t - e, "d")) : e
                }

                function zt(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Ht(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    if (null != t) {
                        var e = Ft(t, this.localeData());
                        return this.day(this.day() % 7 ? e : e - 7)
                    }
                    return this.day() || 7
                }

                function Bt(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Fo), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Vt(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ro), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function $t(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || jt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Lo), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function jt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i, o, a, r = [],
                        s = [],
                        l = [],
                        u = [];
                    for (e = 0; e < 7; e++) n = f([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), r.push(i), s.push(o), l.push(a), u.push(i), u.push(o), u.push(a);
                    for (r.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = J(s[e]), l[e] = J(l[e]), u[e] = J(u[e]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
                }

                function Ut() {
                    return this.hours() % 12 || 12
                }

                function qt() {
                    return this.hours() || 24
                }

                function Gt(t, e) {
                    V(t, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function Zt(t, e) {
                    return e._meridiemParse
                }

                function Qt(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }

                function Jt(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Xt(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function Kt(t) {
                    for (var e, n, i, o, a = 0; a < t.length;) {
                        for (o = Xt(t[a]).split("-"), e = o.length, n = Xt(t[a + 1]), n = n ? n.split("-") : null; e > 0;) {
                            if (i = te(o.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && k(o, n, !0) >= e - 1) break;
                            e--
                        }
                        a++
                    }
                    return null
                }

                function te(t) {
                    var i = null;
                    if (!zo[t] && "undefined" != typeof n && n && n.exports) try {
                        i = No._abbr;
                        var o = e;
                        o("./locale/" + t), ee(i)
                    } catch (t) {}
                    return zo[t]
                }

                function ee(t, e) {
                    var n;
                    return t && (n = s(e) ? oe(t) : ne(t, e), n && (No = n)), No._abbr
                }

                function ne(t, e) {
                    if (null !== e) {
                        var n = Yo;
                        if (e.abbr = t, null != zo[t]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = zo[t]._config;
                        else if (null != e.parentLocale) {
                            if (null == zo[e.parentLocale]) return Ho[e.parentLocale] || (Ho[e.parentLocale] = []), Ho[e.parentLocale].push({
                                name: t,
                                config: e
                            }), null;
                            n = zo[e.parentLocale]._config
                        }
                        return zo[t] = new I(P(n, e)), Ho[t] && Ho[t].forEach(function(t) {
                            ne(t.name, t.config)
                        }), ee(t), zo[t]
                    }
                    return delete zo[t], null
                }

                function ie(t, e) {
                    if (null != e) {
                        var n, i, o = Yo;
                        i = te(t), null != i && (o = i._config), e = P(o, e), n = new I(e), n.parentLocale = zo[t], zo[t] = n, ee(t)
                    } else null != zo[t] && (null != zo[t].parentLocale ? zo[t] = zo[t].parentLocale : null != zo[t] && delete zo[t]);
                    return zo[t]
                }

                function oe(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return No;
                    if (!o(t)) {
                        if (e = te(t)) return e;
                        t = [t]
                    }
                    return Kt(t)
                }

                function ae() {
                    return Ri(zo)
                }

                function re(t) {
                    var e, n = t._a;
                    return n && g(t).overflow === -2 && (e = n[po] < 0 || n[po] > 11 ? po : n[go] < 1 || n[go] > dt(n[fo], n[po]) ? go : n[mo] < 0 || n[mo] > 24 || 24 === n[mo] && (0 !== n[vo] || 0 !== n[yo] || 0 !== n[bo]) ? mo : n[vo] < 0 || n[vo] > 59 ? vo : n[yo] < 0 || n[yo] > 59 ? yo : n[bo] < 0 || n[bo] > 999 ? bo : -1, g(t)._overflowDayOfYear && (e < fo || e > go) && (e = go), g(t)._overflowWeeks && e === -1 && (e = xo), g(t)._overflowWeekday && e === -1 && (e = wo), g(t).overflow = e), t
                }

                function se(t, e, n) {
                    return null != t ? t : null != e ? e : n
                }

                function le(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function ue(t) {
                    var e, n, i, o, a, r = [];
                    if (!t._d) {
                        for (i = le(t), t._w && null == t._a[go] && null == t._a[po] && de(t), null != t._dayOfYear && (a = se(t._a[fo], i[fo]), (t._dayOfYear > et(a) || 0 === t._dayOfYear) && (g(t)._overflowDayOfYear = !0), n = _t(a, 0, t._dayOfYear), t._a[po] = n.getUTCMonth(), t._a[go] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = i[e];
                        for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[mo] && 0 === t._a[vo] && 0 === t._a[yo] && 0 === t._a[bo] && (t._nextDay = !0, t._a[mo] = 0), t._d = (t._useUTC ? _t : wt).apply(null, r), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[mo] = 24), t._w && "undefined" != typeof t._w.d && t._w.d !== o && (g(t).weekdayMismatch = !0)
                    }
                }

                function de(t) {
                    var e, n, i, o, a, r, s, l;
                    if (e = t._w, null != e.GG || null != e.W || null != e.E) a = 1, r = 4, n = se(e.GG, t._a[fo], Mt(Ce(), 1, 4).year), i = se(e.W, 1), o = se(e.E, 1), (o < 1 || o > 7) && (l = !0);
                    else {
                        a = t._locale._week.dow, r = t._locale._week.doy;
                        var u = Mt(Ce(), a, r);
                        n = se(e.gg, t._a[fo], u.year), i = se(e.w, u.week), null != e.d ? (o = e.d, (o < 0 || o > 6) && (l = !0)) : null != e.e ? (o = e.e + a, (e.e < 0 || e.e > 6) && (l = !0)) : o = a
                    }
                    i < 1 || i > Dt(n, a, r) ? g(t)._overflowWeeks = !0 : null != l ? g(t)._overflowWeekday = !0 : (s = St(n, i, o, a, r), t._a[fo] = s.year, t._dayOfYear = s.dayOfYear)
                }

                function he(t) {
                    var e, n, i, o, a, r, s = t._i,
                        l = Bo.exec(s) || Vo.exec(s);
                    if (l) {
                        for (g(t).iso = !0, e = 0, n = jo.length; e < n; e++)
                            if (jo[e][1].exec(l[1])) {
                                o = jo[e][0], i = jo[e][2] !== !1;
                                break
                            }
                        if (null == o) return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, n = Uo.length; e < n; e++)
                                if (Uo[e][1].exec(l[3])) {
                                    a = (l[2] || " ") + Uo[e][0];
                                    break
                                }
                            if (null == a) return void(t._isValid = !1)
                        }
                        if (!i && null != a) return void(t._isValid = !1);
                        if (l[4]) {
                            if (!$o.exec(l[4])) return void(t._isValid = !1);
                            r = "Z"
                        }
                        t._f = o + (a || "") + (r || ""), be(t)
                    } else t._isValid = !1
                }

                function ce(t, e, n, i, o, a) {
                    var r = [fe(t), Do.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(o, 10)];
                    return a && r.push(parseInt(a, 10)), r
                }

                function fe(t) {
                    var e = parseInt(t, 10);
                    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                }

                function pe(t) {
                    return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
                }

                function ge(t, e, n) {
                    if (t) {
                        var i = Oo.indexOf(t),
                            o = new Date(e[0], e[1], e[2]).getDay();
                        if (i !== o) return g(n).weekdayMismatch = !0, n._isValid = !1, !1
                    }
                    return !0
                }

                function me(t, e, n) {
                    if (t) return Zo[t];
                    if (e) return 0;
                    var i = parseInt(n, 10),
                        o = i % 100,
                        a = (i - o) / 100;
                    return 60 * a + o
                }

                function ve(t) {
                    var e = Go.exec(pe(t._i));
                    if (e) {
                        var n = ce(e[4], e[3], e[2], e[5], e[6], e[7]);
                        if (!ge(e[1], n, t)) return;
                        t._a = n, t._tzm = me(e[8], e[9], e[10]), t._d = _t.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), g(t).rfc2822 = !0
                    } else t._isValid = !1
                }

                function ye(e) {
                    var n = qo.exec(e._i);
                    return null !== n ? void(e._d = new Date(+n[1])) : (he(e), void(e._isValid === !1 && (delete e._isValid, ve(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e)))))
                }

                function be(e) {
                    if (e._f === t.ISO_8601) return void he(e);
                    if (e._f === t.RFC_2822) return void ve(e);
                    e._a = [], g(e).empty = !0;
                    var n, i, o, a, r, s = "" + e._i,
                        l = s.length,
                        u = 0;
                    for (o = q(e._f, e._locale).match(Vi) || [], n = 0; n < o.length; n++) a = o[n], i = (s.match(Z(a, e)) || [])[0], i && (r = s.substr(0, s.indexOf(i)), r.length > 0 && g(e).unusedInput.push(r), s = s.slice(s.indexOf(i) + i.length), u += i.length), Ui[a] ? (i ? g(e).empty = !1 : g(e).unusedTokens.push(a), tt(a, i, e)) : e._strict && !i && g(e).unusedTokens.push(a);
                    g(e).charsLeftOver = l - u, s.length > 0 && g(e).unusedInput.push(s), e._a[mo] <= 12 && g(e).bigHour === !0 && e._a[mo] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[mo] = xe(e._locale, e._a[mo], e._meridiem), ue(e), re(e)
                }

                function xe(t, e, n) {
                    var i;
                    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
                }

                function we(t) {
                    var e, n, i, o, a;
                    if (0 === t._f.length) return g(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (o = 0; o < t._f.length; o++) a = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], be(e), m(e) && (a += g(e).charsLeftOver, a += 10 * g(e).unusedTokens.length, g(e).score = a, (null == i || a < i) && (i = a, n = e));
                    c(t, n || e)
                }

                function _e(t) {
                    if (!t._d) {
                        var e = Y(t._i);
                        t._a = d([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                            return t && parseInt(t, 10)
                        }), ue(t)
                    }
                }

                function ke(t) {
                    var e = new b(re(Se(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }

                function Se(t) {
                    var e = t._i,
                        n = t._f;
                    return t._locale = t._locale || oe(t._l), null === e || void 0 === n && "" === e ? v({
                        nullInput: !0
                    }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), x(e) ? new b(re(e)) : (u(e) ? t._d = e : o(n) ? we(t) : n ? be(t) : Me(t), m(t) || (t._d = null), t))
                }

                function Me(e) {
                    var n = e._i;
                    s(n) ? e._d = new Date(t.now()) : u(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? ye(e) : o(n) ? (e._a = d(n.slice(0), function(t) {
                        return parseInt(t, 10)
                    }), ue(e)) : a(n) ? _e(e) : l(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function De(t, e, n, i, s) {
                    var l = {};
                    return n !== !0 && n !== !1 || (i = n, n = void 0), (a(t) && r(t) || o(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = t, l._f = e, l._strict = i, ke(l)
                }

                function Ce(t, e, n, i) {
                    return De(t, e, n, i, !1)
                }

                function Te(t, e) {
                    var n, i;
                    if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Ce();
                    for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                    return n
                }

                function Pe() {
                    var t = [].slice.call(arguments, 0);
                    return Te("isBefore", t)
                }

                function Ie() {
                    var t = [].slice.call(arguments, 0);
                    return Te("isAfter", t)
                }

                function Oe(t) {
                    for (var e in t)
                        if (_o.call(Ko, e) === -1 || null != t[e] && isNaN(t[e])) return !1;
                    for (var n = !1, i = 0; i < Ko.length; ++i)
                        if (t[Ko[i]]) {
                            if (n) return !1;
                            parseFloat(t[Ko[i]]) !== _(t[Ko[i]]) && (n = !0)
                        }
                    return !0
                }

                function Ae() {
                    return this._isValid
                }

                function Fe() {
                    return Xe(NaN)
                }

                function Re(t) {
                    var e = Y(t),
                        n = e.year || 0,
                        i = e.quarter || 0,
                        o = e.month || 0,
                        a = e.week || 0,
                        r = e.day || 0,
                        s = e.hour || 0,
                        l = e.minute || 0,
                        u = e.second || 0,
                        d = e.millisecond || 0;
                    this._isValid = Oe(e), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +r + 7 * a, this._months = +o + 3 * i + 12 * n, this._data = {}, this._locale = oe(), this._bubble()
                }

                function Le(t) {
                    return t instanceof Re
                }

                function Ne(t) {
                    return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
                }

                function We(t, e) {
                    V(t, 0, 0, function() {
                        var t = this.utcOffset(),
                            n = "+";
                        return t < 0 && (t = -t, n = "-"), n + B(~~(t / 60), 2) + e + B(~~t % 60, 2)
                    })
                }

                function Ee(t, e) {
                    var n = (e || "").match(t);
                    if (null === n) return null;
                    var i = n[n.length - 1] || [],
                        o = (i + "").match(ta) || ["-", 0, 0],
                        a = +(60 * o[1]) + _(o[2]);
                    return 0 === a ? 0 : "+" === o[0] ? a : -a
                }

                function Ye(e, n) {
                    var i, o;
                    return n._isUTC ? (i = n.clone(), o = (x(e) || u(e) ? e.valueOf() : Ce(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), t.updateOffset(i, !1), i) : Ce(e).local()
                }

                function ze(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function He(e, n, i) {
                    var o, a = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (e = Ee(so, e), null === e) return this
                        } else Math.abs(e) < 16 && !i && (e = 60 * e);
                        return !this._isUTC && n && (o = ze(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), a !== e && (!n || this._changeInProgress ? on(this, Xe(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? a : ze(this)
                }

                function Be(t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }

                function Ve(t) {
                    return this.utcOffset(0, t)
                }

                function $e(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(ze(this), "m")), this
                }

                function je() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var t = Ee(ro, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function Ue(t) {
                    return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
                }

                function qe() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Ge() {
                    if (!s(this._isDSTShifted)) return this._isDSTShifted;
                    var t = {};
                    if (y(t, this), t = Se(t), t._a) {
                        var e = t._isUTC ? f(t._a) : Ce(t._a);
                        this._isDSTShifted = this.isValid() && k(t._a, e.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ze() {
                    return !!this.isValid() && !this._isUTC
                }

                function Qe() {
                    return !!this.isValid() && this._isUTC
                }

                function Je() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Xe(t, e) {
                    var n, i, o, a = t,
                        r = null;
                    return Le(t) ? a = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : l(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (r = ea.exec(t)) ? (n = "-" === r[1] ? -1 : 1, a = {
                        y: 0,
                        d: _(r[go]) * n,
                        h: _(r[mo]) * n,
                        m: _(r[vo]) * n,
                        s: _(r[yo]) * n,
                        ms: _(Ne(1e3 * r[bo])) * n
                    }) : (r = na.exec(t)) ? (n = "-" === r[1] ? -1 : ("+" === r[1], 1), a = {
                        y: Ke(r[2], n),
                        M: Ke(r[3], n),
                        w: Ke(r[4], n),
                        d: Ke(r[5], n),
                        h: Ke(r[6], n),
                        m: Ke(r[7], n),
                        s: Ke(r[8], n)
                    }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = en(Ce(a.from), Ce(a.to)), a = {}, a.ms = o.milliseconds, a.M = o.months), i = new Re(a), Le(t) && h(t, "_locale") && (i._locale = t._locale), i
                }

                function Ke(t, e) {
                    var n = t && parseFloat(t.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * e
                }

                function tn(t, e) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
                }

                function en(t, e) {
                    var n;
                    return t.isValid() && e.isValid() ? (e = Ye(e, t), t.isBefore(e) ? n = tn(t, e) : (n = tn(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function nn(t, e) {
                    return function(n, i) {
                        var o, a;
                        return null === i || isNaN(+i) || (D(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = i, i = a), n = "string" == typeof n ? +n : n, o = Xe(n, i), on(this, o, t), this
                    }
                }

                function on(e, n, i, o) {
                    var a = n._milliseconds,
                        r = Ne(n._days),
                        s = Ne(n._months);
                    e.isValid() && (o = null == o || o, s && gt(e, at(e, "Month") + s * i), r && rt(e, "Date", at(e, "Date") + r * i), a && e._d.setTime(e._d.valueOf() + a * i), o && t.updateOffset(e, r || s))
                }

                function an(t, e) {
                    var n = t.diff(e, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function rn(e, n) {
                    var i = e || Ce(),
                        o = Ye(i, this).startOf("day"),
                        a = t.calendarFormat(this, o) || "sameElse",
                        r = n && (C(n[a]) ? n[a].call(this, i) : n[a]);
                    return this.format(r || this.localeData().calendar(a, this, Ce(i)))
                }

                function sn() {
                    return new b(this)
                }

                function ln(t, e) {
                    var n = x(t) ? t : Ce(t);
                    return !(!this.isValid() || !n.isValid()) && (e = E(s(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                }

                function un(t, e) {
                    var n = x(t) ? t : Ce(t);
                    return !(!this.isValid() || !n.isValid()) && (e = E(s(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                }

                function dn(t, e, n, i) {
                    return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
                }

                function hn(t, e) {
                    var n, i = x(t) ? t : Ce(t);
                    return !(!this.isValid() || !i.isValid()) && (e = E(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                }

                function cn(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }

                function fn(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }

                function pn(t, e, n) {
                    var i, o, a;
                    if (!this.isValid()) return NaN;
                    if (i = Ye(t, this), !i.isValid()) return NaN;
                    switch (o = 6e4 * (i.utcOffset() - this.utcOffset()), e = E(e)) {
                        case "year":
                            a = gn(this, i) / 12;
                            break;
                        case "month":
                            a = gn(this, i);
                            break;
                        case "quarter":
                            a = gn(this, i) / 3;
                            break;
                        case "second":
                            a = (this - i) / 1e3;
                            break;
                        case "minute":
                            a = (this - i) / 6e4;
                            break;
                        case "hour":
                            a = (this - i) / 36e5;
                            break;
                        case "day":
                            a = (this - i - o) / 864e5;
                            break;
                        case "week":
                            a = (this - i - o) / 6048e5;
                            break;
                        default:
                            a = this - i
                    }
                    return n ? a : w(a)
                }

                function gn(t, e) {
                    var n, i, o = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        a = t.clone().add(o, "months");
                    return e - a < 0 ? (n = t.clone().add(o - 1, "months"), i = (e - a) / (a - n)) : (n = t.clone().add(o + 1, "months"), i = (e - a) / (n - a)), -(o + i) || 0
                }

                function mn() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function vn(t) {
                    if (!this.isValid()) return null;
                    var e = t !== !0,
                        n = e ? this.clone().utc() : this;
                    return n.year() < 0 || n.year() > 9999 ? U(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", U(n, "Z")) : U(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }

                function yn() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var t = "moment",
                        e = "";
                    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                    var n = "[" + t + '("]',
                        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        o = "-MM-DD[T]HH:mm:ss.SSS",
                        a = e + '[")]';
                    return this.format(n + i + o + a)
                }

                function bn(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = U(this, e);
                    return this.localeData().postformat(n)
                }

                function xn(t, e) {
                    return this.isValid() && (x(t) && t.isValid() || Ce(t).isValid()) ? Xe({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function wn(t) {
                    return this.from(Ce(), t)
                }

                function _n(t, e) {
                    return this.isValid() && (x(t) && t.isValid() || Ce(t).isValid()) ? Xe({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function kn(t) {
                    return this.to(Ce(), t)
                }

                function Sn(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (e = oe(t), null != e && (this._locale = e), this)
                }

                function Mn() {
                    return this._locale
                }

                function Dn(t) {
                    switch (t = E(t)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function Cn(t) {
                    return t = E(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }

                function Tn() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function Pn() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function In() {
                    return new Date(this.valueOf())
                }

                function On() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }

                function An() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }

                function Fn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function Rn() {
                    return m(this)
                }

                function Ln() {
                    return c({}, g(this))
                }

                function Nn() {
                    return g(this).overflow
                }

                function Wn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function En(t, e) {
                    V(0, [t, t.length], 0, e)
                }

                function Yn(t) {
                    return Vn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function zn(t) {
                    return Vn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Hn() {
                    return Dt(this.year(), 1, 4)
                }

                function Bn() {
                    var t = this.localeData()._week;
                    return Dt(this.year(), t.dow, t.doy)
                }

                function Vn(t, e, n, i, o) {
                    var a;
                    return null == t ? Mt(this, i, o).year : (a = Dt(t, i, o), e > a && (e = a), $n.call(this, t, e, n, i, o))
                }

                function $n(t, e, n, i, o) {
                    var a = St(t, e, n, i, o),
                        r = _t(a.year, 0, a.dayOfYear);
                    return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
                }

                function jn(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }

                function Un(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }

                function qn(t, e) {
                    e[bo] = _(1e3 * ("0." + t))
                }

                function Gn() {
                    return this._isUTC ? "UTC" : ""
                }

                function Zn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Qn(t) {
                    return Ce(1e3 * t)
                }

                function Jn() {
                    return Ce.apply(null, arguments).parseZone()
                }

                function Xn(t) {
                    return t
                }

                function Kn(t, e, n, i) {
                    var o = oe(),
                        a = f().set(i, e);
                    return o[n](a, t)
                }

                function ti(t, e, n) {
                    if (l(t) && (e = t, t = void 0), t = t || "", null != e) return Kn(t, e, n, "month");
                    var i, o = [];
                    for (i = 0; i < 12; i++) o[i] = Kn(t, i, n, "month");
                    return o
                }

                function ei(t, e, n, i) {
                    "boolean" == typeof t ? (l(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, l(e) && (n = e, e = void 0), e = e || "");
                    var o = oe(),
                        a = t ? o._week.dow : 0;
                    if (null != n) return Kn(e, (n + a) % 7, i, "day");
                    var r, s = [];
                    for (r = 0; r < 7; r++) s[r] = Kn(e, (r + a) % 7, i, "day");
                    return s
                }

                function ni(t, e) {
                    return ti(t, e, "months")
                }

                function ii(t, e) {
                    return ti(t, e, "monthsShort")
                }

                function oi(t, e, n) {
                    return ei(t, e, n, "weekdays")
                }

                function ai(t, e, n) {
                    return ei(t, e, n, "weekdaysShort")
                }

                function ri(t, e, n) {
                    return ei(t, e, n, "weekdaysMin")
                }

                function si() {
                    var t = this._data;
                    return this._milliseconds = fa(this._milliseconds), this._days = fa(this._days), this._months = fa(this._months), t.milliseconds = fa(t.milliseconds), t.seconds = fa(t.seconds), t.minutes = fa(t.minutes), t.hours = fa(t.hours), t.months = fa(t.months), t.years = fa(t.years), this
                }

                function li(t, e, n, i) {
                    var o = Xe(e, n);
                    return t._milliseconds += i * o._milliseconds, t._days += i * o._days, t._months += i * o._months, t._bubble()
                }

                function ui(t, e) {
                    return li(this, t, e, 1)
                }

                function di(t, e) {
                    return li(this, t, e, -1)
                }

                function hi(t) {
                    return t < 0 ? Math.floor(t) : Math.ceil(t)
                }

                function ci() {
                    var t, e, n, i, o, a = this._milliseconds,
                        r = this._days,
                        s = this._months,
                        l = this._data;
                    return a >= 0 && r >= 0 && s >= 0 || a <= 0 && r <= 0 && s <= 0 || (a += 864e5 * hi(pi(s) + r), r = 0, s = 0), l.milliseconds = a % 1e3, t = w(a / 1e3), l.seconds = t % 60, e = w(t / 60), l.minutes = e % 60, n = w(e / 60), l.hours = n % 24, r += w(n / 24), o = w(fi(r)), s += o, r -= hi(pi(o)), i = w(s / 12), s %= 12, l.days = r, l.months = s, l.years = i, this
                }

                function fi(t) {
                    return 4800 * t / 146097
                }

                function pi(t) {
                    return 146097 * t / 4800
                }

                function gi(t) {
                    if (!this.isValid()) return NaN;
                    var e, n, i = this._milliseconds;
                    if (t = E(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + fi(e), "month" === t ? n : n / 12;
                    switch (e = this._days + Math.round(pi(this._months)), t) {
                        case "week":
                            return e / 7 + i / 6048e5;
                        case "day":
                            return e + i / 864e5;
                        case "hour":
                            return 24 * e + i / 36e5;
                        case "minute":
                            return 1440 * e + i / 6e4;
                        case "second":
                            return 86400 * e + i / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + i;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function mi() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12) : NaN
                }

                function vi(t) {
                    return function() {
                        return this.as(t)
                    }
                }

                function yi() {
                    return Xe(this)
                }

                function bi(t) {
                    return t = E(t), this.isValid() ? this[t + "s"]() : NaN
                }

                function xi(t) {
                    return function() {
                        return this.isValid() ? this._data[t] : NaN
                    }
                }

                function wi() {
                    return w(this.days() / 7)
                }

                function _i(t, e, n, i, o) {
                    return o.relativeTime(e || 1, !!n, t, i)
                }

                function ki(t, e, n) {
                    var i = Xe(t).abs(),
                        o = Pa(i.as("s")),
                        a = Pa(i.as("m")),
                        r = Pa(i.as("h")),
                        s = Pa(i.as("d")),
                        l = Pa(i.as("M")),
                        u = Pa(i.as("y")),
                        d = o <= Ia.ss && ["s", o] || o < Ia.s && ["ss", o] || a <= 1 && ["m"] || a < Ia.m && ["mm", a] || r <= 1 && ["h"] || r < Ia.h && ["hh", r] || s <= 1 && ["d"] || s < Ia.d && ["dd", s] || l <= 1 && ["M"] || l < Ia.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
                    return d[2] = e, d[3] = +t > 0, d[4] = n, _i.apply(null, d)
                }

                function Si(t) {
                    return void 0 === t ? Pa : "function" == typeof t && (Pa = t, !0)
                }

                function Mi(t, e) {
                    return void 0 !== Ia[t] && (void 0 === e ? Ia[t] : (Ia[t] = e, "s" === t && (Ia.ss = e - 1), !0))
                }

                function Di(t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e = this.localeData(),
                        n = ki(this, !t, e);
                    return t && (n = e.pastFuture(+this, n)), e.postformat(n)
                }

                function Ci(t) {
                    return (t > 0) - (t < 0) || +t
                }

                function Ti() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t, e, n, i = Oa(this._milliseconds) / 1e3,
                        o = Oa(this._days),
                        a = Oa(this._months);
                    t = w(i / 60), e = w(t / 60), i %= 60, t %= 60, n = w(a / 12), a %= 12;
                    var r = n,
                        s = a,
                        l = o,
                        u = e,
                        d = t,
                        h = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                        c = this.asSeconds();
                    if (!c) return "P0D";
                    var f = c < 0 ? "-" : "",
                        p = Ci(this._months) !== Ci(c) ? "-" : "",
                        g = Ci(this._days) !== Ci(c) ? "-" : "",
                        m = Ci(this._milliseconds) !== Ci(c) ? "-" : "";
                    return f + "P" + (r ? p + r + "Y" : "") + (s ? p + s + "M" : "") + (l ? g + l + "D" : "") + (u || d || h ? "T" : "") + (u ? m + u + "H" : "") + (d ? m + d + "M" : "") + (h ? m + h + "S" : "")
                }
                var Pi, Ii;
                Ii = Array.prototype.some ? Array.prototype.some : function(t) {
                    for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                        if (i in e && t.call(this, e[i], i, e)) return !0;
                    return !1
                };
                var Oi = t.momentProperties = [],
                    Ai = !1,
                    Fi = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var Ri;
                Ri = Object.keys ? Object.keys : function(t) {
                    var e, n = [];
                    for (e in t) h(t, e) && n.push(e);
                    return n
                };
                var Li = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    Ni = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    Wi = "Invalid date",
                    Ei = "%d",
                    Yi = /\d{1,2}/,
                    zi = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    Hi = {},
                    Bi = {},
                    Vi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    $i = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    ji = {},
                    Ui = {},
                    qi = /\d/,
                    Gi = /\d\d/,
                    Zi = /\d{3}/,
                    Qi = /\d{4}/,
                    Ji = /[+-]?\d{6}/,
                    Xi = /\d\d?/,
                    Ki = /\d\d\d\d?/,
                    to = /\d\d\d\d\d\d?/,
                    eo = /\d{1,3}/,
                    no = /\d{1,4}/,
                    io = /[+-]?\d{1,6}/,
                    oo = /\d+/,
                    ao = /[+-]?\d+/,
                    ro = /Z|[+-]\d\d:?\d\d/gi,
                    so = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    lo = /[+-]?\d+(\.\d{1,3})?/,
                    uo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    ho = {},
                    co = {},
                    fo = 0,
                    po = 1,
                    go = 2,
                    mo = 3,
                    vo = 4,
                    yo = 5,
                    bo = 6,
                    xo = 7,
                    wo = 8;
                V("Y", 0, 0, function() {
                    var t = this.year();
                    return t <= 9999 ? "" + t : "+" + t
                }), V(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), z("year", 1), G("Y", ao), G("YY", Xi, Gi), G("YYYY", no, Qi), G("YYYYY", io, Ji), G("YYYYYY", io, Ji), X(["YYYYY", "YYYYYY"], fo), X("YYYY", function(e, n) {
                    n[fo] = 2 === e.length ? t.parseTwoDigitYear(e) : _(e)
                }), X("YY", function(e, n) {
                    n[fo] = t.parseTwoDigitYear(e)
                }), X("Y", function(t, e) {
                    e[fo] = parseInt(t, 10)
                }), t.parseTwoDigitYear = function(t) {
                    return _(t) + (_(t) > 68 ? 1900 : 2e3)
                };
                var _o, ko = ot("FullYear", !0);
                _o = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1
                }, V("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), V("MMM", 0, 0, function(t) {
                    return this.localeData().monthsShort(this, t)
                }), V("MMMM", 0, 0, function(t) {
                    return this.localeData().months(this, t)
                }), W("month", "M"), z("month", 8), G("M", Xi), G("MM", Xi, Gi), G("MMM", function(t, e) {
                    return e.monthsShortRegex(t)
                }), G("MMMM", function(t, e) {
                    return e.monthsRegex(t)
                }), X(["M", "MM"], function(t, e) {
                    e[po] = _(t) - 1
                }), X(["MMM", "MMMM"], function(t, e, n, i) {
                    var o = n._locale.monthsParse(t, i, n._strict);
                    null != o ? e[po] = o : g(n).invalidMonth = t
                });
                var So = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Mo = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Do = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    Co = uo,
                    To = uo;
                V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), z("week", 5), z("isoWeek", 5), G("w", Xi), G("ww", Xi, Gi), G("W", Xi), G("WW", Xi, Gi), K(["w", "ww", "W", "WW"], function(t, e, n, i) {
                    e[i.substr(0, 1)] = _(t)
                });
                var Po = {
                    dow: 0,
                    doy: 6
                };
                V("d", 0, "do", "day"), V("dd", 0, 0, function(t) {
                    return this.localeData().weekdaysMin(this, t)
                }), V("ddd", 0, 0, function(t) {
                    return this.localeData().weekdaysShort(this, t)
                }), V("dddd", 0, 0, function(t) {
                    return this.localeData().weekdays(this, t)
                }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), G("d", Xi), G("e", Xi), G("E", Xi), G("dd", function(t, e) {
                    return e.weekdaysMinRegex(t)
                }), G("ddd", function(t, e) {
                    return e.weekdaysShortRegex(t)
                }), G("dddd", function(t, e) {
                    return e.weekdaysRegex(t)
                }), K(["dd", "ddd", "dddd"], function(t, e, n, i) {
                    var o = n._locale.weekdaysParse(t, i, n._strict);
                    null != o ? e.d = o : g(n).invalidWeekday = t
                }), K(["d", "e", "E"], function(t, e, n, i) {
                    e[i] = _(t)
                });
                var Io = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Oo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Ao = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Fo = uo,
                    Ro = uo,
                    Lo = uo;
                V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, Ut), V("k", ["kk", 2], 0, qt), V("hmm", 0, 0, function() {
                    return "" + Ut.apply(this) + B(this.minutes(), 2)
                }), V("hmmss", 0, 0, function() {
                    return "" + Ut.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2)
                }), V("Hmm", 0, 0, function() {
                    return "" + this.hours() + B(this.minutes(), 2)
                }), V("Hmmss", 0, 0, function() {
                    return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2)
                }), Gt("a", !0), Gt("A", !1), W("hour", "h"), z("hour", 13), G("a", Zt), G("A", Zt), G("H", Xi), G("h", Xi), G("k", Xi), G("HH", Xi, Gi), G("hh", Xi, Gi), G("kk", Xi, Gi), G("hmm", Ki), G("hmmss", to), G("Hmm", Ki), G("Hmmss", to), X(["H", "HH"], mo), X(["k", "kk"], function(t, e) {
                    var n = _(t);
                    e[mo] = 24 === n ? 0 : n
                }), X(["a", "A"], function(t, e, n) {
                    n._isPm = n._locale.isPM(t), n._meridiem = t
                }), X(["h", "hh"], function(t, e, n) {
                    e[mo] = _(t), g(n).bigHour = !0
                }), X("hmm", function(t, e, n) {
                    var i = t.length - 2;
                    e[mo] = _(t.substr(0, i)), e[vo] = _(t.substr(i)), g(n).bigHour = !0
                }), X("hmmss", function(t, e, n) {
                    var i = t.length - 4,
                        o = t.length - 2;
                    e[mo] = _(t.substr(0, i)), e[vo] = _(t.substr(i, 2)), e[yo] = _(t.substr(o)), g(n).bigHour = !0
                }), X("Hmm", function(t, e) {
                    var n = t.length - 2;
                    e[mo] = _(t.substr(0, n)), e[vo] = _(t.substr(n))
                }), X("Hmmss", function(t, e) {
                    var n = t.length - 4,
                        i = t.length - 2;
                    e[mo] = _(t.substr(0, n)), e[vo] = _(t.substr(n, 2)), e[yo] = _(t.substr(i))
                });
                var No, Wo = /[ap]\.?m?\.?/i,
                    Eo = ot("Hours", !0),
                    Yo = {
                        calendar: Li,
                        longDateFormat: Ni,
                        invalidDate: Wi,
                        ordinal: Ei,
                        dayOfMonthOrdinalParse: Yi,
                        relativeTime: zi,
                        months: Mo,
                        monthsShort: Do,
                        week: Po,
                        weekdays: Io,
                        weekdaysMin: Ao,
                        weekdaysShort: Oo,
                        meridiemParse: Wo
                    },
                    zo = {},
                    Ho = {},
                    Bo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Vo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    $o = /Z|[+-]\d\d(?::?\d\d)?/,
                    jo = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    Uo = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    qo = /^\/?Date\((\-?\d+)/i,
                    Go = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    Zo = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };
                t.createFromInputFallback = M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var Qo = M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var t = Ce.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t < this ? this : t : v()
                    }),
                    Jo = M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var t = Ce.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t > this ? this : t : v()
                    }),
                    Xo = function() {
                        return Date.now ? Date.now() : +new Date
                    },
                    Ko = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                We("Z", ":"), We("ZZ", ""), G("Z", so), G("ZZ", so), X(["Z", "ZZ"], function(t, e, n) {
                    n._useUTC = !0, n._tzm = Ee(so, t)
                });
                var ta = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var ea = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    na = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                Xe.fn = Re.prototype, Xe.invalid = Fe;
                var ia = nn(1, "add"),
                    oa = nn(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var aa = M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });
                V(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), V(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), En("gggg", "weekYear"), En("ggggg", "weekYear"), En("GGGG", "isoWeekYear"), En("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), G("G", ao), G("g", ao), G("GG", Xi, Gi), G("gg", Xi, Gi), G("GGGG", no, Qi), G("gggg", no, Qi), G("GGGGG", io, Ji), G("ggggg", io, Ji), K(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                    e[i.substr(0, 2)] = _(t)
                }), K(["gg", "GG"], function(e, n, i, o) {
                    n[o] = t.parseTwoDigitYear(e)
                }), V("Q", 0, "Qo", "quarter"), W("quarter", "Q"), z("quarter", 7), G("Q", qi), X("Q", function(t, e) {
                    e[po] = 3 * (_(t) - 1)
                }), V("D", ["DD", 2], "Do", "date"), W("date", "D"), z("date", 9), G("D", Xi), G("DD", Xi, Gi), G("Do", function(t, e) {
                    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
                }), X(["D", "DD"], go), X("Do", function(t, e) {
                    e[go] = _(t.match(Xi)[0])
                });
                var ra = ot("Date", !0);
                V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), z("dayOfYear", 4), G("DDD", eo), G("DDDD", Zi), X(["DDD", "DDDD"], function(t, e, n) {
                    n._dayOfYear = _(t)
                }), V("m", ["mm", 2], 0, "minute"), W("minute", "m"), z("minute", 14), G("m", Xi), G("mm", Xi, Gi), X(["m", "mm"], vo);
                var sa = ot("Minutes", !1);
                V("s", ["ss", 2], 0, "second"), W("second", "s"), z("second", 15), G("s", Xi), G("ss", Xi, Gi), X(["s", "ss"], yo);
                var la = ot("Seconds", !1);
                V("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), V(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), V(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), V(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), V(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), V(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), V(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), W("millisecond", "ms"), z("millisecond", 16), G("S", eo, qi), G("SS", eo, Gi), G("SSS", eo, Zi);
                var ua;
                for (ua = "SSSS"; ua.length <= 9; ua += "S") G(ua, oo);
                for (ua = "S"; ua.length <= 9; ua += "S") X(ua, qn);
                var da = ot("Milliseconds", !1);
                V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
                var ha = b.prototype;
                ha.add = ia, ha.calendar = rn, ha.clone = sn, ha.diff = pn, ha.endOf = Cn, ha.format = bn, ha.from = xn, ha.fromNow = wn, ha.to = _n, ha.toNow = kn, ha.get = st, ha.invalidAt = Nn, ha.isAfter = ln, ha.isBefore = un, ha.isBetween = dn, ha.isSame = hn, ha.isSameOrAfter = cn, ha.isSameOrBefore = fn, ha.isValid = Rn, ha.lang = aa, ha.locale = Sn, ha.localeData = Mn, ha.max = Jo, ha.min = Qo, ha.parsingFlags = Ln, ha.set = lt, ha.startOf = Dn, ha.subtract = oa, ha.toArray = On, ha.toObject = An, ha.toDate = In, ha.toISOString = vn, ha.inspect = yn, ha.toJSON = Fn, ha.toString = mn, ha.unix = Pn, ha.valueOf = Tn, ha.creationData = Wn, ha.year = ko, ha.isLeapYear = it, ha.weekYear = Yn, ha.isoWeekYear = zn, ha.quarter = ha.quarters = jn, ha.month = mt, ha.daysInMonth = vt, ha.week = ha.weeks = It, ha.isoWeek = ha.isoWeeks = Ot, ha.weeksInYear = Bn, ha.isoWeeksInYear = Hn, ha.date = ra, ha.day = ha.days = Yt, ha.weekday = zt, ha.isoWeekday = Ht, ha.dayOfYear = Un, ha.hour = ha.hours = Eo, ha.minute = ha.minutes = sa, ha.second = ha.seconds = la, ha.millisecond = ha.milliseconds = da, ha.utcOffset = He, ha.utc = Ve, ha.local = $e, ha.parseZone = je, ha.hasAlignedHourOffset = Ue, ha.isDST = qe, ha.isLocal = Ze, ha.isUtcOffset = Qe, ha.isUtc = Je, ha.isUTC = Je, ha.zoneAbbr = Gn, ha.zoneName = Zn, ha.dates = M("dates accessor is deprecated. Use date instead.", ra), ha.months = M("months accessor is deprecated. Use month instead", mt), ha.years = M("years accessor is deprecated. Use year instead", ko), ha.zone = M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Be), ha.isDSTShifted = M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ge);
                var ca = I.prototype;
                ca.calendar = O, ca.longDateFormat = A, ca.invalidDate = F, ca.ordinal = R, ca.preparse = Xn, ca.postformat = Xn, ca.relativeTime = L, ca.pastFuture = N, ca.set = T, ca.months = ht, ca.monthsShort = ct, ca.monthsParse = pt, ca.monthsRegex = bt, ca.monthsShortRegex = yt, ca.week = Ct, ca.firstDayOfYear = Pt, ca.firstDayOfWeek = Tt, ca.weekdays = Rt, ca.weekdaysMin = Nt, ca.weekdaysShort = Lt, ca.weekdaysParse = Et, ca.weekdaysRegex = Bt, ca.weekdaysShortRegex = Vt, ca.weekdaysMinRegex = $t, ca.isPM = Qt, ca.meridiem = Jt, ee("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10,
                            n = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                        return t + n
                    }
                }), t.lang = M("moment.lang is deprecated. Use moment.locale instead.", ee), t.langData = M("moment.langData is deprecated. Use moment.localeData instead.", oe);
                var fa = Math.abs,
                    pa = vi("ms"),
                    ga = vi("s"),
                    ma = vi("m"),
                    va = vi("h"),
                    ya = vi("d"),
                    ba = vi("w"),
                    xa = vi("M"),
                    wa = vi("y"),
                    _a = xi("milliseconds"),
                    ka = xi("seconds"),
                    Sa = xi("minutes"),
                    Ma = xi("hours"),
                    Da = xi("days"),
                    Ca = xi("months"),
                    Ta = xi("years"),
                    Pa = Math.round,
                    Ia = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    Oa = Math.abs,
                    Aa = Re.prototype;
                return Aa.isValid = Ae, Aa.abs = si, Aa.add = ui, Aa.subtract = di, Aa.as = gi, Aa.asMilliseconds = pa, Aa.asSeconds = ga, Aa.asMinutes = ma, Aa.asHours = va, Aa.asDays = ya, Aa.asWeeks = ba, Aa.asMonths = xa, Aa.asYears = wa, Aa.valueOf = mi, Aa._bubble = ci, Aa.clone = yi, Aa.get = bi, Aa.milliseconds = _a, Aa.seconds = ka, Aa.minutes = Sa, Aa.hours = Ma, Aa.days = Da, Aa.weeks = wi, Aa.months = Ca, Aa.years = Ta, Aa.humanize = Di, Aa.toISOString = Ti, Aa.toString = Ti, Aa.toJSON = Ti, Aa.locale = Sn, Aa.localeData = Mn, Aa.toIsoString = M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ti), Aa.lang = aa, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), G("x", ao), G("X", lo), X("X", function(t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t, 10))
                }), X("x", function(t, e, n) {
                    n._d = new Date(_(t))
                }), t.version = "2.20.1", i(Ce), t.fn = ha, t.min = Pe, t.max = Ie, t.now = Xo, t.utc = f, t.unix = Qn, t.months = ni, t.isDate = u, t.locale = ee, t.invalid = v, t.duration = Xe, t.isMoment = x, t.weekdays = oi, t.parseZone = Jn, t.localeData = oe, t.isDuration = Le, t.monthsShort = ii, t.weekdaysMin = ri, t.defineLocale = ne, t.updateLocale = ie, t.locales = ae, t.weekdaysShort = ai, t.normalizeUnits = E, t.relativeTimeRounding = Si, t.relativeTimeThreshold = Mi, t.calendarFormat = an, t.prototype = ha, t.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "YYYY-[W]WW",
                    MONTH: "YYYY-MM"
                }, t
            })
        }, {}],
        7: [function(t, e) {
            var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var i = t(49);
            for (var o in i) i.hasOwnProperty(o) && n.plugins.register(i[o]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = i.legend._element, n.Title = i.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }],
        8: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, n) {
                    return n.type = "bar", new t(e, n)
                }
            }
        }, {}],
        9: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, n) {
                    return n.type = "bubble", new t(e, n)
                }
            }
        }, {}],
        10: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, n) {
                    return n.type = "doughnut", new t(e, n)
                }
            }
        }, {}],
        11: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, n) {
                    return n.type = "line", new t(e, n)
                }
            }
        }, {}],
        12: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, n) {
                    return n.type = "polarArea", new t(e, n)
                }
            }
        }, {}],
        13: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, n) {
                    return n.type = "radar", new t(e, n)
                }
            }
        }, {}],
        14: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                t.Scatter = function(e, n) {
                    return n.type = "scatter", new t(e, n)
                }
            }
        }, {}],
        15: [function(t, e) {
            "use strict";

            function n(t, e) {
                var n, i, o, a, r = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();
                for (o = 1, a = e.length; o < a; ++o) r = Math.min(r, e[o] - e[o - 1]);
                for (o = 0, a = s.length; o < a; ++o) i = t.getPixelForTick(o), r = o > 0 ? Math.min(r, i - n) : r, n = i;
                return r
            }

            function i(t, e, n) {
                var i, o, a = n.barThickness,
                    r = e.stackCount,
                    l = e.pixels[t];
                return s.isNullOrUndef(a) ? (i = e.min * n.categoryPercentage, o = n.barPercentage) : (i = a * r, o = 1), {
                    chunk: i / r,
                    ratio: o,
                    start: l - i / 2
                }
            }

            function o(t, e, n) {
                var i, o, a = e.pixels,
                    r = a[t],
                    s = t > 0 ? a[t - 1] : null,
                    l = t < a.length - 1 ? a[t + 1] : null,
                    u = n.categoryPercentage;
                return null === s && (s = r - (null === l ? e.end - r : l - r)), null === l && (l = r + r - s), i = r - (r - s) / 2 * u, o = (l - s) / 2 * u, {
                    chunk: o / e.stackCount,
                    ratio: n.barPercentage,
                    start: i
                }
            }
            var a = t(25),
                r = t(40),
                s = t(45);
            a._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), a._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var n = "";
                            return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function(t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: r.Rectangle,
                    initialize: function() {
                        var e, n = this;
                        t.DatasetController.prototype.initialize.apply(n, arguments), e = n.getMeta(), e.stack = n.getDataset().stack, e.bar = !0
                    },
                    update: function(t) {
                        var e, n, i = this,
                            o = i.getMeta().data;
                        for (i._ruler = i.getRuler(), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t)
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            o = i.chart,
                            a = i.getMeta(),
                            r = i.getDataset(),
                            l = t.custom || {},
                            u = o.options.elements.rectangle;
                        t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                            datasetLabel: r.label,
                            label: o.data.labels[e],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : s.valueAtIndexOrDefault(r.backgroundColor, e, u.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : s.valueAtIndexOrDefault(r.borderColor, e, u.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : s.valueAtIndexOrDefault(r.borderWidth, e, u.borderWidth)
                        }, i.updateElementGeometry(t, e, n), t.pivot()
                    },
                    updateElementGeometry: function(t, e, n) {
                        var i = this,
                            o = t._model,
                            a = i.getValueScale(),
                            r = a.getBasePixel(),
                            s = a.isHorizontal(),
                            l = i._ruler || i.getRuler(),
                            u = i.calculateBarValuePixels(i.index, e),
                            d = i.calculateBarIndexPixels(i.index, e, l);
                        o.horizontal = s, o.base = n ? r : u.base, o.x = s ? n ? r : u.head : d.center, o.y = s ? d.center : n ? r : u.head, o.height = s ? d.size : void 0, o.width = s ? void 0 : d.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function(t) {
                        var e, n, i = this,
                            o = i.chart,
                            a = i.getIndexScale(),
                            r = a.options.stacked,
                            s = void 0 === t ? o.data.datasets.length : t + 1,
                            l = [];
                        for (e = 0; e < s; ++e) n = o.getDatasetMeta(e), n.bar && o.isDatasetVisible(e) && (r === !1 || r === !0 && l.indexOf(n.stack) === -1 || void 0 === r && (void 0 === n.stack || l.indexOf(n.stack) === -1)) && l.push(n.stack);
                        return l
                    },
                    getStackCount: function() {
                        return this._getStacks().length
                    },
                    getStackIndex: function(t, e) {
                        var n = this._getStacks(t),
                            i = void 0 !== e ? n.indexOf(e) : -1;
                        return i === -1 ? n.length - 1 : i
                    },
                    getRuler: function() {
                        var t, e, i, o = this,
                            a = o.getIndexScale(),
                            r = o.getStackCount(),
                            l = o.index,
                            u = a.isHorizontal(),
                            d = u ? a.left : a.top,
                            h = d + (u ? a.width : a.height),
                            c = [];
                        for (t = 0, e = o.getMeta().data.length; t < e; ++t) c.push(a.getPixelForValue(null, t, l));
                        return i = s.isNullOrUndef(a.options.barThickness) ? n(a, c) : -1, {
                            min: i,
                            pixels: c,
                            start: d,
                            end: h,
                            stackCount: r,
                            scale: a
                        }
                    },
                    calculateBarValuePixels: function(t, e) {
                        var n, i, o, a, r, s, l = this,
                            u = l.chart,
                            d = l.getMeta(),
                            h = l.getValueScale(),
                            c = u.data.datasets,
                            f = h.getRightValue(c[t].data[e]),
                            p = h.options.stacked,
                            g = d.stack,
                            m = 0;
                        if (p || void 0 === p && void 0 !== g)
                            for (n = 0; n < t; ++n) i = u.getDatasetMeta(n), i.bar && i.stack === g && i.controller.getValueScaleId() === h.id && u.isDatasetVisible(n) && (o = h.getRightValue(c[n].data[e]), (f < 0 && o < 0 || f >= 0 && o > 0) && (m += o));
                        return a = h.getPixelForValue(m), r = h.getPixelForValue(m + f), s = (r - a) / 2, {
                            size: s,
                            base: a,
                            head: r,
                            center: r + s / 2
                        }
                    },
                    calculateBarIndexPixels: function(t, e, n) {
                        var a = this,
                            r = n.scale.options,
                            l = "flex" === r.barThickness ? o(e, n, r) : i(e, n, r),
                            u = a.getStackIndex(t, a.getMeta().stack),
                            d = l.start + l.chunk * u + l.chunk / 2,
                            h = Math.min(s.valueOrDefault(r.maxBarThickness, 1 / 0), l.chunk * l.ratio);
                        return {
                            base: d - h / 2,
                            head: d + h / 2,
                            center: d,
                            size: h
                        }
                    },
                    draw: function() {
                        var t = this,
                            e = t.chart,
                            n = t.getValueScale(),
                            i = t.getMeta().data,
                            o = t.getDataset(),
                            a = i.length,
                            r = 0;
                        for (s.canvas.clipArea(e.ctx, e.chartArea); r < a; ++r) isNaN(n.getRightValue(o.data[r])) || i[r].draw();
                        s.canvas.unclipArea(e.ctx)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            o = t._model;
                        o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : s.valueAtIndexOrDefault(e.hoverBackgroundColor, n, s.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : s.valueAtIndexOrDefault(e.hoverBorderColor, n, s.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : s.valueAtIndexOrDefault(e.hoverBorderWidth, n, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            o = t._model,
                            a = this.chart.options.elements.rectangle;
                        o.backgroundColor = i.backgroundColor ? i.backgroundColor : s.valueAtIndexOrDefault(e.backgroundColor, n, a.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : s.valueAtIndexOrDefault(e.borderColor, n, a.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : s.valueAtIndexOrDefault(e.borderWidth, n, a.borderWidth)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        16: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                o = t(45);
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "",
                                i = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: i.Point,
                    update: function(t) {
                        var e = this,
                            n = e.getMeta(),
                            i = n.data;
                        o.each(i, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            o = i.getMeta(),
                            a = t.custom || {},
                            r = i.getScaleForId(o.xAxisID),
                            s = i.getScaleForId(o.yAxisID),
                            l = i._resolveElementOptions(t, e),
                            u = i.getDataset().data[e],
                            d = i.index,
                            h = n ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: n ? 0 : l.radius,
                            skip: a.skip || isNaN(h) || isNaN(c),
                            x: h,
                            y: c
                        }, t.pivot()
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor)), e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor)), e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                    },
                    removeHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius
                    },
                    _resolveElementOptions: function(t, e) {
                        var n, i, a, r = this,
                            s = r.chart,
                            l = s.data.datasets,
                            u = l[r.index],
                            d = t.custom || {},
                            h = s.options.elements.point,
                            c = o.options.resolve,
                            f = u.data[e],
                            p = {},
                            g = {
                                chart: s,
                                dataIndex: e,
                                dataset: u,
                                datasetIndex: r.index
                            },
                            m = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (n = 0, i = m.length; n < i; ++n) a = m[n], p[a] = c([d[a], u[a], h[a]], g, e);
                        return p.radius = c([d.radius, f ? f.r : void 0, u.radius, h.radius], g, e), p
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        17: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                o = t(45);
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        o = n.labels;
                    if (i.length)
                        for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                                var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[i],
                                    l = s && s.custom || {},
                                    u = o.valueAtIndexOrDefault,
                                    d = t.options.elements.arc,
                                    h = l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, i, d.backgroundColor),
                                    c = l.borderColor ? l.borderColor : u(r.borderColor, i, d.borderColor),
                                    f = l.borderWidth ? l.borderWidth : u(r.borderWidth, i, d.borderWidth);
                                return {
                                    text: n,
                                    fillStyle: h,
                                    strokeStyle: c,
                                    lineWidth: f,
                                    hidden: isNaN(r.data[i]) || a.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, o, a = e.index,
                            r = this.chart;
                        for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) o = r.getDatasetMeta(n), o.data[a] && (o.data[a].hidden = !o.data[a].hidden);
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: Math.PI * -.5,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.labels[t.index],
                                i = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return o.isArray(n) ? (n = n.slice(), n[0] += i) : n += i, n
                        }
                    }
                }
            }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function(t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: o.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function(t) {
                        var e = this,
                            n = e.chart,
                            i = n.chartArea,
                            a = n.options,
                            r = a.elements.arc,
                            s = i.right - i.left - r.borderWidth,
                            l = i.bottom - i.top - r.borderWidth,
                            u = Math.min(s, l),
                            d = {
                                x: 0,
                                y: 0
                            },
                            h = e.getMeta(),
                            c = a.cutoutPercentage,
                            f = a.circumference;
                        if (f < 2 * Math.PI) {
                            var p = a.rotation % (2 * Math.PI);
                            p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
                            var g = p + f,
                                m = {
                                    x: Math.cos(p),
                                    y: Math.sin(p)
                                },
                                v = {
                                    x: Math.cos(g),
                                    y: Math.sin(g)
                                },
                                y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                _ = c / 100,
                                k = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : _), v.x * (v.x < 0 ? 1 : _)),
                                    y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : _), v.y * (v.y < 0 ? 1 : _))
                                },
                                S = {
                                    x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : _), v.x * (v.x > 0 ? 1 : _)),
                                    y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : _), v.y * (v.y > 0 ? 1 : _))
                                },
                                M = {
                                    width: .5 * (S.x - k.x),
                                    height: .5 * (S.y - k.y)
                                };
                            u = Math.min(s / M.width, l / M.height), d = {
                                x: (S.x + k.x) * -.5,
                                y: (S.y + k.y) * -.5
                            }
                        }
                        n.borderWidth = e.getMaxBorderWidth(h.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(c ? n.outerRadius / 100 * c : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = d.x * n.outerRadius, n.offsetY = d.y * n.outerRadius, h.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(h.data, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            a = i.chart,
                            r = a.chartArea,
                            s = a.options,
                            l = s.animation,
                            u = (r.left + r.right) / 2,
                            d = (r.top + r.bottom) / 2,
                            h = s.rotation,
                            c = s.rotation,
                            f = i.getDataset(),
                            p = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            g = n && l.animateScale ? 0 : i.innerRadius,
                            m = n && l.animateScale ? 0 : i.outerRadius,
                            v = o.valueAtIndexOrDefault;
                        o.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _model: {
                                x: u + a.offsetX,
                                y: d + a.offsetY,
                                startAngle: h,
                                endAngle: c,
                                circumference: p,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(f.label, e, a.data.labels[e])
                            }
                        });
                        var y = t._model;
                        this.removeHoverStyle(t), n && l.animateRotate || (0 === e ? y.startAngle = s.rotation : y.startAngle = i.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, e = this.getDataset(),
                            n = this.getMeta(),
                            i = 0;
                        return o.each(n.data, function(n, o) {
                            t = e.data[o], isNaN(t) || n.hidden || (i += Math.abs(t))
                        }), i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, n, i = 0, o = this.index, a = t.length, r = 0; r < a; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = t[r]._chart ? t[r]._chart.config.data.datasets[o].hoverBorderWidth : 0, i = e > i ? e : i, i = n > i ? n : i;
                        return i
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        18: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                o = t(45);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function(t) {
                function e(t, e) {
                    return o.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    update: function(t) {
                        var n, i, a, r = this,
                            s = r.getMeta(),
                            l = s.dataset,
                            u = s.data || [],
                            d = r.chart.options,
                            h = d.elements.line,
                            c = r.getScaleForId(s.yAxisID),
                            f = r.getDataset(),
                            p = e(f, d);
                        for (p && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = c, l._datasetIndex = r.index, l._children = u, l._model = {
                                spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                                tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, h.tension),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || h.backgroundColor,
                                borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || h.borderWidth,
                                borderColor: a.borderColor ? a.borderColor : f.borderColor || h.borderColor,
                                borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || h.borderCapStyle,
                                borderDash: a.borderDash ? a.borderDash : f.borderDash || h.borderDash,
                                borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || h.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || h.borderJoinStyle,
                                fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : h.fill,
                                steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, h.stepped),
                                cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, h.cubicInterpolationMode)
                            }, l.pivot()), n = 0, i = u.length; n < i; ++n) r.updateElement(u[n], n, t);
                        for (p && 0 !== l._model.tension && r.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) u[n].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var n = this.chart.options.elements.point.backgroundColor,
                            i = this.getDataset(),
                            a = t.custom || {};
                        return a.backgroundColor ? n = a.backgroundColor : i.pointBackgroundColor ? n = o.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
                    },
                    getPointBorderColor: function(t, e) {
                        var n = this.chart.options.elements.point.borderColor,
                            i = this.getDataset(),
                            a = t.custom || {};
                        return a.borderColor ? n = a.borderColor : i.pointBorderColor ? n = o.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
                    },
                    getPointBorderWidth: function(t, e) {
                        var n = this.chart.options.elements.point.borderWidth,
                            i = this.getDataset(),
                            a = t.custom || {};
                        return isNaN(a.borderWidth) ? !isNaN(i.pointBorderWidth) || o.isArray(i.pointBorderWidth) ? n = o.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = a.borderWidth, n
                    },
                    updateElement: function(t, e, n) {
                        var i, a, r = this,
                            s = r.getMeta(),
                            l = t.custom || {},
                            u = r.getDataset(),
                            d = r.index,
                            h = u.data[e],
                            c = r.getScaleForId(s.yAxisID),
                            f = r.getScaleForId(s.xAxisID),
                            p = r.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof h ? h : NaN, e, d), a = n ? c.getBasePixel() : r.calculatePointY(h, e, d), t._xScale = f, t._yScale = c, t._datasetIndex = d, t._index = e, t._model = {
                            x: i,
                            y: a,
                            skip: l.skip || isNaN(i) || isNaN(a),
                            radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
                            pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, n) {
                        var i, o, a, r = this,
                            s = r.chart,
                            l = r.getMeta(),
                            u = r.getScaleForId(l.yAxisID),
                            d = 0,
                            h = 0;
                        if (u.options.stacked) {
                            for (i = 0; i < n; i++)
                                if (o = s.data.datasets[i], a = s.getDatasetMeta(i), "line" === a.type && a.yAxisID === u.id && s.isDatasetVisible(i)) {
                                    var c = Number(u.getRightValue(o.data[e]));
                                    c < 0 ? h += c || 0 : d += c || 0
                                }
                            var f = Number(u.getRightValue(t));
                            return f < 0 ? u.getPixelForValue(h + f) : u.getPixelForValue(d + f)
                        }
                        return u.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        function t(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        var e, n, i, a, r, s = this,
                            l = s.getMeta(),
                            u = s.chart.chartArea,
                            d = l.data || [];
                        if (l.dataset._model.spanGaps && (d = d.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === l.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(d);
                        else
                            for (e = 0, n = d.length; e < n; ++e) i = d[e], a = i._model, r = o.splineCurve(o.previousItem(d, e)._model, a, o.nextItem(d, e)._model, l.dataset._model.tension), a.controlPointPreviousX = r.previous.x, a.controlPointPreviousY = r.previous.y, a.controlPointNextX = r.next.x, a.controlPointNextY = r.next.y;
                        if (s.chart.options.elements.line.capBezierPoints)
                            for (e = 0, n = d.length; e < n; ++e) a = d[e]._model, a.controlPointPreviousX = t(a.controlPointPreviousX, u.left, u.right), a.controlPointPreviousY = t(a.controlPointPreviousY, u.top, u.bottom), a.controlPointNextX = t(a.controlPointNextX, u.left, u.right), a.controlPointNextY = t(a.controlPointNextY, u.top, u.bottom)
                    },
                    draw: function() {
                        var t = this,
                            n = t.chart,
                            i = t.getMeta(),
                            a = i.data || [],
                            r = n.chartArea,
                            s = a.length,
                            l = 0;
                        for (o.canvas.clipArea(n.ctx, r), e(t.getDataset(), n.options) && i.dataset.draw(), o.canvas.unclipArea(n.ctx); l < s; ++l) a[l].draw(r)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            a = t._model;
                        a.radius = i.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            n = e.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            a = t.custom || {},
                            r = t._model;
                        void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), r.radius = a.radius || o.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, i), r.borderColor = e.getPointBorderColor(t, i), r.borderWidth = e.getPointBorderWidth(t, i)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        19: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                o = t(45);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        o = n.labels;
                    if (i.length)
                        for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                                var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[i],
                                    l = s.custom || {},
                                    u = o.valueAtIndexOrDefault,
                                    d = t.options.elements.arc,
                                    h = l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, i, d.backgroundColor),
                                    c = l.borderColor ? l.borderColor : u(r.borderColor, i, d.borderColor),
                                    f = l.borderWidth ? l.borderWidth : u(r.borderWidth, i, d.borderWidth);
                                return {
                                    text: n,
                                    fillStyle: h,
                                    strokeStyle: c,
                                    lineWidth: f,
                                    hidden: isNaN(r.data[i]) || a.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, o, a = e.index,
                            r = this.chart;
                        for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) o = r.getDatasetMeta(n), o.data[a].hidden = !o.data[a].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: o.noop,
                    update: function(t) {
                        var e = this,
                            n = e.chart,
                            i = n.chartArea,
                            a = e.getMeta(),
                            r = n.options,
                            s = r.elements.arc,
                            l = Math.min(i.right - i.left, i.bottom - i.top);
                        n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(r.cutoutPercentage ? n.outerRadius / 100 * r.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        for (var i = this, a = i.chart, r = i.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, h = i.calculateCircumference(r.data[e]), c = u.xCenter, f = u.yCenter, p = 0, g = i.getMeta(), m = 0; m < e; ++m) isNaN(r.data[m]) || g.data[m].hidden || ++p;
                        var v = s.startAngle,
                            y = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                            b = v + h * p,
                            x = b + (t.hidden ? 0 : h),
                            w = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
                        o.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: u,
                            _model: {
                                x: c,
                                y: f,
                                innerRadius: 0,
                                outerRadius: n ? w : y,
                                startAngle: n && l.animateRotate ? v : b,
                                endAngle: n && l.animateRotate ? v : x,
                                label: o.valueAtIndexOrDefault(d, e, d[e])
                            }
                        }), i.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            n = 0;
                        return o.each(e.data, function(e, i) {
                            isNaN(t.data[i]) || e.hidden || n++
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        20: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                o = t(45);
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    linkScales: o.noop,
                    update: function(t) {
                        var e = this,
                            n = e.getMeta(),
                            i = n.dataset,
                            a = n.data,
                            r = i.custom || {},
                            s = e.getDataset(),
                            l = e.chart.options.elements.line,
                            u = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(n.dataset, {
                            _datasetIndex: e.index,
                            _scale: u,
                            _children: a,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), n.dataset.pivot(), o.each(a, function(n, i) {
                            e.updateElement(n, i, t)
                        }, e), e.updateBezierControlPoints()
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            a = t.custom || {},
                            r = i.getDataset(),
                            s = i.chart.scale,
                            l = i.chart.options.elements.point,
                            u = s.getPointPositionForValue(e, r.data[e]);
                        void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: s,
                            _model: {
                                x: n ? s.xCenter : u.x,
                                y: n ? s.yCenter : u.y,
                                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, i.chart.options.elements.line.tension),
                                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
                            }
                        }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            e = this.getMeta();
                        o.each(e.data, function(n, i) {
                            var a = n._model,
                                r = o.splineCurve(o.previousItem(e.data, i, !0)._model, a, o.nextItem(e.data, i, !0)._model, a.tension);
                            a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), n.pivot()
                        })
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            a = t._model;
                        a.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            a = t._model,
                            r = this.chart.options.elements.point;
                        a.radius = n.radius ? n.radius : o.valueAtIndexOrDefault(e.pointRadius, i, r.radius), a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, i, r.borderWidth)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        21: [function(t, e) {
            "use strict";
            var n = t(25);
            n._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            25: 25
        }],
        22: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                o = t(45);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), e.exports = function(t) {
                t.Animation = i.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, n, i) {
                        var o, a, r = this.animations;
                        for (e.chart = t, i || (t.animating = !0), o = 0, a = r.length; o < a; ++o)
                            if (r[o].chart === t) return void(r[o] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var e = o.findIndex(this.animations, function(e) {
                            return e.chart === t
                        });
                        e !== -1 && (this.animations.splice(e, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            n = 0;
                        t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                        var i = Date.now();
                        t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                    },
                    advance: function(t) {
                        for (var e, n, i = this.animations, a = 0; a < i.length;) e = i[a], n = e.chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(a, 1)) : ++a
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        23: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45),
                o = t(28),
                a = t(30),
                r = t(48),
                s = t(31);
            e.exports = function(t) {
                function e(t) {
                    t = t || {};
                    var e = t.data = t.data || {};
                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = i.configMerge(n.global, n[t.type], t.options || {}), t
                }

                function l(e) {
                    var n = e.options;
                    i.each(e.scales, function(t) {
                        a.removeBox(e, t)
                    }), n = i.configMerge(t.defaults.global, t.defaults[e.config.type], n), e.options = e.config.options = n, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = n.tooltips, e.tooltip.initialize()
                }

                function u(t) {
                    return "top" === t || "bottom" === t
                }
                t.types = {}, t.instances = {}, t.controllers = {}, i.extend(t.prototype, {
                    construct: function(n, o) {
                        var a = this;
                        o = e(o);
                        var s = r.acquireContext(n, o),
                            l = s && s.canvas,
                            u = l && l.height,
                            d = l && l.width;
                        return a.id = i.uid(), a.ctx = s, a.canvas = l, a.config = o, a.width = d, a.height = u, a.aspectRatio = u ? d / u : null, a.options = o.options, a._bufferedRender = !1, a.chart = a, a.controller = a, t.instances[a.id] = a, Object.defineProperty(a, "data", {
                            get: function() {
                                return a.config.data
                            },
                            set: function(t) {
                                a.config.data = t
                            }
                        }), s && l ? (a.initialize(), void a.update()) : void console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return s.notify(t, "beforeInit"), i.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), s.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return i.canvas.clear(this), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            n = e.options,
                            o = e.canvas,
                            a = n.maintainAspectRatio && e.aspectRatio || null,
                            r = Math.max(0, Math.floor(i.getMaximumWidth(o))),
                            l = Math.max(0, Math.floor(a ? r / a : i.getMaximumHeight(o)));
                        if ((e.width !== r || e.height !== l) && (o.width = e.width = r, o.height = e.height = l, o.style.width = r + "px", o.style.height = l + "px", i.retinaScale(e, n.devicePixelRatio), !t)) {
                            var u = {
                                width: r,
                                height: l
                            };
                            s.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            n = t.scale;
                        i.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), i.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), n && (n.id = n.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var e = this,
                            n = e.options,
                            o = e.scales || {},
                            a = [],
                            r = Object.keys(o).reduce(function(t, e) {
                                return t[e] = !1, t
                            }, {});
                        n.scales && (a = a.concat((n.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (n.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), n.scale && a.push({
                            options: n.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), i.each(a, function(n) {
                            var a = n.options,
                                s = a.id,
                                l = i.valueOrDefault(a.type, n.dtype);
                            u(a.position) !== u(n.dposition) && (a.position = n.dposition), r[s] = !0;
                            var d = null;
                            if (s in o && o[s].type === l) d = o[s], d.options = a, d.ctx = e.ctx, d.chart = e;
                            else {
                                var h = t.scaleService.getScaleConstructor(l);
                                if (!h) return;
                                d = new h({
                                    id: s,
                                    type: l,
                                    options: a,
                                    ctx: e.ctx,
                                    chart: e
                                }), o[d.id] = d
                            }
                            d.mergeTicksOptions(), n.isDefault && (e.scale = d)
                        }), i.each(r, function(t, e) {
                            t || delete o[e]
                        }), e.scales = o, t.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this,
                            n = [],
                            o = [];
                        return i.each(e.data.datasets, function(i, a) {
                            var r = e.getDatasetMeta(a),
                                s = i.type || e.config.type;
                            if (r.type && r.type !== s && (e.destroyDatasetMeta(a), r = e.getDatasetMeta(a)), r.type = s, n.push(r.type), r.controller) r.controller.updateIndex(a), r.controller.linkScales();
                            else {
                                var l = t.controllers[r.type];
                                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new l(e, a), o.push(r.controller)
                            }
                        }, e), o
                    },
                    resetElements: function() {
                        var t = this;
                        i.each(t.data.datasets, function(e, n) {
                            t.getDatasetMeta(n).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var e = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), l(e), s._invalidate(e), s.notify(e, "beforeUpdate") !== !1) {
                            e.tooltip._data = e.data;
                            var n = e.buildOrUpdateControllers();
                            i.each(e.data.datasets, function(t, n) {
                                e.getDatasetMeta(n).controller.buildOrUpdateElements()
                            }, e), e.updateLayout(), e.options.animation && e.options.animation.duration && i.each(n, function(t) {
                                t.reset()
                            }), e.updateDatasets(), e.tooltip.initialize(), e.lastActive = [], s.notify(e, "afterUpdate"), e._bufferedRender ? e._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : e.render(t)
                        }
                    },
                    updateLayout: function() {
                        var t = this;
                        s.notify(t, "beforeLayout") !== !1 && (a.update(this, this.width, this.height), s.notify(t, "afterScaleUpdate"), s.notify(t, "afterLayout"))
                    },
                    updateDatasets: function() {
                        var t = this;
                        if (s.notify(t, "beforeDatasetsUpdate") !== !1) {
                            for (var e = 0, n = t.data.datasets.length; e < n; ++e) t.updateDataset(e);
                            s.notify(t, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this,
                            n = e.getDatasetMeta(t),
                            i = {
                                meta: n,
                                index: t
                            };
                        s.notify(e, "beforeDatasetUpdate", [i]) !== !1 && (n.controller.update(), s.notify(e, "afterDatasetUpdate", [i]))
                    },
                    render: function(e) {
                        var n = this;
                        e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        });
                        var o = e.duration,
                            a = e.lazy;
                        if (s.notify(n, "beforeRender") !== !1) {
                            var r = n.options.animation,
                                l = function(t) {
                                    s.notify(n, "afterRender"), i.callback(r && r.onComplete, [t], n)
                                };
                            if (r && ("undefined" != typeof o && 0 !== o || "undefined" == typeof o && 0 !== r.duration)) {
                                var u = new t.Animation({
                                    numSteps: (o || r.duration) / 16.66,
                                    easing: e.easing || r.easing,
                                    render: function(t, e) {
                                        var n = i.easing.effects[e.easing],
                                            o = e.currentStep,
                                            a = o / e.numSteps;
                                        t.draw(n(a), a, o)
                                    },
                                    onAnimationProgress: r.onProgress,
                                    onAnimationComplete: l
                                });
                                t.animationService.addAnimation(n, u, o, a)
                            } else n.draw(), l(new t.Animation({
                                numSteps: 0,
                                chart: n
                            }));
                            return n
                        }
                    },
                    draw: function(t) {
                        var e = this;
                        e.clear(), i.isNullOrUndef(t) && (t = 1), e.transition(t), s.notify(e, "beforeDraw", [t]) !== !1 && (i.each(e.boxes, function(t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, "afterDraw", [t]))
                    },
                    transition: function(t) {
                        for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n) e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                        e.tooltip.transition(t)
                    },
                    drawDatasets: function(t) {
                        var e = this;
                        if (s.notify(e, "beforeDatasetsDraw", [t]) !== !1) {
                            for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                            s.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var n = this,
                            i = n.getDatasetMeta(t),
                            o = {
                                meta: i,
                                index: t,
                                easingValue: e
                            };
                        s.notify(n, "beforeDatasetDraw", [o]) !== !1 && (i.controller.draw(e), s.notify(n, "afterDatasetDraw", [o]))
                    },
                    _drawTooltip: function(t) {
                        var e = this,
                            n = e.tooltip,
                            i = {
                                tooltip: n,
                                easingValue: t
                            };
                        s.notify(e, "beforeTooltipDraw", [i]) !== !1 && (n.draw(), s.notify(e, "afterTooltipDraw", [i]))
                    },
                    getElementAtEvent: function(t) {
                        return o.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return o.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return o.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, n) {
                        var i = o.modes[e];
                        return "function" == typeof i ? i(this, t, n) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return o.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this,
                            n = e.data.datasets[t];
                        n._meta || (n._meta = {});
                        var i = n._meta[e.id];
                        return i || (i = n._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            n = this.data.datasets[t],
                            i = n._meta && n._meta[e];
                        i && (i.controller.destroy(), delete n._meta[e])
                    },
                    destroy: function() {
                        var e, n, o = this,
                            a = o.canvas;
                        for (o.stop(), e = 0, n = o.data.datasets.length; e < n; ++e) o.destroyDatasetMeta(e);
                        a && (o.unbindEvents(), i.canvas.clear(o), r.releaseContext(o.ctx), o.canvas = null, o.ctx = null), s.notify(o, "destroy"), delete t.instances[o.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    },
                    bindEvents: function() {
                        var t = this,
                            e = t._listeners = {},
                            n = function() {
                                t.eventHandler.apply(t, arguments)
                            };
                        i.each(t.options.events, function(i) {
                            r.addEventListener(t, i, n), e[i] = n
                        }), t.options.responsive && (n = function() {
                            t.resize()
                        }, r.addEventListener(t, "resize", n), e.resize = n)
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, i.each(e, function(e, n) {
                            r.removeEventListener(t, n, e)
                        }))
                    },
                    updateHoverStyle: function(t, e, n) {
                        var i, o, a, r = n ? "setHoverStyle" : "removeHoverStyle";
                        for (o = 0, a = t.length; o < a; ++o) i = t[o], i && this.getDatasetMeta(i._datasetIndex).controller[r](i)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            n = e.tooltip;
                        if (s.notify(e, "beforeEvent", [t]) !== !1) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var i = e.handleEvent(t);
                            n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), s.notify(e, "afterEvent", [t]);
                            var o = e._bufferedRequest;
                            return o ? e.render(o) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            n = e.options || {},
                            o = n.hover,
                            a = !1;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, o.mode, o), i.callback(n.onHover || n.hover.onHover, [t["native"], e.active], e), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t["native"], e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, o.mode, !1), e.active.length && o.mode && e.updateHoverStyle(e.active, o.mode, !0), a = !i.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, a
                    }
                }), t.Controller = t
            }
        }, {
            25: 25,
            28: 28,
            30: 30,
            31: 31,
            45: 45,
            48: 48
        }],
        24: [function(t, e) {
            "use strict";
            var n = t(45);
            e.exports = function(t) {
                function e(t, e) {
                    return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [e]
                        }
                    }), void o.forEach(function(e) {
                        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                            o = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                    a = o.apply(this, e);
                                return n.each(t._chartjs.listeners, function(t) {
                                    "function" == typeof t[i] && t[i].apply(t, e)
                                }), a
                            }
                        })
                    }))
                }

                function i(t, e) {
                    var n = t._chartjs;
                    if (n) {
                        var i = n.listeners,
                            a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1), i.length > 0 || (o.forEach(function(e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                var o = ["push", "pop", "shift", "splice", "unshift"];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, n.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        var n = this;
                        n.chart = t, n.index = e, n.linkScales(), n.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            n = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && i(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            n = e.dataElementType;
                        return n && new n({
                            _chart: e.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, n = this,
                            i = n.getMeta(),
                            o = n.getDataset().data || [],
                            a = i.data;
                        for (t = 0, e = o.length; t < e; ++t) a[t] = a[t] || n.createMetaData(t);
                        i.dataset = i.dataset || n.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            n = t.getDataset(),
                            o = n.data || (n.data = []);
                        t._data !== o && (t._data && i(t._data, t), e(o, t), t._data = o), t.resyncElements()
                    },
                    update: n.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), n = e.data || [], i = n.length, o = 0; o < i; ++o) n[o].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            n = e.length,
                            i = 0;
                        for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            o = t._index,
                            a = t.custom || {},
                            r = n.valueAtIndexOrDefault,
                            s = t._model;
                        s.backgroundColor = a.backgroundColor ? a.backgroundColor : r(i.backgroundColor, o, e.backgroundColor), s.borderColor = a.borderColor ? a.borderColor : r(i.borderColor, o, e.borderColor), s.borderWidth = a.borderWidth ? a.borderWidth : r(i.borderWidth, o, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            o = t.custom || {},
                            a = n.valueAtIndexOrDefault,
                            r = n.getHoverColor,
                            s = t._model;
                        s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : a(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : a(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : a(e.hoverBorderWidth, i, s.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this,
                            e = t.getMeta(),
                            n = t.getDataset().data,
                            i = e.data.length,
                            o = n.length;
                        o < i ? e.data.splice(o, i - o) : o > i && t.insertElements(i, o - i)
                    },
                    insertElements: function(t, e) {
                        for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = n.inherits
            }
        }, {
            45: 45
        }],
        25: [function(t, e) {
            "use strict";
            var n = t(45);
            e.exports = {
                _set: function(t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            45: 45
        }],
        26: [function(t, e) {
            "use strict";

            function n(t, e, n, o) {
                var a, r, s, l, u, d, h, c, f, p = Object.keys(n);
                for (a = 0, r = p.length; a < r; ++a)
                    if (s = p[a], d = n[s], e.hasOwnProperty(s) || (e[s] = d), l = e[s], l !== d && "_" !== s[0]) {
                        if (t.hasOwnProperty(s) || (t[s] = l), u = t[s], h = typeof d, h === typeof u)
                            if ("string" === h) {
                                if (c = i(u), c.valid && (f = i(d), f.valid)) {
                                    e[s] = f.mix(c, o).rgbString();
                                    continue
                                }
                            } else if ("number" === h && isFinite(u) && isFinite(d)) {
                            e[s] = u + (d - u) * o;
                            continue
                        }
                        e[s] = d
                    }
            }
            var i = t(2),
                o = t(45),
                a = function(t) {
                    o.extend(this, t), this.initialize.apply(this, arguments)
                };
            o.extend(a.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = o.clone(t._model)), t._start = {}, t
                },
                transition: function(t) {
                    var e = this,
                        i = e._model,
                        o = e._start,
                        a = e._view;
                    return i && 1 !== t ? (a || (a = e._view = {}), o || (o = e._start = {}), n(o, a, i, t), e) : (e._view = i, e._start = null, e)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return o.isNumber(this._model.x) && o.isNumber(this._model.y)
                }
            }), a.extend = o.inherits, e.exports = a
        }, {
            2: 2,
            45: 45
        }],
        27: [function(t, e) {
            "use strict";
            var n = t(2),
                i = t(25),
                o = t(45);
            e.exports = function(t) {
                function e(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function a(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }

                function r(t, n, i) {
                    var o = document.defaultView,
                        r = t.parentNode,
                        s = o.getComputedStyle(t)[n],
                        l = o.getComputedStyle(r)[n],
                        u = a(s),
                        d = a(l),
                        h = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? e(s, t, i) : h, d ? e(l, r, i) : h) : "none"
                }
                o.configMerge = function() {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, n, i, a) {
                            var r = n[e] || {},
                                s = i[e];
                            "scales" === e ? n[e] = o.scaleMerge(r, s) : "scale" === e ? n[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, n, i, a)
                        }
                    })
                }, o.scaleMerge = function() {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, n, i, a) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var r, s, l, u = i[e].length;
                                for (n[e] || (n[e] = []), r = 0; r < u; ++r) l = i[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= n[e].length && n[e].push({}), !n[e][r].type || l.type && l.type !== n[e][r].type ? o.merge(n[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(n[e][r], l)
                            } else o._merger(e, n, i, a)
                        }
                    })
                }, o.where = function(t, e) {
                    if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return o.each(t, function(t) {
                        e(t) && n.push(t)
                    }), n
                }, o.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                } : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, o = t.length; i < o; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, o.findNextWhere = function(t, e, n) {
                    o.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, o.findPreviousWhere = function(t, e, n) {
                    o.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var a = t[i];
                        if (e(a)) return a
                    }
                }, o.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, o.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e < t && n + e > t
                }, o.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                }, o.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                        n = Math.round(e),
                        i = t === Math.pow(10, n);
                    return i ? n : e
                }, o.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        o = Math.sqrt(n * n + i * i),
                        a = Math.atan2(i, n);
                    return a < -.5 * Math.PI && (a += 2 * Math.PI), {
                        angle: a,
                        distance: o
                    }
                }, o.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, o.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }, o.splineCurve = function(t, e, n, i) {
                    var o = t.skip ? e : t,
                        a = e,
                        r = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l);
                    u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;
                    var h = i * u,
                        c = i * d;
                    return {
                        previous: {
                            x: a.x - h * (r.x - o.x),
                            y: a.y - h * (r.y - o.y)
                        },
                        next: {
                            x: a.x + c * (r.x - o.x),
                            y: a.y + c * (r.y - o.y)
                        }
                    }
                }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
                    var e, n, i, a, r = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        s = r.length;
                    for (e = 0; e < s; ++e)
                        if (i = r[e], !i.model.skip) {
                            if (n = e > 0 ? r[e - 1] : null, a = e < s - 1 ? r[e + 1] : null, a && !a.model.skip) {
                                var l = a.model.x - i.model.x;
                                i.deltaK = 0 !== l ? (a.model.y - i.model.y) / l : 0
                            }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                        }
                    var u, d, h, c;
                    for (e = 0; e < s - 1; ++e) i = r[e], a = r[e + 1], i.model.skip || a.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, c = Math.pow(u, 2) + Math.pow(d, 2), c <= 9 || (h = 3 / Math.sqrt(c), i.mK = u * h * i.deltaK, a.mK = d * h * i.deltaK)));
                    var f;
                    for (e = 0; e < s; ++e) i = r[e], i.model.skip || (n = e > 0 ? r[e - 1] : null, a = e < s - 1 ? r[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK))
                }, o.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, o.niceNum = function(t, e) {
                    var n, i = Math.floor(o.log10(t)),
                        a = t / Math.pow(10, i);
                    return n = e ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10, n * Math.pow(10, i)
                }, o.requestAnimFrame = function() {
                    return "undefined" == typeof window ? function(t) {
                        t()
                    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                }(), o.getRelativePosition = function(t, e) {
                    var n, i, a = t.originalEvent || t,
                        r = t.currentTarget || t.srcElement,
                        s = r.getBoundingClientRect(),
                        l = a.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = a.clientX, i = a.clientY);
                    var u = parseFloat(o.getStyle(r, "padding-left")),
                        d = parseFloat(o.getStyle(r, "padding-top")),
                        h = parseFloat(o.getStyle(r, "padding-right")),
                        c = parseFloat(o.getStyle(r, "padding-bottom")),
                        f = s.right - s.left - u - h,
                        p = s.bottom - s.top - d - c;
                    return n = Math.round((n - s.left - u) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - d) / p * r.height / e.currentDevicePixelRatio), {
                        x: n,
                        y: i
                    }
                }, o.getConstraintWidth = function(t) {
                    return r(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function(t) {
                    return r(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var n = parseInt(o.getStyle(e, "padding-left"), 10),
                        i = parseInt(o.getStyle(e, "padding-right"), 10),
                        a = e.clientWidth - n - i,
                        r = o.getConstraintWidth(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var n = parseInt(o.getStyle(e, "padding-top"), 10),
                        i = parseInt(o.getStyle(e, "padding-bottom"), 10),
                        a = e.clientHeight - n - i,
                        r = o.getConstraintHeight(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            o = t.height,
                            a = t.width;
                        i.height = o * n, i.width = a * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = o + "px", i.style.width = a + "px")
                    }
                }, o.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, o.longestText = function(t, e, n, i) {
                    i = i || {};
                    var a = i.data = i.data || {},
                        r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
                    var s = 0;
                    o.each(n, function(e) {
                        void 0 !== e && null !== e && o.isArray(e) !== !0 ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function(e) {
                            void 0 === e || null === e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
                        })
                    });
                    var l = r.length / 2;
                    if (l > n.length) {
                        for (var u = 0; u < l; u++) delete a[r[u]];
                        r.splice(0, l)
                    }
                    return s
                }, o.measureText = function(t, e, n, i, o) {
                    var a = e[o];
                    return a || (a = e[o] = t.measureText(o).width, n.push(o)), a > i && (i = a), i
                }, o.numberOfLabelLines = function(t) {
                    var e = 1;
                    return o.each(t, function(t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, o.color = n ? function(t) {
                    return t instanceof CanvasGradient && (t = i.global.defaultColor), n(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, o.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            2: 2,
            25: 25,
            45: 45
        }],
        28: [function(t, e) {
            "use strict";

            function n(t, e) {
                return t["native"] ? {
                    x: t.x,
                    y: t.y
                } : l.getRelativePosition(t, e)
            }

            function i(t, e) {
                var n, i, o, a, r, s = t.data.datasets;
                for (i = 0, a = s.length; i < a; ++i)
                    if (t.isDatasetVisible(i))
                        for (n = t.getDatasetMeta(i), o = 0, r = n.data.length; o < r; ++o) {
                            var l = n.data[o];
                            l._view.skip || e(l)
                        }
            }

            function o(t, e) {
                var n = [];
                return i(t, function(t) {
                    t.inRange(e.x, e.y) && n.push(t)
                }), n
            }

            function a(t, e, n, o) {
                var a = Number.POSITIVE_INFINITY,
                    r = [];
                return i(t, function(t) {
                    if (!n || t.inRange(e.x, e.y)) {
                        var i = t.getCenterPoint(),
                            s = o(e, i);
                        s < a ? (r = [t], a = s) : s === a && r.push(t)
                    }
                }), r
            }

            function r(t) {
                var e = t.indexOf("x") !== -1,
                    n = t.indexOf("y") !== -1;
                return function(t, i) {
                    var o = e ? Math.abs(t.x - i.x) : 0,
                        a = n ? Math.abs(t.y - i.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
                }
            }

            function s(t, e, i) {
                var s = n(e, t);
                i.axis = i.axis || "x";
                var l = r(i.axis),
                    u = i.intersect ? o(t, s) : a(t, s, !1, l),
                    d = [];
                return u.length ? (t.data.datasets.forEach(function(e, n) {
                    if (t.isDatasetVisible(n)) {
                        var i = t.getDatasetMeta(n),
                            o = i.data[u[0]._index];
                        o && !o._view.skip && d.push(o)
                    }
                }), d) : []
            }
            var l = t(45);
            e.exports = {
                modes: {
                    single: function(t, e) {
                        var o = n(e, t),
                            a = [];
                        return i(t, function(t) {
                            if (t.inRange(o.x, o.y)) return a.push(t), a
                        }), a.slice(0, 1)
                    },
                    label: s,
                    index: s,
                    dataset: function(t, e, i) {
                        var s = n(e, t);
                        i.axis = i.axis || "xy";
                        var l = r(i.axis),
                            u = i.intersect ? o(t, s) : a(t, s, !1, l);
                        return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                    },
                    "x-axis": function(t, e) {
                        return s(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        var i = n(e, t);
                        return o(t, i)
                    },
                    nearest: function(t, e, i) {
                        var o = n(e, t);
                        i.axis = i.axis || "xy";
                        var s = r(i.axis),
                            l = a(t, o, i.intersect, s);
                        return l.length > 1 && l.sort(function(t, e) {
                            var n = t.getArea(),
                                i = e.getArea(),
                                o = n - i;
                            return 0 === o && (o = t._datasetIndex - e._datasetIndex), o
                        }), l.slice(0, 1)
                    },
                    x: function(t, e, o) {
                        var a = n(e, t),
                            r = [],
                            s = !1;
                        return i(t, function(t) {
                            t.inXRange(a.x) && r.push(t), t.inRange(a.x, a.y) && (s = !0)
                        }), o.intersect && !s && (r = []), r
                    },
                    y: function(t, e, o) {
                        var a = n(e, t),
                            r = [],
                            s = !1;
                        return i(t, function(t) {
                            t.inYRange(a.y) && r.push(t), t.inRange(a.x, a.y) && (s = !0)
                        }), o.intersect && !s && (r = []), r
                    }
                }
            }
        }, {
            45: 45
        }],
        29: [function(t, e) {
            "use strict";
            var n = t(25);
            n._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t, t
            }
        }, {
            25: 25
        }],
        30: [function(t, e) {
            "use strict";

            function n(t, e) {
                return o.where(t, function(t) {
                    return t.position === e
                })
            }

            function i(t, e) {
                t.forEach(function(t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function(t, n) {
                    var i = e ? n : t,
                        o = e ? t : n;
                    return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
                }), t.forEach(function(t) {
                    delete t._tmpIndex_
                })
            }
            var o = t(45);
            e.exports = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    var n = t.boxes ? t.boxes.indexOf(e) : -1;
                    n !== -1 && t.boxes.splice(n, 1)
                },
                configure: function(t, e, n) {
                    for (var i, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) i = o[r], n.hasOwnProperty(i) && (e[i] = n[i])
                },
                update: function(t, e, a) {
                    function r(t) {
                        var e, n = t.isHorizontal();
                        n ? (e = t.update(t.fullWidth ? w : C, D), T -= e.height) : (e = t.update(M, T), C -= e.width), P.push({
                            horizontal: n,
                            minSize: e,
                            box: t
                        })
                    }

                    function s(t) {
                        var e = o.findNextWhere(P, function(e) {
                            return e.box === t
                        });
                        if (e)
                            if (t.isHorizontal()) {
                                var n = {
                                    left: Math.max(R, I),
                                    right: Math.max(L, O),
                                    top: 0,
                                    bottom: 0
                                };
                                t.update(t.fullWidth ? w : C, _ / 2, n)
                            } else t.update(e.minSize.width, T)
                    }

                    function l(t) {
                        var e = o.findNextWhere(P, function(e) {
                                return e.box === t
                            }),
                            n = {
                                left: 0,
                                right: 0,
                                top: N,
                                bottom: W
                            };
                        e && t.update(e.minSize.width, T, n)
                    }

                    function u(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? c : R, t.right = t.fullWidth ? e - f : R + C, t.top = V, t.bottom = V + t.height, V = t.bottom) : (t.left = B, t.right = B + t.width, t.top = N, t.bottom = N + T, B = t.right)
                    }
                    if (t) {
                        var d = t.options.layout || {},
                            h = o.options.toPadding(d.padding),
                            c = h.left,
                            f = h.right,
                            p = h.top,
                            g = h.bottom,
                            m = n(t.boxes, "left"),
                            v = n(t.boxes, "right"),
                            y = n(t.boxes, "top"),
                            b = n(t.boxes, "bottom"),
                            x = n(t.boxes, "chartArea");
                        i(m, !0), i(v, !1), i(y, !0), i(b, !1);
                        var w = e - c - f,
                            _ = a - p - g,
                            k = w / 2,
                            S = _ / 2,
                            M = (e - k) / (m.length + v.length),
                            D = (a - S) / (y.length + b.length),
                            C = w,
                            T = _,
                            P = [];
                        o.each(m.concat(v, y, b), r);
                        var I = 0,
                            O = 0,
                            A = 0,
                            F = 0;
                        o.each(y.concat(b), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                I = Math.max(I, e.left), O = Math.max(O, e.right)
                            }
                        }), o.each(m.concat(v), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                A = Math.max(A, e.top), F = Math.max(F, e.bottom)
                            }
                        });
                        var R = c,
                            L = f,
                            N = p,
                            W = g;
                        o.each(m.concat(v), s), o.each(m, function(t) {
                            R += t.width
                        }), o.each(v, function(t) {
                            L += t.width
                        }), o.each(y.concat(b), s), o.each(y, function(t) {
                            N += t.height
                        }), o.each(b, function(t) {
                            W += t.height
                        }), o.each(m.concat(v), l), R = c, L = f, N = p, W = g, o.each(m, function(t) {
                            R += t.width
                        }), o.each(v, function(t) {
                            L += t.width
                        }), o.each(y, function(t) {
                            N += t.height
                        }), o.each(b, function(t) {
                            W += t.height
                        });
                        var E = Math.max(I - R, 0);
                        R += E, L += Math.max(O - L, 0);
                        var Y = Math.max(A - N, 0);
                        N += Y, W += Math.max(F - W, 0);
                        var z = a - N - W,
                            H = e - R - L;
                        H === C && z === T || (o.each(m, function(t) {
                            t.height = z
                        }), o.each(v, function(t) {
                            t.height = z
                        }), o.each(y, function(t) {
                            t.fullWidth || (t.width = H)
                        }), o.each(b, function(t) {
                            t.fullWidth || (t.width = H)
                        }), T = z, C = H);
                        var B = c + E,
                            V = p + Y;
                        o.each(m.concat(y), u), B += C, V += T, o.each(v, u), o.each(b, u), t.chartArea = {
                            left: R,
                            top: N,
                            right: R + C,
                            bottom: N + T
                        }, o.each(x, function(e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, T)
                        })
                    }
                }
            }
        }, {
            45: 45
        }],
        31: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45);
            n._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        e.indexOf(t) === -1 && e.push(t)
                    }), this._cacheId++
                },
                unregister: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        var n = e.indexOf(t);
                        n !== -1 && e.splice(n, 1)
                    }), this._cacheId++
                },
                clear: function() {
                    this._plugins = [], this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(t, e, n) {
                    var i, o, a, r, s, l = this.descriptors(t),
                        u = l.length;
                    for (i = 0; i < u; ++i)
                        if (o = l[i], a = o.plugin, s = a[e], "function" == typeof s && (r = [t].concat(n || []), r.push(o.options), s.apply(a, r) === !1)) return !1;
                    return !0
                },
                descriptors: function(t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var o = [],
                        a = [],
                        r = t && t.config || {},
                        s = r.options && r.options.plugins || {};
                    return this._plugins.concat(r.plugins || []).forEach(function(t) {
                        var e = o.indexOf(t);
                        if (e === -1) {
                            var r = t.id,
                                l = s[r];
                            l !== !1 && (l === !0 && (l = i.clone(n.global.plugins[r])), o.push(t), a.push({
                                plugin: t,
                                options: l || {}
                            }))
                        }
                    }), e.descriptors = a, e.id = this._cacheId, a
                },
                _invalidate: function(t) {
                    delete t.$plugins
                }
            }
        }, {
            25: 25,
            45: 45
        }],
        32: [function(t, e) {
            "use strict";

            function n(t) {
                var e, n, i = [];
                for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
                return i
            }

            function i(t, e, n) {
                var i = t.getPixelForTick(e);
                return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
            }
            var o = t(25),
                a = t(26),
                r = t(45),
                s = t(34);
            o._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: s.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function(t) {
                function e(t, e, n) {
                    return r.isArray(e) ? r.longestText(t, n, e) : t.measureText(e).width
                }

                function s(t) {
                    var e = r.valueOrDefault,
                        n = o.global,
                        i = e(t.fontSize, n.defaultFontSize),
                        a = e(t.fontStyle, n.defaultFontStyle),
                        s = e(t.fontFamily, n.defaultFontFamily);
                    return {
                        size: i,
                        style: a,
                        family: s,
                        font: r.fontString(i, a, s)
                    }
                }

                function l(t) {
                    return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, o.global.defaultFontSize))
                }
                t.Scale = a.extend({
                    getPadding: function() {
                        var t = this;
                        return {
                            left: t.paddingLeft || 0,
                            top: t.paddingTop || 0,
                            right: t.paddingRight || 0,
                            bottom: t.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var t = this.options.ticks;
                        t.minor === !1 && (t.minor = {
                            display: !1
                        }), t.major === !1 && (t.major = {
                            display: !1
                        });
                        for (var e in t) "major" !== e && "minor" !== e && ("undefined" == typeof t.minor[e] && (t.minor[e] = t[e]), "undefined" == typeof t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function() {
                        r.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, n) {
                        var i, o, a, s, l, u, d = this;
                        for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = r.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), a = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = a, i = 0, o = a.length; i < o; ++i) s = a[i], u = l[i], u ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
                    },
                    afterUpdate: function() {
                        r.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        r.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        r.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        r.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: r.noop,
                    afterDataLimits: function() {
                        r.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        r.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: r.noop,
                    afterBuildTicks: function() {
                        r.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        r.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        r.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        r.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t = this,
                            e = t.ctx,
                            i = t.options.ticks,
                            o = n(t._ticks),
                            a = s(i);
                        e.font = a.font;
                        var l = i.minRotation || 0;
                        if (o.length && t.options.display && t.isHorizontal())
                            for (var u, d, h = r.longestText(e, a.font, o, t.longestTextCache), c = h, f = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > f && l < i.maxRotation;) {
                                var p = r.toRadians(l);
                                if (u = Math.cos(p), d = Math.sin(p), d * h > t.maxHeight) {
                                    l--;
                                    break
                                }
                                l++, c = u * h
                            }
                        t.labelRotation = l
                    },
                    afterCalculateTickRotation: function() {
                        r.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        r.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            i = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            o = n(t._ticks),
                            a = t.options,
                            u = a.ticks,
                            d = a.scaleLabel,
                            h = a.gridLines,
                            c = a.display,
                            f = t.isHorizontal(),
                            p = s(u),
                            g = a.gridLines.tickMarkLength;
                        if (f ? i.width = t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : i.width = c && h.drawTicks ? g : 0, f ? i.height = c && h.drawTicks ? g : 0 : i.height = t.maxHeight, d.display && c) {
                            var m = l(d),
                                v = r.options.toPadding(d.padding),
                                y = m + v.height;
                            f ? i.height += y : i.width += y
                        }
                        if (u.display && c) {
                            var b = r.longestText(t.ctx, p.font, o, t.longestTextCache),
                                x = r.numberOfLabelLines(o),
                                w = .5 * p.size,
                                _ = t.options.ticks.padding;
                            if (f) {
                                t.longestLabelWidth = b;
                                var k = r.toRadians(t.labelRotation),
                                    S = Math.cos(k),
                                    M = Math.sin(k),
                                    D = M * b + p.size * x + w * (x - 1) + w;
                                i.height = Math.min(t.maxHeight, i.height + D + _), t.ctx.font = p.font;
                                var C = e(t.ctx, o[0], p.font),
                                    T = e(t.ctx, o[o.length - 1], p.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === a.position ? S * C + 3 : S * w + 3, t.paddingRight = "bottom" === a.position ? S * w + 3 : S * T + 3) : (t.paddingLeft = C / 2 + 3, t.paddingRight = T / 2 + 3)
                            } else u.mirror ? b = 0 : b += _ + w, i.width = Math.min(t.maxWidth, i.width + b), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                        }
                        t.handleMargins(), t.width = i.width, t.height = i.height
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function() {
                        r.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (r.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: r.noop,
                    getPixelForValue: r.noop,
                    getValueForPixel: r.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            n = e.options.offset;
                        if (e.isHorizontal()) {
                            var i = e.width - (e.paddingLeft + e.paddingRight),
                                o = i / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                a = o * t + e.paddingLeft;
                            n && (a += o / 2);
                            var r = e.left + Math.round(a);
                            return r += e.isFullWidth() ? e.margins.left : 0
                        }
                        var s = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (s / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = e.width - (e.paddingLeft + e.paddingRight),
                                i = n * t + e.paddingLeft,
                                o = e.left + Math.round(i);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this,
                            e = t.min,
                            n = t.max;
                        return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
                    },
                    _autoSkip: function(t) {
                        var e, n, i, o, a, s = this,
                            l = s.isHorizontal(),
                            u = s.options.ticks.minor,
                            d = t.length,
                            h = r.toRadians(s.labelRotation),
                            c = Math.cos(h),
                            f = s.longestLabelWidth * c,
                            p = [];
                        for (u.maxTicksLimit && (a = u.maxTicksLimit), l && (e = !1, (f + u.autoSkipPadding) * d > s.width - (s.paddingLeft + s.paddingRight) && (e = 1 + Math.floor((f + u.autoSkipPadding) * d / (s.width - (s.paddingLeft + s.paddingRight)))), a && d > a && (e = Math.max(e, Math.floor(d / a)))), n = 0; n < d; n++) i = t[n], o = e > 1 && n % e > 0 || n % e === 0 && n + e >= d, o && n !== d - 1 && delete i.label, p.push(i);
                        return p
                    },
                    draw: function(t) {
                        var e = this,
                            n = e.options;
                        if (n.display) {
                            var a = e.ctx,
                                u = o.global,
                                d = n.ticks.minor,
                                h = n.ticks.major || d,
                                c = n.gridLines,
                                f = n.scaleLabel,
                                p = 0 !== e.labelRotation,
                                g = e.isHorizontal(),
                                m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                v = r.valueOrDefault(d.fontColor, u.defaultFontColor),
                                y = s(d),
                                b = r.valueOrDefault(h.fontColor, u.defaultFontColor),
                                x = s(h),
                                w = c.drawTicks ? c.tickMarkLength : 0,
                                _ = r.valueOrDefault(f.fontColor, u.defaultFontColor),
                                k = s(f),
                                S = r.options.toPadding(f.padding),
                                M = r.toRadians(e.labelRotation),
                                D = [],
                                C = e.options.gridLines.lineWidth,
                                T = "right" === n.position ? e.right : e.right - C - w,
                                P = "right" === n.position ? e.right + w : e.right,
                                I = "bottom" === n.position ? e.top + C : e.bottom - w - C,
                                O = "bottom" === n.position ? e.top + C + w : e.bottom + C;
                            if (r.each(m, function(o, a) {
                                    if (!r.isNullOrUndef(o.label)) {
                                        var s, l, h, f, v = o.label;
                                        a === e.zeroLineIndex && n.offset === c.offsetGridLines ? (s = c.zeroLineWidth, l = c.zeroLineColor, h = c.zeroLineBorderDash, f = c.zeroLineBorderDashOffset) : (s = r.valueAtIndexOrDefault(c.lineWidth, a), l = r.valueAtIndexOrDefault(c.color, a), h = r.valueOrDefault(c.borderDash, u.borderDash), f = r.valueOrDefault(c.borderDashOffset, u.borderDashOffset));
                                        var y, b, x, _, k, S, A, F, R, L, N = "middle",
                                            W = "middle",
                                            E = d.padding;
                                        if (g) {
                                            var Y = w + E;
                                            "bottom" === n.position ? (W = p ? "middle" : "top", N = p ? "right" : "center", L = e.top + Y) : (W = p ? "middle" : "bottom", N = p ? "left" : "center", L = e.bottom - Y);
                                            var z = i(e, a, c.offsetGridLines && m.length > 1);
                                            z < e.left && (l = "rgba(0,0,0,0)"), z += r.aliasPixel(s), R = e.getPixelForTick(a) + d.labelOffset, y = x = k = A = z, b = I, _ = O, S = t.top, F = t.bottom + C
                                        } else {
                                            var H, B = "left" === n.position;
                                            d.mirror ? (N = B ? "left" : "right", H = E) : (N = B ? "right" : "left", H = w + E), R = B ? e.right - H : e.left + H;
                                            var V = i(e, a, c.offsetGridLines && m.length > 1);
                                            V < e.top && (l = "rgba(0,0,0,0)"), V += r.aliasPixel(s), L = e.getPixelForTick(a) + d.labelOffset, y = T, x = P, k = t.left, A = t.right + C, b = _ = S = F = V
                                        }
                                        D.push({
                                            tx1: y,
                                            ty1: b,
                                            tx2: x,
                                            ty2: _,
                                            x1: k,
                                            y1: S,
                                            x2: A,
                                            y2: F,
                                            labelX: R,
                                            labelY: L,
                                            glWidth: s,
                                            glColor: l,
                                            glBorderDash: h,
                                            glBorderDashOffset: f,
                                            rotation: -1 * M,
                                            label: v,
                                            major: o.major,
                                            textBaseline: W,
                                            textAlign: N
                                        })
                                    }
                                }), r.each(D, function(t) {
                                    if (c.display && (a.save(), a.lineWidth = t.glWidth, a.strokeStyle = t.glColor, a.setLineDash && (a.setLineDash(t.glBorderDash), a.lineDashOffset = t.glBorderDashOffset), a.beginPath(), c.drawTicks && (a.moveTo(t.tx1, t.ty1), a.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2)), a.stroke(), a.restore()), d.display) {
                                        a.save(), a.translate(t.labelX, t.labelY), a.rotate(t.rotation), a.font = t.major ? x.font : y.font, a.fillStyle = t.major ? b : v, a.textBaseline = t.textBaseline, a.textAlign = t.textAlign;
                                        var n = t.label;
                                        if (r.isArray(n))
                                            for (var i = n.length, o = 1.5 * y.size, s = e.isHorizontal() ? 0 : -o * (i - 1) / 2, l = 0; l < i; ++l) a.fillText("" + n[l], 0, s), s += o;
                                        else a.fillText(n, 0, 0);
                                        a.restore()
                                    }
                                }), f.display) {
                                var A, F, R = 0,
                                    L = l(f) / 2;
                                if (g) A = e.left + (e.right - e.left) / 2, F = "bottom" === n.position ? e.bottom - L - S.bottom : e.top + L + S.top;
                                else {
                                    var N = "left" === n.position;
                                    A = N ? e.left + L + S.top : e.right - L - S.top, F = e.top + (e.bottom - e.top) / 2, R = N ? -.5 * Math.PI : .5 * Math.PI
                                }
                                a.save(), a.translate(A, F), a.rotate(R), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = _, a.font = k.font, a.fillText(f.labelString, 0, 0), a.restore()
                            }
                            if (c.drawBorder) {
                                a.lineWidth = r.valueAtIndexOrDefault(c.lineWidth, 0), a.strokeStyle = r.valueAtIndexOrDefault(c.color, 0);
                                var W = e.left,
                                    E = e.right + C,
                                    Y = e.top,
                                    z = e.bottom + C,
                                    H = r.aliasPixel(a.lineWidth);
                                g ? (Y = z = "top" === n.position ? e.bottom : e.top, Y += H, z += H) : (W = E = "left" === n.position ? e.right : e.left, W += H, E += H), a.beginPath(), a.moveTo(W, Y), a.lineTo(E, z), a.stroke()
                            }
                        }
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            34: 34,
            45: 45
        }],
        33: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45),
                o = t(30);
            e.exports = function(t) {
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, e, n) {
                        this.constructors[t] = e, this.defaults[t] = i.clone(n)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(t) {
                        return this.defaults.hasOwnProperty(t) ? i.merge({}, [n.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function(t, e) {
                        var n = this;
                        n.defaults.hasOwnProperty(t) && (n.defaults[t] = i.extend(n.defaults[t], e))
                    },
                    addScalesToLayout: function(t) {
                        i.each(t.scales, function(e) {
                            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                        })
                    }
                }
            }
        }, {
            25: 25,
            30: 30,
            45: 45
        }],
        34: [function(t, e) {
            "use strict";
            var n = t(45);
            e.exports = {
                formatters: {
                    values: function(t) {
                        return n.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, i) {
                        var o = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                        Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
                        var a = n.log10(Math.abs(o)),
                            r = "";
                        if (0 !== t) {
                            var s = -1 * Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        } else r = "0";
                        return r
                    },
                    logarithmic: function(t, e, i) {
                        var o = t / Math.pow(10, Math.floor(n.log10(t)));
                        return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            45: 45
        }],
        35: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                o = t(45);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: o.noop,
                        title: function(t, e) {
                            var n = "",
                                i = e.labels,
                                o = i ? i.length : 0;
                            if (t.length > 0) {
                                var a = t[0];
                                a.xLabel ? n = a.xLabel : o > 0 && a.index < o && (n = i[a.index])
                            }
                            return n
                        },
                        afterTitle: o.noop,
                        beforeBody: o.noop,
                        beforeLabel: o.noop,
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "), n += t.yLabel
                        },
                        labelColor: function(t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex),
                                i = n.data[t.index],
                                o = i._view;
                            return {
                                borderColor: o.borderColor,
                                backgroundColor: o.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: o.noop,
                        afterBody: o.noop,
                        beforeFooter: o.noop,
                        footer: o.noop,
                        afterFooter: o.noop
                    }
                }
            }), e.exports = function(t) {
                function e(t, e) {
                    var n = o.color(t);
                    return n.alpha(e * n.alpha()).rgbaString()
                }

                function a(t, e) {
                    return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function r(t) {
                    var e = t._xScale,
                        n = t._yScale || t._scale,
                        i = t._index,
                        o = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(i, o) : "",
                        yLabel: n ? n.getLabelForIndex(i, o) : "",
                        index: i,
                        datasetIndex: o,
                        x: t._model.x,
                        y: t._model.y
                    }
                }

                function s(t) {
                    var e = n.global,
                        i = o.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function l(t, e) {
                    var n = t._chart.ctx,
                        i = 2 * e.yPadding,
                        a = 0,
                        r = e.body,
                        s = r.reduce(function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                    s += e.beforeBody.length + e.afterBody.length;
                    var l = e.title.length,
                        u = e.footer.length,
                        d = e.titleFontSize,
                        h = e.bodyFontSize,
                        c = e.footerFontSize;
                    i += l * d, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += s * h, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * c, i += u ? (u - 1) * e.footerSpacing : 0;
                    var f = 0,
                        p = function(t) {
                            a = Math.max(a, n.measureText(t).width + f)
                        };
                    return n.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, p), n.font = o.fontString(h, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? h + 2 : 0, o.each(r, function(t) {
                        o.each(t.before, p), o.each(t.lines, p), o.each(t.after, p)
                    }), f = 0, n.font = o.fontString(c, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, p), a += 2 * e.xPadding, {
                        width: a,
                        height: i
                    }
                }

                function u(t, e) {
                    var n = t._model,
                        i = t._chart,
                        o = t._chart.chartArea,
                        a = "center",
                        r = "center";
                    n.y < e.height ? r = "top" : n.y > i.height - e.height && (r = "bottom");
                    var s, l, u, d, h, c = (o.left + o.right) / 2,
                        f = (o.top + o.bottom) / 2;
                    "center" === r ? (s = function(t) {
                        return t <= c
                    }, l = function(t) {
                        return t > c
                    }) : (s = function(t) {
                        return t <= e.width / 2
                    }, l = function(t) {
                        return t >= i.width - e.width / 2
                    }), u = function(t) {
                        return t + e.width + n.caretSize + n.caretPadding > i.width
                    }, d = function(t) {
                        return t - e.width - n.caretSize - n.caretPadding < 0
                    }, h = function(t) {
                        return t <= f ? "top" : "bottom"
                    }, s(n.x) ? (a = "left", u(n.x) && (a = "center", r = h(n.y))) : l(n.x) && (a = "right", d(n.x) && (a = "center", r = h(n.y)));
                    var p = t._options;
                    return {
                        xAlign: p.xAlign ? p.xAlign : a,
                        yAlign: p.yAlign ? p.yAlign : r
                    }
                }

                function d(t, e, n, i) {
                    var o = t.x,
                        a = t.y,
                        r = t.caretSize,
                        s = t.caretPadding,
                        l = t.cornerRadius,
                        u = n.xAlign,
                        d = n.yAlign,
                        h = r + s,
                        c = l + s;
                    return "right" === u ? o -= e.width : "center" === u && (o -= e.width / 2, o + e.width > i.width && (o = i.width - e.width), o < 0 && (o = 0)), "top" === d ? a += h : a -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? o += h : "right" === u && (o -= h) : "left" === u ? o -= c : "right" === u && (o += c), {
                        x: o,
                        y: a
                    }
                }
                t.Tooltip = i.extend({
                    initialize: function() {
                        this._model = s(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this,
                            e = t._options,
                            n = e.callbacks,
                            i = n.beforeTitle.apply(t, arguments),
                            o = n.title.apply(t, arguments),
                            r = n.afterTitle.apply(t, arguments),
                            s = [];
                        return s = a(s, i), s = a(s, o), s = a(s, r)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var n = this,
                            i = n._options.callbacks,
                            r = [];
                        return o.each(t, function(t) {
                            var o = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            a(o.before, i.beforeLabel.call(n, t, e)), a(o.lines, i.label.call(n, t, e)), a(o.after, i.afterLabel.call(n, t, e)), r.push(o)
                        }), r
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this,
                            e = t._options.callbacks,
                            n = e.beforeFooter.apply(t, arguments),
                            i = e.footer.apply(t, arguments),
                            o = e.afterFooter.apply(t, arguments),
                            r = [];
                        return r = a(r, n), r = a(r, i), r = a(r, o)
                    },
                    update: function(e) {
                        var n, i, a = this,
                            h = a._options,
                            c = a._model,
                            f = a._model = s(h),
                            p = a._active,
                            g = a._data,
                            m = {
                                xAlign: c.xAlign,
                                yAlign: c.yAlign
                            },
                            v = {
                                x: c.x,
                                y: c.y
                            },
                            y = {
                                width: c.width,
                                height: c.height
                            },
                            b = {
                                x: c.caretX,
                                y: c.caretY
                            };
                        if (p.length) {
                            f.opacity = 1;
                            var x = [],
                                w = [];
                            b = t.Tooltip.positioners[h.position].call(a, p, a._eventPosition);
                            var _ = [];
                            for (n = 0, i = p.length; n < i; ++n) _.push(r(p[n]));
                            h.filter && (_ = _.filter(function(t) {
                                return h.filter(t, g)
                            })), h.itemSort && (_ = _.sort(function(t, e) {
                                return h.itemSort(t, e, g)
                            })), o.each(_, function(t) {
                                x.push(h.callbacks.labelColor.call(a, t, a._chart)), w.push(h.callbacks.labelTextColor.call(a, t, a._chart))
                            }), f.title = a.getTitle(_, g), f.beforeBody = a.getBeforeBody(_, g), f.body = a.getBody(_, g), f.afterBody = a.getAfterBody(_, g), f.footer = a.getFooter(_, g), f.x = Math.round(b.x), f.y = Math.round(b.y), f.caretPadding = h.caretPadding, f.labelColors = x, f.labelTextColors = w, f.dataPoints = _, y = l(this, f), m = u(this, y), v = d(f, y, m, a._chart)
                        } else f.opacity = 0;
                        return f.xAlign = m.xAlign, f.yAlign = m.yAlign, f.x = v.x, f.y = v.y, f.width = y.width, f.height = y.height, f.caretX = b.x, f.caretY = b.y, a._model = f, e && h.custom && h.custom.call(a, f), a
                    },
                    drawCaret: function(t, e) {
                        var n = this._chart.ctx,
                            i = this._view,
                            o = this.getCaretPosition(t, e, i);
                        n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
                    },
                    getCaretPosition: function(t, e, n) {
                        var i, o, a, r, s, l, u = n.caretSize,
                            d = n.cornerRadius,
                            h = n.xAlign,
                            c = n.yAlign,
                            f = t.x,
                            p = t.y,
                            g = e.width,
                            m = e.height;
                        if ("center" === c) s = p + m / 2, "left" === h ? (i = f, o = i - u, a = i, r = s + u, l = s - u) : (i = f + g, o = i + u, a = i, r = s - u, l = s + u);
                        else if ("left" === h ? (o = f + d + u, i = o - u, a = o + u) : "right" === h ? (o = f + g - d - u, i = o - u, a = o + u) : (o = n.caretX, i = o - u, a = o + u), "top" === c) r = p, s = r - u, l = r;
                        else {
                            r = p + m, s = r + u, l = r;
                            var v = a;
                            a = i, i = v
                        }
                        return {
                            x1: i,
                            x2: o,
                            x3: a,
                            y1: r,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, n, i, a) {
                        var r = n.title;
                        if (r.length) {
                            i.textAlign = n._titleAlign, i.textBaseline = "top";
                            var s = n.titleFontSize,
                                l = n.titleSpacing;
                            i.fillStyle = e(n.titleFontColor, a), i.font = o.fontString(s, n._titleFontStyle, n._titleFontFamily);
                            var u, d;
                            for (u = 0, d = r.length; u < d; ++u) i.fillText(r[u], t.x, t.y), t.y += s + l, u + 1 === r.length && (t.y += n.titleMarginBottom - l)
                        }
                    },
                    drawBody: function(t, n, i, a) {
                        var r = n.bodyFontSize,
                            s = n.bodySpacing,
                            l = n.body;
                        i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = o.fontString(r, n._bodyFontStyle, n._bodyFontFamily);
                        var u = 0,
                            d = function(e) {
                                i.fillText(e, t.x + u, t.y), t.y += r + s
                            };
                        i.fillStyle = e(n.bodyFontColor, a), o.each(n.beforeBody, d);
                        var h = n.displayColors;
                        u = h ? r + 2 : 0, o.each(l, function(s, l) {
                            var u = e(n.labelTextColors[l], a);
                            i.fillStyle = u, o.each(s.before, d), o.each(s.lines, function(o) {
                                h && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, r, r), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[l].borderColor, a), i.strokeRect(t.x, t.y, r, r), i.fillStyle = e(n.labelColors[l].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), i.fillStyle = u), d(o)
                            }), o.each(s.after, d)
                        }), u = 0, o.each(n.afterBody, d), t.y -= s
                    },
                    drawFooter: function(t, n, i, a) {
                        var r = n.footer;
                        r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = o.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), o.each(r, function(e) {
                            i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                        }))
                    },
                    drawBackground: function(t, n, i, o, a) {
                        i.fillStyle = e(n.backgroundColor, a), i.strokeStyle = e(n.borderColor, a), i.lineWidth = n.borderWidth;
                        var r = n.xAlign,
                            s = n.yAlign,
                            l = t.x,
                            u = t.y,
                            d = o.width,
                            h = o.height,
                            c = n.cornerRadius;
                        i.beginPath(), i.moveTo(l + c, u), "top" === s && this.drawCaret(t, o), i.lineTo(l + d - c, u), i.quadraticCurveTo(l + d, u, l + d, u + c), "center" === s && "right" === r && this.drawCaret(t, o), i.lineTo(l + d, u + h - c), i.quadraticCurveTo(l + d, u + h, l + d - c, u + h), "bottom" === s && this.drawCaret(t, o), i.lineTo(l + c, u + h), i.quadraticCurveTo(l, u + h, l, u + h - c), "center" === s && "left" === r && this.drawCaret(t, o), i.lineTo(l, u + c), i.quadraticCurveTo(l, u, l + c, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                i = {
                                    x: e.x,
                                    y: e.y
                                },
                                o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && a && (this.drawBackground(i, e, t, n, o), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, o), this.drawBody(i, e, t, o), this.drawFooter(i, e, t, o))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            n = e._options,
                            i = !1;
                        return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), i = !o.arrayEquals(e._active, e._lastActive), i && (e._lastActive = e._active, (n.enabled || n.custom) && (e._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, e.update(!0), e.pivot())), i
                    }
                }), t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, n, i = 0,
                            o = 0,
                            a = 0;
                        for (e = 0, n = t.length; e < n; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var s = r.tooltipPosition();
                                i += s.x, o += s.y, ++a
                            }
                        }
                        return {
                            x: Math.round(i / a),
                            y: Math.round(o / a)
                        }
                    },
                    nearest: function(t, e) {
                        var n, i, a, r = e.x,
                            s = e.y,
                            l = Number.POSITIVE_INFINITY;
                        for (n = 0, i = t.length; n < i; ++n) {
                            var u = t[n];
                            if (u && u.hasValue()) {
                                var d = u.getCenterPoint(),
                                    h = o.distanceBetweenPoints(e, d);
                                h < l && (l = h, a = u)
                            }
                        }
                        if (a) {
                            var c = a.tooltipPosition();
                            r = c.x, s = c.y
                        }
                        return {
                            x: r,
                            y: s
                        }
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        36: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                o = t(45);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = i.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var n = this._view;
                    if (n) {
                        for (var i = o.getAngleFromPoint(n, {
                                x: t,
                                y: e
                            }), a = i.angle, r = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                        for (; a > l;) a -= 2 * Math.PI;
                        for (; a < s;) a += 2 * Math.PI;
                        var u = a >= s && a <= l,
                            d = r >= n.innerRadius && r <= n.outerRadius;
                        return u && d
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        n = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        n = e.startAngle,
                        i = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth,
                        t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        37: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                o = t(45),
                a = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: a.defaultColor,
                        borderWidth: 3,
                        borderColor: a.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = i.extend({
                draw: function() {
                    var t, e, n, i, r = this,
                        s = r._view,
                        l = r._chart.ctx,
                        u = s.spanGaps,
                        d = r._children.slice(),
                        h = a.elements.line,
                        c = -1;
                    for (r._loop && d.length && d.push(d[0]), l.save(), l.lineCap = s.borderCapStyle || h.borderCapStyle, l.setLineDash && l.setLineDash(s.borderDash || h.borderDash), l.lineDashOffset = s.borderDashOffset || h.borderDashOffset, l.lineJoin = s.borderJoinStyle || h.borderJoinStyle, l.lineWidth = s.borderWidth || h.borderWidth, l.strokeStyle = s.borderColor || a.defaultColor, l.beginPath(), c = -1, t = 0; t < d.length; ++t) e = d[t], n = o.previousItem(d, t), i = e._view, 0 === t ? i.skip || (l.moveTo(i.x, i.y), c = t) : (n = c === -1 ? n : d[c], i.skip || (c !== t - 1 && !u || c === -1 ? l.moveTo(i.x, i.y) : o.canvas.lineTo(l, n._view, e._view), c = t));
                    l.stroke(), l.restore()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        38: [function(t, e) {
            "use strict";

            function n(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }

            function i(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            }
            var o = t(25),
                a = t(26),
                r = t(45),
                s = o.global.defaultColor;
            o._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: s,
                        borderColor: s,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = a.extend({
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: n,
                inXRange: n,
                inYRange: i,
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view,
                        n = this._model,
                        i = this._chart.ctx,
                        a = e.pointStyle,
                        l = e.radius,
                        u = e.x,
                        d = e.y,
                        h = r.color,
                        c = 1.01,
                        f = 0;
                    e.skip || (i.strokeStyle = e.borderColor || s, i.lineWidth = r.valueOrDefault(e.borderWidth, o.global.elements.point.borderWidth), i.fillStyle = e.backgroundColor || s, void 0 !== t && (n.x < t.left || t.right * c < n.x || n.y < t.top || t.bottom * c < n.y) && (n.x < t.left ? f = (u - n.x) / (t.left - n.x) : t.right * c < n.x ? f = (n.x - u) / (n.x - t.right) : n.y < t.top ? f = (d - n.y) / (t.top - n.y) : t.bottom * c < n.y && (f = (n.y - d) / (n.y - t.bottom)), f = Math.round(100 * f) / 100, i.strokeStyle = h(i.strokeStyle).alpha(f).rgbString(), i.fillStyle = h(i.fillStyle).alpha(f).rgbString()), r.canvas.drawPoint(i, a, l, u, d))
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        39: [function(t, e) {
            "use strict";

            function n(t) {
                return void 0 !== t._view.width
            }

            function i(t) {
                var e, i, o, a, r = t._view;
                if (n(t)) {
                    var s = r.width / 2;
                    e = r.x - s, i = r.x + s, o = Math.min(r.y, r.base), a = Math.max(r.y, r.base)
                } else {
                    var l = r.height / 2;
                    e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), o = r.y - l, a = r.y + l
                }
                return {
                    left: e,
                    top: o,
                    right: i,
                    bottom: a
                }
            }
            var o = t(25),
                a = t(26);
            o._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: o.global.defaultColor,
                        borderColor: o.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = a.extend({
                draw: function() {
                    function t(t) {
                        return v[(b + t) % 4]
                    }
                    var e, n, i, o, a, r, s, l = this._chart.ctx,
                        u = this._view,
                        d = u.borderWidth;
                    if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, o = u.y + u.height / 2, a = n > e ? 1 : -1, r = 1, s = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, o = u.base, a = 1, r = o > i ? 1 : -1, s = u.borderSkipped || "bottom"), d) {
                        var h = Math.min(Math.abs(e - n), Math.abs(i - o));
                        d = d > h ? h : d;
                        var c = d / 2,
                            f = e + ("left" !== s ? c * a : 0),
                            p = n + ("right" !== s ? -c * a : 0),
                            g = i + ("top" !== s ? c * r : 0),
                            m = o + ("bottom" !== s ? -c * r : 0);
                        f !== p && (i = g, o = m), g !== m && (e = f, n = p)
                    }
                    l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = d;
                    var v = [
                            [e, o],
                            [e, i],
                            [n, i],
                            [n, o]
                        ],
                        y = ["bottom", "left", "top", "right"],
                        b = y.indexOf(s, 0);
                    b === -1 && (b = 0);
                    var x = t(0);
                    l.moveTo(x[0], x[1]);
                    for (var w = 1; w < 4; w++) x = t(w), l.lineTo(x[0], x[1]);
                    l.fill(), d && l.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var n = !1;
                    if (this._view) {
                        var o = i(this);
                        n = t >= o.left && t <= o.right && e >= o.top && e <= o.bottom
                    }
                    return n
                },
                inLabelRange: function(t, e) {
                    var o = this;
                    if (!o._view) return !1;
                    var a = !1,
                        r = i(o);
                    return a = n(o) ? t >= r.left && t <= r.right : e >= r.top && e <= r.bottom
                },
                inXRange: function(t) {
                    var e = i(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function(t) {
                    var e = i(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function() {
                    var t, e, i = this._view;
                    return n(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            25: 25,
            26: 26
        }],
        40: [function(t, e) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {
            36: 36,
            37: 37,
            38: 38,
            39: 39
        }],
        41: [function(t, e, n) {
            "use strict";
            var i = t(42),
                n = e.exports = {
                    clear: function(t) {
                        t.ctx.clearRect(0, 0, t.width, t.height)
                    },
                    roundedRect: function(t, e, n, i, o, a) {
                        if (a) {
                            var r = Math.min(a, i / 2),
                                s = Math.min(a, o / 2);
                            t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + s), t.lineTo(e + i, n + o - s), t.quadraticCurveTo(e + i, n + o, e + i - r, n + o), t.lineTo(e + r, n + o), t.quadraticCurveTo(e, n + o, e, n + o - s), t.lineTo(e, n + s), t.quadraticCurveTo(e, n, e + r, n)
                        } else t.rect(e, n, i, o)
                    },
                    drawPoint: function(t, e, n, i, o) {
                        var a, r, s, l, u, d;
                        if (e && "object" == typeof e && (a = e.toString(), "[object HTMLImageElement]" === a || "[object HTMLCanvasElement]" === a)) return void t.drawImage(e, i - e.width / 2, o - e.height / 2, e.width, e.height);
                        if (!(isNaN(n) || n <= 0)) {
                            switch (e) {
                                default: t.beginPath(),
                                t.arc(i, o, n, 0, 2 * Math.PI),
                                t.closePath(),
                                t.fill();
                                break;
                                case "triangle":
                                        t.beginPath(),
                                    r = 3 * n / Math.sqrt(3),
                                    u = r * Math.sqrt(3) / 2,
                                    t.moveTo(i - r / 2, o + u / 3),
                                    t.lineTo(i + r / 2, o + u / 3),
                                    t.lineTo(i, o - 2 * u / 3),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rect":
                                        d = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.fillRect(i - d, o - d, 2 * d, 2 * d),
                                    t.strokeRect(i - d, o - d, 2 * d, 2 * d);
                                    break;
                                case "rectRounded":
                                        var h = n / Math.SQRT2,
                                        c = i - h,
                                        f = o - h,
                                        p = Math.SQRT2 * n;t.beginPath(),
                                    this.roundedRect(t, c, f, p, p, n / 2),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rectRot":
                                        d = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.moveTo(i - d, o),
                                    t.lineTo(i, o + d),
                                    t.lineTo(i + d, o),
                                    t.lineTo(i, o - d),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "cross":
                                        t.beginPath(),
                                    t.moveTo(i, o + n),
                                    t.lineTo(i, o - n),
                                    t.moveTo(i - n, o),
                                    t.lineTo(i + n, o),
                                    t.closePath();
                                    break;
                                case "crossRot":
                                        t.beginPath(),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l),
                                    t.moveTo(i - s, o + l),
                                    t.lineTo(i + s, o - l),
                                    t.closePath();
                                    break;
                                case "star":
                                        t.beginPath(),
                                    t.moveTo(i, o + n),
                                    t.lineTo(i, o - n),
                                    t.moveTo(i - n, o),
                                    t.lineTo(i + n, o),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, o - l),
                                    t.lineTo(i + s, o + l),
                                    t.moveTo(i - s, o + l),
                                    t.lineTo(i + s, o - l),
                                    t.closePath();
                                    break;
                                case "line":
                                        t.beginPath(),
                                    t.moveTo(i - n, o),
                                    t.lineTo(i + n, o),
                                    t.closePath();
                                    break;
                                case "dash":
                                        t.beginPath(),
                                    t.moveTo(i, o),
                                    t.lineTo(i + n, o),
                                    t.closePath()
                            }
                            t.stroke()
                        }
                    },
                    clipArea: function(t, e) {
                        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                    },
                    unclipArea: function(t) {
                        t.restore()
                    },
                    lineTo: function(t, e, n, i) {
                        return n.steppedLine ? ("after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y)) : n.tension ? void t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void t.lineTo(n.x, n.y)
                    }
                };
            i.clear = n.clear, i.drawRoundedRectangle = function(t) {
                t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath()
            }
        }, {
            42: 42
        }],
        42: [function(t, e) {
            "use strict";
            var n = {
                noop: function() {},
                uid: function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(),
                isNullOrUndef: function(t) {
                    return null === t || "undefined" == typeof t
                },
                isArray: Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function(t, e) {
                    return "undefined" == typeof t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, i) {
                    return n.valueOrDefault(n.isArray(t) ? t[e] : t, i)
                },
                callback: function(t, e, n) {
                    if (t && "function" == typeof t.call) return t.apply(n, e)
                },
                each: function(t, e, i, o) {
                    var a, r, s;
                    if (n.isArray(t))
                        if (r = t.length, o)
                            for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);
                        else
                            for (a = 0; a < r; a++) e.call(i, t[a], a);
                    else if (n.isObject(t))
                        for (s = Object.keys(t), r = s.length, a = 0; a < r; a++) e.call(i, t[s[a]], s[a])
                },
                arrayEquals: function(t, e) {
                    var i, o, a, r;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, o = t.length; i < o; ++i)
                        if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
                            if (!n.arrayEquals(a, r)) return !1
                        } else if (a !== r) return !1;
                    return !0
                },
                clone: function(t) {
                    if (n.isArray(t)) return t.map(n.clone);
                    if (n.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), o = i.length, a = 0; a < o; ++a) e[i[a]] = n.clone(t[i[a]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, i, o) {
                    var a = e[t],
                        r = i[t];
                    n.isObject(a) && n.isObject(r) ? n.merge(a, r, o) : e[t] = n.clone(r)
                },
                _mergerIf: function(t, e, i) {
                    var o = e[t],
                        a = i[t];
                    n.isObject(o) && n.isObject(a) ? n.mergeIf(o, a) : e.hasOwnProperty(t) || (e[t] = n.clone(a))
                },
                merge: function(t, e, i) {
                    var o, a, r, s, l, u = n.isArray(e) ? e : [e],
                        d = u.length;
                    if (!n.isObject(t)) return t;
                    for (i = i || {}, o = i.merger || n._merger, a = 0; a < d; ++a)
                        if (e = u[a], n.isObject(e))
                            for (r = Object.keys(e), l = 0, s = r.length; l < s; ++l) o(r[l], t, e, i);
                    return t
                },
                mergeIf: function(t, e) {
                    return n.merge(t, e, {
                        merger: n._mergerIf
                    })
                },
                extend: function(t) {
                    for (var e = function(e, n) {
                            t[n] = e
                        }, i = 1, o = arguments.length; i < o; ++i) n.each(arguments[i], e);
                    return t
                },
                inherits: function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        o = function() {
                            this.constructor = i
                        };
                    return o.prototype = e.prototype, i.prototype = new o, i.extend = n.inherits, t && n.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            e.exports = n, n.callCallback = n.callback, n.indexOf = function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }, n.getValueOrDefault = n.valueOrDefault, n.getValueAtIndexOrDefault = n.valueAtIndexOrDefault
        }, {}],
        43: [function(t, e) {
            "use strict";
            var n = t(42),
                i = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -Math.cos(t * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - i.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * i.easeInBounce(2 * t) : .5 * i.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: i
            }, n.easingEffects = i
        }, {
            42: 42
        }],
        44: [function(t, e) {
            "use strict";
            var n = t(42);
            e.exports = {
                toLineHeight: function(t, e) {
                    var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * e;
                    switch (t = +n[2], n[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, i, o, a;
                    return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, o = +t.bottom || 0, a = +t.left || 0) : e = i = o = a = +t || 0, {
                        top: e,
                        right: i,
                        bottom: o,
                        left: a,
                        height: e + o,
                        width: a + i
                    }
                },
                resolve: function(t, e, i) {
                    var o, a, r;
                    for (o = 0, a = t.length; o < a; ++o)
                        if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
                }
            }
        }, {
            42: 42
        }],
        45: [function(t, e) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {
            41: 41,
            42: 42,
            43: 43,
            44: 44
        }],
        46: [function(t, e) {
            e.exports = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        47: [function(t, e) {
            "use strict";

            function n(t, e) {
                var n = g.getStyle(t, e),
                    i = n && n.match(/^(\d+)(\.\d+)?px$/);
                return i ? Number(i[1]) : void 0
            }

            function i(t, e) {
                var i = t.style,
                    o = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t[m] = {
                        initial: {
                            height: o,
                            width: a,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    }, i.display = i.display || "block", null === a || "" === a) {
                    var r = n(t, "width");
                    void 0 !== r && (t.width = r)
                }
                if (null === o || "" === o)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var s = n(t, "height");
                        void 0 !== r && (t.height = s)
                    }
                return t
            }

            function o(t, e, n) {
                t.addEventListener(e, n, k)
            }

            function a(t, e, n) {
                t.removeEventListener(e, n, k)
            }

            function r(t, e, n, i, o) {
                return {
                    type: t,
                    chart: e,
                    "native": o || null,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== i ? i : null
                }
            }

            function s(t, e) {
                var n = w[t.type] || t.type,
                    i = g.getRelativePosition(t, e);
                return r(n, e, i.x, i.y, t)
            }

            function l(t, e) {
                var n = !1,
                    i = [];
                return function() {
                    i = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, g.requestAnimFrame.call(window, function() {
                        n = !1, t.apply(e, i)
                    }))
                }
            }

            function u(t) {
                var e = document.createElement("div"),
                    n = v + "size-monitor",
                    i = 1e6,
                    a = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                e.style.cssText = a, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + a + '"><div style="position:absolute;width:' + i + "px;height:" + i + 'px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + a + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                var r = e.childNodes[0],
                    s = e.childNodes[1];
                e._reset = function() {
                    r.scrollLeft = i, r.scrollTop = i, s.scrollLeft = i, s.scrollTop = i
                };
                var l = function() {
                    e._reset(), t()
                };
                return o(r, "scroll", l.bind(r, "expand")), o(s, "scroll", l.bind(s, "shrink")), e
            }

            function d(t, e) {
                var n = t[m] || (t[m] = {}),
                    i = n.renderProxy = function(t) {
                        t.animationName === b && e()
                    };
                g.each(x, function(e) {
                    o(t, e, i)
                }), n.reflow = !!t.offsetParent, t.classList.add(y)
            }

            function h(t) {
                var e = t[m] || {},
                    n = e.renderProxy;
                n && (g.each(x, function(e) {
                    a(t, e, n)
                }), delete e.renderProxy), t.classList.remove(y)
            }

            function c(t, e, n) {
                var i = t[m] || (t[m] = {}),
                    o = i.resizer = u(l(function() {
                        if (i.resizer) return e(r("resize", n))
                    }));
                d(t, function() {
                    if (i.resizer) {
                        var e = t.parentNode;
                        e && e !== o.parentNode && e.insertBefore(o, e.firstChild), o._reset()
                    }
                })
            }

            function f(t) {
                var e = t[m] || {},
                    n = e.resizer;
                delete e.resizer, h(t), n && n.parentNode && n.parentNode.removeChild(n)
            }

            function p(t, e) {
                var n = t._style || document.createElement("style");
                t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
            }
            var g = t(45),
                m = "$chartjs",
                v = "chartjs-",
                y = v + "render-monitor",
                b = v + "render-animation",
                x = ["animationstart", "webkitAnimationStart"],
                w = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                },
                _ = function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (t) {}
                    return t
                }(),
                k = !!_ && {
                    passive: !0
                };
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var t = "from{opacity:0.99}to{opacity:1}";
                    p(this, "@-webkit-keyframes " + b + "{" + t + "}@keyframes " + b + "{" + t + "}." + y + "{-webkit-animation:" + b + " 0.001s;animation:" + b + " 0.001s;}")
                },
                acquireContext: function(t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return n && n.canvas === t ? (i(t, e), n) : null
                },
                releaseContext: function(t) {
                    var e = t.canvas;
                    if (e[m]) {
                        var n = e[m].initial;
                        ["height", "width"].forEach(function(t) {
                            var i = n[t];
                            g.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                        }), g.each(n.style || {}, function(t, n) {
                            e.style[n] = t
                        }), e.width = e.width, delete e[m]
                    }
                },
                addEventListener: function(t, e, n) {
                    var i = t.canvas;
                    if ("resize" === e) return void c(i, n, t);
                    var a = n[m] || (n[m] = {}),
                        r = a.proxies || (a.proxies = {}),
                        l = r[t.id + "_" + e] = function(e) {
                            n(s(e, t))
                        };
                    o(i, e, l)
                },
                removeEventListener: function(t, e, n) {
                    var i = t.canvas;
                    if ("resize" === e) return void f(i, n);
                    var o = n[m] || {},
                        r = o.proxies || {},
                        s = r[t.id + "_" + e];
                    s && a(i, e, s)
                }
            }, g.addEvent = o, g.removeEvent = a
        }, {
            45: 45
        }],
        48: [function(t, e) {
            "use strict";
            var n = t(45),
                i = t(46),
                o = t(47),
                a = o._enabled ? o : i;
            e.exports = n.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, a)
        }, {
            45: 45,
            46: 46,
            47: 47
        }],
        49: [function(t, e) {
            "use strict";
            e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52)
        }, {
            50: 50,
            51: 51,
            52: 52
        }],
        50: [function(t, e) {
            "use strict";

            function n(t, e, n) {
                var i, o = t._model || {},
                    a = o.fill;
                if (void 0 === a && (a = !!o.backgroundColor), a === !1 || null === a) return !1;
                if (a === !0) return "origin";
                if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i) return "-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
                switch (a) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return a;
                    default:
                        return !1
                }
            }

            function i(t) {
                var e, n = t.el._model || {},
                    i = t.el._scale || {},
                    o = t.fill,
                    a = null;
                if (isFinite(o)) return null;
                if ("start" === o ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePosition ? a = i.getBasePosition() : i.getBasePixel && (a = i.getBasePixel()), void 0 !== a && null !== a) {
                    if (void 0 !== a.x && void 0 !== a.y) return a;
                    if ("number" == typeof a && isFinite(a)) return e = i.isHorizontal(), {
                        x: e ? a : null,
                        y: e ? null : a
                    }
                }
                return null
            }

            function o(t, e, n) {
                var i, o = t[e],
                    a = o.fill,
                    r = [e];
                if (!n) return a;
                for (; a !== !1 && r.indexOf(a) === -1;) {
                    if (!isFinite(a)) return a;
                    if (i = t[a], !i) return !1;
                    if (i.visible) return a;
                    r.push(a), a = i.fill
                }
                return !1
            }

            function a(t) {
                var e = t.fill,
                    n = "dataset";
                return e === !1 ? null : (isFinite(e) || (n = "boundary"), c[n](t))
            }

            function r(t) {
                return t && !t.skip
            }

            function s(t, e, n, i, o) {
                var a;
                if (i && o) {
                    for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a) h.canvas.lineTo(t, e[a - 1], e[a]);
                    for (t.lineTo(n[o - 1].x, n[o - 1].y), a = o - 1; a > 0; --a) h.canvas.lineTo(t, n[a], n[a - 1], !0)
                }
            }

            function l(t, e, n, i, o, a) {
                var l, u, d, h, c, f, p, g = e.length,
                    m = i.spanGaps,
                    v = [],
                    y = [],
                    b = 0,
                    x = 0;
                for (t.beginPath(), l = 0, u = g + !!a; l < u; ++l) d = l % g, h = e[d]._view, c = n(h, d, i), f = r(h), p = r(c), f && p ? (b = v.push(h), x = y.push(c)) : b && x && (m ? (f && v.push(h), p && y.push(c)) : (s(t, v, y, b, x), b = x = 0, v = [], y = []));
                s(t, v, y, b, x), t.closePath(), t.fillStyle = o, t.fill()
            }
            var u = t(25),
                d = t(40),
                h = t(45);
            u._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var c = {
                dataset: function(t) {
                    var e = t.fill,
                        n = t.chart,
                        i = n.getDatasetMeta(e),
                        o = i && n.isDatasetVisible(e),
                        a = o && i.dataset._children || [],
                        r = a.length || 0;
                    return r ? function(t, e) {
                        return e < r && a[e]._view || null
                    } : null
                },
                boundary: function(t) {
                    var e = t.boundary,
                        n = e ? e.x : null,
                        i = e ? e.y : null;
                    return function(t) {
                        return {
                            x: null === n ? t.x : n,
                            y: null === i ? t.y : i
                        }
                    }
                }
            };
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function(t, e) {
                    var r, s, l, u, h = (t.data.datasets || []).length,
                        c = e.propagate,
                        f = [];
                    for (s = 0; s < h; ++s) r = t.getDatasetMeta(s), l = r.dataset, u = null, l && l._model && l instanceof d.Line && (u = {
                        visible: t.isDatasetVisible(s),
                        fill: n(l, s, h),
                        chart: t,
                        el: l
                    }), r.$filler = u, f.push(u);
                    for (s = 0; s < h; ++s) u = f[s], u && (u.fill = o(f, s, c), u.boundary = i(u), u.mapper = a(u))
                },
                beforeDatasetDraw: function(t, e) {
                    var n = e.meta.$filler;
                    if (n) {
                        var i = t.ctx,
                            o = n.el,
                            a = o._view,
                            r = o._children || [],
                            s = n.mapper,
                            d = a.backgroundColor || u.global.defaultColor;
                        s && d && r.length && (h.canvas.clipArea(i, t.chartArea), l(i, r, s, a, d, o._loop), h.canvas.unclipArea(i))
                    }
                }
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        51: [function(t, e) {
            "use strict";

            function n(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }

            function i(t, e) {
                var n = new u({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                s.configure(t, n, e), s.addBox(t, n), t.legend = n
            }
            var o = t(25),
                a = t(26),
                r = t(45),
                s = t(30),
                l = r.noop;
            o._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var n = e.datasetIndex,
                            i = this.chart,
                            o = i.getDatasetMeta(n);
                        o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return r.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                                return {
                                    text: e.label,
                                    fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(n),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var u = a.extend({
                initialize: function(t) {
                    r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: l,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: l,
                beforeSetDimensions: l,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: l,
                beforeBuildLabels: l,
                buildLabels: function() {
                    var t = this,
                        e = t.options.labels || {},
                        n = r.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (n = n.filter(function(n) {
                        return e.filter(n, t.chart.data)
                    })), t.options.reverse && n.reverse(), t.legendItems = n
                },
                afterBuildLabels: l,
                beforeFit: l,
                fit: function() {
                    var t = this,
                        e = t.options,
                        i = e.labels,
                        a = e.display,
                        s = t.ctx,
                        l = o.global,
                        u = r.valueOrDefault,
                        d = u(i.fontSize, l.defaultFontSize),
                        h = u(i.fontStyle, l.defaultFontStyle),
                        c = u(i.fontFamily, l.defaultFontFamily),
                        f = r.fontString(d, h, c),
                        p = t.legendHitBoxes = [],
                        g = t.minSize,
                        m = t.isHorizontal();
                    if (m ? (g.width = t.maxWidth, g.height = a ? 10 : 0) : (g.width = a ? 10 : 0, g.height = t.maxHeight), a)
                        if (s.font = f, m) {
                            var v = t.lineWidths = [0],
                                y = t.legendItems.length ? d + i.padding : 0;
                            s.textAlign = "left", s.textBaseline = "top", r.each(t.legendItems, function(e, o) {
                                var a = n(i, d),
                                    r = a + d / 2 + s.measureText(e.text).width;
                                v[v.length - 1] + r + i.padding >= t.width && (y += d + i.padding, v[v.length] = t.left), p[o] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: d
                                }, v[v.length - 1] += r + i.padding
                            }), g.height += y
                        } else {
                            var b = i.padding,
                                x = t.columnWidths = [],
                                w = i.padding,
                                _ = 0,
                                k = 0,
                                S = d + b;
                            r.each(t.legendItems, function(t, e) {
                                var o = n(i, d),
                                    a = o + d / 2 + s.measureText(t.text).width;
                                k + S > g.height && (w += _ + i.padding, x.push(_), _ = 0, k = 0), _ = Math.max(_, a), k += S, p[e] = {
                                    left: 0,
                                    top: 0,
                                    width: a,
                                    height: d
                                }
                            }), w += _, x.push(_), g.width += w
                        }
                    t.width = g.width, t.height = g.height
                },
                afterFit: l,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var t = this,
                        e = t.options,
                        i = e.labels,
                        a = o.global,
                        s = a.elements.line,
                        l = t.width,
                        u = t.lineWidths;
                    if (e.display) {
                        var d, h = t.ctx,
                            c = r.valueOrDefault,
                            f = c(i.fontColor, a.defaultFontColor),
                            p = c(i.fontSize, a.defaultFontSize),
                            g = c(i.fontStyle, a.defaultFontStyle),
                            m = c(i.fontFamily, a.defaultFontFamily),
                            v = r.fontString(p, g, m);
                        h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = v;
                        var y = n(i, p),
                            b = t.legendHitBoxes,
                            x = function(t, n, i) {
                                if (!(isNaN(y) || y <= 0)) {
                                    h.save(), h.fillStyle = c(i.fillStyle, a.defaultColor), h.lineCap = c(i.lineCap, s.borderCapStyle), h.lineDashOffset = c(i.lineDashOffset, s.borderDashOffset), h.lineJoin = c(i.lineJoin, s.borderJoinStyle), h.lineWidth = c(i.lineWidth, s.borderWidth), h.strokeStyle = c(i.strokeStyle, a.defaultColor);
                                    var o = 0 === c(i.lineWidth, s.borderWidth);
                                    if (h.setLineDash && h.setLineDash(c(i.lineDash, s.borderDash)), e.labels && e.labels.usePointStyle) {
                                        var l = p * Math.SQRT2 / 2,
                                            u = l / Math.SQRT2,
                                            d = t + u,
                                            f = n + u;
                                        r.canvas.drawPoint(h, i.pointStyle, l, d, f)
                                    } else o || h.strokeRect(t, n, y, p), h.fillRect(t, n, y, p);
                                    h.restore()
                                }
                            },
                            w = function(t, e, n, i) {
                                var o = p / 2,
                                    a = y + o + t,
                                    r = e + o;
                                h.fillText(n.text, a, r), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(a, r), h.lineTo(a + i, r), h.stroke())
                            },
                            _ = t.isHorizontal();
                        d = _ ? {
                            x: t.left + (l - u[0]) / 2,
                            y: t.top + i.padding,
                            line: 0
                        } : {
                            x: t.left + i.padding,
                            y: t.top + i.padding,
                            line: 0
                        };
                        var k = p + i.padding;
                        r.each(t.legendItems, function(e, n) {
                            var o = h.measureText(e.text).width,
                                a = y + p / 2 + o,
                                r = d.x,
                                s = d.y;
                            _ ? r + a >= l && (s = d.y += k, d.line++, r = d.x = t.left + (l - u[d.line]) / 2) : s + k > t.bottom && (r = d.x = r + t.columnWidths[d.line] + i.padding, s = d.y = t.top + i.padding, d.line++), x(r, s, e), b[n].left = r, b[n].top = s, w(r, s, e, o), _ ? d.x += a + i.padding : d.y += k
                        })
                    }
                },
                handleEvent: function(t) {
                    var e = this,
                        n = e.options,
                        i = "mouseup" === t.type ? "click" : t.type,
                        o = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var a = t.x,
                        r = t.y;
                    if (a >= e.left && a <= e.right && r >= e.top && r <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (a >= u.left && a <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                if ("click" === i) {
                                    n.onClick.call(e, t["native"], e.legendItems[l]), o = !0;
                                    break
                                }
                                if ("mousemove" === i) {
                                    n.onHover.call(e, t["native"], e.legendItems[l]), o = !0;
                                    break
                                }
                            }
                        }
                    return o
                }
            });
            e.exports = {
                id: "legend",
                _element: u,
                beforeInit: function(t) {
                    var e = t.options.legend;
                    e && i(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.legend,
                        n = t.legend;
                    e ? (r.mergeIf(e, o.global.legend), n ? (s.configure(t, n, e), n.options = e) : i(t, e)) : n && (s.removeBox(t, n), delete t.legend)
                },
                afterEvent: function(t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        52: [function(t, e) {
            "use strict";

            function n(t, e) {
                var n = new l({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                r.configure(t, n, e), r.addBox(t, n), t.titleBlock = n
            }
            var i = t(25),
                o = t(26),
                a = t(45),
                r = t(30),
                s = a.noop;
            i._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var l = o.extend({
                initialize: function(t) {
                    var e = this;
                    a.extend(e, t), e.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var t = this,
                        e = a.valueOrDefault,
                        n = t.options,
                        o = n.display,
                        r = e(n.fontSize, i.global.defaultFontSize),
                        s = t.minSize,
                        l = a.isArray(n.text) ? n.text.length : 1,
                        u = a.options.toLineHeight(n.lineHeight, r),
                        d = o ? l * u + 2 * n.padding : 0;
                    t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                },
                afterFit: s,
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function() {
                    var t = this,
                        e = t.ctx,
                        n = a.valueOrDefault,
                        o = t.options,
                        r = i.global;
                    if (o.display) {
                        var s, l, u, d = n(o.fontSize, r.defaultFontSize),
                            h = n(o.fontStyle, r.defaultFontStyle),
                            c = n(o.fontFamily, r.defaultFontFamily),
                            f = a.fontString(d, h, c),
                            p = a.options.toLineHeight(o.lineHeight, d),
                            g = p / 2 + o.padding,
                            m = 0,
                            v = t.top,
                            y = t.left,
                            b = t.bottom,
                            x = t.right;
                        e.fillStyle = n(o.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = y + (x - y) / 2, u = v + g, s = x - y) : (l = "left" === o.position ? y + g : x - g, u = v + (b - v) / 2, s = b - v, m = Math.PI * ("left" === o.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                        var w = o.text;
                        if (a.isArray(w))
                            for (var _ = 0, k = 0; k < w.length; ++k) e.fillText(w[k], 0, _, s), _ += p;
                        else e.fillText(w, 0, 0, s);
                        e.restore()
                    }
                }
            });
            e.exports = {
                id: "title",
                _element: l,
                beforeInit: function(t) {
                    var e = t.options.title;
                    e && n(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.title,
                        o = t.titleBlock;
                    e ? (a.mergeIf(e, i.global.title), o ? (r.configure(t, o, e), o.options = e) : n(t, e)) : o && (r.removeBox(t, o), delete t.titleBlock)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        53: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = {
                        position: "bottom"
                    },
                    n = t.Scale.extend({
                        getLabels: function() {
                            var t = this.chart.data;
                            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        },
                        determineDataLimits: function() {
                            var t = this,
                                e = t.getLabels();
                            t.minIndex = 0, t.maxIndex = e.length - 1;
                            var n;
                            void 0 !== t.options.ticks.min && (n = e.indexOf(t.options.ticks.min), t.minIndex = n !== -1 ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(t.options.ticks.max), t.maxIndex = n !== -1 ? n : t.maxIndex), t.min = e[t.minIndex], t.max = e[t.maxIndex]
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this,
                                i = n.chart.data,
                                o = n.isHorizontal();
                            return i.yLabels && !o ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                        },
                        getPixelForValue: function(t, e) {
                            var n, i = this,
                                o = i.options.offset,
                                a = Math.max(i.maxIndex + 1 - i.minIndex - (o ? 0 : 1), 1);
                            if (void 0 !== t && null !== t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                                var r = i.getLabels();
                                t = n || t;
                                var s = r.indexOf(t);
                                e = s !== -1 ? s : e
                            }
                            if (i.isHorizontal()) {
                                var l = i.width / a,
                                    u = l * (e - i.minIndex);
                                return o && (u += l / 2), i.left + Math.round(u)
                            }
                            var d = i.height / a,
                                h = d * (e - i.minIndex);
                            return o && (h += d / 2), i.top + Math.round(h)
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                        },
                        getValueForPixel: function(t) {
                            var e, n = this,
                                i = n.options.offset,
                                o = Math.max(n._ticks.length - (i ? 0 : 1), 1),
                                a = n.isHorizontal(),
                                r = (a ? n.width : n.height) / o;
                            return t -= a ? n.left : n.top, i && (t -= r / 2), e = t <= 0 ? 0 : Math.round(t / r), e + n.minIndex
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    });
                t.scaleService.registerScaleType("category", n, e)
            }
        }, {}],
        54: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45),
                o = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: o.formatters.linear
                        }
                    },
                    a = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return s ? t.xAxisID === e.id : t.yAxisID === e.id
                            }
                            var e = this,
                                n = e.options,
                                o = e.chart,
                                a = o.data,
                                r = a.datasets,
                                s = e.isHorizontal(),
                                l = 0,
                                u = 1;
                            e.min = null, e.max = null;
                            var d = n.stacked;
                            if (void 0 === d && i.each(r, function(e, n) {
                                    if (!d) {
                                        var i = o.getDatasetMeta(n);
                                        o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0)
                                    }
                                }), n.stacked || d) {
                                var h = {};
                                i.each(r, function(a, r) {
                                    var s = o.getDatasetMeta(r),
                                        l = [s.type, void 0 === n.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                    void 0 === h[l] && (h[l] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var u = h[l].positiveValues,
                                        d = h[l].negativeValues;
                                    o.isDatasetVisible(r) && t(s) && i.each(a.data, function(t, i) {
                                        var o = +e.getRightValue(t);
                                        isNaN(o) || s.data[i].hidden || (u[i] = u[i] || 0, d[i] = d[i] || 0, n.relativePoints ? u[i] = 100 : o < 0 ? d[i] += o : u[i] += o)
                                    })
                                }), i.each(h, function(t) {
                                    var n = t.positiveValues.concat(t.negativeValues),
                                        o = i.min(n),
                                        a = i.max(n);
                                    e.min = null === e.min ? o : Math.min(e.min, o), e.max = null === e.max ? a : Math.max(e.max, a)
                                })
                            } else i.each(r, function(n, a) {
                                var r = o.getDatasetMeta(a);
                                o.isDatasetVisible(a) && t(r) && i.each(n.data, function(t, n) {
                                    var i = +e.getRightValue(t);
                                    isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i))
                                })
                            });
                            e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : l, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : u, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t, e = this,
                                o = e.options.ticks;
                            if (e.isHorizontal()) t = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(e.width / 50));
                            else {
                                var a = i.valueOrDefault(o.fontSize, n.global.defaultFontSize);
                                t = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(e.height / (2 * a)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e, n = this,
                                i = n.start,
                                o = +n.getRightValue(t),
                                a = n.end - i;
                            return e = n.isHorizontal() ? n.left + n.width / a * (o - i) : n.bottom - n.height / a * (o - i)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.isHorizontal(),
                                i = n ? e.width : e.height,
                                o = (n ? t - e.left : e.bottom - t) / i;
                            return e.start + (e.end - e.start) * o
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", a, e)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        55: [function(t, e) {
            "use strict";

            function n(t, e) {
                var n, o = [];
                if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                else {
                    var a = i.niceNum(e.max - e.min, !1);
                    n = i.niceNum(a / (t.maxTicks - 1), !0)
                }
                var r = Math.floor(e.min / n) * n,
                    s = Math.ceil(e.max / n) * n;
                t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (r = t.min, s = t.max);
                var l = (s - r) / n;
                l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
                var u = 1;
                n < 1 && (u = Math.pow(10, n.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), o.push(void 0 !== t.min ? t.min : r);
                for (var d = 1; d < l; ++d) o.push(Math.round((r + d * n) * u) / u);
                return o.push(void 0 !== t.max ? t.max : s), o
            }
            var i = t(45);
            e.exports = function(t) {
                var e = i.noop;
                t.LinearScaleBase = t.Scale.extend({
                    getRightValue: function(e) {
                        return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options,
                            n = e.ticks;
                        if (n.beginAtZero) {
                            var o = i.sign(t.min),
                                a = i.sign(t.max);
                            o < 0 && a < 0 ? t.max = 0 : o > 0 && a > 0 && (t.min = 0)
                        }
                        var r = void 0 !== n.min || void 0 !== n.suggestedMin,
                            s = void 0 !== n.max || void 0 !== n.suggestedMax;
                        void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (null === t.min ? t.min = n.suggestedMin : t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (null === t.max ? t.max = n.suggestedMax : t.max = Math.max(t.max, n.suggestedMax)), r !== s && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, n.beginAtZero || t.min--)
                    },
                    getTickLimit: e,
                    handleDirectionalChanges: e,
                    buildTicks: function() {
                        var t = this,
                            e = t.options,
                            o = e.ticks,
                            a = t.getTickLimit();
                        a = Math.max(2, a);
                        var r = {
                                maxTicks: a,
                                min: o.min,
                                max: o.max,
                                stepSize: i.valueOrDefault(o.fixedStepSize, o.stepSize)
                            },
                            s = t.ticks = n(r, t);
                        t.handleDirectionalChanges(), t.max = i.max(s), t.min = i.min(s), o.reverse ? (s.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {
            45: 45
        }],
        56: [function(t, e) {
            "use strict";

            function n(t, e) {
                var n, o, a = [],
                    r = i.valueOrDefault,
                    s = r(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                    l = Math.floor(i.log10(e.max)),
                    u = Math.ceil(e.max / Math.pow(10, l));
                0 === s ? (n = Math.floor(i.log10(e.minNotZero)), o = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(s), s = o * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), o = Math.floor(s / Math.pow(10, n)));
                var d = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                do a.push(s), ++o, 10 === o && (o = 1, ++n, d = n >= 0 ? 1 : d), s = Math.round(o * Math.pow(10, n) * d) / d; while (n < l || n === l && o < u);
                var h = r(t.max, s);
                return a.push(h), a
            }
            var i = t(45),
                o = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: o.formatters.logarithmic
                        }
                    },
                    a = t.Scale.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return s ? t.xAxisID === e.id : t.yAxisID === e.id
                            }
                            var e = this,
                                n = e.options,
                                o = e.chart,
                                a = o.data,
                                r = a.datasets,
                                s = e.isHorizontal();
                            e.min = null, e.max = null, e.minNotZero = null;
                            var l = n.stacked;
                            if (void 0 === l && i.each(r, function(e, n) {
                                    if (!l) {
                                        var i = o.getDatasetMeta(n);
                                        o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (l = !0)
                                    }
                                }), n.stacked || l) {
                                var u = {};
                                i.each(r, function(a, r) {
                                    var s = o.getDatasetMeta(r),
                                        l = [s.type, void 0 === n.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                    o.isDatasetVisible(r) && t(s) && (void 0 === u[l] && (u[l] = []), i.each(a.data, function(t, n) {
                                        var i = u[l],
                                            o = +e.getRightValue(t);
                                        isNaN(o) || s.data[n].hidden || o < 0 || (i[n] = i[n] || 0, i[n] += o)
                                    }))
                                }), i.each(u, function(t) {
                                    if (t.length > 0) {
                                        var n = i.min(t),
                                            o = i.max(t);
                                        e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? o : Math.max(e.max, o)
                                    }
                                })
                            } else i.each(r, function(n, a) {
                                var r = o.getDatasetMeta(a);
                                o.isDatasetVisible(a) && t(r) && i.each(n.data, function(t, n) {
                                    var i = +e.getRightValue(t);
                                    isNaN(i) || r.data[n].hidden || i < 0 || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i), 0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options,
                                n = e.ticks,
                                o = i.valueOrDefault,
                                a = 1,
                                r = 10;
                            t.min = o(n.min, t.min), t.max = o(n.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = a, t.max = r)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : r), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = a)
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options,
                                o = e.ticks,
                                a = !t.isHorizontal(),
                                r = {
                                    min: o.min,
                                    max: o.max
                                },
                                s = t.ticks = n(r, t);
                            t.max = i.max(s), t.min = i.min(s), o.reverse ? (a = !a, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), a && s.reverse()
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        _getFirstTickValue: function(t) {
                            var e = Math.floor(i.log10(t)),
                                n = Math.floor(t / Math.pow(10, e));
                            return n * Math.pow(10, e)
                        },
                        getPixelForValue: function(e) {
                            var n, o, a, r, s, l = this,
                                u = l.options.ticks.reverse,
                                d = i.log10,
                                h = l._getFirstTickValue(l.minNotZero),
                                c = 0;
                            return e = +l.getRightValue(e), u ? (a = l.end, r = l.start, s = -1) : (a = l.start, r = l.end, s = 1), l.isHorizontal() ? (n = l.width, o = u ? l.right : l.left) : (n = l.height, s *= -1, o = u ? l.top : l.bottom), e !== a && (0 === a && (c = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), n -= c, a = h), 0 !== e && (c += n / (d(r) - d(a)) * (d(e) - d(a))), o += s * c), o
                        },
                        getValueForPixel: function(e) {
                            var n, o, a, r, s = this,
                                l = s.options.ticks.reverse,
                                u = i.log10,
                                d = s._getFirstTickValue(s.minNotZero);
                            if (l ? (o = s.end, a = s.start) : (o = s.start, a = s.end), s.isHorizontal() ? (n = s.width, r = l ? s.right - e : e - s.left) : (n = s.height, r = l ? e - s.top : s.bottom - e), r !== o) {
                                if (0 === o) {
                                    var h = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                    r -= h, n -= h, o = d
                                }
                                r *= u(a) - u(o), r /= n, r = Math.pow(10, u(o) + r)
                            }
                            return r
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", a, e)
            }
        }, {
            34: 34,
            45: 45
        }],
        57: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45),
                o = t(34);
            e.exports = function(t) {
                function e(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function a(t) {
                    var e = t.options.pointLabels,
                        n = i.valueOrDefault(e.fontSize, m.defaultFontSize),
                        o = i.valueOrDefault(e.fontStyle, m.defaultFontStyle),
                        a = i.valueOrDefault(e.fontFamily, m.defaultFontFamily),
                        r = i.fontString(n, o, a);
                    return {
                        size: n,
                        style: o,
                        family: a,
                        font: r
                    }
                }

                function r(t, e, n) {
                    return i.isArray(n) ? {
                        w: i.longestText(t, t.font, n),
                        h: n.length * e + 1.5 * (n.length - 1) * e
                    } : {
                        w: t.measureText(n).width,
                        h: e
                    }
                }

                function s(t, e, n, i, o) {
                    return t === i || t === o ? {
                        start: e - n / 2,
                        end: e + n / 2
                    } : t < i || t > o ? {
                        start: e - n - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + n + 5
                    }
                }

                function l(t) {
                    var n, o, l, u = a(t),
                        d = Math.min(t.height / 2, t.width / 2),
                        h = {
                            r: t.width,
                            l: 0,
                            t: t.height,
                            b: 0
                        },
                        c = {};
                    t.ctx.font = u.font, t._pointLabelSizes = [];
                    var f = e(t);
                    for (n = 0; n < f; n++) {
                        l = t.getPointPosition(n, d), o = r(t.ctx, u.size, t.pointLabels[n] || ""), t._pointLabelSizes[n] = o;
                        var p = t.getIndexAngle(n),
                            g = i.toDegrees(p) % 360,
                            m = s(g, l.x, o.w, 0, 180),
                            v = s(g, l.y, o.h, 90, 270);
                        m.start < h.l && (h.l = m.start, c.l = p), m.end > h.r && (h.r = m.end, c.r = p), v.start < h.t && (h.t = v.start, c.t = p), v.end > h.b && (h.b = v.end, c.b = p)
                    }
                    t.setReductions(d, h, c)
                }

                function u(t) {
                    var e = Math.min(t.height / 2, t.width / 2);
                    t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
                }

                function d(t) {
                    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                }

                function h(t, e, n, o) {
                    if (i.isArray(e))
                        for (var a = n.y, r = 1.5 * o, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, a), a += r;
                    else t.fillText(e, n.x, n.y)
                }

                function c(t, e, n) {
                    90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
                }

                function f(t) {
                    var n = t.ctx,
                        o = t.options,
                        r = o.angleLines,
                        s = o.pointLabels;
                    n.lineWidth = r.lineWidth, n.strokeStyle = r.color;
                    var l = t.getDistanceFromCenterForValue(o.ticks.reverse ? t.min : t.max),
                        u = a(t);
                    n.textBaseline = "top";
                    for (var f = e(t) - 1; f >= 0; f--) {
                        if (r.display) {
                            var p = t.getPointPosition(f, l);
                            n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(p.x, p.y), n.stroke(), n.closePath()
                        }
                        if (s.display) {
                            var g = t.getPointPosition(f, l + 5),
                                v = i.valueAtIndexOrDefault(s.fontColor, f, m.defaultFontColor);
                            n.font = u.font, n.fillStyle = v;
                            var y = t.getIndexAngle(f),
                                b = i.toDegrees(y);
                            n.textAlign = d(b), c(b, t._pointLabelSizes[f], g), h(n, t.pointLabels[f] || "", g, u.size)
                        }
                    }
                }

                function p(t, n, o, a) {
                    var r = t.ctx;
                    if (r.strokeStyle = i.valueAtIndexOrDefault(n.color, a - 1), r.lineWidth = i.valueAtIndexOrDefault(n.lineWidth, a - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, o, 0, 2 * Math.PI), r.closePath(), r.stroke();
                    else {
                        var s = e(t);
                        if (0 === s) return;
                        r.beginPath();
                        var l = t.getPointPosition(0, o);
                        r.moveTo(l.x, l.y);
                        for (var u = 1; u < s; u++) l = t.getPointPosition(u, o), r.lineTo(l.x, l.y);
                        r.closePath(), r.stroke()
                    }
                }

                function g(t) {
                    return i.isNumber(t) ? t : 0
                }
                var m = n.global,
                    v = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: o.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    },
                    y = t.LinearScaleBase.extend({
                        setDimensions: function() {
                            var t = this,
                                e = t.options,
                                n = e.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var o = i.min([t.height, t.width]),
                                a = i.valueOrDefault(n.fontSize, m.defaultFontSize);
                            t.drawingArea = e.display ? o / 2 - (a / 2 + n.backdropPaddingY) : o / 2
                        },
                        determineDataLimits: function() {
                            var t = this,
                                e = t.chart,
                                n = Number.POSITIVE_INFINITY,
                                o = Number.NEGATIVE_INFINITY;
                            i.each(e.data.datasets, function(a, r) {
                                if (e.isDatasetVisible(r)) {
                                    var s = e.getDatasetMeta(r);
                                    i.each(a.data, function(e, i) {
                                        var a = +t.getRightValue(e);
                                        isNaN(a) || s.data[i].hidden || (n = Math.min(a, n), o = Math.max(a, o))
                                    })
                                }
                            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = o === Number.NEGATIVE_INFINITY ? 0 : o, t.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t = this.options.ticks,
                                e = i.valueOrDefault(t.fontSize, m.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            this.options.pointLabels.display ? l(this) : u(this)
                        },
                        setReductions: function(t, e, n) {
                            var i = this,
                                o = e.l / Math.sin(n.l),
                                a = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                                r = -e.t / Math.cos(n.t),
                                s = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
                            o = g(o), a = g(a), r = g(r), s = g(s), i.drawingArea = Math.min(Math.round(t - (o + a) / 2), Math.round(t - (r + s) / 2)), i.setCenterPoint(o, a, r, s)
                        },
                        setCenterPoint: function(t, e, n, i) {
                            var o = this,
                                a = o.width - e - o.drawingArea,
                                r = t + o.drawingArea,
                                s = n + o.drawingArea,
                                l = o.height - i - o.drawingArea;
                            o.xCenter = Math.round((r + a) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                        },
                        getIndexAngle: function(t) {
                            var n = 2 * Math.PI / e(this),
                                i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                                o = i * Math.PI * 2 / 360;
                            return t * n + o
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (null === t) return 0;
                            var n = e.drawingArea / (e.max - e.min);
                            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                        },
                        getPointPosition: function(t, e) {
                            var n = this,
                                i = n.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.round(Math.cos(i) * e) + n.xCenter,
                                y: Math.round(Math.sin(i) * e) + n.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this,
                                e = t.min,
                                n = t.max;
                            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                        },
                        draw: function() {
                            var t = this,
                                e = t.options,
                                n = e.gridLines,
                                o = e.ticks,
                                a = i.valueOrDefault;
                            if (e.display) {
                                var r = t.ctx,
                                    s = this.getIndexAngle(0),
                                    l = a(o.fontSize, m.defaultFontSize),
                                    u = a(o.fontStyle, m.defaultFontStyle),
                                    d = a(o.fontFamily, m.defaultFontFamily),
                                    h = i.fontString(l, u, d);
                                i.each(t.ticks, function(e, i) {
                                    if (i > 0 || o.reverse) {
                                        var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[i]);
                                        if (n.display && 0 !== i && p(t, n, u, i), o.display) {
                                            var d = a(o.fontColor, m.defaultFontColor);
                                            if (r.font = h, r.save(), r.translate(t.xCenter, t.yCenter), r.rotate(s), o.showLabelBackdrop) {
                                                var c = r.measureText(e).width;
                                                r.fillStyle = o.backdropColor, r.fillRect(-c / 2 - o.backdropPaddingX, -u - l / 2 - o.backdropPaddingY, c + 2 * o.backdropPaddingX, l + 2 * o.backdropPaddingY)
                                            }
                                            r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = d, r.fillText(e, 0, -u), r.restore()
                                        }
                                    }
                                }), (e.angleLines.display || e.pointLabels.display) && f(t)
                            }
                        }
                    });
                t.scaleService.registerScaleType("radialLinear", y, v)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        58: [function(t, e) {
            "use strict";

            function n(t, e) {
                return t - e
            }

            function i(t) {
                var e, n, i, o = {},
                    a = [];
                for (e = 0, n = t.length; e < n; ++e) i = t[e], o[i] || (o[i] = !0, a.push(i));
                return a
            }

            function o(t, e, n, i) {
                if ("linear" === i || !t.length) return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
                var o, a, r, s, l, u = [],
                    d = [e];
                for (o = 0, a = t.length; o < a; ++o) s = t[o], s > e && s < n && d.push(s);
                for (d.push(n), o = 0, a = d.length; o < a; ++o) l = d[o + 1], r = d[o - 1], s = d[o], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                    time: s,
                    pos: o / (a - 1)
                });
                return u
            }

            function a(t, e, n) {
                for (var i, o, a, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
                    if (i = r + s >> 1, o = t[i - 1] || null, a = t[i], !o) return {
                        lo: null,
                        hi: a
                    };
                    if (a[e] < n) r = i + 1;
                    else {
                        if (!(o[e] > n)) return {
                            lo: o,
                            hi: a
                        };
                        s = i - 1
                    }
                }
                return {
                    lo: a,
                    hi: null
                }
            }

            function r(t, e, n, i) {
                var o = a(t, e, n),
                    r = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                    s = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
                    l = s[e] - r[e],
                    u = l ? (n - r[e]) / l : 0,
                    d = (s[i] - r[i]) * u;
                return r[i] + d
            }

            function s(t, e) {
                var n = e.parser,
                    i = e.parser || e.format;
                return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof i ? v(t, i) : (t instanceof v || (t = v(t)), t.isValid() ? t : "function" == typeof i ? i(t) : t)
            }

            function l(t, e) {
                if (b.isNullOrUndef(t)) return null;
                var n = e.options.time,
                    i = s(e.getRightValue(t), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function u(t, e, n, i) {
                var o, a, r, s = e - t,
                    l = _[n],
                    u = l.size,
                    d = l.steps;
                if (!d) return Math.ceil(s / (i * u));
                for (o = 0, a = d.length; o < a && (r = d[o], !(Math.ceil(s / (u * r)) <= i)); ++o);
                return r
            }

            function d(t, e, n, i) {
                var o, a, r, s = k.length;
                for (o = k.indexOf(t); o < s - 1; ++o)
                    if (a = _[k[o]], r = a.steps ? a.steps[a.steps.length - 1] : w, a.common && Math.ceil((n - e) / (r * a.size)) <= i) return k[o];
                return k[s - 1]
            }

            function h(t, e, n, i) {
                var o, a, r = v.duration(v(i).diff(v(n))),
                    s = k.length;
                for (o = s - 1; o >= k.indexOf(e); o--)
                    if (a = k[o], _[a].common && r.as(a) >= t.length) return a;
                return k[e ? k.indexOf(e) : 0]
            }

            function c(t) {
                for (var e = k.indexOf(t) + 1, n = k.length; e < n; ++e)
                    if (_[k[e]].common) return k[e]
            }

            function f(t, e, n, i) {
                var o, a = i.time,
                    r = a.unit || d(a.minUnit, t, e, n),
                    s = c(r),
                    l = b.valueOrDefault(a.stepSize, a.unitStepSize),
                    h = "week" === r && a.isoWeekday,
                    f = i.ticks.major.enabled,
                    p = _[r],
                    g = v(t),
                    m = v(e),
                    y = [];
                for (l || (l = u(t, e, r, n)), h && (g = g.isoWeekday(h), m = m.isoWeekday(h)), g = g.startOf(h ? "day" : r), m = m.startOf(h ? "day" : r), m < e && m.add(1, r), o = v(g), f && s && !h && !a.round && (o.startOf(s), o.add(~~((g - o) / (p.size * l)) * l, r)); o < m; o.add(l, r)) y.push(+o);
                return y.push(+o), y
            }

            function p(t, e, n, i, o) {
                var a, s, l = 0,
                    u = 0;
                return o.offset && e.length && (o.time.min || (a = e.length > 1 ? e[1] : i, s = e[0], l = (r(t, "time", a, "pos") - r(t, "time", s, "pos")) / 2), o.time.max || (a = e[e.length - 1], s = e.length > 1 ? e[e.length - 2] : n, u = (r(t, "time", a, "pos") - r(t, "time", s, "pos")) / 2)), {
                    left: l,
                    right: u
                }
            }

            function g(t, e) {
                var n, i, o, a, r = [];
                for (n = 0, i = t.length; n < i; ++n) o = t[n], a = !!e && o === +v(o).startOf(e), r.push({
                    value: o,
                    major: a
                });
                return r
            }

            function m(t, e) {
                var n, i, o, a = t.length;
                for (n = 0; n < a; n++) {
                    if (i = s(t[n], e), 0 !== i.millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                    0 === i.second() && 0 === i.minute() && 0 === i.hour() || (o = !0)
                }
                return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
            }
            var v = t(6);
            v = "function" == typeof v ? v : window.moment;
            var y = t(25),
                b = t(45),
                x = Number.MIN_SAFE_INTEGER || -9007199254740991,
                w = Number.MAX_SAFE_INTEGER || 9007199254740991,
                _ = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                k = Object.keys(_);
            e.exports = function(t) {
                var e = {
                        position: "bottom",
                        distribution: "linear",
                        bounds: "data",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm a",
                                hour: "hA",
                                day: "MMM D",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1,
                            source: "auto",
                            major: {
                                enabled: !1
                            }
                        }
                    },
                    a = t.Scale.extend({
                        initialize: function() {
                            if (!v) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                        },
                        update: function() {
                            var e = this,
                                n = e.options;
                            return n.time && n.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(e, arguments)
                        },
                        getRightValue: function(e) {
                            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                        },
                        determineDataLimits: function() {
                            var t, e, o, a, r, s, u = this,
                                d = u.chart,
                                h = u.options.time,
                                c = h.unit || "day",
                                f = w,
                                p = x,
                                g = [],
                                m = [],
                                y = [];
                            for (t = 0, o = d.data.labels.length; t < o; ++t) y.push(l(d.data.labels[t], u));
                            for (t = 0, o = (d.data.datasets || []).length; t < o; ++t)
                                if (d.isDatasetVisible(t))
                                    if (r = d.data.datasets[t].data, b.isObject(r[0]))
                                        for (m[t] = [], e = 0, a = r.length; e < a; ++e) s = l(r[e], u), g.push(s), m[t][e] = s;
                                    else g.push.apply(g, y), m[t] = y.slice(0);
                            else m[t] = [];
                            y.length && (y = i(y).sort(n), f = Math.min(f, y[0]), p = Math.max(p, y[y.length - 1])), g.length && (g = i(g).sort(n), f = Math.min(f, g[0]), p = Math.max(p, g[g.length - 1])), f = l(h.min, u) || f, p = l(h.max, u) || p, f = f === w ? +v().startOf(c) : f, p = p === x ? +v().endOf(c) + 1 : p, u.min = Math.min(f, p), u.max = Math.max(f + 1, p), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
                                data: g,
                                datasets: m,
                                labels: y
                            }
                        },
                        buildTicks: function() {
                            var t, e, n, i = this,
                                a = i.min,
                                r = i.max,
                                s = i.options,
                                u = s.time,
                                d = [],
                                v = [];
                            switch (s.ticks.source) {
                                case "data":
                                    d = i._timestamps.data;
                                    break;
                                case "labels":
                                    d = i._timestamps.labels;
                                    break;
                                case "auto":
                                default:
                                    d = f(a, r, i.getLabelCapacity(a), s)
                            }
                            for ("ticks" === s.bounds && d.length && (a = d[0], r = d[d.length - 1]), a = l(u.min, i) || a, r = l(u.max, i) || r, t = 0, e = d.length; t < e; ++t) n = d[t], n >= a && n <= r && v.push(n);
                            return i.min = a, i.max = r, i._unit = u.unit || h(v, u.minUnit, i.min, i.max), i._majorUnit = c(i._unit), i._table = o(i._timestamps.data, a, r, s.distribution), i._offsets = p(i._table, v, a, r, s), i._labelFormat = m(i._timestamps.data, u), g(v, i._majorUnit)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this,
                                i = n.chart.data,
                                o = n.options.time,
                                a = i.labels && t < i.labels.length ? i.labels[t] : "",
                                r = i.datasets[e].data[t];
                            return b.isObject(r) && (a = n.getRightValue(r)), o.tooltipFormat ? s(a, o).format(o.tooltipFormat) : "string" == typeof a ? a : s(a, o).format(n._labelFormat)
                        },
                        tickFormatFunction: function(t, e, n, i) {
                            var o = this,
                                a = o.options,
                                r = t.valueOf(),
                                s = a.time.displayFormats,
                                l = s[o._unit],
                                u = o._majorUnit,
                                d = s[u],
                                h = t.clone().startOf(u).valueOf(),
                                c = a.ticks.major,
                                f = c.enabled && u && d && r === h,
                                p = t.format(i ? i : f ? d : l),
                                g = f ? c : a.ticks.minor,
                                m = b.valueOrDefault(g.callback, g.userCallback);
                            return m ? m(p, e, n) : p
                        },
                        convertTicksToLabels: function(t) {
                            var e, n, i = [];
                            for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(v(t[e].value), e, t));
                            return i
                        },
                        getPixelForOffset: function(t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                i = e._horizontal ? e.left : e.top,
                                o = r(e._table, "time", t, "pos");
                            return i + n * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right)
                        },
                        getPixelForValue: function(t, e, n) {
                            var i = this,
                                o = null;
                            if (void 0 !== e && void 0 !== n && (o = i._timestamps.datasets[n][e]), null === o && (o = l(t, i)), null !== o) return i.getPixelForOffset(o)
                        },
                        getPixelForTick: function(t) {
                            var e = this.getTicks();
                            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                i = e._horizontal ? e.left : e.top,
                                o = (n ? (t - i) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                a = r(e._table, "pos", o, "time");
                            return v(a)
                        },
                        getLabelWidth: function(t) {
                            var e = this,
                                n = e.options.ticks,
                                i = e.ctx.measureText(t).width,
                                o = b.toRadians(n.maxRotation),
                                a = Math.cos(o),
                                r = Math.sin(o),
                                s = b.valueOrDefault(n.fontSize, y.global.defaultFontSize);
                            return i * a + s * r
                        },
                        getLabelCapacity: function(t) {
                            var e = this,
                                n = e.options.time.displayFormats.millisecond,
                                i = e.tickFormatFunction(v(t), 0, [], n),
                                o = e.getLabelWidth(i),
                                a = e.isHorizontal() ? e.width : e.height,
                                r = Math.floor(a / o);
                            return r > 0 ? r : 1
                        }
                    });
                t.scaleService.registerScaleType("time", a, e)
            }
        }, {
            25: 25,
            45: 45,
            6: 6
        }]
    }, {}, [7])(7)
});