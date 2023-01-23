// ==UserScript==
// @name        Dark Theme for Aboard
// @namespace   https://alexandrosmagos.com/
// @version     1.1
// @description Changes website theme to a dark
// @author      Alexandros Magos
// @match       https://aboard.iee.ihu.gr/*
// @grant       GM_getResourceURL
// @resource    discordStyle http://localhost:3000/styles/discord.css
// @resource    bubblegumStyle http://localhost:3000/styles/bubblegum.css
// ==/UserScript==

(function () {
	var style = document.createElement("link");
	style.rel = "stylesheet";
	style.type = "text/css";

	var savedTheme = localStorage.getItem("theme");
	var themeDropdownMenu = document.createElement("div");
	themeDropdownMenu.classList.add("navbar-dropdown");
	themeDropdownMenu.addEventListener("click", function (event) {
		if (event.target.tagName === "A") {
			var selectedTheme = event.target.innerText;
			switch (selectedTheme) {
				case "Discord":
					localStorage.setItem("theme", "discord");
					style.href = GM_getResourceURL("discordStyle");
					break;
				case "Bubblegum":
					localStorage.setItem("theme", "bubblegum");
					style.href = GM_getResourceURL("bubblegumStyle");
					break;
				default:
					localStorage.removeItem("theme");
					style.href = "";
					break;
			}
			//location.reload();
		}
	});

	var discordOption = document.createElement("a");
	discordOption.classList.add("navbar-item");
	discordOption.innerText = "Discord";
	themeDropdownMenu.appendChild(discordOption);

	var originalOption = document.createElement("a");
	originalOption.classList.add("navbar-item");
	originalOption.innerText = "Original";
	themeDropdownMenu.appendChild(originalOption);

	var bubblegumOption = document.createElement("a");
	bubblegumOption.classList.add("navbar-item");
	bubblegumOption.innerText = "Bubblegum";
	themeDropdownMenu.appendChild(bubblegumOption);

	var themeDropdown = document.createElement("div");
	themeDropdown.classList.add("navbar-item", "has-dropdown", "is-hoverable");

	var themeDropdownTrigger = document.createElement("a");
	themeDropdownTrigger.classList.add("navbar-link");
	themeDropdownTrigger.innerHTML = `<span class="icon"><i class="fas fa-solid fa-palette"></i></span>`;
	themeDropdown.appendChild(themeDropdownTrigger);
	themeDropdown.appendChild(themeDropdownMenu);

	var navbarEnd = document.querySelector(".navbar-end");
	navbarEnd.appendChild(themeDropdown);

	if (savedTheme) {
		switch (savedTheme) {
			case "discord":
				style.href = GM_getResourceURL("discordStyle");;
				break;
			case "bubblegum":
				style.href = GM_getResourceURL("bubblegumStyle");
				break;
			default:
				localStorage.removeItem("theme");
				style.href = "";
				break;
		}
	}
	document.head.appendChild(style);
})();