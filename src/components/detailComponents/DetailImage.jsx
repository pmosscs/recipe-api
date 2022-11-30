import React from "react";
import salmon from "../../assets/salmon.jpg"

function DetailImage () {

    return (
        <div className="detail-image" style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)),
              url(${salmon})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h1 className="detail-title">Good Ol' Steak</h1>
        </div>
    )
}

export default DetailImage


