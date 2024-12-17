import React, { createContext, useContext, useState } from "react";

/**
 * @module FormContext
 *
 * @description This component provides the context for managing the employee form and list of employees.
 */
const FormContext = createContext();

export const FormProvider = ({ children }) => {
    //state for the employee form
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    });

    //State for the list of employees
    const [employees, setEmployees] = useState([]);

    //Adds a new employee to the list
    const addEmployee = (employeeData) => {
        setEmployees((prevEmployees) => [...prevEmployees, employeeData]);
    };

    return <FormContext.Provider value={{ form, setForm, employees, addEmployee }}>{children}</FormContext.Provider>;
};

//Custom hook to use the FormContext
export const useForm = () => {
    return useContext(FormContext);
};
