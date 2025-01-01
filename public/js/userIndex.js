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

let marksheet = document.getElementById("marksheet");
let cnic = document.getElementById("cnic");




window.renderStudentList = async() => {
    console.log(cnic.value);
    let userRefrence = collection(db, "user");
    let userSnap = await getDocs(userRefrence)
    let refrence = collection(db, "UploadMarks");
    let snap = await getDocs(refrence)

    userSnap.forEach((item) => {
        let user = item.data()
        let id = user.studentID;
        // console.log(user.studentID);
        if (cnic.value == user.cnic) {
            console.log(user);
            console.log("wow");
            let studentObj = JSON.stringify(user)
            console.log(studentObj);

            localStorage.setItem("studentId", studentObj)

        } else {
            console.log("nononon");

        }

    })
    console.log("jejje");

    marksheet.innerHTML = ""
    snap.forEach((m) => {
        let marks = m.data();
        let studentObj = localStorage.getItem("studentId");
        studentObj = JSON.parse(studentObj)
        console.log(marks);
        console.log(studentObj.studentID);
        if (studentObj.studentID == marks.studentId) {
            console.log("zille");


            marksheet.innerHTML += `
                        <tr>

                            <td>${marks.studentId.toUpperCase()}</td>
                            <td>${studentObj.fname.toUpperCase()}  ${studentObj.lname.toUpperCase()}</td>
                            <td>${studentObj.cnic.toUpperCase()}</td>
                            <td>${marks.course.toUpperCase()}</td>
                            <td>${marks.marks.toUpperCase()}</td>
                            <td>${marks.tMarks.toUpperCase()}</td>
                            <td>${marks.grade.toUpperCase()}</td>

                        </tr>`
        }


    })

    // localStorage.clear()
    localStorage.setItem(JSON.stringify(studentObj))
}

// function deletePropertyFromLocalStorage(key, property) {
//     const storedObject = localStorage.getItem(key);
//     if (storedObject) {
//         const obj = JSON.parse(storedObject);
//         delete obj[property];
//         localStorage.setItem(key, JSON.stringify(obj));
//     }
// }
// deletePropertyFromLocalStorage()
// renderStudentList()

// window.uploadmarks = () => {
//     location.replace("uploadMarks.html")
//     console.log("dsdsaddd");


// }