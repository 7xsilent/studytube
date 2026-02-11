📘 StudyTube

StudyTube is a distraction-free study platform built for students who want to learn from YouTube without getting distracted.

Unlike YouTube, StudyTube focuses only on one topic at a time, helping students stay focused, take notes, and study calmly.

🌱 Why StudyTube?

When students search for a topic on YouTube, they often:

get distracted by recommendations

jump between videos

lose focus

forget what they studied

StudyTube solves this by design.

✨ Features
🎯 Focused Learning

Search only for the topic you want

No recommendations

No autoplay distractions

🔒 Focus Mode

Once a video starts, search is locked

Prevents topic hopping

Student stays on one learning session

📝 Notes (Auto-Saved)

Write notes while watching

Notes auto-save locally

One notes section per video

⬇️ Download Notes

Download notes as a .txt file

Useful for exams and offline study

⏱️ Gentle Study Timer

Shows how long you’ve been studying

No alarms, no pressure

📚 Study History

View recently studied videos

Resume previous study sessions

Clear history anytime (privacy-friendly)

🧘 Calm UI

Minimal design

Gentle messages

Built for long study sessions

🚫 What StudyTube Does NOT Do

❌ No login or signup

❌ No tracking or analytics

❌ No ads

❌ No notifications

❌ No AI dependency

❌ No gamification or streak pressure

🛠️ Built With

React.js

YouTube Data API

LocalStorage

Netlify (Deployment)

📂 Project Structure
src/
├── components/
│   ├── SearchBar.jsx
│   ├── VideoPlayer.jsx
│   ├── VideoList.jsx
│   ├── Notes.jsx
│   ├── StudyTimer.jsx
│   ├── History.jsx
│   ├── DoneButton.jsx
│   └── EmptyState.jsx
│
├── context/
│   └── StudyContext.jsx
│
├── services/
│   └── youtubeApi.js
│
├── styles/
│   └── app.css
│
├── App.js
├── index.js

🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/studytube.git
cd studytube

2️⃣ Install dependencies
npm install

3️⃣ Add YouTube API key

Create a .env file in the root:

REACT_APP_YOUTUBE_API_KEY=your_api_key_here

4️⃣ Start development server
npm start

🌍 Live Demo

👉 Deployed on Netlify

(Add your Netlify URL here)

🧠 Design Philosophy

“This app is built to protect student focus, not exploit attention.”

Every feature in StudyTube exists only if it:

reduces distraction

improves learning

respects student privacy

🙌 Contribution

This project is open to improvements that:

help students learn better

keep the app calm and simple

Avoid features that add:

pressure

distractions

unnecessary complexity

📜 License

This project is open-source and free to use for educational purposes.
