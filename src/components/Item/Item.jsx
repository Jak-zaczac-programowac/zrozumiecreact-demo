import { useState } from "react";
import "./Item.css";

export function Item({ emoji }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <li className="item ">
            <span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>
            <button
                className="btn"
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </button>
        </li>
    );
}
