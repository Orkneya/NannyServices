import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getUserFavorites(userId) {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return [];

  return snap.data().favorites || [];
}

export async function toggleFavorite(userId, nannyId, favorites) {
  const ref = doc(db, "users", userId);

  const updated = favorites.includes(nannyId)
    ? favorites.filter((id) => id !== nannyId)
    : [...favorites, nannyId];

  await setDoc(ref, { favorites: updated }, { merge: true });

  return updated;
}
