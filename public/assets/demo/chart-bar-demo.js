import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtreicve48t3Mh7VI-u6wEh_cmvYbixSA",
    authDomain: "hackathon2-a4a33.firebaseapp.com",
    projectId: "hackathon2-a4a33",
    storageBucket: "hackathon2-a4a33.appspot.com",
    messagingSenderId: "4069720827",
    appId: "1:4069720827:web:5e18a77c82150236ca665e",
    measurementId: "G-S5CVZW54J2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


let refrence = collection(db, "UploadMarks");
let snap = await getDocs(refrence)
let passedCounter = 0;
let eliminateCounter = 0;
let last_chanceCounter = 0;
snap.forEach((m) => {
    let marks = m.data();
    (marks.grade == "A") ? passedCounter++ : "";
    (marks.grade == "F") ? eliminateCounter++ : "";
    (marks.marks >= 50 && marks.marks <= 70) ? last_chanceCounter++ : ""



})

console.log(passedCounter);

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Passed", "Chance", "Fail", ],
        datasets: [{
            label: "Revenue",
            backgroundColor: [
                "#198754", // Green for "Passed"
                "rgba(255, 193, 7, 1)", // Yellow for "Chance"
                "#DC3545" // Red for "Fail"
            ],
            borderColor: "rgba(2,117,216,1)",
            data: [passedCounter, last_chanceCounter, eliminateCounter],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 10,
                    maxTicksLimit: 10
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});