# MultiSearch Application

## 📌 Project Overview
MultiSearch is a web application that allows users to search multiple search engines (Google, Wikipedia, Gemini AI, and AI Image Search) from a single interface. Built using **HTML, CSS, and JavaScript**, this project integrates multiple APIs to provide an efficient search experience.

## 🚀 Features
- 🔍 **Multi-Search Engine Support** (Google, Wikipedia, Gemini AI, AI Images)
- 📄 **Recent Search History** (Stores the last five searches using Local Storage)
- 🎨 **Responsive Design**
- ⚡ **Fast API Integration** for fetching search results
- 🎭 **Typewriter Animation** for a dynamic user experience

## 🛠️ Technologies Used
- **HTML** – Structure of the web app
- **CSS** – Styling & UI design
- **JavaScript** – Logic & API integration
- **Google Custom Search API** – Fetching Google search results
- **Wikipedia API** – Retrieving Wikipedia search data
- **Gemini AI API** – AI-powered responses
- **Unsplash API (or other AI image sources)** – AI-generated image search

## 📂 Project Structure
```
📦 MultiSearch Application
├──    📄download.jpg        # Image
├── 📄 index.html       # Main HTML file
├── 📄 index.css        # Styling file
├── 📄 index.js         # JavaScript logic & API calls
├── 📄 README.md        # Project documentation
```

## ⚙️ How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/multisearch-app.git
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd multisearch-app
   ```
3. **Open `index.html` in a Browser**

## 🔑 API Setup
### **1️⃣ Google Custom Search API**
- Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
- Get a **Custom Search Engine ID (CSE ID)** from [Google Programmable Search](https://programmablesearchengine.google.com/)
- Enable **Google Custom Search API**
- Replace your **API key** and **CSE ID** in `index.js`:
  ```js
  const API_KEY = "YOUR_GOOGLE_API_KEY";
  const CX = "YOUR_CSE_ID";
  ```

### **2️⃣ Wikipedia API**
- No API key required, directly fetch data using:
  ```js
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`)
  ```

### **3️⃣ Gemini AI API**
- Sign up at [Google AI](https://ai.google.dev/) to get an API key
- Use the API to send prompts and fetch AI-generated responses


## 💡 Future Enhancements
- ✅ **Dark Mode Toggle**
- ✅ **Voice Search Integration**
- ✅ **More Search Engine Support (Bing, DuckDuckGo, etc.)**

## 🤝 Contributing
Contributions are welcome! Feel free to **fork** the repo, create a **new branch**, and submit a **pull request**.

## 📜 License
This project is **open-source** and available under the **MIT License**.

---
🚀 **Developed by Sunanda Balasaheb Motinge** 😊

