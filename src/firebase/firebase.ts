import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';

// Configura la conexión con Firebase
const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const postsCollection = db.collection('posts');

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', async () => {
  const post = await generatePost();

  await savePostInDB(post);
});

// Función para generar un post
async function generatePost() {
  // Obtener un post de la API JSONPlaceholder
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
}

// Función para guardar el post en Firestore
async function savePostInDB(post) {
  await postsCollection.add(post);
  console.log('Post guardado en Firebase:', post);
}
