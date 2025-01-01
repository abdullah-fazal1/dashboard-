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

let studentList = document.getElementById("studentList");



window.renderStudentList = async() => {
    let refrence = collection(db, "UploadMarks");
    let snap = await getDocs(refrence)

    studentList.innerHTML = ""
    snap.forEach((item) => {
        if (item.data().fname != "admin") {
            let user = item.data()

            // console.log(user.data());
            studentList.innerHTML += ` 
                                    <tr>
                                        <td>${user.studentId}</td>
                                        <td>${user.course}</td>
                                        <td>${user.marks}</td>
                                        <td class="w-25">${user.tMarks}</td> 
                                        <td class="w-25">${user.grade}</td> 
                                        </tr>`


        }
    })

}

// renderStudentList()

// window.uploadmarks = () => {
//     location.replace("uploadMarks.html")
//     console.log("dsdsaddd");


// }