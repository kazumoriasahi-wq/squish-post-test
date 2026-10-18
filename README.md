# Squish Post / ぷにっと！すきま便

A bright one-finger shape-matching game. Hold to stretch your little courier; release to round out. Match a doorway when it arrives, earn delivery chains and perfect bonuses, and try again after three bumps. Early gates teach round, medium and tall shapes. No external assets, libraries, analytics or network calls. Original Canvas/CSS artwork and a synthesized marimba-style soundtrack.

Japanese/English UI selected by ?lang=ja / ?lang=en or browser language. Audio begins on user interaction, stops on pause/backgrounding, and can be muted. Shape matching is shown with a green band and an orange marker. Space/Enter support hold/release on desktop. Reduced-motion preference suppresses cosmetic particles, shake and bobbing. Gameplay itself remains animated.

Browser v1.0. Records and audio preference are stored only under squish_post_v1. Existing seven projects are untouched. In-progress runs restart on reload. YouTube Playables SDK integration, official certification and an eighth-game application are not included in this version.

Preview: node serve.cjs (127.0.0.1:4195). Tests: node tests.cjs; node music-tests.cjs. Twelve engine checks include 100 seeded 60-delivery runs using actual hold/release dynamics. Four audio lifecycle checks cover gesture startup, one scheduler, mute, and cancellation of pending startup.

Production: index.html, style.css, engine.js, music.js, game.js. GUIDE.html includes device test steps. Submission ZIP excludes development scripts and tests.
