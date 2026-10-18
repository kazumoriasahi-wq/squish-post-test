# Squish Post / ぷにっと！すきま便

A bright one-finger shape-matching game. Hold to stretch your little courier; release to round out. Match a doorway when it arrives, earn delivery chains and perfect bonuses, and try again after three bumps. Early gates teach round, medium and tall shapes. No external assets, libraries, analytics or network calls. Original Canvas/CSS artwork and a synthesized marimba-style soundtrack.

Japanese/English UI selected by ?lang=ja / ?lang=en or browser language. Audio begins on user interaction, stops on pause/backgrounding, and can be muted. Shape matching is shown with a green band and an orange marker. Space/Enter support hold/release on desktop. Reduced-motion preference suppresses cosmetic particles, shake and bobbing. Gameplay itself remains animated.

Browser v1.0. Records and audio preference are stored only under squish_post_v1. Existing seven projects are untouched. In-progress runs restart on reload. YouTube Playables SDK integration, official certification and an eighth-game application are not included in this version.

Preview: node serve.cjs (127.0.0.1:4195). Tests: node tests.cjs; node music-tests.cjs. Twelve engine checks include 100 seeded 60-delivery runs using actual hold/release dynamics. Four audio lifecycle checks cover gesture startup, one scheduler, mute, and cancellation of pending startup.

Production: index.html, style.css, engine.js, music.js, game.js. GUIDE.html includes device test steps. Submission ZIP excludes development scripts and tests.

Update v1.0.1: target opening is now large, opaque and separate from the courier. Constant-scale dark aperture with a thick high-contrast rim; same-size dotted comparison guide around the player and a numeric arrival countdown. Gameplay, saved-record schema and controls are unchanged.

Playables preparation v1.1: official game_api/v1 loads before game code. Hosted records use SDK loadData/saveData exclusively; browser fallback retains squish_post_v1. Valid old score/chain/deliveries/audio records restore; malformed/future/failed loads block play without overwriting data. Failed writes remain pending for pause/resume or later-save retry. firstFrameReady and gameReady are each sent once, after loading UI and successful initialization respectively. Host pause stops RAF, audio and input and releases held shape input; resume starts with a fresh time origin and requires another gesture for music/holding. SDK audio and language are authoritative; hosted master-mute and language controls are hidden.
Checks: node host-tests.cjs adds nine SDK checks (25 total with existing engine/audio checks). sdk-lab.html is a custom simulator, not official certification; production ZIP contains only index/style/host/engine/music/game. Set SQUISH_CSP=1 and SQUISH_PORT=4196 for a CSP standalone smoke test. The sandbox blocks embedding in the lab; use the normal server for lab tests.
Remaining after partner access: official Test Suite and hosted iPhone/Windows lifecycle/audio/input tests, cross-account/device cloud restoration, package artwork/metadata and review. sendScore is optional and is not used. Eighth-game interest-form update is not performed. Requirements checked 2026-10-18: https://developers.google.com/youtube/gaming/playables/certification/requirements_integration
