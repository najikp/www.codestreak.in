(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    1118: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return e(2730);
        },
      ]);
    },
    2730: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(5893),
        o = (e(2187), e(4885), e(1082), e(1669), e(6797), e(1712), e(4298)),
        i = e.n(o),
        c = (e(4146), e(9008)),
        u = e.n(c),
        s = e(7294);
      function f(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function a(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              f(n, t, e[t]);
            });
        }
        return n;
      }
      t.default = function (n) {
        var t = n.Component,
          e = n.pageProps;
        return (0, r.jsxs)(s.Fragment, {
          children: [
            (0, r.jsx)(i(), {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
              integrity:
                "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)(u(), {
              children: (0, r.jsx)("meta", {
                name: "viewport",
                content:
                  "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
              }),
            }),
            (0, r.jsx)(t, a({}, e)),
          ],
        });
      };
    },
    1669: function () {},
    6797: function () {},
    1712: function () {},
    1082: function () {},
    4885: function () {},
    4146: function () {},
    2187: function () {},
    9008: function (n, t, e) {
      n.exports = e(3121);
    },
    4298: function (n, t, e) {
      n.exports = e(3573);
    },
  },
  function (n) {
    var t = function (t) {
      return n((n.s = t));
    };
    n.O(0, [9774, 179], function () {
      return t(1118), t(880);
    });
    var e = n.O();
    _N_E = e;
  },
]);
