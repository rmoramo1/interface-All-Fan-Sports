import React from "react";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="container-fluid bg-red-logo text-white p-0 text-center py-3 fi">
            <div className="row g-0">
                <div className="col-12">
                Copyright ALL FAN SPORTS {year}
                </div>
            </div>
        </div>
    )
}