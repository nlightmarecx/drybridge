// src/data/TrackView.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import rawProducts from "./productsdata";

export default function TrackView({ children }) {
  const location = useLocation(); // has .pathname and .key

  useEffect(() => {
    const path = (location.pathname || "").toLowerCase();
    const p = rawProducts.find(x => (x.route || "").toLowerCase() === path);
    if (!p) return;

    // De-dupe: count once per *navigation key* (StrictMode safe)
    const flag = `counted:${location.key}`;
    if (sessionStorage.getItem(flag)) return;
    sessionStorage.setItem(flag, "1");

    p.views = (p.views || 0) + 1;

    // persist locally (device-only)
    const snapshot = rawProducts.map(({ productId, views }) => ({ productId, views }));
    localStorage.setItem("productViews", JSON.stringify(snapshot));
  }, [location.key, location.pathname]);

  return children;
}
