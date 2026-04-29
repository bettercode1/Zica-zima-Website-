import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

/* ── Firebase client init ── */
const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getDb() {
  const app = getApps().length === 0
    ? initializeApp(firebaseConfig, 'admissions-server')
    : getApps().find(a => a.name === 'admissions-server') ?? initializeApp(firebaseConfig, 'admissions-server');
  return getFirestore(app);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, message } = body;

    /* ── 1. Validate ── */
    if (!name || !phone || !course) {
      return NextResponse.json(
        { error: 'Name, phone, and course are required.' },
        { status: 400 }
      );
    }

    /* ── 2. Save to Firestore → "enquiries" collection ── */
    const db = getDb();
    const docRef = await addDoc(collection(db, 'enquiries'), {
      name,
      phone,
      email:   email   || null,
      course,
      message: message || null,
      status:  'new',
      source:  'website-contact-form',
      submittedAt: serverTimestamp(),
    });

    console.log(`✅ [Admissions] Firestore saved → enquiries/${docRef.id}`);

    return NextResponse.json({
      success: true,
      firebaseSaved: true,
      docId: docRef.id,
      collection: 'enquiries'
    }, { status: 200 });

  } catch (err) {
    console.error('❌ [Admissions] Error:', err);
    return NextResponse.json(
      { error: 'Failed to save enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
