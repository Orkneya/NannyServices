import { useEffect, useState } from "react";
import { nannies } from "../../mocks/nannies";
import { useAuth } from "../../context/AuthContext";
import { getUserFavorites, toggleFavorite } from "../../servises/favorites";
import NannyCard from "../../components/NannyCard/NannyCard";

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [favoriteNannies, setFavoriteNannies] = useState([]);

  useEffect(() => {
    if (!user) return;

    getUserFavorites(user.uid).then((favIds) => {
      setFavorites(favIds);

      const filtered = nannies.filter((nanny) => favIds.includes(nanny.id));

      setFavoriteNannies(filtered);
    });
  }, [user]);

  if (!favoriteNannies.length) {
    return <p>No favorites yet 💚</p>;
  }

  return (
    <div>
      {favoriteNannies.map((nanny) => (
        <NannyCard
          key={nanny.id}
          nanny={nanny}
          isFavorite={true}
          user={user}
          onToggleFavorite={async () => {
            const updated = await toggleFavorite(user.uid, nanny.id, favorites);

            setFavorites(updated);
            setFavoriteNannies(nannies.filter((n) => updated.includes(n.id)));
          }}
        />
      ))}
    </div>
  );
}
