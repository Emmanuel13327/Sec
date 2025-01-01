// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference Firestore Collection
const entriesCollection = collection(db, "entries");

// Form Submission
const form = document.getElementById("entryForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const checkup = document.getElementById("checkup").value;

  try {
    await addDoc(entriesCollection, { name, checkup, timestamp: new Date() });
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

// Display Records in Real-Time
const recordsList = document.getElementById("records");
onSnapshot(entriesCollection, (snapshot) => {
  recordsList.innerHTML = "";
  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${data.name}, Checkup: ${data.checkup}, Time: ${data.timestamp.toDateString()}`;
    recordsList.appendChild(listItem);
  });
});
