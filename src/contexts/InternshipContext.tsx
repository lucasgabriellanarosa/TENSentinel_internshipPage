import { createContext, useState, ReactNode, useEffect } from 'react';
import { InternshipContextType, InternshipListType } from '../@types/Internship';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase';

// Context
export const InternshipContext = createContext<InternshipContextType | undefined>(undefined);

// Context Provider
export const InternshipProvider = ({ children }: { children: ReactNode }) => {

    // Internship data fetched from the firebase
    const [internshipData, setInternshipData] = useState<InternshipListType>([]);

    // Firebase config
    const database = getDatabase(app);
    const collectionRef = ref(database, "internships");
    const fetchData = () => {
        onValue(collectionRef, (snapshot) => {
            if (snapshot.exists()) {
                const dataItem = snapshot.val();
                setInternshipData(dataItem);
            } else {
                console.log("No data available");
            }
        }, (error) => {
            console.error("Error fetching data: ", error);
        });
    };
    useEffect(() => {
        fetchData()
    }, [])

    // Return Context.Provider with the internship data values
    return (
        <InternshipContext.Provider value={{ internshipData, setInternshipData }}>
            {children}
        </InternshipContext.Provider>
    );
};