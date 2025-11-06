# Mystery Image

This project is an **interactive web game** where the user guesses a **blurred image**.  
It aims to **challenge visual recognition skills** and provide a fun way to engage with images.

---

## Live Demo

You can view the live version of the project here:  
[Live Demo Link](https://shorookkhaled559.github.io/Mystery-Image/)

---

## Features

- **Blurred Image Challenge** — Users see a blurred image and try to guess it.  
- **Score System** — Correct guesses increase the score by 10 points.  
- **Instant Feedback** — Shows a **"Wrong Answer"** message if the guess is incorrect.  
- **Dynamic Gameplay** — The game updates the score and moves through different images.  
- **Enhanced Styling** — Built with **CSS** and enhanced with **Tailwind CSS** for extra responsiveness and layout tweaks.  
- **User Interaction** — Simple input field for guessing and clear visual cues.  

---

## Technologies Used

- **HTML5** — Page structure and content.  
- **CSS3** — Main styling, layout, and responsiveness.  
- **Tailwind CSS** — Used additionally for layout improvements and small styling enhancements.  
- **JavaScript (ES6)** — Handles game logic, score updates, and user interactions.  

---

## Project Structure

```
Mystery-Image/
│
├── img/
│ ├── cat.jpg
│ ├── tree.png
│ ├── sun.jpeg
│ └── brush.webp
|
├── css/style.css
├── js/script.js
└── index.html
```

---

## How It Works

1. The user sees a **blurred image** on the screen.  
2. They type their guess in the **input field**.  
3. When they submit, JavaScript checks the answer:  
   - If **correct**, the score increases by 10 points and the next image is shown.  
   - If **incorrect**, a **"Wrong Answer"** message appears.  
4. The game continues until all images are guessed.  

---

## Getting Started

1. **Clone or download** this repository.  
2. Create a folder named `img/` and add the images you want to use.  
3. Open `index.html` in your browser.  
4. Type your guess in the input field and press **Check** to play.  

---

## Folder Details

| File / Folder | Description |
|----------------|--------------|
| `index.html` | The main structure of the game |
| `css/style.css` | Main CSS file for styling |
| `js/script.js` | Controls game logic, scoring, and interactivity |
| `img/` | Stores the images used in the game |

---

## Future Improvements

- Add **multiple difficulty levels** with varying blur intensity.  
- Include a **timer** for each image to increase challenge.  
- Add **hints** for harder images.  
- Enable **sound effects** for correct or wrong answers.  
- Implement a **leaderboard** to track high scores.  

---

## License

This project is **open-source** and free to use, modify, or share for educational and non-commercial purposes.  
Developed with  by **Shorouk Khaled**.

