import HeadHrefLangs from './ui/HeadHrefLangs.svelte';
import ThemeSwitcher from './ui/ThemeSwitcher.svelte';
import LocaleSwitcher from './ui/LocaleSwitcher.svelte';
import SvelteTheme from './ui/SvelteTheme.svelte';
import ThemeScript from './ui/ThemeScript.svelte';

// utils
import themeStore from './utils/svelteThemes/themeStore.ts';
import setTheme from './utils/svelteThemes/setTheme.ts';
import getTheme from './utils/svelteThemes/getTheme.ts';
import disableAnimation from './utils/svelteThemes/disableAnimation.ts';
import getSystemTheme from './utils/svelteThemes/getSystemTheme.ts';
import MEDIA from './utils/svelteThemes/constantMEDIA.ts';
import colorSchemes from './utils/svelteThemes/constantColorSchemes.ts';

// no svelte
import replaceLocaleInUrl from './utils/replaceLocaleInUrl.ts';
import toggleTheme from './utils/toggleTheme.ts';

// ui
import FullBtn from './ui/FullBtn.svelte';
import EmailLink from './ui/EmailLink.svelte';
import SocialLink from './ui/SocialLink.svelte';

// data
import magnets from './data/magnets';
import news from './data/news';
import projects from './data/projects';

export {
	magnets,
	SocialLink,
	FullBtn,
	EmailLink,
	news,
	projects,
	replaceLocaleInUrl,
	toggleTheme,
	HeadHrefLangs,
	ThemeSwitcher,
	LocaleSwitcher,
	SvelteTheme,
	ThemeScript,
	themeStore,
	setTheme,
	getTheme,
	disableAnimation,
	getSystemTheme,
	MEDIA,
	colorSchemes
};
