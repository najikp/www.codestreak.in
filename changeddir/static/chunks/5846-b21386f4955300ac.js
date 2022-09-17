"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5846],
  {
    5846: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return j;
        },
      });
      var a = n(5893),
        i = n(7294),
        d = n(5675),
        r = n.n(d),
        l = n(1664),
        c = n.n(l),
        o = n(3854),
        t = n(4762),
        h = function () {
          return (0, a.jsxs)("div", {
            className: "offcanvas-body",
            children: [
              (0, a.jsxs)("ul", {
                className:
                  "nav col-12 col-md-auto justify-content-center main-menu",
                children: [
                  (0, a.jsxs)("li", {
                    className: "nav-item dropdown",
                    children: [
                      (0, a.jsx)("a", {
                        className:
                          "nav-link dropdown-toggle d-flex justify-content-between",
                        href: "#",
                        role: "button",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        children: "Home",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "dropdown-menu border-0 rounded-custom shadow py-0 bg-white",
                        children: (0, a.jsx)("div", {
                          className: "dropdown-grid rounded-custom width-half",
                          children: (0, a.jsxs)("div", {
                            className: "dropdown-grid-item",
                            children: [
                              (0, a.jsx)("h6", {
                                className: "drop-heading",
                                children: "Different Home",
                              }),
                              t.kk.map(function (e, s) {
                                return (0,
                                a.jsx)("span", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link", children: [(0, a.jsx)("span", { className: "demo-list bg-primary rounded text-white fw-bold", children: s + 1 }), (0, a.jsxs)("span", { className: "dropdown-info mb-0", children: [(0, a.jsx)("span", { className: "drop-title", children: e.title }), (0, a.jsx)("span", { children: e.info })] })] }) }) }, s + 1);
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(c(), {
                      href: "/about-us",
                      children: (0, a.jsx)("a", {
                        className: "nav-link",
                        children: "About",
                      }),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(c(), {
                      href: "/services",
                      children: (0, a.jsx)("a", {
                        className: "nav-link",
                        children: "Services",
                      }),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(c(), {
                      href: "/pricing",
                      children: (0, a.jsx)("a", {
                        className: "nav-link",
                        children: "Pricing",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("li", {
                    className: "nav-item dropdown",
                    children: [
                      (0, a.jsx)("a", {
                        className:
                          "nav-link dropdown-toggle d-flex justify-content-between",
                        href: "#",
                        role: "button",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        children: "Company",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "dropdown-menu border-0 rounded-custom shadow py-0 bg-white",
                        children: (0, a.jsxs)("div", {
                          className: "dropdown-grid rounded-custom width-full",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "dropdown-grid-item",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "drop-heading",
                                  children: "Useful Links",
                                }),
                                t.nT.map(function (e, s) {
                                  return (0,
                                  a.jsx)("span", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link px-0", children: [(0, a.jsx)("span", { className: "me-2", children: e.icon }), (0, a.jsxs)("span", { className: "drop-title mb-0", children: [e.title, " "] })] }) }) }, s + 1);
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "dropdown-grid-item radius-right-side bg-light",
                              children: [
                                (0, a.jsx)("h6", {
                                  className: "drop-heading",
                                  children: "Utility Pages",
                                }),
                                t.Tn.map(function (e, s) {
                                  return (0,
                                  a.jsx)("span", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link", children: [(0, a.jsx)("span", { className: "me-2", children: e.icon }), (0, a.jsxs)("span", { className: "drop-title mb-0", children: [e.title, " "] })] }) }) }, s + 1);
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "action-btns mt-4 ps-3",
                children: [
                  (0, a.jsx)(c(), {
                    href: "/login",
                    children: (0, a.jsx)("a", {
                      className:
                        "btn btn-outline-primary text-decoration-none me-2",
                      children: "Sign In",
                    }),
                  }),
                  (0, a.jsx)(c(), {
                    href: "/request-demo",
                    children: (0, a.jsx)("a", {
                      className: "btn btn-primary",
                      children: "Get Started",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        m = n(5152),
        x = function (e) {
          var s = e.navDark,
            n = e.classOption,
            d = (0, i.useState)(0),
            l = d[0],
            m = d[1],
            x = (0, i.useState)(0),
            j = x[0],
            p = x[1];
          (0, i.useEffect)(function () {
            var e = document.querySelector(".main-header");
            return (
              p(e.offsetTop),
              window.addEventListener("scroll", f),
              function () {
                window.removeEventListener("scroll", f);
              }
            );
          }, []);
          var f = function () {
            m(window.scrollY);
          };
          return (0, a.jsx)("header", {
            className: "main-header "
              .concat(s ? "position-absolute" : "", " w-100 ")
              .concat(n),
            children: (0, a.jsx)("nav", {
              className: "navbar navbar-expand-xl z-50 "
                .concat(s ? "navbar-dark" : "navbar-light", " sticky-header ")
                .concat(l > j ? "affix" : ""),
              children: (0, a.jsxs)("div", {
                className:
                  "container d-flex align-items-center justify-content-lg-between position-relative",
                children: [
                  (0, a.jsx)(c(), {
                    href: "/",
                    children: (0, a.jsx)("a", {
                      className:
                        "navbar-brand d-flex align-items-center mb-md-0 text-decoration-none",
                      children:
                        l > j || !s
                          ? (0, a.jsx)(r(), {
                              width: 113,
                              height: 36,
                              src: "/logo-color.png",
                              alt: "logo",
                              className: "img-fluid logo-color",
                            })
                          : (0, a.jsx)(r(), {
                              width: 113,
                              height: 36,
                              src: "/logo-white.png",
                              alt: "logo",
                              className: "img-fluid logo-white",
                            }),
                    }),
                  }),
                  (0, a.jsx)("button", {
                    className:
                      "navbar-toggler position-absolute right-0 border-0",
                    id: "#offcanvasWithBackdrop",
                    role: "button",
                    children: (0, a.jsx)("span", {
                      "data-bs-toggle": "offcanvas",
                      "data-bs-target": "#offcanvasWithBackdrop",
                      "aria-controls": "offcanvasWithBackdrop",
                      children: (0, a.jsx)(o.r0I, {}),
                    }),
                  }),
                  (0, a.jsx)("div", { className: "clearfix" }),
                  (0, a.jsx)("div", {
                    className:
                      "collapse navbar-collapse justify-content-center",
                    children: (0, a.jsxs)("ul", {
                      className:
                        "nav col-12 col-md-auto justify-content-center main-menu",
                      children: [
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              href: "#",
                              role: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false",
                              children: "Home",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "dropdown-menu border-0 rounded-custom shadow py-0 bg-white",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "dropdown-grid rounded-custom width-full",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "dropdown-grid-item",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "drop-heading",
                                        children: "Different Home",
                                      }),
                                      t.PS.map(function (e, s) {
                                        return (0,
                                        a.jsx)("span", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link", children: [(0, a.jsx)("span", { className: "demo-list bg-primary rounded text-white fw-bold", children: s + 1 }), (0, a.jsxs)("span", { className: "dropdown-info mb-0", children: [(0, a.jsx)("span", { className: "drop-title", children: e.title }), (0, a.jsx)("span", { children: e.info })] })] }) }) }, s + 1);
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "dropdown-grid-item radius-right-side bg-light",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "drop-heading",
                                        children: "Different Home",
                                      }),
                                      t.i3.map(function (e, s) {
                                        return (0,
                                        a.jsx)("span", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link", children: [(0, a.jsx)("span", { className: "demo-list bg-primary rounded text-white fw-bold", children: s + 9 }), (0, a.jsxs)("span", { className: "dropdown-info mb-0", children: [(0, a.jsx)("span", { className: "drop-title", children: e.title }), (0, a.jsx)("span", { children: e.info })] })] }) }) }, s + 9);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(c(), {
                            href: "about-us",
                            children: (0, a.jsx)("a", {
                              className: "nav-link",
                              children: "About",
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(c(), {
                            href: "services",
                            children: (0, a.jsx)("a", {
                              className: "nav-link",
                              children: "Services",
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          children: (0, a.jsx)(c(), {
                            href: "pricing",
                            children: (0, a.jsx)("a", {
                              className: "nav-link",
                              children: "Pricing",
                            }),
                          }),
                        }),
                        (0, a.jsxs)("li", {
                          className: "nav-item dropdown",
                          children: [
                            (0, a.jsx)("a", {
                              className: "nav-link dropdown-toggle",
                              href: "#",
                              role: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false",
                              children: "Company",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "dropdown-menu border-0 rounded-custom shadow py-0 bg-white",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "dropdown-grid rounded-custom width-full",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "dropdown-grid-item",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "drop-heading",
                                        children: "Useful Links",
                                      }),
                                      t.nT.map(function (e, s) {
                                        return (0,
                                        a.jsx)("div", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link px-0", children: [(0, a.jsx)("span", { className: "me-2", children: e.icon }), (0, a.jsxs)("span", { className: "drop-title mb-0", children: [e.title, " "] })] }) }) }, s + 1);
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "dropdown-grid-item radius-right-side bg-light",
                                    children: [
                                      (0, a.jsx)("h6", {
                                        className: "drop-heading",
                                        children: "Utility Pages",
                                      }),
                                      t.Tn.map(function (e, s) {
                                        return (0,
                                        a.jsx)("div", { children: (0, a.jsx)(c(), { href: e.href, children: (0, a.jsxs)("a", { className: "dropdown-link", children: [(0, a.jsx)("span", { className: "me-2", children: e.icon }), (0, a.jsxs)("span", { className: "drop-title mb-0", children: [e.title, " "] })] }) }) }, s + 1);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block",
                    children: [
                      (0, a.jsx)(c(), {
                        href: "login",
                        children: (0, a.jsx)("a", {
                          className: "btn btn-link text-decoration-none me-2",
                          children: "Sign In",
                        }),
                      }),
                      (0, a.jsx)(c(), {
                        href: "request-demo",
                        children: (0, a.jsx)("a", {
                          className: "btn btn-primary",
                          children: "Get Started",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "offcanvas offcanvas-end d-xl-none",
                    tabIndex: "-1",
                    id: "offcanvasWithBackdrop",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "offcanvas-header d-flex align-items-center mt-4",
                        children: [
                          (0, a.jsx)(c(), {
                            href: "/",
                            children: (0, a.jsx)("a", {
                              className:
                                "d-flex align-items-center mb-md-0 text-decoration-none",
                              children: (0, a.jsx)(r(), {
                                width: 121,
                                height: 36,
                                src: "/logo-color.png",
                                alt: "logo",
                                className: "img-fluid ps-2",
                              }),
                            }),
                          }),
                          (0, a.jsx)("button", {
                            type: "button",
                            className: "close-btn text-danger",
                            "data-bs-dismiss": "offcanvas",
                            "aria-label": "Close",
                            children: (0, a.jsx)(o.fMW, {}),
                          }),
                        ],
                      }),
                      (0, a.jsx)(h, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        j = n.n(m)()(
          function () {
            return Promise.resolve(x);
          },
          { ssr: !1 }
        );
    },
  },
]);
