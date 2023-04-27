export const loadCss = (elRef, styles) => {
    var _a;
    const css = elRef.ownerDocument.createElement("style");
    css.innerHTML = styles;
    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);
};
