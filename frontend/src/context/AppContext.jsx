import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIseller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const freshProducts = async () => {
        setProducts(dummyProducts);
    };

    useEffect(() => {
        freshProducts();
    }, []);

    const value = {
        navigate, 
        user, 
        setUser, 
        isSeller, 
        setIseller,
        showUserLogin,
        setShowUserLogin,
        products,
        setProducts
    }

    return (
        <AppContext.Provider value={ value }>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}