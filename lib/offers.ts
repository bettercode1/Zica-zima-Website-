import { db } from "./firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export interface Offer {
  id: string;
  text: string;
  active: boolean;
  createdAt: any;
}

export async function getActiveOffers(): Promise<Offer[]> {
  try {
    const offersRef = collection(db, "offers");
    const q = query(
      offersRef, 
      where("active", "==", true),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const offers: Offer[] = [];
    
    querySnapshot.forEach((doc) => {
      offers.push({ id: doc.id, ...doc.data() } as Offer);
    });
    
    return offers;
  } catch (error) {
    console.error("Error fetching offers:", error);
    return [];
  }
}
