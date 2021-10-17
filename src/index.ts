const useErrorOverlay = () => {
  // credit https://github.com/vitejs/vite/issues/2076
  // REGISTER ERROR OVERLAY
  const showErrorOverlay = (err: any) => {
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

export { useErrorOverlay };
