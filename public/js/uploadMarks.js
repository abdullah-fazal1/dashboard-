import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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

let course = document.getElementById("course");
let marks = document.getElementById("marks");
let tMarks = document.getElementById("tMarks");
let studentId = document.getElementById("studentId");
let grade = document.getElementById("grade");

window.uploadMarks = () => {
    let obj = {
        course: course.value,
        grade: grade.value,
        marks: marks.value,
        tMarks: tMarks.value,
        studentId: studentId.value
    }

    let studentObj = localStorage.getItem("regObj")
    let student = JSON.parse(studentObj);
    // console.log(student);
    // console.log(student.id);
    // console.log(student.cnic);

    const refrence = doc(db, 'UploadMarks', student.id);

    let dataUpload = setDoc(refrence, obj).then((res) => {


        let refGetData = doc(db, "user", student.id)
        let getData = updateDoc(refGetData, {
            studentID: studentId.value
        })

        // getData.forEach((user) => {
        //     id = user.data().id

        // })

        if (studentId.value == null) {
            localStorage.clear()

        }

        course.value = "";
        grade.value = "";
        studentId.value = "";
        tMarks.value = "";
        marks.value = "";


        console.log("data send on database");
    }).catch((err) => {
        console.log(err.message, "data not send on database");
    })
}