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

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let cnic = document.getElementById("cnic");
let password = document.getElementById("Password");
let email = document.getElementById("email");

window.addData = () => {
    let obj = {
        fname: fname.value,
        // lname: lname.value,
        password: password.value,
        email: email.value,
        cnic: cnic.value,

    }
    console.log(obj);
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then((res) => {
        obj.id = res.user.uid;
        obj.user = "student";
        obj.lname = lname.value;
        delete obj.password;
        const refrence = doc(db, 'user', obj.id);
        let dataUpload = setDoc(refrence, obj).then((res) => {

            let regObj = JSON.stringify(obj)
            localStorage.setItem("regObj", regObj);

            fname.value = "";
            lname.value = "";
            password.value = "";
            email.value = "";
            cnic.value = "";

            console.log("data send on database");
        }).catch((err) => {
            console.log(err.message, "data not send on database");
        })


        console.log("succes");

        setTimeout(() => {
            location.replace("uploadMarks.html")
        }, 3000);

    }).catch((err) => {
        console.log(err.message);
    })
}