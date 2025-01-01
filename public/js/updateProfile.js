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

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let cnicUpdate = document.getElementById("cnicUpdate");

window.updateProfile = () => {
    let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        cnicUpdate: cnicUpdate.value,

    }
    let studentObj = localStorage.getItem("studentId")
    let student = JSON.parse(studentObj);
    console.log(student);
    // console.log(student.id);
    // console.log(student.cnic);

    const refrence = doc(db, 'user', student.id);

    let updateProfile = updateDoc(refrence, {
        fname: firstName.value,
        lname: lastName.value,
        cnic: cnicUpdate.value,
    }).then((res) => {


        console.log("update");

        // getData.forEach((user) => {
        //     id = user.data().id

        // })



        console.log("data send on database");
    }).catch((err) => {
        console.log(err.message, "data not send on database");
    })
}