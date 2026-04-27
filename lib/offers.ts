import { db } from "./firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

// Original Offer Interface (Untouched)
export interface Offer {
  id: string;
  text: string;
  active: boolean;
  createdAt: any;
}

// NEW Promotional Offer Interface for the top banner
export interface PromotionalOffer {
  id: string;
  text: string;
  active: boolean;
  priority: number;
  createdAt: any;
  startDate?: any;
  endDate?: any;
}

// Original Fetcher (Untouched)
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

// NEW Fetcher for the specialized promotional offers collection
export async function getPromotionalOffers(): Promise<PromotionalOffer[]> {
  try {
    const offersRef = collection(db, "promotional_offers");
    
    // Safety check for unconfigured Firebase
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === "your_project_id") {
      return [];
    }

    const now = new Date();
    
    // Using the simplest possible query to see if we get anything at all
    const q = query(
      offersRef, 
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const offers: PromotionalOffer[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const docId = doc.id;
      
      
      // Filter by active status
      if (!data.active) return;

      // Date filtering
      if (data.startDate && data.startDate.toDate() > now) {
        return;
      }
      if (data.endDate && data.endDate.toDate() < now) {
        return;
      }
      
      offers.push({ id: docId, ...data } as PromotionalOffer);
    });
    
    // Sort by priority in memory (Higher priority first)
    const sorted = offers.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    return sorted;
  } catch (error) {
    console.error("Error fetching promotional offers:", error);
    return [];
  }
}
