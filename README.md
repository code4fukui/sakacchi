# sakacchi

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

地域をきれいにする、ボランティア型カードコレクションゲーム。ゴミを拾って、モンスターカードを集めよう！

A gamified volunteer app that encourages cleaning up the community. Find and photograph trash to collect monster cards.

## Demo
https://ai-sakai.sabae.cc/

## Gameplay
1.  **🗑️ Find & Photograph Trash:** Use the app's camera to take a picture of litter you find in your community.
2.  **🤖 AI-Powered Verification:** An AI analyzes your photo to confirm if the object is trash.
3.  **🃏 Earn a Card:** If confirmed, you get to draw a random collectible card from a treasure chest.
4.  **✨ Unlock Rare Cards:** Collect specific sets of cards to unlock 4 powerful EX cards in the "Treasure Chest" page.
5.  **🏆 Complete Your Collection:** Gather all 34 unique cards to receive a special Certificate of Appreciation.

## Features
- **AI-Powered Trash Detection:** Uses OpenAI's vision model to identify if a photographed object is trash.
- **Card Collection System:** 34 unique cards with 5 rarity levels to collect.
- **Special Unlock Conditions:** Combine specific cards to unlock rare EX cards.
- **Local Progress Saving:** Your card collection is saved in the browser's `localStorage`.
- **Responsive Design:** Fully functional on both desktop and mobile devices.

## Tech Stack
- **Backend:** [Deno](https://deno.land/)
- **Frontend:** HTML, CSS, JavaScript (ES Modules)
- **AI:** OpenAI Vision API (via the `fetchImageRecog` library)
- **Data Persistence:** Browser `localStorage`

## Setup and Running
### Prerequisites
-