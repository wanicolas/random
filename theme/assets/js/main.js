// Import all Lucide icons you need to reduce bundle size by tree-shaking the library.
import {
	createIcons,
	Calendar,
	User,
	Menu,
	House,
	BookOpen,
	Newspaper,
	Tag,
	MousePointerClick,
	ArrowRight,
	Search,
} from "lucide";

document.addEventListener("DOMContentLoaded", function () {
	// Smooth scroll pour les ancres
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
				});
			}
		});
	});

	createIcons({
		icons: {
			Calendar,
			Menu,
			House,
			Newspaper,
			User,
			BookOpen,
			Tag,
			MousePointerClick,
			ArrowRight,
			Search,
		},
	});
});
