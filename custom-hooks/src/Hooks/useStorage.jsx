import React, { useState } from "react";

const useStorage = (key, initialvalue) => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialvalue;

    const setStorage = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    return [storedValue, setStorage];
};
export default useStorage;