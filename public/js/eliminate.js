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




async function renderStudentList() {
    // console.log(cnic.value);
    let userRefrence = collection(db, "user");
    let userSnap = await getDocs(userRefrence)
    let refrence = collection(db, "UploadMarks");
    let snap = await getDocs(refrence)

    let users = []

    userSnap.forEach((item) => {
        let user = item.data()
        let id = user.studentID;
        // console.log(user);
        users.push(user)
            // if (cnic.value == user.cnic) {
            //     console.log(user);
            //     console.log("wow");
            //     let studentObj = JSON.stringify(user)
            //     console.log(studentObj);

        //     localStorage.setItem("studentId", studentObj)

        // } else {
        //     console.log("nononon");

        // }

    })
    console.log(users);



    snap.forEach((m) => {
        let marks = m.data();
        let studentObj = localStorage.getItem("studentId");
        studentObj = JSON.parse(studentObj)
        console.log(marks);
        console.log(marks.studentId);
        users.forEach((user) => {
            console.log(user.studentID);

            if (user.studentID == marks.studentId) {
                console.log("zille");
                console.log(marks.marks);
                if (marks.marks <= 50) {


                    studentList.innerHTML += `
                            <tr class=" text-center">
    
                                
                                <td>${user.fname.toUpperCase()}  ${user.lname.toUpperCase()}</td>
                                <td>${user.email}</td>
                                <td>${user.cnic}</td>
                                <td>${marks.course.toUpperCase()}</td>
                               
                                <td class="fw-bold text-danger">${marks.grade.toUpperCase()}</td>
    
                            </tr>`
                }
            }
        })


    })

    // // localStorage.clear()
    // localStorage.setItem(JSON.stringify(studentObj))
}

renderStudentList()

// window.uploadmarks = () => {
//     location.replace("uploadMarks.html")
//     console.log("dsdsaddd");


// }