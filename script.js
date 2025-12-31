!(function () {
  let e = !1,
    t = !1,
    n = !1;
  try {
    (e = !window.ReactNativeWebView && window.self === window.top),
      (t =
        window.self?.location?.host &&
        (window.self.location.host.includes(".netlify.app") ||
          window.self.location.host.includes(".public.builtwithrocket.new"))),
      (n = navigator?.userAgent?.includes("Puppeteer"));
  } catch (e) {}
  let o = "",
    i = "";
  try {
    const e = (function () {
        const e = document.getElementsByTagName("script");
        for (let t of e) if (t.src.includes("rocket-web.js")) return t.src;
        return null;
      })(),
      t = new URL(e),
      n = new URLSearchParams(t?.search);
    (o = n.get("_cfg") || ""), (i = n.get("_be") || "");
  } catch (e) {}
  function a(t) {
    e ||
      n ||
      fetch(`${o}/log-error`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      }).catch((e) => {});
  }
  function r(t) {
    e ||
      n ||
      fetch(`${o}/logs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      }).catch((e) => {});
  }
  function s(o) {
    e &&
      t &&
      !n &&
      (function (e, t) {
        i &&
          fetch(`${i}/preview/v1/track`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          })
            .then((e) => {
              if (!e.ok) throw new Error("Bad response");
              return e.json();
            })
            .then((e) => {
              t(e);
            })
            .catch((e) => {});
      })(
        {
          event: "Public Preview Viewed",
          baseUrl: window.location.origin,
          previewUrl: window.location.href,
        },
        (e) => {
          "function" == typeof o && e?.isPublic && o();
        }
      );
  }
  function c() {
    e ||
      window.parent.postMessage(
        {
          type: "WEB_IFRAME_PATHNAME_CHANGE",
          pathname: window.location.pathname,
        },
        "*"
      );
  }
  function d() {
    try {
      const e = document.createElement("link");
      (e.rel = "stylesheet"),
        (e.href =
          "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"),
        document.head.appendChild(e);
      const t = document.createElement("div");
      (t.style.position = "fixed"),
        (t.style.right = "0"),
        (t.style.bottom = "0"),
        (t.style.zIndex = "100000"),
        (t.style.transform = "scale(0.7)"),
        (t.style.display = "block"),
        (t.style.cursor = "pointer"),
        (t.onclick = () => window.open("https://www.rocket.new", "_blank")),
        (t.innerHTML =
          '\n          <div style="\n            border-radius: 6px;\n            background: #fff;\n            box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.20);\n            display: flex;\n            padding: 4px;\n            justify-content: center;\n            align-items: center;\n            gap: 8px;\n            flex-direction: column;\n          ">\n            <div style="\n              border: 2px solid #000;\n              border-radius: 6px;\n              display: flex;\n              flex-direction: column;\n              padding: 10px;\n            ">\n              <img src="https://strapi.rocket.new/uploads/rocket_mono_e0dedcb10b.png" style="\n                width: 30px;\n                margin: auto auto 8px auto;\n              ">\n              <h3 style="\n                text-align: center;\n                font-family: Inter, sans-serif;\n                font-size: 12px;\n                font-style: normal;\n                font-weight: 500;\n                line-height: 20px;\n                color: #777777;\n                margin: 0;\n              ">Built with</h3>\n              <h3 style="\n                font-family: Inter, sans-serif;\n                font-size: 14px;\n                font-style: normal;\n                font-weight: 500;\n                line-height: 20px;\n                color: #000;\n                margin-top: -4px;\n                margin-bottom: 0;\n              ">Rocket.new</h3>\n            </div>\n          </div>\n        '),
        document.body.appendChild(t);
    } catch (e) {}
  }
  if (
    (e || window.parent.postMessage({ type: "WEB_IFRAME_LOADING" }, "*"),
    c(),
    document.addEventListener("DOMContentLoaded", () => {
      e ||
        window.parent.postMessage({ type: "WEB_IFRAME_DOCUMENT_LOADED" }, "*"),
        s(d);
    }),
    window.history && window.history.pushState)
  ) {
    const e = window.history.pushState;
    window.history.pushState = function () {
      e.apply(this, arguments), c(), s();
    };
    const t = window.history.replaceState;
    (window.history.replaceState = function () {
      t.apply(this, arguments), c(), s();
    }),
      window.addEventListener("popstate", function () {
        c(), s();
      });
  }
  window.addEventListener("hashchange", function () {
    c(), s();
  }),
    (window.__COMPONENT_ERROR__ = function (e, t) {
      let n = e?.stack || null,
        o = !1;
      n && n.includes(e.message) && (o = !0);
      let i = n ? (o ? n : `${e.message}\n\n${n}`) : e.message;
      t.componentStack && (i += t.componentStack),
        a({
          errorType: "RUNTIME_ERROR",
          message: i,
          timestamp: new Date().toISOString(),
        });
    }),
    (window.onerror = function (e, t, n, o, i) {
      const s = i?.stack || null,
        c = s ? `${e}\n\n${s}` : e;
      r({
        type: "CONSOLE_ERROR",
        message: c,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        a({
          errorType: "RUNTIME_ERROR",
          message: c,
          timestamp: new Date().toISOString(),
        });
    }),
    (window.onunhandledrejection = function (e) {
      const t = e.reason?.message || String(e.reason),
        n = e.reason?.stack || null,
        o = n ? `${t}\n\n${n}` : t;
      r({
        type: "CONSOLE_ERROR",
        message: o,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        a({
          errorType: "RUNTIME_ERROR",
          message: o,
          timestamp: new Date().toISOString(),
        });
    });
  const l = console.error,
    p = console.log,
    u = console.warn,
    m = console.info,
    h = console.debug;
  function g(e) {
    return e
      ?.map((e) => {
        if (e instanceof Error) {
          const t = e?.stack || null;
          return t ? `${e.message}\n\n${t}` : e.message;
        }
        return e instanceof HTMLElement
          ? e.outerHTML
          : "object" == typeof e && null !== e
          ? JSON.stringify(e, null, 2)
          : String(e);
      })
      .join(" ");
  }
  (console.error = function (...e) {
    setTimeout(() => {
      const t = e.some((e) => !0 === e.__ErrorBoundary);
      r({
        type: "CONSOLE_ERROR",
        message: g(e),
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        t ||
          a({
            errorType: "RUNTIME_ERROR",
            message: g(e),
            timestamp: new Date().toISOString(),
          }),
        l.apply(console, e);
    }, 100);
  }),
    (console.log = function (...e) {
      r({
        type: "CONSOLE_LOG",
        message: g(e),
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        p.apply(console, e);
    }),
    (console.warn = function (...e) {
      r({
        type: "CONSOLE_WARN",
        message: g(e),
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        u.apply(console, e);
    }),
    (console.info = function (...e) {
      r({
        type: "CONSOLE_INFO",
        message: g(e),
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        m.apply(console, e);
    }),
    (console.debug = function (...e) {
      r({
        type: "CONSOLE_DEBUG",
        message: g(e),
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
        h.apply(console, e);
    });
  let w = null,
    f = null;
  const y = {
    MARGIN_TOP: "margin-top",
    MARGIN_RIGHT: "margin-right",
    MARGIN_BOTTOM: "margin-bottom",
    MARGIN_LEFT: "margin-left",
    PADDING_TOP: "padding-top",
    PADDING_RIGHT: "padding-right",
    PADDING_BOTTOM: "padding-bottom",
    PADDING_LEFT: "padding-left",
    BACKGROUND_COLOR: "background-color",
    BORDER_RADIUS_TOP_LEFT: "border-top-left-radius",
    BORDER_RADIUS_TOP_RIGHT: "border-top-right-radius",
    BORDER_RADIUS_BOTTOM_RIGHT: "border-bottom-right-radius",
    BORDER_RADIUS_BOTTOM_LEFT: "border-bottom-left-radius",
    FONT_SIZE: "font-size",
    FONT_WEIGHT: "font-weight",
    TEXT_ALIGN: "text-align",
    TEXT_COLOR: "color",
    LINE_HEIGHT: "line-height",
    TEXT_TRANSFORM: "text-transform",
    LETTER_SPACING: "letter-spacing",
    BORDER_STYLE: "border-style",
    BORDER_COLOR: "border-color",
    BORDER_RIGHT_WIDTH: "border-right-width",
    BORDER_BOTTOM_WIDTH: "border-bottom-width",
    BORDER_LEFT_WIDTH: "border-left-width",
    BORDER_TOP_WIDTH: "border-top-width",
    TEXT_CONTENT: "text-content",
    OBJECT_FIT: "object-fit",
    IMAGE_SRC: "image-src",
    DISPLAY: "display",
    FLEX_DIRECTION: "flex-direction",
    JUSTIFY_CONTENT: "justify-content",
    ALIGN_ITEMS: "align-items",
    GRID_TEMPLATE_COLUMNS: "grid-template-columns",
    GRID_TEMPLATE_ROWS: "grid-template-rows",
    GRID_COLUMN_GAP: "grid-column-gap",
    GRID_ROW_GAP: "grid-row-gap",
    PLACE_ITEMS: "place-items",
    FLEX_GAP: "gap",
  };
  function E() {
    if (f)
      try {
        f.abort();
      } catch (e) {
      } finally {
        f = null;
      }
  }
  function T(e) {
    e.stopPropagation(), e.preventDefault();
    const t = e.target;
    if (!t.ownerSVGElement && "BODY" !== t.tagName && "HTML" !== t.tagName) {
      const e = t.dataset.componentId;
      e &&
        document.querySelectorAll(`[data-component-id="${e}"]`).forEach((e) => {
          e.setAttribute("data-component-hovered", "true");
        });
      const n = t.getBoundingClientRect(),
        o = document.getElementById("highlighter");
      o &&
        ((o.style.display = "block"),
        (o.style.top = n.top - 25 + "px"),
        (o.style.left = `${n.left}px`),
        (o.innerText = t.tagName?.toLowerCase()));
    }
  }
  function O(e) {
    e.stopPropagation(), e.preventDefault();
    const t = document.getElementById("highlighter");
    t && (t.style.display = "none");
    const n = e.target.dataset?.componentId;
    n
      ? document.querySelectorAll(`[data-component-id="${n}"]`).forEach((e) => {
          e.removeAttribute("data-component-hovered");
        })
      : e.target.removeAttribute("data-component-hovered");
  }
  function _(e) {
    e.preventDefault(), e.stopPropagation();
    const { target: t } = e,
      n = (function (e) {
        if (!e) return {};
        const t = window.getComputedStyle(e),
          n = {};
        return (
          Object.keys(y).forEach((e) => {
            n[y[e]] = t.getPropertyValue(y[e]);
          }),
          n
        );
      })(t);
    document
      .querySelectorAll('[data-component-selected="true"]')
      .forEach((e) => {
        e.removeAttribute("data-component-selected");
      });
    const o = t.dataset.componentId;
    o &&
      document.querySelectorAll(`[data-component-id="${o}"]`).forEach((e) => {
        e.setAttribute("data-component-selected", "true");
      });
    const i = 0 === t?.children.length && t?.childNodes.length > 0,
      a = t instanceof HTMLImageElement;
    w = o;
    const r = t.dataset?.componentLine ?? "0",
      s = Number(r),
      c = {
        filePath: t.dataset?.componentPath ?? "",
        lineNumber: Number.isNaN(s) ? 0 : s,
        content: t.dataset?.componentContent ?? "",
        elementName: t.tagName?.toLocaleLowerCase() ?? "",
        componentId: o ?? "",
      },
      d = {
        styles: n,
        browserClassNames: t.className?.trim?.() || "",
        metaData: c,
      };
    i &&
      Object.assign(d, {
        textData: { textContent: e.target?.innerText ?? "" },
      }),
      a && Object.assign(d, { imageData: { imageSrc: e.target.src ?? "" } }),
      window.parent.postMessage({ type: "SET_INITIAL_DATA", payload: d }, "*");
  }
  window.addEventListener("message", function (e) {
    try {
      const t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
      if (
        ("SET_EDIT_MODE" === t.type && window.toggleEditMode(t.payload),
        "NAVIGATION_REQUEST" === t.type &&
          (window?.next && window.next?.router
            ? window.next.router.push(t.url)
            : (history.pushState({}, "", t.url),
              window.dispatchEvent(new PopStateEvent("popstate")))),
        !w)
      )
        return;
      if ("UPDATE_STYLES" === t.type) {
        const e = t.payload;
        document.querySelectorAll(`[data-component-id="${w}"]`).forEach((t) => {
          Object.assign(t.style, e);
        });
      }
      if ("UPDATE_TEXT" === t.type) {
        const e = t.payload?.textContent;
        "string" == typeof e &&
          (document.querySelector(`[data-component-id="${w}"]`).innerText = e);
      }
      if ("UPDATE_IMAGE_SRC" === t.type) {
        const e = t.payload?.imageSrc;
        "string" == typeof e &&
          (document.querySelector(`[data-component-id="${w}"]`).src = e);
      }
      if ("UPDATE_CLASSNAMES" === t.type) {
        const e = t.payload;
        "string" == typeof e?.classNames &&
          (document.querySelector(`[data-component-id="${w}"]`).className =
            e.classNames);
      }
    } catch (e) {}
  }),
    (window.toggleEditMode = function (e) {
      e
        ? (function () {
            E();
            try {
              f = new AbortController();
              const e = f.signal;
              (function () {
                if (
                  ((function () {
                    const e = document.createElement("style");
                    e.innerHTML =
                      "\n            #highlighter {\n                position: fixed;\n                z-index: 10000;\n                pointer-events: none;\n                background-color: #0da2e7;\n                color: white;\n                padding: 4px 8px;\n                border-radius: 4px;\n                font-size: 14px;\n                font-weight: bold;\n                line-height: 1;\n                white-space: nowrap;\n                display: none;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n                transition: opacity 0.2s ease-in-out;\n                margin: 0;\n            }\n            [data-component-hovered] {\n                position: relative;\n            }\n            [data-component-hovered]::before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border-radius: 0px;\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 0 !important;\n                background-color: #0da2e71a !important;\n                z-index: 10000;\n                pointer-events: none;\n            }\n            [data-component-selected] {\n                position: relative;\n            }\n            [data-component-selected]::before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border-radius: 0px;\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 3px !important;\n                transition: outline-offset 0.2s ease-in-out;\n                z-index: 10000;\n                pointer-events: none;\n            }\n            [data-component-selected][contenteditable] {\n                outline: none !important;\n            }\n            [data-component-hovered][data-full-width]::before,\n            [data-component-selected][data-full-width]::before {\n                outline-offset: -5px !important;\n            }\n        ";
                    const t = document.head.querySelectorAll(
                      'link[rel="stylesheet"]'
                    );
                    if (t.length > 0) document.head.insertBefore(e, t[0]);
                    else {
                      const t = document.head.querySelectorAll("style");
                      t.length > 0
                        ? document.head.insertBefore(e, t[0])
                        : document.head.appendChild(e);
                    }
                  })(),
                  !document.getElementById("highlighter"))
                ) {
                  const e = document.createElement("div");
                  e.id = "highlighter";
                  const t =
                    document.body || document.getElementsByTagName("body")[0];
                  t && t.appendChild(e);
                }
              })(),
                document.addEventListener("mouseover", T, {
                  capture: !0,
                  signal: e,
                }),
                document.addEventListener("mouseout", O, {
                  capture: !0,
                  signal: e,
                }),
                document.addEventListener("click", _, {
                  capture: !0,
                  signal: e,
                });
            } catch (e) {}
          })()
        : E();
    }),
    (function () {
      const t = (t, o) => {
          try {
            if (e || n) return;
            const i = ((e, t) => {
              try {
                const n =
                    e === window ||
                    e === document ||
                    e === document.documentElement,
                  o = window.innerWidth || document.documentElement.clientWidth,
                  i =
                    window.innerHeight || document.documentElement.clientHeight,
                  a = window.scrollX,
                  r = window.scrollY;
                let s = null;
                if (t) {
                  const o = t.clientX || t.touches?.[0]?.clientX,
                    i = t.clientY || t.touches?.[0]?.clientY;
                  if (
                    void 0 !== o &&
                    void 0 !== i &&
                    ((s = {
                      viewport: { x: Math.round(o), y: Math.round(i) },
                      page: { x: Math.round(o + a), y: Math.round(i + r) },
                    }),
                    !n && e?.getBoundingClientRect)
                  ) {
                    const t = e.getBoundingClientRect();
                    s.element = {
                      x: Math.round(o - t.left),
                      y: Math.round(i - t.top),
                    };
                  }
                }
                if (n)
                  return {
                    tag: "document",
                    id: "",
                    position: { x: a, y: r, width: o, height: i },
                    viewport: { width: o, height: i },
                    scroll: { x: a, y: r },
                    mouse: s,
                  };
                if (!e?.getBoundingClientRect) return null;
                const c = e.getBoundingClientRect();
                return {
                  tag: e.tagName?.toLowerCase() || "",
                  id: e.id || "",
                  position: {
                    x: Math.round(c.left + a),
                    y: Math.round(c.top + r),
                    width: Math.round(c.width),
                    height: Math.round(c.height),
                  },
                  viewport: { width: o, height: i },
                  scroll: { x: a, y: r },
                  mouse: s,
                };
              } catch (e) {
                return null;
              }
            })(o.target || o.srcElement, o);
            if (!i) return;
            const a = {
              eventType: t,
              timestamp: new Date().toISOString(),
              element: i,
              page: window.location.pathname,
            };
            window.parent.postMessage(
              { type: "USER_INTERACTION", payload: a },
              "*"
            );
          } catch (e) {}
        },
        o = (() => {
          let e;
          return function (...n) {
            clearTimeout(e),
              (e = setTimeout(() => {
                clearTimeout(e),
                  ((e) => {
                    t("mousemove", e);
                  })(...n);
              }, 10));
          };
        })();
      document.addEventListener("mousemove", o),
        document.addEventListener("click", (e) => t("click", e)),
        document.addEventListener("dblclick", (e) => t("dblclick", e)),
        document.addEventListener("mouseenter", (e) => t("mouseenter", e)),
        document.addEventListener("mouseleave", (e) => t("mouseleave", e)),
        document.addEventListener("touchstart", (e) => t("touchstart", e)),
        document.addEventListener("touchmove", (e) => t("touchmove", e)),
        document.addEventListener("touchend", (e) => t("touchend", e)),
        document.addEventListener("keydown", (e) => t("keydown", e));
      const i = [
        "input",
        "textarea",
        "select",
        "button",
        '[contenteditable="true"]',
      ];
      document.addEventListener("focusin", (e) => {
        i.some((t) => e.target.matches(t)) && t("focus", e);
      }),
        document.addEventListener("focusout", (e) => {
          i.some((t) => e.target.matches(t)) && t("blur", e);
        });
      const a = (e) => (n) => {
          var o;
          (o = n.target) &&
            (o === document ||
              o === document.documentElement ||
              o === window ||
              o.scrollHeight > o.clientHeight ||
              o.scrollWidth > o.clientWidth) &&
            t(e, n);
        },
        r = a("scroll"),
        s = a("scrollend"),
        c = () => {
          try {
            window.addEventListener("scroll", r, { passive: !0 }),
              window.addEventListener("scrollend", s, { passive: !0 }),
              document.querySelectorAll("*").forEach((e) => {
                (e.scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth) &&
                  (e.addEventListener("scroll", r, { passive: !0 }),
                  e.addEventListener("scrollend", s, { passive: !0 }));
              });
          } catch (e) {}
        };
      c(),
        new MutationObserver(() => {
          c();
        }).observe(document.body, { childList: !0, subtree: !0 });
    })();
})();
