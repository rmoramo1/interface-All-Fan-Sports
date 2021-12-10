import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Single_Fighter_box } from "./single_fighter_stas";
export const List_Stats_Fighter_Box = () => {
    const { store } = useContext(Context);
    var sortStats_py = store.boxer_stats;
    sortStats_py.sort(function (a, b) {
        return b.season - a.season;
    });
    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">Boxer Stats</h4>
                        </div>
                    </div>
                </div>
                {sortStats_py.map((item, index) => {
                    return (
                        <div className="col-4 px-1 bg_grey_medium" key={index}>
                            <Single_Fighter_box
                                key={index}
                                id={index}
                                del={item.id}
                                nickname={item.nickname}
                                name={item.name}
                                category={item.category}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}