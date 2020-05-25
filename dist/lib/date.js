"use strict";

/**
 * Version: 1.0 Alpha-1 
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.CultureInfo = { name: "en-US", englishName: "English (United States)", nativeName: "English (United States)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: { shortDate: "M/d/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
Date.getMonthNumberFromName = function (name) {
  var n = Date.CultureInfo.monthNames,
      m = Date.CultureInfo.abbreviatedMonthNames,
      s = name.toLowerCase();for (var i = 0; i < n.length; i++) {
    if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
      return i;
    }
  }
  return -1;
};Date.getDayNumberFromName = function (name) {
  var n = Date.CultureInfo.dayNames,
      m = Date.CultureInfo.abbreviatedDayNames,
      o = Date.CultureInfo.shortestDayNames,
      s = name.toLowerCase();for (var i = 0; i < n.length; i++) {
    if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
      return i;
    }
  }
  return -1;
};Date.isLeapYear = function (year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};Date.getDaysInMonth = function (year, month) {
  return [31, Date.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};Date.getTimezoneOffset = function (s, dst) {
  return dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];
};Date.getTimezoneAbbreviation = function (offset, dst) {
  var n = dst || false ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard,
      p;for (p in n) {
    if (n[p] === offset) {
      return p;
    }
  }
  return null;
};Date.prototype.clone = function () {
  return new Date(this.getTime());
};Date.prototype.compareTo = function (date) {
  if (isNaN(this)) {
    throw new Error(this);
  }
  if (date instanceof Date && !isNaN(date)) {
    return this > date ? 1 : this < date ? -1 : 0;
  } else {
    throw new TypeError(date);
  }
};Date.prototype.equals = function (date) {
  return this.compareTo(date) === 0;
};Date.prototype.between = function (start, end) {
  var t = this.getTime();return t >= start.getTime() && t <= end.getTime();
};Date.prototype.addMilliseconds = function (value) {
  this.setMilliseconds(this.getMilliseconds() + value);return this;
};Date.prototype.addSeconds = function (value) {
  return this.addMilliseconds(value * 1000);
};Date.prototype.addMinutes = function (value) {
  return this.addMilliseconds(value * 60000);
};Date.prototype.addHours = function (value) {
  return this.addMilliseconds(value * 3600000);
};Date.prototype.addDays = function (value) {
  return this.addMilliseconds(value * 86400000);
};Date.prototype.addWeeks = function (value) {
  return this.addMilliseconds(value * 604800000);
};Date.prototype.addMonths = function (value) {
  var n = this.getDate();this.setDate(1);this.setMonth(this.getMonth() + value);this.setDate(Math.min(n, this.getDaysInMonth()));return this;
};Date.prototype.addYears = function (value) {
  return this.addMonths(value * 12);
};Date.prototype.add = function (config) {
  if (typeof config == "number") {
    this._orient = config;return this;
  }
  var x = config;if (x.millisecond || x.milliseconds) {
    this.addMilliseconds(x.millisecond || x.milliseconds);
  }
  if (x.second || x.seconds) {
    this.addSeconds(x.second || x.seconds);
  }
  if (x.minute || x.minutes) {
    this.addMinutes(x.minute || x.minutes);
  }
  if (x.hour || x.hours) {
    this.addHours(x.hour || x.hours);
  }
  if (x.month || x.months) {
    this.addMonths(x.month || x.months);
  }
  if (x.year || x.years) {
    this.addYears(x.year || x.years);
  }
  if (x.day || x.days) {
    this.addDays(x.day || x.days);
  }
  return this;
};Date._validate = function (value, min, max, name) {
  if (typeof value != "number") {
    throw new TypeError(value + " is not a Number.");
  } else if (value < min || value > max) {
    throw new RangeError(value + " is not a valid value for " + name + ".");
  }
  return true;
};Date.validateMillisecond = function (n) {
  return Date._validate(n, 0, 999, "milliseconds");
};Date.validateSecond = function (n) {
  return Date._validate(n, 0, 59, "seconds");
};Date.validateMinute = function (n) {
  return Date._validate(n, 0, 59, "minutes");
};Date.validateHour = function (n) {
  return Date._validate(n, 0, 23, "hours");
};Date.validateDay = function (n, year, month) {
  return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days");
};Date.validateMonth = function (n) {
  return Date._validate(n, 0, 11, "months");
};Date.validateYear = function (n) {
  return Date._validate(n, 1, 9999, "seconds");
};Date.prototype.set = function (config) {
  var x = config;if (!x.millisecond && x.millisecond !== 0) {
    x.millisecond = -1;
  }
  if (!x.second && x.second !== 0) {
    x.second = -1;
  }
  if (!x.minute && x.minute !== 0) {
    x.minute = -1;
  }
  if (!x.hour && x.hour !== 0) {
    x.hour = -1;
  }
  if (!x.day && x.day !== 0) {
    x.day = -1;
  }
  if (!x.month && x.month !== 0) {
    x.month = -1;
  }
  if (!x.year && x.year !== 0) {
    x.year = -1;
  }
  if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) {
    this.addMilliseconds(x.millisecond - this.getMilliseconds());
  }
  if (x.second != -1 && Date.validateSecond(x.second)) {
    this.addSeconds(x.second - this.getSeconds());
  }
  if (x.minute != -1 && Date.validateMinute(x.minute)) {
    this.addMinutes(x.minute - this.getMinutes());
  }
  if (x.hour != -1 && Date.validateHour(x.hour)) {
    this.addHours(x.hour - this.getHours());
  }
  if (x.month !== -1 && Date.validateMonth(x.month)) {
    this.addMonths(x.month - this.getMonth());
  }
  if (x.year != -1 && Date.validateYear(x.year)) {
    this.addYears(x.year - this.getFullYear());
  }
  if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) {
    this.addDays(x.day - this.getDate());
  }
  if (x.timezone) {
    this.setTimezone(x.timezone);
  }
  if (x.timezoneOffset) {
    this.setTimezoneOffset(x.timezoneOffset);
  }
  return this;
};Date.prototype.clearTime = function () {
  this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;
};Date.prototype.isLeapYear = function () {
  var y = this.getFullYear();return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
};Date.prototype.isWeekday = function () {
  return !(this.is().sat() || this.is().sun());
};Date.prototype.getDaysInMonth = function () {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};Date.prototype.moveToFirstDayOfMonth = function () {
  return this.set({ day: 1 });
};Date.prototype.moveToLastDayOfMonth = function () {
  return this.set({ day: this.getDaysInMonth() });
};Date.prototype.moveToDayOfWeek = function (day, orient) {
  var diff = (day - this.getDay() + 7 * (orient || +1)) % 7;return this.addDays(diff === 0 ? diff += 7 * (orient || +1) : diff);
};Date.prototype.moveToMonth = function (month, orient) {
  var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12;return this.addMonths(diff === 0 ? diff += 12 * (orient || +1) : diff);
};Date.prototype.getDayOfYear = function () {
  return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
};Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
  var y = this.getFullYear(),
      m = this.getMonth(),
      d = this.getDate();var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;var offset = 7 + 1 - new Date(y, 0, 1).getDay();if (offset == 8) {
    offset = 1;
  }
  var daynum = (Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000 + 1;var w = Math.floor((daynum - offset + 7) / 7);if (w === dow) {
    y--;var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay();if (prevOffset == 2 || prevOffset == 8) {
      w = 53;
    } else {
      w = 52;
    }
  }
  return w;
};Date.prototype.isDST = function () {
  console.log('isDST');return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D";
};Date.prototype.getTimezone = function () {
  return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
};Date.prototype.setTimezoneOffset = function (s) {
  var here = this.getTimezoneOffset(),
      there = Number(s) * -6 / 10;this.addMinutes(there - here);return this;
};Date.prototype.setTimezone = function (s) {
  return this.setTimezoneOffset(Date.getTimezoneOffset(s));
};Date.prototype.getUTCOffset = function () {
  var n = this.getTimezoneOffset() * -10 / 6,
      r;if (n < 0) {
    r = (n - 10000).toString();return r[0] + r.substr(2);
  } else {
    r = (n + 10000).toString();return "+" + r.substr(1);
  }
};Date.prototype.getDayName = function (abbrev) {
  return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()];
};Date.prototype.getMonthName = function (abbrev) {
  return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()];
};Date.prototype._toString = Date.prototype.toString;Date.prototype.toString = function (format) {
  var self = this;var p = function p(s) {
    return s.toString().length == 1 ? "0" + s : s;
  };return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function (format) {
    switch (format) {case "hh":
        return p(self.getHours() < 13 ? self.getHours() : self.getHours() - 12);case "h":
        return self.getHours() < 13 ? self.getHours() : self.getHours() - 12;case "HH":
        return p(self.getHours());case "H":
        return self.getHours();case "mm":
        return p(self.getMinutes());case "m":
        return self.getMinutes();case "ss":
        return p(self.getSeconds());case "s":
        return self.getSeconds();case "yyyy":
        return self.getFullYear();case "yy":
        return self.getFullYear().toString().substring(2, 4);case "dddd":
        return self.getDayName();case "ddd":
        return self.getDayName(true);case "dd":
        return p(self.getDate());case "d":
        return self.getDate().toString();case "MMMM":
        return self.getMonthName();case "MMM":
        return self.getMonthName(true);case "MM":
        return p(self.getMonth() + 1);case "M":
        return self.getMonth() + 1;case "t":
        return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);case "tt":
        return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;case "zzz":case "zz":case "z":
        return "";}
  }) : this._toString();
};
Date.now = function () {
  return new Date();
};Date.today = function () {
  return Date.now().clearTime();
};Date.prototype._orient = +1;Date.prototype.next = function () {
  this._orient = +1;return this;
};Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () {
  this._orient = -1;return this;
};Date.prototype._is = false;Date.prototype.is = function () {
  this._is = true;return this;
};Number.prototype._dateElement = "day";Number.prototype.fromNow = function () {
  var c = {};c[this._dateElement] = this;return Date.now().add(c);
};Number.prototype.ago = function () {
  var c = {};c[this._dateElement] = this * -1;return Date.now().add(c);
};(function () {
  var $D = Date.prototype,
      $N = Number.prototype;var dx = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
      mx = "january february march april may june july august september october november december".split(/\s/),
      px = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
      de;var df = function df(n) {
    return function () {
      if (this._is) {
        this._is = false;return this.getDay() == n;
      }
      return this.moveToDayOfWeek(n, this._orient);
    };
  };for (var i = 0; i < dx.length; i++) {
    $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i);
  }
  var mf = function mf(n) {
    return function () {
      if (this._is) {
        this._is = false;return this.getMonth() === n;
      }
      return this.moveToMonth(n, this._orient);
    };
  };for (var j = 0; j < mx.length; j++) {
    $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j);
  }
  var ef = function ef(j) {
    return function () {
      if (j.substring(j.length - 1) != "s") {
        j += "s";
      }
      return this["add" + j](this._orient);
    };
  };var nf = function nf(n) {
    return function () {
      this._dateElement = n;return this;
    };
  };for (var k = 0; k < px.length; k++) {
    de = px[k].toLowerCase();$D[de] = $D[de + "s"] = ef(px[k]);$N[de] = $N[de + "s"] = nf(de);
  }
})();Date.prototype.toJSONString = function () {
  return this.toString("yyyy-MM-ddThh:mm:ssZ");
};Date.prototype.toShortDateString = function () {
  return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);
};Date.prototype.toLongDateString = function () {
  return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);
};Date.prototype.toShortTimeString = function () {
  return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);
};Date.prototype.toLongTimeString = function () {
  return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);
};Date.prototype.getOrdinal = function () {
  switch (this.getDate()) {case 1:case 21:case 31:
      return "st";case 2:case 22:
      return "nd";case 3:case 23:
      return "rd";default:
      return "th";}
};
(function () {
  Date.Parsing = { Exception: function Exception(s) {
      this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
    } };var $P = Date.Parsing;var _ = $P.Operators = { rtoken: function rtoken(r) {
      return function (s) {
        var mx = s.match(r);if (mx) {
          return [mx[0], s.substring(mx[0].length)];
        } else {
          throw new $P.Exception(s);
        }
      };
    }, token: function token(s) {
      return function (s) {
        return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s);
      };
    }, stoken: function stoken(s) {
      return _.rtoken(new RegExp("^" + s));
    }, until: function until(p) {
      return function (s) {
        var qx = [],
            rx = null;while (s.length) {
          try {
            rx = p.call(this, s);
          } catch (e) {
            qx.push(rx[0]);s = rx[1];continue;
          }
          break;
        }
        return [qx, s];
      };
    }, many: function many(p) {
      return function (s) {
        var rx = [],
            r = null;while (s.length) {
          try {
            r = p.call(this, s);
          } catch (e) {
            return [rx, s];
          }
          rx.push(r[0]);s = r[1];
        }
        return [rx, s];
      };
    }, optional: function optional(p) {
      return function (s) {
        var r = null;try {
          r = p.call(this, s);
        } catch (e) {
          return [null, s];
        }
        return [r[0], r[1]];
      };
    }, not: function not(p) {
      return function (s) {
        try {
          p.call(this, s);
        } catch (e) {
          return [null, s];
        }
        throw new $P.Exception(s);
      };
    }, ignore: function ignore(p) {
      return p ? function (s) {
        var r = null;r = p.call(this, s);return [null, r[1]];
      } : null;
    }, product: function product() {
      var px = arguments[0],
          qx = Array.prototype.slice.call(arguments, 1),
          rx = [];for (var i = 0; i < px.length; i++) {
        rx.push(_.each(px[i], qx));
      }
      return rx;
    }, cache: function cache(rule) {
      var cache = {},
          r = null;return function (s) {
        try {
          r = cache[s] = cache[s] || rule.call(this, s);
        } catch (e) {
          r = cache[s] = e;
        }
        if (r instanceof $P.Exception) {
          throw r;
        } else {
          return r;
        }
      };
    }, any: function any() {
      var px = arguments;return function (s) {
        var r = null;for (var i = 0; i < px.length; i++) {
          if (px[i] == null) {
            continue;
          }
          try {
            r = px[i].call(this, s);
          } catch (e) {
            r = null;
          }
          if (r) {
            return r;
          }
        }
        throw new $P.Exception(s);
      };
    }, each: function each() {
      var px = arguments;return function (s) {
        var rx = [],
            r = null;for (var i = 0; i < px.length; i++) {
          if (px[i] == null) {
            continue;
          }
          try {
            r = px[i].call(this, s);
          } catch (e) {
            throw new $P.Exception(s);
          }
          rx.push(r[0]);s = r[1];
        }
        return [rx, s];
      };
    }, all: function all() {
      var px = arguments,
          _ = _;return _.each(_.optional(px));
    }, sequence: function sequence(px, d, c) {
      d = d || _.rtoken(/^\s*/);c = c || null;if (px.length == 1) {
        return px[0];
      }
      return function (s) {
        var r = null,
            q = null;var rx = [];for (var i = 0; i < px.length; i++) {
          try {
            r = px[i].call(this, s);
          } catch (e) {
            break;
          }
          rx.push(r[0]);try {
            q = d.call(this, r[1]);
          } catch (ex) {
            q = null;break;
          }
          s = q[1];
        }
        if (!r) {
          throw new $P.Exception(s);
        }
        if (q) {
          throw new $P.Exception(q[1]);
        }
        if (c) {
          try {
            r = c.call(this, r[1]);
          } catch (ey) {
            throw new $P.Exception(r[1]);
          }
        }
        return [rx, r ? r[1] : s];
      };
    }, between: function between(d1, p, d2) {
      d2 = d2 || d1;var _fn = _.each(_.ignore(d1), p, _.ignore(d2));return function (s) {
        var rx = _fn.call(this, s);return [[rx[0][0], r[0][2]], rx[1]];
      };
    }, list: function list(p, d, c) {
      d = d || _.rtoken(/^\s*/);c = c || null;return p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c));
    }, set: function set(px, d, c) {
      d = d || _.rtoken(/^\s*/);c = c || null;return function (s) {
        var r = null,
            p = null,
            q = null,
            rx = null,
            best = [[], s],
            last = false;for (var i = 0; i < px.length; i++) {
          q = null;p = null;r = null;last = px.length == 1;try {
            r = px[i].call(this, s);
          } catch (e) {
            continue;
          }
          rx = [[r[0]], r[1]];if (r[1].length > 0 && !last) {
            try {
              q = d.call(this, r[1]);
            } catch (ex) {
              last = true;
            }
          } else {
            last = true;
          }
          if (!last && q[1].length === 0) {
            last = true;
          }
          if (!last) {
            var qx = [];for (var j = 0; j < px.length; j++) {
              if (i != j) {
                qx.push(px[j]);
              }
            }
            p = _.set(qx, d).call(this, q[1]);if (p[0].length > 0) {
              rx[0] = rx[0].concat(p[0]);rx[1] = p[1];
            }
          }
          if (rx[1].length < best[1].length) {
            best = rx;
          }
          if (best[1].length === 0) {
            break;
          }
        }
        if (best[0].length === 0) {
          return best;
        }
        if (c) {
          try {
            q = c.call(this, best[1]);
          } catch (ey) {
            throw new $P.Exception(best[1]);
          }
          best[1] = q[1];
        }
        return best;
      };
    }, forward: function forward(gr, fname) {
      return function (s) {
        return gr[fname].call(this, s);
      };
    }, replace: function replace(rule, repl) {
      return function (s) {
        var r = rule.call(this, s);return [repl, r[1]];
      };
    }, process: function process(rule, fn) {
      return function (s) {
        var r = rule.call(this, s);return [fn.call(this, r[0]), r[1]];
      };
    }, min: function min(_min, rule) {
      return function (s) {
        var rx = rule.call(this, s);if (rx[0].length < _min) {
          throw new $P.Exception(s);
        }
        return rx;
      };
    } };var _generator = function _generator(op) {
    return function () {
      var args = null,
          rx = [];if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      } else if (arguments[0] instanceof Array) {
        args = arguments[0];
      }
      if (args) {
        for (var i = 0, px = args.shift(); i < px.length; i++) {
          args.unshift(px[i]);rx.push(op.apply(null, args));args.shift();return rx;
        }
      } else {
        return op.apply(null, arguments);
      }
    };
  };var gx = "optional not ignore cache".split(/\s/);for (var i = 0; i < gx.length; i++) {
    _[gx[i]] = _generator(_[gx[i]]);
  }
  var _vector = function _vector(op) {
    return function () {
      if (arguments[0] instanceof Array) {
        return op.apply(null, arguments[0]);
      } else {
        return op.apply(null, arguments);
      }
    };
  };var vx = "each any all".split(/\s/);for (var j = 0; j < vx.length; j++) {
    _[vx[j]] = _vector(_[vx[j]]);
  }
})();(function () {
  var flattenAndCompact = function flattenAndCompact(ax) {
    var rx = [];for (var i = 0; i < ax.length; i++) {
      if (ax[i] instanceof Array) {
        rx = rx.concat(flattenAndCompact(ax[i]));
      } else {
        if (ax[i]) {
          rx.push(ax[i]);
        }
      }
    }
    return rx;
  };Date.Grammar = {};Date.Translator = { hour: function hour(s) {
      return function () {
        this.hour = Number(s);
      };
    }, minute: function minute(s) {
      return function () {
        this.minute = Number(s);
      };
    }, second: function second(s) {
      return function () {
        this.second = Number(s);
      };
    }, meridian: function meridian(s) {
      return function () {
        this.meridian = s.slice(0, 1).toLowerCase();
      };
    }, timezone: function timezone(s) {
      return function () {
        var n = s.replace(/[^\d\+\-]/g, "");if (n.length) {
          this.timezoneOffset = Number(n);
        } else {
          this.timezone = s.toLowerCase();
        }
      };
    }, day: function day(x) {
      var s = x[0];return function () {
        this.day = Number(s.match(/\d+/)[0]);
      };
    }, month: function month(s) {
      return function () {
        this.month = s.length == 3 ? Date.getMonthNumberFromName(s) : Number(s) - 1;
      };
    }, year: function year(s) {
      return function () {
        var n = Number(s);this.year = s.length > 2 ? n : n + (n + 2000 < Date.CultureInfo.twoDigitYearMax ? 2000 : 1900);
      };
    }, rday: function rday(s) {
      return function () {
        switch (s) {case "yesterday":
            this.days = -1;break;case "tomorrow":
            this.days = 1;break;case "today":
            this.days = 0;break;case "now":
            this.days = 0;this.now = true;break;}
      };
    }, finishExact: function finishExact(x) {
      x = x instanceof Array ? x : [x];var now = new Date();this.year = now.getFullYear();this.month = now.getMonth();this.day = 1;this.hour = 0;this.minute = 0;this.second = 0;for (var i = 0; i < x.length; i++) {
        if (x[i]) {
          x[i].call(this);
        }
      }
      this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour;if (this.day > Date.getDaysInMonth(this.year, this.month)) {
        throw new RangeError(this.day + " is not a valid value for days.");
      }
      var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);if (this.timezone) {
        r.set({ timezone: this.timezone });
      } else if (this.timezoneOffset) {
        r.set({ timezoneOffset: this.timezoneOffset });
      }
      return r;
    }, finish: function finish(x) {
      x = x instanceof Array ? flattenAndCompact(x) : [x];if (x.length === 0) {
        return null;
      }
      for (var i = 0; i < x.length; i++) {
        if (typeof x[i] == "function") {
          x[i].call(this);
        }
      }
      if (this.now) {
        return new Date();
      }
      var today = Date.today();var method = null;var expression = !!(this.days != null || this.orient || this.operator);if (expression) {
        var gap, mod, orient;orient = this.orient == "past" || this.operator == "subtract" ? -1 : 1;if (this.weekday) {
          this.unit = "day";gap = Date.getDayNumberFromName(this.weekday) - today.getDay();mod = 7;this.days = gap ? (gap + orient * mod) % mod : orient * mod;
        }
        if (this.month) {
          this.unit = "month";gap = this.month - today.getMonth();mod = 12;this.months = gap ? (gap + orient * mod) % mod : orient * mod;this.month = null;
        }
        if (!this.unit) {
          this.unit = "day";
        }
        if (this[this.unit + "s"] == null || this.operator != null) {
          if (!this.value) {
            this.value = 1;
          }
          if (this.unit == "week") {
            this.unit = "day";this.value = this.value * 7;
          }
          this[this.unit + "s"] = this.value * orient;
        }
        return today.add(this);
      } else {
        if (this.meridian && this.hour) {
          this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour;
        }
        if (this.weekday && !this.day) {
          this.day = today.addDays(Date.getDayNumberFromName(this.weekday) - today.getDay()).getDate();
        }
        if (this.month && !this.day) {
          this.day = 1;
        }
        return today.set(this);
      }
    } };var _ = Date.Parsing.Operators,
      g = Date.Grammar,
      t = Date.Translator,
      _fn;g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter = _.stoken(":");g.whiteSpace = _.rtoken(/^\s*/);g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/);var _C = {};g.ctoken = function (keys) {
    var fn = _C[keys];if (!fn) {
      var c = Date.CultureInfo.regexPatterns;var kx = keys.split(/\s+/),
          px = [];for (var i = 0; i < kx.length; i++) {
        px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
      }
      fn = _C[keys] = _.any.apply(null, px);
    }
    return fn;
  };g.ctoken2 = function (key) {
    return _.rtoken(Date.CultureInfo.regexPatterns[key]);
  };g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour));g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour));g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour));g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour));g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute));g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute));g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second));g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second));g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter));g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian));g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian));g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone));g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone));g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone));g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz]));g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function (s) {
    return function () {
      this.weekday = s;
    };
  }));g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month));g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month));g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year));g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year));g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year));g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year));_fn = function _fn() {
    return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
  };g.day = _fn(g.d, g.dd);g.month = _fn(g.M, g.MMM);g.year = _fn(g.yyyy, g.yy);g.orientation = _.process(g.ctoken("past future"), function (s) {
    return function () {
      this.orient = s;
    };
  });g.operator = _.process(g.ctoken("add subtract"), function (s) {
    return function () {
      this.operator = s;
    };
  });g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);g.unit = _.process(g.ctoken("minute hour day week month year"), function (s) {
    return function () {
      this.unit = s;
    };
  });g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function (s) {
    return function () {
      this.value = s.replace(/\D/g, "");
    };
  });g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]);_fn = function _fn() {
    return _.set(arguments, g.datePartDelimiter);
  };g.mdy = _fn(g.ddd, g.month, g.day, g.year);g.ymd = _fn(g.ddd, g.year, g.month, g.day);g.dmy = _fn(g.ddd, g.day, g.month, g.year);g.date = function (s) {
    return (g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s);
  };g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (fmt) {
    if (g[fmt]) {
      return g[fmt];
    } else {
      throw Date.Parsing.Exception(fmt);
    }
  }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function (s) {
    return _.ignore(_.stoken(s));
  }))), function (rules) {
    return _.process(_.each.apply(null, rules), t.finishExact);
  });var _F = {};var _get = function _get(f) {
    return _F[f] = _F[f] || g.format(f)[0];
  };g.formats = function (fx) {
    if (fx instanceof Array) {
      var rx = [];for (var i = 0; i < fx.length; i++) {
        rx.push(_get(fx[i]));
      }
      return _.any.apply(null, rx);
    } else {
      return _get(fx);
    }
  };g._formats = g.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]);g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish);g.start = function (s) {
    try {
      var r = g._formats.call({}, s);if (r[1].length === 0) {
        return r;
      }
    } catch (e) {}
    return g._start.call({}, s);
  };
})();Date._parse = Date.parse;Date.parse = function (s) {
  var r = null;if (!s) {
    return null;
  }
  try {
    r = Date.Grammar.start.call({}, s);
  } catch (e) {
    return null;
  }
  return r[1].length === 0 ? r[0] : null;
};Date.getParseFunction = function (fx) {
  var fn = Date.Grammar.formats(fx);return function (s) {
    var r = null;try {
      r = fn.call({}, s);
    } catch (e) {
      return null;
    }
    return r[1].length === 0 ? r[0] : null;
  };
};Date.parseExact = function (s, fx) {
  return Date.getParseFunction(fx)(s);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuanMiXSwibmFtZXMiOlsiRGF0ZSIsIkN1bHR1cmVJbmZvIiwibmFtZSIsImVuZ2xpc2hOYW1lIiwibmF0aXZlTmFtZSIsImRheU5hbWVzIiwiYWJicmV2aWF0ZWREYXlOYW1lcyIsInNob3J0ZXN0RGF5TmFtZXMiLCJmaXJzdExldHRlckRheU5hbWVzIiwibW9udGhOYW1lcyIsImFiYnJldmlhdGVkTW9udGhOYW1lcyIsImFtRGVzaWduYXRvciIsInBtRGVzaWduYXRvciIsImZpcnN0RGF5T2ZXZWVrIiwidHdvRGlnaXRZZWFyTWF4IiwiZGF0ZUVsZW1lbnRPcmRlciIsImZvcm1hdFBhdHRlcm5zIiwic2hvcnREYXRlIiwibG9uZ0RhdGUiLCJzaG9ydFRpbWUiLCJsb25nVGltZSIsImZ1bGxEYXRlVGltZSIsInNvcnRhYmxlRGF0ZVRpbWUiLCJ1bml2ZXJzYWxTb3J0YWJsZURhdGVUaW1lIiwicmZjMTEyMyIsIm1vbnRoRGF5IiwieWVhck1vbnRoIiwicmVnZXhQYXR0ZXJucyIsImphbiIsImZlYiIsIm1hciIsImFwciIsIm1heSIsImp1biIsImp1bCIsImF1ZyIsInNlcCIsIm9jdCIsIm5vdiIsImRlYyIsInN1biIsIm1vbiIsInR1ZSIsIndlZCIsInRodSIsImZyaSIsInNhdCIsImZ1dHVyZSIsInBhc3QiLCJhZGQiLCJzdWJ0cmFjdCIsInllc3RlcmRheSIsInRvZGF5IiwidG9tb3Jyb3ciLCJub3ciLCJtaWxsaXNlY29uZCIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJ3ZWVrIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwic2hvcnRNZXJpZGlhbiIsImxvbmdNZXJpZGlhbiIsInRpbWV6b25lIiwib3JkaW5hbFN1ZmZpeCIsInRpbWVDb250ZXh0IiwiYWJicmV2aWF0ZWRUaW1lWm9uZVN0YW5kYXJkIiwiR01UIiwiRVNUIiwiQ1NUIiwiTVNUIiwiUFNUIiwiYWJicmV2aWF0ZWRUaW1lWm9uZURTVCIsIkVEVCIsIkNEVCIsIk1EVCIsIlBEVCIsImdldE1vbnRoTnVtYmVyRnJvbU5hbWUiLCJuIiwibSIsInMiLCJ0b0xvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJnZXREYXlOdW1iZXJGcm9tTmFtZSIsIm8iLCJpc0xlYXBZZWFyIiwiZ2V0RGF5c0luTW9udGgiLCJnZXRUaW1lem9uZU9mZnNldCIsImRzdCIsInRvVXBwZXJDYXNlIiwiZ2V0VGltZXpvbmVBYmJyZXZpYXRpb24iLCJvZmZzZXQiLCJwIiwicHJvdG90eXBlIiwiY2xvbmUiLCJnZXRUaW1lIiwiY29tcGFyZVRvIiwiZGF0ZSIsImlzTmFOIiwiRXJyb3IiLCJUeXBlRXJyb3IiLCJlcXVhbHMiLCJiZXR3ZWVuIiwic3RhcnQiLCJlbmQiLCJ0IiwiYWRkTWlsbGlzZWNvbmRzIiwidmFsdWUiLCJzZXRNaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJhZGRTZWNvbmRzIiwiYWRkTWludXRlcyIsImFkZEhvdXJzIiwiYWRkRGF5cyIsImFkZFdlZWtzIiwiYWRkTW9udGhzIiwiZ2V0RGF0ZSIsInNldERhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwiTWF0aCIsIm1pbiIsImFkZFllYXJzIiwiY29uZmlnIiwiX29yaWVudCIsIngiLCJtaWxsaXNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwibW9udGhzIiwieWVhcnMiLCJkYXlzIiwiX3ZhbGlkYXRlIiwibWF4IiwiUmFuZ2VFcnJvciIsInZhbGlkYXRlTWlsbGlzZWNvbmQiLCJ2YWxpZGF0ZVNlY29uZCIsInZhbGlkYXRlTWludXRlIiwidmFsaWRhdGVIb3VyIiwidmFsaWRhdGVEYXkiLCJ2YWxpZGF0ZU1vbnRoIiwidmFsaWRhdGVZZWFyIiwic2V0IiwiZ2V0U2Vjb25kcyIsImdldE1pbnV0ZXMiLCJnZXRIb3VycyIsImdldEZ1bGxZZWFyIiwic2V0VGltZXpvbmUiLCJ0aW1lem9uZU9mZnNldCIsInNldFRpbWV6b25lT2Zmc2V0IiwiY2xlYXJUaW1lIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInkiLCJpc1dlZWtkYXkiLCJpcyIsIm1vdmVUb0ZpcnN0RGF5T2ZNb250aCIsIm1vdmVUb0xhc3REYXlPZk1vbnRoIiwibW92ZVRvRGF5T2ZXZWVrIiwib3JpZW50IiwiZGlmZiIsImdldERheSIsIm1vdmVUb01vbnRoIiwiZ2V0RGF5T2ZZZWFyIiwiZmxvb3IiLCJnZXRXZWVrT2ZZZWFyIiwiZCIsImRvdyIsImRheW51bSIsIlVUQyIsInciLCJwcmV2T2Zmc2V0IiwiaXNEU1QiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJtYXRjaCIsImdldFRpbWV6b25lIiwiZ2V0VVRDT2Zmc2V0IiwiaGVyZSIsInRoZXJlIiwiTnVtYmVyIiwiciIsInN1YnN0ciIsImdldERheU5hbWUiLCJhYmJyZXYiLCJnZXRNb250aE5hbWUiLCJfdG9TdHJpbmciLCJmb3JtYXQiLCJzZWxmIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIm5leHQiLCJsYXN0IiwicHJldiIsInByZXZpb3VzIiwiX2lzIiwiX2RhdGVFbGVtZW50IiwiZnJvbU5vdyIsImMiLCJhZ28iLCIkRCIsIiROIiwiZHgiLCJzcGxpdCIsIm14IiwicHgiLCJkZSIsImRmIiwibWYiLCJqIiwiZWYiLCJuZiIsImsiLCJ0b0pTT05TdHJpbmciLCJ0b1Nob3J0RGF0ZVN0cmluZyIsInNob3J0RGF0ZVBhdHRlcm4iLCJ0b0xvbmdEYXRlU3RyaW5nIiwibG9uZ0RhdGVQYXR0ZXJuIiwidG9TaG9ydFRpbWVTdHJpbmciLCJzaG9ydFRpbWVQYXR0ZXJuIiwidG9Mb25nVGltZVN0cmluZyIsImxvbmdUaW1lUGF0dGVybiIsImdldE9yZGluYWwiLCJQYXJzaW5nIiwiRXhjZXB0aW9uIiwibWVzc2FnZSIsIiRQIiwiXyIsIk9wZXJhdG9ycyIsInJ0b2tlbiIsInRva2VuIiwiUmVnRXhwIiwic3Rva2VuIiwidW50aWwiLCJxeCIsInJ4IiwiY2FsbCIsImUiLCJwdXNoIiwibWFueSIsIm9wdGlvbmFsIiwibm90IiwiaWdub3JlIiwicHJvZHVjdCIsImFyZ3VtZW50cyIsIkFycmF5Iiwic2xpY2UiLCJlYWNoIiwiY2FjaGUiLCJydWxlIiwiYW55IiwiYWxsIiwic2VxdWVuY2UiLCJxIiwiZXgiLCJleSIsImQxIiwiZDIiLCJfZm4iLCJsaXN0IiwiYmVzdCIsImNvbmNhdCIsImZvcndhcmQiLCJnciIsImZuYW1lIiwicmVwbCIsInByb2Nlc3MiLCJmbiIsIl9nZW5lcmF0b3IiLCJvcCIsImFyZ3MiLCJzaGlmdCIsInVuc2hpZnQiLCJhcHBseSIsImd4IiwiX3ZlY3RvciIsInZ4IiwiZmxhdHRlbkFuZENvbXBhY3QiLCJheCIsIkdyYW1tYXIiLCJUcmFuc2xhdG9yIiwibWVyaWRpYW4iLCJyZGF5IiwiZmluaXNoRXhhY3QiLCJmaW5pc2giLCJtZXRob2QiLCJleHByZXNzaW9uIiwib3BlcmF0b3IiLCJnYXAiLCJtb2QiLCJ3ZWVrZGF5IiwidW5pdCIsImciLCJkYXRlUGFydERlbGltaXRlciIsInRpbWVQYXJ0RGVsaW1pdGVyIiwid2hpdGVTcGFjZSIsImdlbmVyYWxEZWxpbWl0ZXIiLCJfQyIsImN0b2tlbiIsImtleXMiLCJreCIsImN0b2tlbjIiLCJrZXkiLCJoIiwiaGgiLCJIIiwiSEgiLCJtbSIsInNzIiwiaG1zIiwidHQiLCJ6IiwienoiLCJ6enoiLCJ0aW1lU3VmZml4IiwidGltZSIsImRkIiwiZGRkIiwiZGRkZCIsIk0iLCJNTSIsIk1NTSIsIk1NTU0iLCJ5eSIsInl5eSIsInl5eXkiLCJvcmllbnRhdGlvbiIsIm1keSIsInltZCIsImRteSIsImZtdCIsInJ1bGVzIiwiX0YiLCJfZ2V0IiwiZiIsImZvcm1hdHMiLCJmeCIsIl9mb3JtYXRzIiwiX3N0YXJ0IiwiX3BhcnNlIiwicGFyc2UiLCJnZXRQYXJzZUZ1bmN0aW9uIiwicGFyc2VFeGFjdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztBQU9BQSxLQUFLQyxXQUFMLEdBQWlCLEVBQUNDLE1BQUssT0FBTixFQUFjQyxhQUFZLHlCQUExQixFQUFvREMsWUFBVyx5QkFBL0QsRUFBeUZDLFVBQVMsQ0FB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QixJQUE5QjtBQUFxQyxDQUZvQixDQUVuQjNMLEtBQUsyVixnQkFBTCxHQUFzQixVQUFTTCxFQUFULEVBQVk7QUFBQyxNQUFJckUsS0FBR2pSLEtBQUs2UixPQUFMLENBQWF3RCxPQUFiLENBQXFCQyxFQUFyQixDQUFQLENBQWdDLE9BQU8sVUFBU3BRLENBQVQsRUFBVztBQUFDLFFBQUl5RyxJQUFFLElBQU4sQ0FBVyxJQUFHO0FBQUNBLFVBQUVzRixHQUFHL0IsSUFBSCxDQUFRLEVBQVIsRUFBV2hLLENBQVgsQ0FBRjtBQUFpQixLQUFyQixDQUFxQixPQUFNaUssQ0FBTixFQUFRO0FBQUMsYUFBTyxJQUFQO0FBQWE7QUFDbEwsV0FBUXhELEVBQUUsQ0FBRixFQUFLdEcsTUFBTCxLQUFjLENBQWYsR0FBa0JzRyxFQUFFLENBQUYsQ0FBbEIsR0FBdUIsSUFBOUI7QUFBcUMsR0FEb0U7QUFDbEUsQ0FERCxDQUNFM0wsS0FBSzRWLFVBQUwsR0FBZ0IsVUFBUzFRLENBQVQsRUFBV29RLEVBQVgsRUFBYztBQUFDLFNBQU90VixLQUFLMlYsZ0JBQUwsQ0FBc0JMLEVBQXRCLEVBQTBCcFEsQ0FBMUIsQ0FBUDtBQUFxQyxDQUFwRSIsImZpbGUiOiJkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWZXJzaW9uOiAxLjAgQWxwaGEtMSBcbiAqIEJ1aWxkIERhdGU6IDEzLU5vdi0yMDA3XG4gKiBDb3B5cmlnaHQgKGMpIDIwMDYtMjAwNywgQ29vbGl0ZSBJbmMuIChodHRwOi8vd3d3LmNvb2xpdGUuY29tLykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlOiBMaWNlbnNlZCB1bmRlciBUaGUgTUlUIExpY2Vuc2UuIFNlZSBsaWNlbnNlLnR4dCBhbmQgaHR0cDovL3d3dy5kYXRlanMuY29tL2xpY2Vuc2UvLiBcbiAqIFdlYnNpdGU6IGh0dHA6Ly93d3cuZGF0ZWpzLmNvbS8gb3IgaHR0cDovL3d3dy5jb29saXRlLmNvbS9kYXRlanMvXG4gKi9cbkRhdGUuQ3VsdHVyZUluZm89e25hbWU6XCJlbi1VU1wiLGVuZ2xpc2hOYW1lOlwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIixuYXRpdmVOYW1lOlwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIixkYXlOYW1lczpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxhYmJyZXZpYXRlZERheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxzaG9ydGVzdERheU5hbWVzOltcIlN1XCIsXCJNb1wiLFwiVHVcIixcIldlXCIsXCJUaFwiLFwiRnJcIixcIlNhXCJdLGZpcnN0TGV0dGVyRGF5TmFtZXM6W1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxtb250aE5hbWVzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxhYmJyZXZpYXRlZE1vbnRoTmFtZXM6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxhbURlc2lnbmF0b3I6XCJBTVwiLHBtRGVzaWduYXRvcjpcIlBNXCIsZmlyc3REYXlPZldlZWs6MCx0d29EaWdpdFllYXJNYXg6MjAyOSxkYXRlRWxlbWVudE9yZGVyOlwibWR5XCIsZm9ybWF0UGF0dGVybnM6e3Nob3J0RGF0ZTpcIk0vZC95eXl5XCIsbG9uZ0RhdGU6XCJkZGRkLCBNTU1NIGRkLCB5eXl5XCIsc2hvcnRUaW1lOlwiaDptbSB0dFwiLGxvbmdUaW1lOlwiaDptbTpzcyB0dFwiLGZ1bGxEYXRlVGltZTpcImRkZGQsIE1NTU0gZGQsIHl5eXkgaDptbTpzcyB0dFwiLHNvcnRhYmxlRGF0ZVRpbWU6XCJ5eXl5LU1NLWRkVEhIOm1tOnNzXCIsdW5pdmVyc2FsU29ydGFibGVEYXRlVGltZTpcInl5eXktTU0tZGQgSEg6bW06c3NaXCIscmZjMTEyMzpcImRkZCwgZGQgTU1NIHl5eXkgSEg6bW06c3MgR01UXCIsbW9udGhEYXk6XCJNTU1NIGRkXCIseWVhck1vbnRoOlwiTU1NTSwgeXl5eVwifSxyZWdleFBhdHRlcm5zOntqYW46L15qYW4odWFyeSk/L2ksZmViOi9eZmViKHJ1YXJ5KT8vaSxtYXI6L15tYXIoY2gpPy9pLGFwcjovXmFwcihpbCk/L2ksbWF5Oi9ebWF5L2ksanVuOi9eanVuKGUpPy9pLGp1bDovXmp1bCh5KT8vaSxhdWc6L15hdWcodXN0KT8vaSxzZXA6L15zZXAodChlbWJlcik/KT8vaSxvY3Q6L15vY3Qob2Jlcik/L2ksbm92Oi9ebm92KGVtYmVyKT8vaSxkZWM6L15kZWMoZW1iZXIpPy9pLHN1bjovXnN1KG4oZGF5KT8pPy9pLG1vbjovXm1vKG4oZGF5KT8pPy9pLHR1ZTovXnR1KGUocyhkYXkpPyk/KT8vaSx3ZWQ6L153ZShkKG5lc2RheSk/KT8vaSx0aHU6L150aCh1KHIocyhkYXkpPyk/KT8pPy9pLGZyaTovXmZyKGkoZGF5KT8pPy9pLHNhdDovXnNhKHQodXJkYXkpPyk/L2ksZnV0dXJlOi9ebmV4dC9pLHBhc3Q6L15sYXN0fHBhc3R8cHJldihpb3VzKT8vaSxhZGQ6L14oXFwrfGFmdGVyfGZyb20pL2ksc3VidHJhY3Q6L14oXFwtfGJlZm9yZXxhZ28pL2kseWVzdGVyZGF5Oi9eeWVzdGVyZGF5L2ksdG9kYXk6L150KG9kYXkpPy9pLHRvbW9ycm93Oi9edG9tb3Jyb3cvaSxub3c6L15uKG93KT8vaSxtaWxsaXNlY29uZDovXm1zfG1pbGxpKHNlY29uZCk/cz8vaSxzZWNvbmQ6L15zZWMob25kKT9zPy9pLG1pbnV0ZTovXm1pbih1dGUpP3M/L2ksaG91cjovXmgob3UpP3JzPy9pLHdlZWs6L153KGVlKT9rL2ksbW9udGg6L15tKG8obnRoKT9zPyk/L2ksZGF5Oi9eZChheXM/KT8vaSx5ZWFyOi9eeSgoZWEpP3JzPyk/L2ksc2hvcnRNZXJpZGlhbjovXihhfHApL2ksbG9uZ01lcmlkaWFuOi9eKGFcXC4/bT9cXC4/fHBcXC4/bT9cXC4/KS9pLHRpbWV6b25lOi9eKChlKHN8ZCl0fGMoc3xkKXR8bShzfGQpdHxwKHN8ZCl0KXwoKGdtdCk/XFxzKihcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQ/KXxnbXQpL2ksb3JkaW5hbFN1ZmZpeDovXlxccyooc3R8bmR8cmR8dGgpL2ksdGltZUNvbnRleHQ6L15cXHMqKFxcOnxhfHApL2l9LGFiYnJldmlhdGVkVGltZVpvbmVTdGFuZGFyZDp7R01UOlwiLTAwMFwiLEVTVDpcIi0wNDAwXCIsQ1NUOlwiLTA1MDBcIixNU1Q6XCItMDYwMFwiLFBTVDpcIi0wNzAwXCJ9LGFiYnJldmlhdGVkVGltZVpvbmVEU1Q6e0dNVDpcIi0wMDBcIixFRFQ6XCItMDUwMFwiLENEVDpcIi0wNjAwXCIsTURUOlwiLTA3MDBcIixQRFQ6XCItMDgwMFwifX07XG5EYXRlLmdldE1vbnRoTnVtYmVyRnJvbU5hbWU9ZnVuY3Rpb24obmFtZSl7dmFyIG49RGF0ZS5DdWx0dXJlSW5mby5tb250aE5hbWVzLG09RGF0ZS5DdWx0dXJlSW5mby5hYmJyZXZpYXRlZE1vbnRoTmFtZXMscz1uYW1lLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe2lmKG5baV0udG9Mb3dlckNhc2UoKT09c3x8bVtpXS50b0xvd2VyQ2FzZSgpPT1zKXtyZXR1cm4gaTt9fVxucmV0dXJuLTE7fTtEYXRlLmdldERheU51bWJlckZyb21OYW1lPWZ1bmN0aW9uKG5hbWUpe3ZhciBuPURhdGUuQ3VsdHVyZUluZm8uZGF5TmFtZXMsbT1EYXRlLkN1bHR1cmVJbmZvLmFiYnJldmlhdGVkRGF5TmFtZXMsbz1EYXRlLkN1bHR1cmVJbmZvLnNob3J0ZXN0RGF5TmFtZXMscz1uYW1lLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe2lmKG5baV0udG9Mb3dlckNhc2UoKT09c3x8bVtpXS50b0xvd2VyQ2FzZSgpPT1zKXtyZXR1cm4gaTt9fVxucmV0dXJuLTE7fTtEYXRlLmlzTGVhcFllYXI9ZnVuY3Rpb24oeWVhcil7cmV0dXJuKCgoeWVhciU0PT09MCkmJih5ZWFyJTEwMCE9PTApKXx8KHllYXIlNDAwPT09MCkpO307RGF0ZS5nZXREYXlzSW5Nb250aD1mdW5jdGlvbih5ZWFyLG1vbnRoKXtyZXR1cm5bMzEsKERhdGUuaXNMZWFwWWVhcih5ZWFyKT8yOToyOCksMzEsMzAsMzEsMzAsMzEsMzEsMzAsMzEsMzAsMzFdW21vbnRoXTt9O0RhdGUuZ2V0VGltZXpvbmVPZmZzZXQ9ZnVuY3Rpb24ocyxkc3Qpe3JldHVybihkc3R8fGZhbHNlKT9EYXRlLkN1bHR1cmVJbmZvLmFiYnJldmlhdGVkVGltZVpvbmVEU1Rbcy50b1VwcGVyQ2FzZSgpXTpEYXRlLkN1bHR1cmVJbmZvLmFiYnJldmlhdGVkVGltZVpvbmVTdGFuZGFyZFtzLnRvVXBwZXJDYXNlKCldO307RGF0ZS5nZXRUaW1lem9uZUFiYnJldmlhdGlvbj1mdW5jdGlvbihvZmZzZXQsZHN0KXt2YXIgbj0oZHN0fHxmYWxzZSk/RGF0ZS5DdWx0dXJlSW5mby5hYmJyZXZpYXRlZFRpbWVab25lRFNUOkRhdGUuQ3VsdHVyZUluZm8uYWJicmV2aWF0ZWRUaW1lWm9uZVN0YW5kYXJkLHA7Zm9yKHAgaW4gbil7aWYobltwXT09PW9mZnNldCl7cmV0dXJuIHA7fX1cbnJldHVybiBudWxsO307RGF0ZS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkpO307RGF0ZS5wcm90b3R5cGUuY29tcGFyZVRvPWZ1bmN0aW9uKGRhdGUpe2lmKGlzTmFOKHRoaXMpKXt0aHJvdyBuZXcgRXJyb3IodGhpcyk7fVxuaWYoZGF0ZSBpbnN0YW5jZW9mIERhdGUmJiFpc05hTihkYXRlKSl7cmV0dXJuKHRoaXM+ZGF0ZSk/MToodGhpczxkYXRlKT8tMTowO31lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoZGF0ZSk7fX07RGF0ZS5wcm90b3R5cGUuZXF1YWxzPWZ1bmN0aW9uKGRhdGUpe3JldHVybih0aGlzLmNvbXBhcmVUbyhkYXRlKT09PTApO307RGF0ZS5wcm90b3R5cGUuYmV0d2Vlbj1mdW5jdGlvbihzdGFydCxlbmQpe3ZhciB0PXRoaXMuZ2V0VGltZSgpO3JldHVybiB0Pj1zdGFydC5nZXRUaW1lKCkmJnQ8PWVuZC5nZXRUaW1lKCk7fTtEYXRlLnByb3RvdHlwZS5hZGRNaWxsaXNlY29uZHM9ZnVuY3Rpb24odmFsdWUpe3RoaXMuc2V0TWlsbGlzZWNvbmRzKHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkrdmFsdWUpO3JldHVybiB0aGlzO307RGF0ZS5wcm90b3R5cGUuYWRkU2Vjb25kcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjEwMDApO307RGF0ZS5wcm90b3R5cGUuYWRkTWludXRlcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjYwMDAwKTt9O0RhdGUucHJvdG90eXBlLmFkZEhvdXJzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqMzYwMDAwMCk7fTtEYXRlLnByb3RvdHlwZS5hZGREYXlzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqODY0MDAwMDApO307RGF0ZS5wcm90b3R5cGUuYWRkV2Vla3M9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1pbGxpc2Vjb25kcyh2YWx1ZSo2MDQ4MDAwMDApO307RGF0ZS5wcm90b3R5cGUuYWRkTW9udGhzPWZ1bmN0aW9uKHZhbHVlKXt2YXIgbj10aGlzLmdldERhdGUoKTt0aGlzLnNldERhdGUoMSk7dGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkrdmFsdWUpO3RoaXMuc2V0RGF0ZShNYXRoLm1pbihuLHRoaXMuZ2V0RGF5c0luTW9udGgoKSkpO3JldHVybiB0aGlzO307RGF0ZS5wcm90b3R5cGUuYWRkWWVhcnM9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZE1vbnRocyh2YWx1ZSoxMik7fTtEYXRlLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oY29uZmlnKXtpZih0eXBlb2YgY29uZmlnPT1cIm51bWJlclwiKXt0aGlzLl9vcmllbnQ9Y29uZmlnO3JldHVybiB0aGlzO31cbnZhciB4PWNvbmZpZztpZih4Lm1pbGxpc2Vjb25kfHx4Lm1pbGxpc2Vjb25kcyl7dGhpcy5hZGRNaWxsaXNlY29uZHMoeC5taWxsaXNlY29uZHx8eC5taWxsaXNlY29uZHMpO31cbmlmKHguc2Vjb25kfHx4LnNlY29uZHMpe3RoaXMuYWRkU2Vjb25kcyh4LnNlY29uZHx8eC5zZWNvbmRzKTt9XG5pZih4Lm1pbnV0ZXx8eC5taW51dGVzKXt0aGlzLmFkZE1pbnV0ZXMoeC5taW51dGV8fHgubWludXRlcyk7fVxuaWYoeC5ob3VyfHx4LmhvdXJzKXt0aGlzLmFkZEhvdXJzKHguaG91cnx8eC5ob3Vycyk7fVxuaWYoeC5tb250aHx8eC5tb250aHMpe3RoaXMuYWRkTW9udGhzKHgubW9udGh8fHgubW9udGhzKTt9XG5pZih4LnllYXJ8fHgueWVhcnMpe3RoaXMuYWRkWWVhcnMoeC55ZWFyfHx4LnllYXJzKTt9XG5pZih4LmRheXx8eC5kYXlzKXt0aGlzLmFkZERheXMoeC5kYXl8fHguZGF5cyk7fVxucmV0dXJuIHRoaXM7fTtEYXRlLl92YWxpZGF0ZT1mdW5jdGlvbih2YWx1ZSxtaW4sbWF4LG5hbWUpe2lmKHR5cGVvZiB2YWx1ZSE9XCJudW1iZXJcIil7dGhyb3cgbmV3IFR5cGVFcnJvcih2YWx1ZStcIiBpcyBub3QgYSBOdW1iZXIuXCIpO31lbHNlIGlmKHZhbHVlPG1pbnx8dmFsdWU+bWF4KXt0aHJvdyBuZXcgUmFuZ2VFcnJvcih2YWx1ZStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgXCIrbmFtZStcIi5cIik7fVxucmV0dXJuIHRydWU7fTtEYXRlLnZhbGlkYXRlTWlsbGlzZWNvbmQ9ZnVuY3Rpb24obil7cmV0dXJuIERhdGUuX3ZhbGlkYXRlKG4sMCw5OTksXCJtaWxsaXNlY29uZHNcIik7fTtEYXRlLnZhbGlkYXRlU2Vjb25kPWZ1bmN0aW9uKG4pe3JldHVybiBEYXRlLl92YWxpZGF0ZShuLDAsNTksXCJzZWNvbmRzXCIpO307RGF0ZS52YWxpZGF0ZU1pbnV0ZT1mdW5jdGlvbihuKXtyZXR1cm4gRGF0ZS5fdmFsaWRhdGUobiwwLDU5LFwibWludXRlc1wiKTt9O0RhdGUudmFsaWRhdGVIb3VyPWZ1bmN0aW9uKG4pe3JldHVybiBEYXRlLl92YWxpZGF0ZShuLDAsMjMsXCJob3Vyc1wiKTt9O0RhdGUudmFsaWRhdGVEYXk9ZnVuY3Rpb24obix5ZWFyLG1vbnRoKXtyZXR1cm4gRGF0ZS5fdmFsaWRhdGUobiwxLERhdGUuZ2V0RGF5c0luTW9udGgoeWVhcixtb250aCksXCJkYXlzXCIpO307RGF0ZS52YWxpZGF0ZU1vbnRoPWZ1bmN0aW9uKG4pe3JldHVybiBEYXRlLl92YWxpZGF0ZShuLDAsMTEsXCJtb250aHNcIik7fTtEYXRlLnZhbGlkYXRlWWVhcj1mdW5jdGlvbihuKXtyZXR1cm4gRGF0ZS5fdmFsaWRhdGUobiwxLDk5OTksXCJzZWNvbmRzXCIpO307RGF0ZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGNvbmZpZyl7dmFyIHg9Y29uZmlnO2lmKCF4Lm1pbGxpc2Vjb25kJiZ4Lm1pbGxpc2Vjb25kIT09MCl7eC5taWxsaXNlY29uZD0tMTt9XG5pZigheC5zZWNvbmQmJnguc2Vjb25kIT09MCl7eC5zZWNvbmQ9LTE7fVxuaWYoIXgubWludXRlJiZ4Lm1pbnV0ZSE9PTApe3gubWludXRlPS0xO31cbmlmKCF4LmhvdXImJnguaG91ciE9PTApe3guaG91cj0tMTt9XG5pZigheC5kYXkmJnguZGF5IT09MCl7eC5kYXk9LTE7fVxuaWYoIXgubW9udGgmJngubW9udGghPT0wKXt4Lm1vbnRoPS0xO31cbmlmKCF4LnllYXImJngueWVhciE9PTApe3gueWVhcj0tMTt9XG5pZih4Lm1pbGxpc2Vjb25kIT0tMSYmRGF0ZS52YWxpZGF0ZU1pbGxpc2Vjb25kKHgubWlsbGlzZWNvbmQpKXt0aGlzLmFkZE1pbGxpc2Vjb25kcyh4Lm1pbGxpc2Vjb25kLXRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkpO31cbmlmKHguc2Vjb25kIT0tMSYmRGF0ZS52YWxpZGF0ZVNlY29uZCh4LnNlY29uZCkpe3RoaXMuYWRkU2Vjb25kcyh4LnNlY29uZC10aGlzLmdldFNlY29uZHMoKSk7fVxuaWYoeC5taW51dGUhPS0xJiZEYXRlLnZhbGlkYXRlTWludXRlKHgubWludXRlKSl7dGhpcy5hZGRNaW51dGVzKHgubWludXRlLXRoaXMuZ2V0TWludXRlcygpKTt9XG5pZih4LmhvdXIhPS0xJiZEYXRlLnZhbGlkYXRlSG91cih4LmhvdXIpKXt0aGlzLmFkZEhvdXJzKHguaG91ci10aGlzLmdldEhvdXJzKCkpO31cbmlmKHgubW9udGghPT0tMSYmRGF0ZS52YWxpZGF0ZU1vbnRoKHgubW9udGgpKXt0aGlzLmFkZE1vbnRocyh4Lm1vbnRoLXRoaXMuZ2V0TW9udGgoKSk7fVxuaWYoeC55ZWFyIT0tMSYmRGF0ZS52YWxpZGF0ZVllYXIoeC55ZWFyKSl7dGhpcy5hZGRZZWFycyh4LnllYXItdGhpcy5nZXRGdWxsWWVhcigpKTt9XG5pZih4LmRheSE9LTEmJkRhdGUudmFsaWRhdGVEYXkoeC5kYXksdGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSkpe3RoaXMuYWRkRGF5cyh4LmRheS10aGlzLmdldERhdGUoKSk7fVxuaWYoeC50aW1lem9uZSl7dGhpcy5zZXRUaW1lem9uZSh4LnRpbWV6b25lKTt9XG5pZih4LnRpbWV6b25lT2Zmc2V0KXt0aGlzLnNldFRpbWV6b25lT2Zmc2V0KHgudGltZXpvbmVPZmZzZXQpO31cbnJldHVybiB0aGlzO307RGF0ZS5wcm90b3R5cGUuY2xlYXJUaW1lPWZ1bmN0aW9uKCl7dGhpcy5zZXRIb3VycygwKTt0aGlzLnNldE1pbnV0ZXMoMCk7dGhpcy5zZXRTZWNvbmRzKDApO3RoaXMuc2V0TWlsbGlzZWNvbmRzKDApO3JldHVybiB0aGlzO307RGF0ZS5wcm90b3R5cGUuaXNMZWFwWWVhcj1mdW5jdGlvbigpe3ZhciB5PXRoaXMuZ2V0RnVsbFllYXIoKTtyZXR1cm4oKCh5JTQ9PT0wKSYmKHklMTAwIT09MCkpfHwoeSU0MDA9PT0wKSk7fTtEYXRlLnByb3RvdHlwZS5pc1dlZWtkYXk9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuaXMoKS5zYXQoKXx8dGhpcy5pcygpLnN1bigpKTt9O0RhdGUucHJvdG90eXBlLmdldERheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIERhdGUuZ2V0RGF5c0luTW9udGgodGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSk7fTtEYXRlLnByb3RvdHlwZS5tb3ZlVG9GaXJzdERheU9mTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXQoe2RheToxfSk7fTtEYXRlLnByb3RvdHlwZS5tb3ZlVG9MYXN0RGF5T2ZNb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNldCh7ZGF5OnRoaXMuZ2V0RGF5c0luTW9udGgoKX0pO307RGF0ZS5wcm90b3R5cGUubW92ZVRvRGF5T2ZXZWVrPWZ1bmN0aW9uKGRheSxvcmllbnQpe3ZhciBkaWZmPShkYXktdGhpcy5nZXREYXkoKSs3KihvcmllbnR8fCsxKSklNztyZXR1cm4gdGhpcy5hZGREYXlzKChkaWZmPT09MCk/ZGlmZis9Nyoob3JpZW50fHwrMSk6ZGlmZik7fTtEYXRlLnByb3RvdHlwZS5tb3ZlVG9Nb250aD1mdW5jdGlvbihtb250aCxvcmllbnQpe3ZhciBkaWZmPShtb250aC10aGlzLmdldE1vbnRoKCkrMTIqKG9yaWVudHx8KzEpKSUxMjtyZXR1cm4gdGhpcy5hZGRNb250aHMoKGRpZmY9PT0wKT9kaWZmKz0xMioob3JpZW50fHwrMSk6ZGlmZik7fTtEYXRlLnByb3RvdHlwZS5nZXREYXlPZlllYXI9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcigodGhpcy1uZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksMCwxKSkvODY0MDAwMDApO307RGF0ZS5wcm90b3R5cGUuZ2V0V2Vla09mWWVhcj1mdW5jdGlvbihmaXJzdERheU9mV2Vlayl7dmFyIHk9dGhpcy5nZXRGdWxsWWVhcigpLG09dGhpcy5nZXRNb250aCgpLGQ9dGhpcy5nZXREYXRlKCk7dmFyIGRvdz1maXJzdERheU9mV2Vla3x8RGF0ZS5DdWx0dXJlSW5mby5maXJzdERheU9mV2Vlazt2YXIgb2Zmc2V0PTcrMS1uZXcgRGF0ZSh5LDAsMSkuZ2V0RGF5KCk7aWYob2Zmc2V0PT04KXtvZmZzZXQ9MTt9XG52YXIgZGF5bnVtPSgoRGF0ZS5VVEMoeSxtLGQsMCwwLDApLURhdGUuVVRDKHksMCwxLDAsMCwwKSkvODY0MDAwMDApKzE7dmFyIHc9TWF0aC5mbG9vcigoZGF5bnVtLW9mZnNldCs3KS83KTtpZih3PT09ZG93KXt5LS07dmFyIHByZXZPZmZzZXQ9NysxLW5ldyBEYXRlKHksMCwxKS5nZXREYXkoKTtpZihwcmV2T2Zmc2V0PT0yfHxwcmV2T2Zmc2V0PT04KXt3PTUzO31lbHNle3c9NTI7fX1cbnJldHVybiB3O307RGF0ZS5wcm90b3R5cGUuaXNEU1Q9ZnVuY3Rpb24oKXtjb25zb2xlLmxvZygnaXNEU1QnKTtyZXR1cm4gdGhpcy50b1N0cmluZygpLm1hdGNoKC8oRXxDfE18UCkoU3xEKVQvKVsyXT09XCJEXCI7fTtEYXRlLnByb3RvdHlwZS5nZXRUaW1lem9uZT1mdW5jdGlvbigpe3JldHVybiBEYXRlLmdldFRpbWV6b25lQWJicmV2aWF0aW9uKHRoaXMuZ2V0VVRDT2Zmc2V0LHRoaXMuaXNEU1QoKSk7fTtEYXRlLnByb3RvdHlwZS5zZXRUaW1lem9uZU9mZnNldD1mdW5jdGlvbihzKXt2YXIgaGVyZT10aGlzLmdldFRpbWV6b25lT2Zmc2V0KCksdGhlcmU9TnVtYmVyKHMpKi02LzEwO3RoaXMuYWRkTWludXRlcyh0aGVyZS1oZXJlKTtyZXR1cm4gdGhpczt9O0RhdGUucHJvdG90eXBlLnNldFRpbWV6b25lPWZ1bmN0aW9uKHMpe3JldHVybiB0aGlzLnNldFRpbWV6b25lT2Zmc2V0KERhdGUuZ2V0VGltZXpvbmVPZmZzZXQocykpO307RGF0ZS5wcm90b3R5cGUuZ2V0VVRDT2Zmc2V0PWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5nZXRUaW1lem9uZU9mZnNldCgpKi0xMC82LHI7aWYobjwwKXtyPShuLTEwMDAwKS50b1N0cmluZygpO3JldHVybiByWzBdK3Iuc3Vic3RyKDIpO31lbHNle3I9KG4rMTAwMDApLnRvU3RyaW5nKCk7cmV0dXJuXCIrXCIrci5zdWJzdHIoMSk7fX07RGF0ZS5wcm90b3R5cGUuZ2V0RGF5TmFtZT1mdW5jdGlvbihhYmJyZXYpe3JldHVybiBhYmJyZXY/RGF0ZS5DdWx0dXJlSW5mby5hYmJyZXZpYXRlZERheU5hbWVzW3RoaXMuZ2V0RGF5KCldOkRhdGUuQ3VsdHVyZUluZm8uZGF5TmFtZXNbdGhpcy5nZXREYXkoKV07fTtEYXRlLnByb3RvdHlwZS5nZXRNb250aE5hbWU9ZnVuY3Rpb24oYWJicmV2KXtyZXR1cm4gYWJicmV2P0RhdGUuQ3VsdHVyZUluZm8uYWJicmV2aWF0ZWRNb250aE5hbWVzW3RoaXMuZ2V0TW9udGgoKV06RGF0ZS5DdWx0dXJlSW5mby5tb250aE5hbWVzW3RoaXMuZ2V0TW9udGgoKV07fTtEYXRlLnByb3RvdHlwZS5fdG9TdHJpbmc9RGF0ZS5wcm90b3R5cGUudG9TdHJpbmc7RGF0ZS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oZm9ybWF0KXt2YXIgc2VsZj10aGlzO3ZhciBwPWZ1bmN0aW9uIHAocyl7cmV0dXJuKHMudG9TdHJpbmcoKS5sZW5ndGg9PTEpP1wiMFwiK3M6czt9O3JldHVybiBmb3JtYXQ/Zm9ybWF0LnJlcGxhY2UoL2RkP2Q/ZD98TU0/TT9NP3x5eT95P3k/fGhoP3xISD98bW0/fHNzP3x0dD98eno/ej8vZyxmdW5jdGlvbihmb3JtYXQpe3N3aXRjaChmb3JtYXQpe2Nhc2VcImhoXCI6cmV0dXJuIHAoc2VsZi5nZXRIb3VycygpPDEzP3NlbGYuZ2V0SG91cnMoKTooc2VsZi5nZXRIb3VycygpLTEyKSk7Y2FzZVwiaFwiOnJldHVybiBzZWxmLmdldEhvdXJzKCk8MTM/c2VsZi5nZXRIb3VycygpOihzZWxmLmdldEhvdXJzKCktMTIpO2Nhc2VcIkhIXCI6cmV0dXJuIHAoc2VsZi5nZXRIb3VycygpKTtjYXNlXCJIXCI6cmV0dXJuIHNlbGYuZ2V0SG91cnMoKTtjYXNlXCJtbVwiOnJldHVybiBwKHNlbGYuZ2V0TWludXRlcygpKTtjYXNlXCJtXCI6cmV0dXJuIHNlbGYuZ2V0TWludXRlcygpO2Nhc2VcInNzXCI6cmV0dXJuIHAoc2VsZi5nZXRTZWNvbmRzKCkpO2Nhc2VcInNcIjpyZXR1cm4gc2VsZi5nZXRTZWNvbmRzKCk7Y2FzZVwieXl5eVwiOnJldHVybiBzZWxmLmdldEZ1bGxZZWFyKCk7Y2FzZVwieXlcIjpyZXR1cm4gc2VsZi5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIsNCk7Y2FzZVwiZGRkZFwiOnJldHVybiBzZWxmLmdldERheU5hbWUoKTtjYXNlXCJkZGRcIjpyZXR1cm4gc2VsZi5nZXREYXlOYW1lKHRydWUpO2Nhc2VcImRkXCI6cmV0dXJuIHAoc2VsZi5nZXREYXRlKCkpO2Nhc2VcImRcIjpyZXR1cm4gc2VsZi5nZXREYXRlKCkudG9TdHJpbmcoKTtjYXNlXCJNTU1NXCI6cmV0dXJuIHNlbGYuZ2V0TW9udGhOYW1lKCk7Y2FzZVwiTU1NXCI6cmV0dXJuIHNlbGYuZ2V0TW9udGhOYW1lKHRydWUpO2Nhc2VcIk1NXCI6cmV0dXJuIHAoKHNlbGYuZ2V0TW9udGgoKSsxKSk7Y2FzZVwiTVwiOnJldHVybiBzZWxmLmdldE1vbnRoKCkrMTtjYXNlXCJ0XCI6cmV0dXJuIHNlbGYuZ2V0SG91cnMoKTwxMj9EYXRlLkN1bHR1cmVJbmZvLmFtRGVzaWduYXRvci5zdWJzdHJpbmcoMCwxKTpEYXRlLkN1bHR1cmVJbmZvLnBtRGVzaWduYXRvci5zdWJzdHJpbmcoMCwxKTtjYXNlXCJ0dFwiOnJldHVybiBzZWxmLmdldEhvdXJzKCk8MTI/RGF0ZS5DdWx0dXJlSW5mby5hbURlc2lnbmF0b3I6RGF0ZS5DdWx0dXJlSW5mby5wbURlc2lnbmF0b3I7Y2FzZVwienp6XCI6Y2FzZVwienpcIjpjYXNlXCJ6XCI6cmV0dXJuXCJcIjt9fSk6dGhpcy5fdG9TdHJpbmcoKTt9O1xuRGF0ZS5ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUoKTt9O0RhdGUudG9kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKS5jbGVhclRpbWUoKTt9O0RhdGUucHJvdG90eXBlLl9vcmllbnQ9KzE7RGF0ZS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3RoaXMuX29yaWVudD0rMTtyZXR1cm4gdGhpczt9O0RhdGUucHJvdG90eXBlLmxhc3Q9RGF0ZS5wcm90b3R5cGUucHJldj1EYXRlLnByb3RvdHlwZS5wcmV2aW91cz1mdW5jdGlvbigpe3RoaXMuX29yaWVudD0tMTtyZXR1cm4gdGhpczt9O0RhdGUucHJvdG90eXBlLl9pcz1mYWxzZTtEYXRlLnByb3RvdHlwZS5pcz1mdW5jdGlvbigpe3RoaXMuX2lzPXRydWU7cmV0dXJuIHRoaXM7fTtOdW1iZXIucHJvdG90eXBlLl9kYXRlRWxlbWVudD1cImRheVwiO051bWJlci5wcm90b3R5cGUuZnJvbU5vdz1mdW5jdGlvbigpe3ZhciBjPXt9O2NbdGhpcy5fZGF0ZUVsZW1lbnRdPXRoaXM7cmV0dXJuIERhdGUubm93KCkuYWRkKGMpO307TnVtYmVyLnByb3RvdHlwZS5hZ289ZnVuY3Rpb24oKXt2YXIgYz17fTtjW3RoaXMuX2RhdGVFbGVtZW50XT10aGlzKi0xO3JldHVybiBEYXRlLm5vdygpLmFkZChjKTt9OyhmdW5jdGlvbigpe3ZhciAkRD1EYXRlLnByb3RvdHlwZSwkTj1OdW1iZXIucHJvdG90eXBlO3ZhciBkeD0oXCJzdW5kYXkgbW9uZGF5IHR1ZXNkYXkgd2VkbmVzZGF5IHRodXJzZGF5IGZyaWRheSBzYXR1cmRheVwiKS5zcGxpdCgvXFxzLyksbXg9KFwiamFudWFyeSBmZWJydWFyeSBtYXJjaCBhcHJpbCBtYXkganVuZSBqdWx5IGF1Z3VzdCBzZXB0ZW1iZXIgb2N0b2JlciBub3ZlbWJlciBkZWNlbWJlclwiKS5zcGxpdCgvXFxzLykscHg9KFwiTWlsbGlzZWNvbmQgU2Vjb25kIE1pbnV0ZSBIb3VyIERheSBXZWVrIE1vbnRoIFllYXJcIikuc3BsaXQoL1xccy8pLGRlO3ZhciBkZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuIHRoaXMuZ2V0RGF5KCk9PW47fVxucmV0dXJuIHRoaXMubW92ZVRvRGF5T2ZXZWVrKG4sdGhpcy5fb3JpZW50KTt9O307Zm9yKHZhciBpPTA7aTxkeC5sZW5ndGg7aSsrKXskRFtkeFtpXV09JERbZHhbaV0uc3Vic3RyaW5nKDAsMyldPWRmKGkpO31cbnZhciBtZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuIHRoaXMuZ2V0TW9udGgoKT09PW47fVxucmV0dXJuIHRoaXMubW92ZVRvTW9udGgobix0aGlzLl9vcmllbnQpO307fTtmb3IodmFyIGo9MDtqPG14Lmxlbmd0aDtqKyspeyREW214W2pdXT0kRFtteFtqXS5zdWJzdHJpbmcoMCwzKV09bWYoaik7fVxudmFyIGVmPWZ1bmN0aW9uKGope3JldHVybiBmdW5jdGlvbigpe2lmKGouc3Vic3RyaW5nKGoubGVuZ3RoLTEpIT1cInNcIil7ais9XCJzXCI7fVxucmV0dXJuIHRoaXNbXCJhZGRcIitqXSh0aGlzLl9vcmllbnQpO307fTt2YXIgbmY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5fZGF0ZUVsZW1lbnQ9bjtyZXR1cm4gdGhpczt9O307Zm9yKHZhciBrPTA7azxweC5sZW5ndGg7aysrKXtkZT1weFtrXS50b0xvd2VyQ2FzZSgpOyREW2RlXT0kRFtkZStcInNcIl09ZWYocHhba10pOyROW2RlXT0kTltkZStcInNcIl09bmYoZGUpO319KCkpO0RhdGUucHJvdG90eXBlLnRvSlNPTlN0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvU3RyaW5nKFwieXl5eS1NTS1kZFRoaDptbTpzc1pcIik7fTtEYXRlLnByb3RvdHlwZS50b1Nob3J0RGF0ZVN0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvU3RyaW5nKERhdGUuQ3VsdHVyZUluZm8uZm9ybWF0UGF0dGVybnMuc2hvcnREYXRlUGF0dGVybik7fTtEYXRlLnByb3RvdHlwZS50b0xvbmdEYXRlU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9TdHJpbmcoRGF0ZS5DdWx0dXJlSW5mby5mb3JtYXRQYXR0ZXJucy5sb25nRGF0ZVBhdHRlcm4pO307RGF0ZS5wcm90b3R5cGUudG9TaG9ydFRpbWVTdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b1N0cmluZyhEYXRlLkN1bHR1cmVJbmZvLmZvcm1hdFBhdHRlcm5zLnNob3J0VGltZVBhdHRlcm4pO307RGF0ZS5wcm90b3R5cGUudG9Mb25nVGltZVN0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvU3RyaW5nKERhdGUuQ3VsdHVyZUluZm8uZm9ybWF0UGF0dGVybnMubG9uZ1RpbWVQYXR0ZXJuKTt9O0RhdGUucHJvdG90eXBlLmdldE9yZGluYWw9ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5nZXREYXRlKCkpe2Nhc2UgMTpjYXNlIDIxOmNhc2UgMzE6cmV0dXJuXCJzdFwiO2Nhc2UgMjpjYXNlIDIyOnJldHVyblwibmRcIjtjYXNlIDM6Y2FzZSAyMzpyZXR1cm5cInJkXCI7ZGVmYXVsdDpyZXR1cm5cInRoXCI7fX07XG4oZnVuY3Rpb24oKXtEYXRlLlBhcnNpbmc9e0V4Y2VwdGlvbjpmdW5jdGlvbihzKXt0aGlzLm1lc3NhZ2U9XCJQYXJzZSBlcnJvciBhdCAnXCIrcy5zdWJzdHJpbmcoMCwxMCkrXCIgLi4uJ1wiO319O3ZhciAkUD1EYXRlLlBhcnNpbmc7dmFyIF89JFAuT3BlcmF0b3JzPXtydG9rZW46ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciBteD1zLm1hdGNoKHIpO2lmKG14KXtyZXR1cm4oW214WzBdLHMuc3Vic3RyaW5nKG14WzBdLmxlbmd0aCldKTt9ZWxzZXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO319O30sdG9rZW46ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKHMpe3JldHVybiBfLnJ0b2tlbihuZXcgUmVnRXhwKFwiXlxccypcIitzK1wiXFxzKlwiKSkocyk7fTt9LHN0b2tlbjpmdW5jdGlvbihzKXtyZXR1cm4gXy5ydG9rZW4obmV3IFJlZ0V4cChcIl5cIitzKSk7fSx1bnRpbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHF4PVtdLHJ4PW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyeD1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cXgucHVzaChyeFswXSk7cz1yeFsxXTtjb250aW51ZTt9XG5icmVhazt9XG5yZXR1cm5bcXgsc107fTt9LG1hbnk6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1bXSxyPW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyPXAuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bcngsc107fVxucngucHVzaChyWzBdKTtzPXJbMV07fVxucmV0dXJuW3J4LHNdO307fSxvcHRpb25hbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDt0cnl7cj1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cmV0dXJuW251bGwsc107fVxucmV0dXJuW3JbMF0sclsxXV07fTt9LG5vdDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3AuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bbnVsbCxzXTt9XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxpZ25vcmU6ZnVuY3Rpb24ocCl7cmV0dXJuIHA/ZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtyPXAuY2FsbCh0aGlzLHMpO3JldHVybltudWxsLHJbMV1dO306bnVsbDt9LHByb2R1Y3Q6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzWzBdLHF4PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyeD1bXTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe3J4LnB1c2goXy5lYWNoKHB4W2ldLHF4KSk7fVxucmV0dXJuIHJ4O30sY2FjaGU6ZnVuY3Rpb24ocnVsZSl7dmFyIGNhY2hlPXt9LHI9bnVsbDtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3I9Y2FjaGVbc109KGNhY2hlW3NdfHxydWxlLmNhbGwodGhpcyxzKSk7fWNhdGNoKGUpe3I9Y2FjaGVbc109ZTt9XG5pZihyIGluc3RhbmNlb2YgJFAuRXhjZXB0aW9uKXt0aHJvdyByO31lbHNle3JldHVybiByO319O30sYW55OmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7cj1udWxsO31cbmlmKHIpe3JldHVybiByO319XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxlYWNoOmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PVtdLHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5yeC5wdXNoKHJbMF0pO3M9clsxXTt9XG5yZXR1cm5bcngsc107fTt9LGFsbDpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHMsXz1fO3JldHVybiBfLmVhY2goXy5vcHRpb25hbChweCkpO30sc2VxdWVuY2U6ZnVuY3Rpb24ocHgsZCxjKXtkPWR8fF8ucnRva2VuKC9eXFxzKi8pO2M9Y3x8bnVsbDtpZihweC5sZW5ndGg9PTEpe3JldHVybiBweFswXTt9XG5yZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbCxxPW51bGw7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7dHJ5e3I9cHhbaV0uY2FsbCh0aGlzLHMpO31jYXRjaChlKXticmVhazt9XG5yeC5wdXNoKHJbMF0pO3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7cT1udWxsO2JyZWFrO31cbnM9cVsxXTt9XG5pZighcil7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5pZihxKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHFbMV0pO31cbmlmKGMpe3RyeXtyPWMuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihyWzFdKTt9fVxucmV0dXJuW3J4LChyP3JbMV06cyldO307fSxiZXR3ZWVuOmZ1bmN0aW9uKGQxLHAsZDIpe2QyPWQyfHxkMTt2YXIgX2ZuPV8uZWFjaChfLmlnbm9yZShkMSkscCxfLmlnbm9yZShkMikpO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9X2ZuLmNhbGwodGhpcyxzKTtyZXR1cm5bW3J4WzBdWzBdLHJbMF1bMl1dLHJ4WzFdXTt9O30sbGlzdDpmdW5jdGlvbihwLGQsYyl7ZD1kfHxfLnJ0b2tlbigvXlxccyovKTtjPWN8fG51bGw7cmV0dXJuKHAgaW5zdGFuY2VvZiBBcnJheT9fLmVhY2goXy5wcm9kdWN0KHAuc2xpY2UoMCwtMSksXy5pZ25vcmUoZCkpLHAuc2xpY2UoLTEpLF8uaWdub3JlKGMpKTpfLmVhY2goXy5tYW55KF8uZWFjaChwLF8uaWdub3JlKGQpKSkscHgsXy5pZ25vcmUoYykpKTt9LHNldDpmdW5jdGlvbihweCxkLGMpe2Q9ZHx8Xy5ydG9rZW4oL15cXHMqLyk7Yz1jfHxudWxsO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsLHA9bnVsbCxxPW51bGwscng9bnVsbCxiZXN0PVtbXSxzXSxsYXN0PWZhbHNlO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7cT1udWxsO3A9bnVsbDtyPW51bGw7bGFzdD0ocHgubGVuZ3RoPT0xKTt0cnl7cj1weFtpXS5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe2NvbnRpbnVlO31cbnJ4PVtbclswXV0sclsxXV07aWYoclsxXS5sZW5ndGg+MCYmIWxhc3Qpe3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7bGFzdD10cnVlO319ZWxzZXtsYXN0PXRydWU7fVxuaWYoIWxhc3QmJnFbMV0ubGVuZ3RoPT09MCl7bGFzdD10cnVlO31cbmlmKCFsYXN0KXt2YXIgcXg9W107Zm9yKHZhciBqPTA7ajxweC5sZW5ndGg7aisrKXtpZihpIT1qKXtxeC5wdXNoKHB4W2pdKTt9fVxucD1fLnNldChxeCxkKS5jYWxsKHRoaXMscVsxXSk7aWYocFswXS5sZW5ndGg+MCl7cnhbMF09cnhbMF0uY29uY2F0KHBbMF0pO3J4WzFdPXBbMV07fX1cbmlmKHJ4WzFdLmxlbmd0aDxiZXN0WzFdLmxlbmd0aCl7YmVzdD1yeDt9XG5pZihiZXN0WzFdLmxlbmd0aD09PTApe2JyZWFrO319XG5pZihiZXN0WzBdLmxlbmd0aD09PTApe3JldHVybiBiZXN0O31cbmlmKGMpe3RyeXtxPWMuY2FsbCh0aGlzLGJlc3RbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihiZXN0WzFdKTt9XG5iZXN0WzFdPXFbMV07fVxucmV0dXJuIGJlc3Q7fTt9LGZvcndhcmQ6ZnVuY3Rpb24oZ3IsZm5hbWUpe3JldHVybiBmdW5jdGlvbihzKXtyZXR1cm4gZ3JbZm5hbWVdLmNhbGwodGhpcyxzKTt9O30scmVwbGFjZTpmdW5jdGlvbihydWxlLHJlcGwpe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1ydWxlLmNhbGwodGhpcyxzKTtyZXR1cm5bcmVwbCxyWzFdXTt9O30scHJvY2VzczpmdW5jdGlvbihydWxlLGZuKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9cnVsZS5jYWxsKHRoaXMscyk7cmV0dXJuW2ZuLmNhbGwodGhpcyxyWzBdKSxyWzFdXTt9O30sbWluOmZ1bmN0aW9uKG1pbixydWxlKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PXJ1bGUuY2FsbCh0aGlzLHMpO2lmKHJ4WzBdLmxlbmd0aDxtaW4pe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fVxucmV0dXJuIHJ4O307fX07dmFyIF9nZW5lcmF0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe3ZhciBhcmdzPW51bGwscng9W107aWYoYXJndW1lbnRzLmxlbmd0aD4xKXthcmdzPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7fWVsc2UgaWYoYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBBcnJheSl7YXJncz1hcmd1bWVudHNbMF07fVxuaWYoYXJncyl7Zm9yKHZhciBpPTAscHg9YXJncy5zaGlmdCgpO2k8cHgubGVuZ3RoO2krKyl7YXJncy51bnNoaWZ0KHB4W2ldKTtyeC5wdXNoKG9wLmFwcGx5KG51bGwsYXJncykpO2FyZ3Muc2hpZnQoKTtyZXR1cm4gcng7fX1lbHNle3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50cyk7fX07fTt2YXIgZ3g9XCJvcHRpb25hbCBub3QgaWdub3JlIGNhY2hlXCIuc3BsaXQoL1xccy8pO2Zvcih2YXIgaT0wO2k8Z3gubGVuZ3RoO2krKyl7X1tneFtpXV09X2dlbmVyYXRvcihfW2d4W2ldXSk7fVxudmFyIF92ZWN0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe2lmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgQXJyYXkpe3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50c1swXSk7fWVsc2V7cmV0dXJuIG9wLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fTt9O3ZhciB2eD1cImVhY2ggYW55IGFsbFwiLnNwbGl0KC9cXHMvKTtmb3IodmFyIGo9MDtqPHZ4Lmxlbmd0aDtqKyspe19bdnhbal1dPV92ZWN0b3IoX1t2eFtqXV0pO319KCkpOyhmdW5jdGlvbigpe3ZhciBmbGF0dGVuQW5kQ29tcGFjdD1mdW5jdGlvbihheCl7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8YXgubGVuZ3RoO2krKyl7aWYoYXhbaV1pbnN0YW5jZW9mIEFycmF5KXtyeD1yeC5jb25jYXQoZmxhdHRlbkFuZENvbXBhY3QoYXhbaV0pKTt9ZWxzZXtpZihheFtpXSl7cngucHVzaChheFtpXSk7fX19XG5yZXR1cm4gcng7fTtEYXRlLkdyYW1tYXI9e307RGF0ZS5UcmFuc2xhdG9yPXtob3VyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuaG91cj1OdW1iZXIocyk7fTt9LG1pbnV0ZTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1pbnV0ZT1OdW1iZXIocyk7fTt9LHNlY29uZDpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnNlY29uZD1OdW1iZXIocyk7fTt9LG1lcmlkaWFuOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubWVyaWRpYW49cy5zbGljZSgwLDEpLnRvTG93ZXJDYXNlKCk7fTt9LHRpbWV6b25lOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXMucmVwbGFjZSgvW15cXGRcXCtcXC1dL2csXCJcIik7aWYobi5sZW5ndGgpe3RoaXMudGltZXpvbmVPZmZzZXQ9TnVtYmVyKG4pO31lbHNle3RoaXMudGltZXpvbmU9cy50b0xvd2VyQ2FzZSgpO319O30sZGF5OmZ1bmN0aW9uKHgpe3ZhciBzPXhbMF07cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5kYXk9TnVtYmVyKHMubWF0Y2goL1xcZCsvKVswXSk7fTt9LG1vbnRoOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9udGg9KChzLmxlbmd0aD09Myk/RGF0ZS5nZXRNb250aE51bWJlckZyb21OYW1lKHMpOihOdW1iZXIocyktMSkpO307fSx5ZWFyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPU51bWJlcihzKTt0aGlzLnllYXI9KChzLmxlbmd0aD4yKT9uOihuKygoKG4rMjAwMCk8RGF0ZS5DdWx0dXJlSW5mby50d29EaWdpdFllYXJNYXgpPzIwMDA6MTkwMCkpKTt9O30scmRheTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXtzd2l0Y2gocyl7Y2FzZVwieWVzdGVyZGF5XCI6dGhpcy5kYXlzPS0xO2JyZWFrO2Nhc2VcInRvbW9ycm93XCI6dGhpcy5kYXlzPTE7YnJlYWs7Y2FzZVwidG9kYXlcIjp0aGlzLmRheXM9MDticmVhaztjYXNlXCJub3dcIjp0aGlzLmRheXM9MDt0aGlzLm5vdz10cnVlO2JyZWFrO319O30sZmluaXNoRXhhY3Q6ZnVuY3Rpb24oeCl7eD0oeCBpbnN0YW5jZW9mIEFycmF5KT94Olt4XTt2YXIgbm93PW5ldyBEYXRlKCk7dGhpcy55ZWFyPW5vdy5nZXRGdWxsWWVhcigpO3RoaXMubW9udGg9bm93LmdldE1vbnRoKCk7dGhpcy5kYXk9MTt0aGlzLmhvdXI9MDt0aGlzLm1pbnV0ZT0wO3RoaXMuc2Vjb25kPTA7Zm9yKHZhciBpPTA7aTx4Lmxlbmd0aDtpKyspe2lmKHhbaV0pe3hbaV0uY2FsbCh0aGlzKTt9fVxudGhpcy5ob3VyPSh0aGlzLm1lcmlkaWFuPT1cInBcIiYmdGhpcy5ob3VyPDEzKT90aGlzLmhvdXIrMTI6dGhpcy5ob3VyO2lmKHRoaXMuZGF5PkRhdGUuZ2V0RGF5c0luTW9udGgodGhpcy55ZWFyLHRoaXMubW9udGgpKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcih0aGlzLmRheStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZGF5cy5cIik7fVxudmFyIHI9bmV3IERhdGUodGhpcy55ZWFyLHRoaXMubW9udGgsdGhpcy5kYXksdGhpcy5ob3VyLHRoaXMubWludXRlLHRoaXMuc2Vjb25kKTtpZih0aGlzLnRpbWV6b25lKXtyLnNldCh7dGltZXpvbmU6dGhpcy50aW1lem9uZX0pO31lbHNlIGlmKHRoaXMudGltZXpvbmVPZmZzZXQpe3Iuc2V0KHt0aW1lem9uZU9mZnNldDp0aGlzLnRpbWV6b25lT2Zmc2V0fSk7fVxucmV0dXJuIHI7fSxmaW5pc2g6ZnVuY3Rpb24oeCl7eD0oeCBpbnN0YW5jZW9mIEFycmF5KT9mbGF0dGVuQW5kQ29tcGFjdCh4KTpbeF07aWYoeC5sZW5ndGg9PT0wKXtyZXR1cm4gbnVsbDt9XG5mb3IodmFyIGk9MDtpPHgubGVuZ3RoO2krKyl7aWYodHlwZW9mIHhbaV09PVwiZnVuY3Rpb25cIil7eFtpXS5jYWxsKHRoaXMpO319XG5pZih0aGlzLm5vdyl7cmV0dXJuIG5ldyBEYXRlKCk7fVxudmFyIHRvZGF5PURhdGUudG9kYXkoKTt2YXIgbWV0aG9kPW51bGw7dmFyIGV4cHJlc3Npb249ISEodGhpcy5kYXlzIT1udWxsfHx0aGlzLm9yaWVudHx8dGhpcy5vcGVyYXRvcik7aWYoZXhwcmVzc2lvbil7dmFyIGdhcCxtb2Qsb3JpZW50O29yaWVudD0oKHRoaXMub3JpZW50PT1cInBhc3RcInx8dGhpcy5vcGVyYXRvcj09XCJzdWJ0cmFjdFwiKT8tMToxKTtpZih0aGlzLndlZWtkYXkpe3RoaXMudW5pdD1cImRheVwiO2dhcD0oRGF0ZS5nZXREYXlOdW1iZXJGcm9tTmFtZSh0aGlzLndlZWtkYXkpLXRvZGF5LmdldERheSgpKTttb2Q9Nzt0aGlzLmRheXM9Z2FwPygoZ2FwKyhvcmllbnQqbW9kKSklbW9kKToob3JpZW50Km1vZCk7fVxuaWYodGhpcy5tb250aCl7dGhpcy51bml0PVwibW9udGhcIjtnYXA9KHRoaXMubW9udGgtdG9kYXkuZ2V0TW9udGgoKSk7bW9kPTEyO3RoaXMubW9udGhzPWdhcD8oKGdhcCsob3JpZW50Km1vZCkpJW1vZCk6KG9yaWVudCptb2QpO3RoaXMubW9udGg9bnVsbDt9XG5pZighdGhpcy51bml0KXt0aGlzLnVuaXQ9XCJkYXlcIjt9XG5pZih0aGlzW3RoaXMudW5pdCtcInNcIl09PW51bGx8fHRoaXMub3BlcmF0b3IhPW51bGwpe2lmKCF0aGlzLnZhbHVlKXt0aGlzLnZhbHVlPTE7fVxuaWYodGhpcy51bml0PT1cIndlZWtcIil7dGhpcy51bml0PVwiZGF5XCI7dGhpcy52YWx1ZT10aGlzLnZhbHVlKjc7fVxudGhpc1t0aGlzLnVuaXQrXCJzXCJdPXRoaXMudmFsdWUqb3JpZW50O31cbnJldHVybiB0b2RheS5hZGQodGhpcyk7fWVsc2V7aWYodGhpcy5tZXJpZGlhbiYmdGhpcy5ob3VyKXt0aGlzLmhvdXI9KHRoaXMuaG91cjwxMyYmdGhpcy5tZXJpZGlhbj09XCJwXCIpP3RoaXMuaG91cisxMjp0aGlzLmhvdXI7fVxuaWYodGhpcy53ZWVrZGF5JiYhdGhpcy5kYXkpe3RoaXMuZGF5PSh0b2RheS5hZGREYXlzKChEYXRlLmdldERheU51bWJlckZyb21OYW1lKHRoaXMud2Vla2RheSktdG9kYXkuZ2V0RGF5KCkpKSkuZ2V0RGF0ZSgpO31cbmlmKHRoaXMubW9udGgmJiF0aGlzLmRheSl7dGhpcy5kYXk9MTt9XG5yZXR1cm4gdG9kYXkuc2V0KHRoaXMpO319fTt2YXIgXz1EYXRlLlBhcnNpbmcuT3BlcmF0b3JzLGc9RGF0ZS5HcmFtbWFyLHQ9RGF0ZS5UcmFuc2xhdG9yLF9mbjtnLmRhdGVQYXJ0RGVsaW1pdGVyPV8ucnRva2VuKC9eKFtcXHNcXC1cXC5cXCxcXC9cXHgyN10rKS8pO2cudGltZVBhcnREZWxpbWl0ZXI9Xy5zdG9rZW4oXCI6XCIpO2cud2hpdGVTcGFjZT1fLnJ0b2tlbigvXlxccyovKTtnLmdlbmVyYWxEZWxpbWl0ZXI9Xy5ydG9rZW4oL14oKFtcXHNcXCxdfGF0fG9uKSspLyk7dmFyIF9DPXt9O2cuY3Rva2VuPWZ1bmN0aW9uKGtleXMpe3ZhciBmbj1fQ1trZXlzXTtpZighZm4pe3ZhciBjPURhdGUuQ3VsdHVyZUluZm8ucmVnZXhQYXR0ZXJuczt2YXIga3g9a2V5cy5zcGxpdCgvXFxzKy8pLHB4PVtdO2Zvcih2YXIgaT0wO2k8a3gubGVuZ3RoO2krKyl7cHgucHVzaChfLnJlcGxhY2UoXy5ydG9rZW4oY1treFtpXV0pLGt4W2ldKSk7fVxuZm49X0Nba2V5c109Xy5hbnkuYXBwbHkobnVsbCxweCk7fVxucmV0dXJuIGZuO307Zy5jdG9rZW4yPWZ1bmN0aW9uKGtleSl7cmV0dXJuIF8ucnRva2VuKERhdGUuQ3VsdHVyZUluZm8ucmVnZXhQYXR0ZXJuc1trZXldKTt9O2cuaD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXigwWzAtOV18MVswLTJdfFsxLTldKS8pLHQuaG91cikpO2cuaGg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMFswLTldfDFbMC0yXSkvKSx0LmhvdXIpKTtnLkg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtMV1bMC05XXwyWzAtM118WzAtOV0pLyksdC5ob3VyKSk7Zy5ISD1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihbMC0xXVswLTldfDJbMC0zXSkvKSx0LmhvdXIpKTtnLm09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtNV1bMC05XXxbMC05XSkvKSx0Lm1pbnV0ZSkpO2cubW09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL15bMC01XVswLTldLyksdC5taW51dGUpKTtnLnM9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtNV1bMC05XXxbMC05XSkvKSx0LnNlY29uZCkpO2cuc3M9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL15bMC01XVswLTldLyksdC5zZWNvbmQpKTtnLmhtcz1fLmNhY2hlKF8uc2VxdWVuY2UoW2cuSCxnLm1tLGcuc3NdLGcudGltZVBhcnREZWxpbWl0ZXIpKTtnLnQ9Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4yKFwic2hvcnRNZXJpZGlhblwiKSx0Lm1lcmlkaWFuKSk7Zy50dD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJsb25nTWVyaWRpYW5cIiksdC5tZXJpZGlhbikpO2cuej1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXCt8XFwtKT9cXHMqXFxkXFxkXFxkXFxkPy8pLHQudGltZXpvbmUpKTtnLnp6PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcK3xcXC0pXFxzKlxcZFxcZFxcZFxcZC8pLHQudGltZXpvbmUpKTtnLnp6ej1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJ0aW1lem9uZVwiKSx0LnRpbWV6b25lKSk7Zy50aW1lU3VmZml4PV8uZWFjaChfLmlnbm9yZShnLndoaXRlU3BhY2UpLF8uc2V0KFtnLnR0LGcuenp6XSkpO2cudGltZT1fLmVhY2goXy5vcHRpb25hbChfLmlnbm9yZShfLnN0b2tlbihcIlRcIikpKSxnLmhtcyxnLnRpbWVTdWZmaXgpO2cuZD1fLmNhY2hlKF8ucHJvY2VzcyhfLmVhY2goXy5ydG9rZW4oL14oWzAtMl1cXGR8M1swLTFdfFxcZCkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGQ9Xy5jYWNoZShfLnByb2Nlc3MoXy5lYWNoKF8ucnRva2VuKC9eKFswLTJdXFxkfDNbMC0xXSkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGRkPWcuZGRkZD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbihcInN1biBtb24gdHVlIHdlZCB0aHUgZnJpIHNhdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLndlZWtkYXk9czt9O30pKTtnLk09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMVswLTJdfDBcXGR8XFxkKS8pLHQubW9udGgpKTtnLk1NPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDFbMC0yXXwwXFxkKS8pLHQubW9udGgpKTtnLk1NTT1nLk1NTU09Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4oXCJqYW4gZmViIG1hciBhcHIgbWF5IGp1biBqdWwgYXVnIHNlcCBvY3Qgbm92IGRlY1wiKSx0Lm1vbnRoKSk7Zy55PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZD8pLyksdC55ZWFyKSk7Zy55eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGQpLyksdC55ZWFyKSk7Zy55eXk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkP1xcZD9cXGQ/KS8pLHQueWVhcikpO2cueXl5eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGRcXGRcXGQpLyksdC55ZWFyKSk7X2ZuPWZ1bmN0aW9uKCl7cmV0dXJuIF8uZWFjaChfLmFueS5hcHBseShudWxsLGFyZ3VtZW50cyksXy5ub3QoZy5jdG9rZW4yKFwidGltZUNvbnRleHRcIikpKTt9O2cuZGF5PV9mbihnLmQsZy5kZCk7Zy5tb250aD1fZm4oZy5NLGcuTU1NKTtnLnllYXI9X2ZuKGcueXl5eSxnLnl5KTtnLm9yaWVudGF0aW9uPV8ucHJvY2VzcyhnLmN0b2tlbihcInBhc3QgZnV0dXJlXCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMub3JpZW50PXM7fTt9KTtnLm9wZXJhdG9yPV8ucHJvY2VzcyhnLmN0b2tlbihcImFkZCBzdWJ0cmFjdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm9wZXJhdG9yPXM7fTt9KTtnLnJkYXk9Xy5wcm9jZXNzKGcuY3Rva2VuKFwieWVzdGVyZGF5IHRvbW9ycm93IHRvZGF5IG5vd1wiKSx0LnJkYXkpO2cudW5pdD1fLnByb2Nlc3MoZy5jdG9rZW4oXCJtaW51dGUgaG91ciBkYXkgd2VlayBtb250aCB5ZWFyXCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMudW5pdD1zO307fSk7Zy52YWx1ZT1fLnByb2Nlc3MoXy5ydG9rZW4oL15cXGRcXGQ/KHN0fG5kfHJkfHRoKT8vKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXMucmVwbGFjZSgvXFxEL2csXCJcIik7fTt9KTtnLmV4cHJlc3Npb249Xy5zZXQoW2cucmRheSxnLm9wZXJhdG9yLGcudmFsdWUsZy51bml0LGcub3JpZW50YXRpb24sZy5kZGQsZy5NTU1dKTtfZm49ZnVuY3Rpb24oKXtyZXR1cm4gXy5zZXQoYXJndW1lbnRzLGcuZGF0ZVBhcnREZWxpbWl0ZXIpO307Zy5tZHk9X2ZuKGcuZGRkLGcubW9udGgsZy5kYXksZy55ZWFyKTtnLnltZD1fZm4oZy5kZGQsZy55ZWFyLGcubW9udGgsZy5kYXkpO2cuZG15PV9mbihnLmRkZCxnLmRheSxnLm1vbnRoLGcueWVhcik7Zy5kYXRlPWZ1bmN0aW9uKHMpe3JldHVybigoZ1tEYXRlLkN1bHR1cmVJbmZvLmRhdGVFbGVtZW50T3JkZXJdfHxnLm1keSkuY2FsbCh0aGlzLHMpKTt9O2cuZm9ybWF0PV8ucHJvY2VzcyhfLm1hbnkoXy5hbnkoXy5wcm9jZXNzKF8ucnRva2VuKC9eKGRkP2Q/ZD98TU0/TT9NP3x5eT95P3k/fGhoP3xISD98bW0/fHNzP3x0dD98eno/ej8pLyksZnVuY3Rpb24oZm10KXtpZihnW2ZtdF0pe3JldHVybiBnW2ZtdF07fWVsc2V7dGhyb3cgRGF0ZS5QYXJzaW5nLkV4Y2VwdGlvbihmbXQpO319KSxfLnByb2Nlc3MoXy5ydG9rZW4oL15bXmRNeWhIbXN0el0rLyksZnVuY3Rpb24ocyl7cmV0dXJuIF8uaWdub3JlKF8uc3Rva2VuKHMpKTt9KSkpLGZ1bmN0aW9uKHJ1bGVzKXtyZXR1cm4gXy5wcm9jZXNzKF8uZWFjaC5hcHBseShudWxsLHJ1bGVzKSx0LmZpbmlzaEV4YWN0KTt9KTt2YXIgX0Y9e307dmFyIF9nZXQ9ZnVuY3Rpb24oZil7cmV0dXJuIF9GW2ZdPShfRltmXXx8Zy5mb3JtYXQoZilbMF0pO307Zy5mb3JtYXRzPWZ1bmN0aW9uKGZ4KXtpZihmeCBpbnN0YW5jZW9mIEFycmF5KXt2YXIgcng9W107Zm9yKHZhciBpPTA7aTxmeC5sZW5ndGg7aSsrKXtyeC5wdXNoKF9nZXQoZnhbaV0pKTt9XG5yZXR1cm4gXy5hbnkuYXBwbHkobnVsbCxyeCk7fWVsc2V7cmV0dXJuIF9nZXQoZngpO319O2cuX2Zvcm1hdHM9Zy5mb3JtYXRzKFtcInl5eXktTU0tZGRUSEg6bW06c3NcIixcImRkZCwgTU1NIGRkLCB5eXl5IEg6bW06c3MgdHRcIixcImRkZCBNTU0gZCB5eXl5IEhIOm1tOnNzIHp6elwiLFwiZFwiXSk7Zy5fc3RhcnQ9Xy5wcm9jZXNzKF8uc2V0KFtnLmRhdGUsZy50aW1lLGcuZXhwcmVzc2lvbl0sZy5nZW5lcmFsRGVsaW1pdGVyLGcud2hpdGVTcGFjZSksdC5maW5pc2gpO2cuc3RhcnQ9ZnVuY3Rpb24ocyl7dHJ5e3ZhciByPWcuX2Zvcm1hdHMuY2FsbCh7fSxzKTtpZihyWzFdLmxlbmd0aD09PTApe3JldHVybiByO319Y2F0Y2goZSl7fVxucmV0dXJuIGcuX3N0YXJ0LmNhbGwoe30scyk7fTt9KCkpO0RhdGUuX3BhcnNlPURhdGUucGFyc2U7RGF0ZS5wYXJzZT1mdW5jdGlvbihzKXt2YXIgcj1udWxsO2lmKCFzKXtyZXR1cm4gbnVsbDt9XG50cnl7cj1EYXRlLkdyYW1tYXIuc3RhcnQuY2FsbCh7fSxzKTt9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxucmV0dXJuKChyWzFdLmxlbmd0aD09PTApP3JbMF06bnVsbCk7fTtEYXRlLmdldFBhcnNlRnVuY3Rpb249ZnVuY3Rpb24oZngpe3ZhciBmbj1EYXRlLkdyYW1tYXIuZm9ybWF0cyhmeCk7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByPW51bGw7dHJ5e3I9Zm4uY2FsbCh7fSxzKTt9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxucmV0dXJuKChyWzFdLmxlbmd0aD09PTApP3JbMF06bnVsbCk7fTt9O0RhdGUucGFyc2VFeGFjdD1mdW5jdGlvbihzLGZ4KXtyZXR1cm4gRGF0ZS5nZXRQYXJzZUZ1bmN0aW9uKGZ4KShzKTt9O1xuIl19