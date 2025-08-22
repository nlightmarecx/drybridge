// src/data/TrackView.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import rawProducts from "./productsdata";
import { supabase } from "../lib/supabase";

export default function TrackView({ children }) {
  const location = useLocation(); // has .pathname and .key

  useEffect(() => {
    const path = (location.pathname || "").toLowerCase();
    const p = rawProducts.find(x => (x.route || "").toLowerCase() === path);
    if (!p) return;

    // count once per navigation (prevents double in StrictMode)
    const flag = `counted:${location.key}`;
    if (sessionStorage.getItem(flag)) return;
    sessionStorage.setItem(flag, "1");

    (async () => {
      const { data, error } = await supabase.rpc("increment_view", { _route: path });
      if (error) {
        console.error("increment_view error:", error);
        return;
    }
    // data = new total from DB
    p.views = data ?? (p.views || 0) + 1;

    // optional: keep a local mirror for your table until Step 6
    try {
        const snapshot = rawProducts.map(({ productId, views }) => ({ productId, views }));
        localStorage.setItem("productViews", JSON.stringify(snapshot));
    } catch {}
  })();
}, [location.key, location.pathname]);

  return children;
}