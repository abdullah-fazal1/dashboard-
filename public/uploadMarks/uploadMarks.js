import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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
const auth = getAuth();
const db = getFirestore();

let course = document.getElementById("course");
let studentId = document.getElementById("studentId");
let marks = document.getElementById("marks");
let grade = document.getElementById("grade");
let totalMarks = document.getElementById("totalMarks");

window.addData = () => {
    let obj = {
        course: course.value,
        studentId: studentId.value,
        grade: grade.value,
        marks: marks.value,
        totalMarks: totalMarks.value
    }
    console.log(obj);


    const refrence = doc(db, 'user', obj.id);
    let dataUpload = setDoc(refrence, obj).then((res) => {


        window.location.replace("../login/login.html")

        console.log("data send on database");
    }).catch((err) => {
        console.log(err.message, "data not send on database");
    })
}