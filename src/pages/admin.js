import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { Tabs } from "../components/tabs";
import { Links } from "../components/links-sports";

/* img */

export const Admin = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if(!store.username_temp){
            window.location.href = '/';
        }
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid p-0">
            <div className="row g-0 accordion" >
                <div className="col-2 asideAdmin overflow-auto">
                    <Tabs/>
                </div>
                <div className="col-10" id="inputs-span">
                    <div id="allitems">
                        <Links/>
                    </div>
                </div>
            </div>
        </div>
    );
};
