import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { User } from "../types/user";
import { Post } from "../types/posts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence 
} from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

const db = getFirestore(app);

const addPost = async (product: Omit<User, "id">) => {
  try {
    const where = collection(db, "products");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};



// const getProducts = async () => {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   const transformed: Array<User> = [];

//   querySnapshot.forEach((doc) => {
//     const data: Omit<User, "id"> = doc.data() as any;
//     transformed.push({ idUser, email, username, ...data });
//   });

//   return transformed;
// };

export default {
  addPost,
//   getProducts,
  registerUser,
  loginUser,
};