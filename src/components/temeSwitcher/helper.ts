export const syncThemeWithStorage = (): void => {
  const theme = window.localStorage.getItem("theme");

  if (theme) window.localStorage.removeItem("theme");
  else window.localStorage.setItem("theme", "dark");
};
