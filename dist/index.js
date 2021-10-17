"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorOverlay = void 0;
const useErrorOverlay = () => {
    // credit https://github.com/vitejs/vite/issues/2076
    // REGISTER ERROR OVERLAY
    const showErrorOverlay = (err) => {
        // must be within function call because that's when the element is defined for sure.
        const ErrorOverlay = customElements.get("vite-error-overlay");
        // don't open outside vite environment
        if (!ErrorOverlay) {
            return;
        }
        console.error(err);
        const overlay = new ErrorOverlay(err);
        document.body.appendChild(overlay);
    };
    // console.log(showErrorOverlay);
    window.addEventListener("error", showErrorOverlay);
    window.addEventListener("unhandledrejection", ({ reason }) => showErrorOverlay(reason));
};
exports.useErrorOverlay = useErrorOverlay;
//# sourceMappingURL=index.js.map