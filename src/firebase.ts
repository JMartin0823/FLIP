import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Post } from "../types/posts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { firebaseConfig } from "../firebaseconfig";

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

const addPost = async (product: Omit<Post, "id">) => {
  try {
    const where = collection(db, "posts");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

// const getProducts = async () => {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   const transformed: Array<Post> = [];

//   querySnapshot.forEach((doc) => {
//     const data: Omit<Post, "id"> = doc.data() as any;
//     transformed.push([]);
//   });

//   return transformed;
// };

export default {
  addPost,
  // getProducts,
  registerUser,
  loginUser,
};


//addfirebase

const posts = initializeApp(firebaseConfig);

const savePostInDB = async (post: Post) => {

try {
    await addDoc(collection(db, "posts"), post);
    return true;
} catch (e) {
  console.error("Error adding document: ", e);
  return false;
}
};

const PostsService = async(): Promise<Post[]> => {
    const resp: Post[] = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({...doc.data(),} as Post);
});
return resp;
}

export default { savePostInDB, PostsService };