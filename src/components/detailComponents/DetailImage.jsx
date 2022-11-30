import React from "react";

function DetailImage ({recipeImage, recipeTitle}) {

    return (
        <div className="detail-image" style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)),
              url(${recipeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h1 className="detail-title">{recipeTitle}</h1>
        </div>
    )
}

export default DetailImage


//background position only works if you delete it, put it back, then save WHY??

