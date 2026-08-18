(() => {
	const storageKey = "yusen-hou-theme";
	const root = document.documentElement;
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
	let savedTheme = null;

	try {
		savedTheme = window.localStorage.getItem(storageKey);
	} catch {
		// Use the system theme when storage is unavailable.
	}

	const preferredTheme = savedTheme === "dark" || savedTheme === "light"
		? savedTheme
		: systemTheme.matches
			? "dark"
			: "light";

	root.dataset.theme = preferredTheme;

	const initializeToggle = () => {
		const toggle = document.querySelector(".theme-toggle");

		if (!toggle) {
			return;
		}

		const applyTheme = (theme) => {
			const isDark = theme === "dark";
			root.dataset.theme = theme;
			toggle.setAttribute("aria-pressed", String(isDark));
			toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
			toggle.title = isDark ? "Light mode" : "Dark mode";
			toggle.querySelector("span").textContent = isDark ? "☀" : "☾";
		};

		applyTheme(preferredTheme);

		toggle.addEventListener("click", () => {
			const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
			savedTheme = nextTheme;
			applyTheme(nextTheme);

			try {
				window.localStorage.setItem(storageKey, nextTheme);
			} catch {
				// The selected theme still applies for the current page.
			}
		});

		systemTheme.addEventListener("change", (event) => {
			if (!savedTheme) {
				applyTheme(event.matches ? "dark" : "light");
			}
		});
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initializeToggle);
	} else {
		initializeToggle();
	}
})();
