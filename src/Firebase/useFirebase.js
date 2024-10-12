import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase";
import Level from "./../Dashboard/Level";

export const useFirebase = () => {
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     const itemsCollection = collection(db, "items/level1");

  //     const unsubscribe = onSnapshot(
  //       itemsCollection,
  //       (querySnapshot) => {
  //         const fetched = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         setItems(fetched);
  //       },
  //       (error) => {
  //         console.error("Error fetching items: ", error);
  //       }
  //     );

  //     return () => unsubscribe();
  //   }, []);

  const LoadData = async (Level, department) => {
    const itemsCollection = collection(db, `items/${Level}/${department}`);
    const unsubscribe = onSnapshot(
      itemsCollection,
      (querySnapshot) => {
        const fetched = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetched);
        // console.log("fetched");
        // console.log(items);
      },
      (error) => {
        console.error("Error fetching items: ", error);
      }
    );
    return () => unsubscribe();
  };

  const addItem = async (item, parent) => {
    try {
      if (!parent) {
        throw new Error(
          "Parent document ID is required to add to the sub-collection."
        );
      }
      const subCollectionRef = collection(
        db,
        `items/${parent.level}/${parent.department}`
      );
      await addDoc(subCollectionRef, item);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  return { LoadData, items, addItem };
};
