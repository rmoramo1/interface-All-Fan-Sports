import React, { useContext, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import logo from "../assets/img/logo.png"

export const Footer = () => {
    return (
        <div className="container-fluid bg-red-logo text-white p-0 text-center py-3">
            <div className="row g-0">
                <div className="col-12">
                Copyright ALL FAN SPORTS 2021
                </div>
            </div>
        </div>
    )
}