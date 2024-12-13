// contexts/MappingContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MappingContext = createContext();

export const MappingProvider = ({ children }) => {
    const [timeSlots, setTimeSlots] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [days, setDays] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchMappingData = async () => {
            try {
                const [timeSlotsRes, languagesRes, daysRes, countriesRes] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_SPRING_API_URL}/timeSlots`),
                    axios.get(`${process.env.REACT_APP_SPRING_API_URL}/languages`),
                    axios.get(`${process.env.REACT_APP_SPRING_API_URL}/days`),
                    axios.get(`${process.env.REACT_APP_SPRING_API_URL}/countries`)
                ]);

                setTimeSlots(timeSlotsRes.data.result);
                setLanguages(languagesRes.data.result);
                setDays(daysRes.data.result);
                setCountries(countriesRes.data.result);
            } catch (error) {
                console.error('Error fetching mapping data:', error);
            }
        };

        fetchMappingData();
    }, []);

    return (
        <MappingContext.Provider
            value={{
                timeSlots,
                languages,
                days,
                countries
            }}
        >
            {children}
        </MappingContext.Provider>
    );
};

export const useMapping = () => {
    const context = useContext(MappingContext);
    if (!context) {
        throw new Error('useMapping must be used within a MappingProvider');
    }
    return context;
};