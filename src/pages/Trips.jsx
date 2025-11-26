import React, { useEffect, useState } from "react";
import axios from "axios"; // استدعاء Axios

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب الرحلات من الباك إند باستخدام Axios
    axios
      .get("http://localhost:5000/api/trips")
      .then((response) => {
        setTrips(response.data); // البيانات تكون داخل response.data
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching trips:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>جاري تحميل الرحلات...</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>الرحلات المتوفرة</h1>

      <div style={styles.grid}>
        {trips.map((trip) => (
          <div key={trip.id} style={styles.card}>
            <img src={trip.image} alt={trip.title} style={styles.image} />
            <h3 style={styles.tripTitle}>{trip.title}</h3>
            <p style={styles.price}>السعر: {trip.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// تصميم بسيط داخل نفس الملف
const styles = {
  container: { padding: "25px" },
  title: { textAlign: "center", marginBottom: "25px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  tripTitle: { marginTop: "10px", fontSize: "18px", fontWeight: "bold" },
  price: { marginTop: "8px", color: "green", fontSize: "16px" },
};
