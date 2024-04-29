// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Ojii',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'fd980e755b1164eb1dd48d71cbb1f58d', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '33.94',
	defaultLongitude: '-117.2437',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Anime',
			icon: 'cat',
			link: 'https://aniwave.to/home',
		},
		{
			id: '2',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.tv/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'rss',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'Trading View',
			icon: 'candlestick-chart',
			link: 'https://www.tradingview.com/chart/',
		},
		{
			id: '5',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '6',
			name: 'Odin Project',
			icon: 'puzzle',
			link: 'https://www.theodinproject.com/dashboard',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Kren',
					link: 'https://www.youtube.com/playlist?list=PLgF_gQh7OwJzwtN08b5oQ_-s3uZ6IsLp-',
				},
				{
					name: 'Underrated',
					link: 'https://www.youtube.com/playlist?list=PLWTjjEmzNQCvKwhXmedIRmxXU-nUy7XIi',
				},
				{
					name: 'Japanese',
					link: 'https://www.youtube.com/playlist?list=PLWTjjEmzNQCt67v5-tO3_sA6sCaepg5I-',
				},
				{
					name: 'Lofi',
					link: 'https://www.youtube.com/live/lHpYyYtkmrw?si=Cv6wNnDWWhJGlL65',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Canvas',
					link: 'https://rccd.instructure.com/',
				},
				{
					name: 'Apps',
					link: 'https://myapplications.microsoft.com/#code=0.AVcAF5tmSTP640qOzDzxFreQ5V6Zkyd9CtdAvTVpaLoUIZdXAKk.AgABAAIAAADnfolhJpSnRYB1SVj-Hgd8AgDs_wUA9P9YVyetSbnitXt1pTROG0EDN3WKk7cjH8LiX4Ly4gt6eenfvV_hRO53EPAS5xEL-IMdV7wRC7nc9N96MoD37xpiwsRXc1yubBpD-W0oCe8ofBLN9ItaVggUcc1d0Z8pNm1Xip69BaVQ7XXG1Or2hq3AQnwJBLuFnd1RehSuxOlKGCVkHfqvcDmCXmGlbNTjwIBQY-3uAzcoWD5cXJW0cq2ekSuZw3jI82NNjsKddpudclewz32CRSXywAIYbp_GRdonqTgIbJVGnivi-jgOIp3FzurdwWAeFjVoCqn6xxVUAXVkoORZWhhSugKl-pyaOci0XdwV8qzUEoiPJGXpkW_xHKKD9hkk-vpf12QM0-uOPfICCSFr4Z6Kgov0o4hMyXACfYm5EE3Xzx5Q-eO8TG5EDlH6VRqn1smFWjOX8iq7cPyqKDVbZ91vhQiJqq-RZDsuUbiI9NiZT4bHTeQSh18dZzEHpZcZweXuZttnocwgqIXxrqTMoM__O7aTh0y9tqqNnwNOOGLzuEyBNe3z7ZT-Gh2xix-9UMoEBhb2TWxXrAGUdckidibbYWms3IGG4li60C7rPiVOp9qXg_oe7vF8P-kK_pn2B0DUAFcQg-ugnp5FUdC8SBytkp0IkrPLwSVtZvv1UWGkixrEVDdIMB1gaDSznaCS266JsklEGR_kF5pai-AbjT7TCX1VbPmHGShs84IoP9_HQKj10lX3K8JUdzVcTr3xfz-nUDJyDTw8I8meRCuiBpjv0fBmc7jIldDHTfCGa2D4OeWk4pJCTv0eErsc0zNDrH0JcpXBf9MU6PXZ7kHMH43gxWGzPoE0yJIo3ACbeylB7pWrnhPs2w3_yl2sPto491UUXvJbIA&client_info=eyJ1aWQiOiJjNGZkZTBjZS0zZWIyLTQxNzAtYTNlOC00ZDgyZDU4ZDExNDUiLCJ1dGlkIjoiNDk2NjliMTctZmEzMy00YWUzLThlY2MtM2NmMTE2Yjc5MGU1In0&state=eyJpZCI6IjgyYTI2YTA2LWEzNmEtNDRiMi1hMWQyLTU0YzAyYjZmZTQzYiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3d&session_state=5ee9674d-4e03-421b-a112-85b024538488',
				},
				{
					name: 'Outlook',
					link: 'https://outlook.office.com/mail/',
				},
				{
					name: 'Learning',
					link: 'https://www.linkedin.com/learning/?u=88591314',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'UnixPorn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/ryuJin25',
				},
			],
		},
	],
};
