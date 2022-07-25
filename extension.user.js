// ==UserScript==
// @name         VLR.GG EXTENSION
// @version      0.0.1
// @description  ADDS EMOTES
// @author       Shigeo
// @match        https://*.vlr.gg/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

GM.xmlHttpRequest({
	method: "GET",
	url: `https://raw.githubusercontent.com/ShigeoVal/extension/main/extension.js?${Date.now()}`,
	nocache: true,
	onload: ({ responseText }) => {
		Function(responseText)();
	},
});
