import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDmN4qBz3Aw5x7GO0Z-jB_viG6esOtbFVI",
    authDomain: "huertili-datini.firebaseapp.com",
    databaseURL: "https://huertili-datini-default-rtdb.firebaseio.com",
    projectId: "huertili-datini",
    storageBucket: "huertili-datini.firebasestorage.app",
    messagingSenderId: "675544360936",
    appId: "1:675544360936:web:e50313a4113bf99980265d"
  };


  const app = initializeApp(firebaseConfig);


const db = getDatabase(app);




let tabla = document.querySelector(".tabla-huerta");




const refhuerta = ref(db, "datos");


onValue(refhuerta, (datos) => {
    console.log(datos)
    let huerta = datos.val();
    tabla.innerHTML = "";
        tabla.innerHTML += `
        <tr>
            <td>${huerta.humedadAire}</td>
            <td>${huerta.humedadSuelo}</td>
            <td>${huerta.temperatura}</td>
        </tr>
        `;
if (huerta.temperatura > 30) {
    alert("🔥 ¡La temperatura está muy alta! Más de 30°C.");
  }
    if (huerta.humedadSuelo > 70) {
        alert("💧 La humedad del suelo es MUY ALTA. ¡Las plantas corren riesgo de pudrir raíces!");
    } 
    else if (huerta.humedadSuelo < 30) {
        alert("🌵 La humedad del suelo es MUY BAJA. ¡A las plantas les falta agua!");
    } 
    else {
        alert("✅ La humedad del suelo está en un rango saludable.");
    }
});

