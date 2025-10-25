import React, { useState, useEffect, useContext } from "react";
import Pendulum from "./Pendulum";
import "./physics.css";
import { CurrentUserContext } from "../../lib/contexts/CurrentUserContext";
import CustomAxios from "../../lib/actions/CustomAxios";
import { handleFetchError } from "../../lib/actions/HandleError";
import { FaCheck } from "react-icons/fa";

const GRAVITY = 9.81;
const PIXELS_PER_METER = 500; // 500px = 1 meter here, experiment a lil :P
const LAB_NAME = "physics";

const PhysicsPage = () => {
    const [length, setLength] = useState(0.5);
    const [period, setPeriod] = useState(0);
    const [isOpened, setIsOpened] = useState(false);
    const currentUserContext = useContext(CurrentUserContext);
    useEffect(() => {
        const fetchStatus = async () => {
            if (currentUserContext?.currentUser?.username) {
            try {
                const { data } = await CustomAxios("get", `/checker/${LAB_NAME}`);
                setIsOpened(data.status);
            } catch (error) {
                console.error("Error fetching checker status:", error);
                setIsOpened(false);
            }
            } else {
            setIsOpened(false);
            }
        };
        fetchStatus();
    }, [currentUserContext?.currentUser?.username]);
    useEffect(() => {
    if(length > 0){
        const calculatedPeriod = 2 * Math.PI * Math.sqrt(length/GRAVITY);
        setPeriod(calculatedPeriod);
    } 
    else{
        setPeriod(0);
    }
    }, [length]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLength(parseFloat(e.target.value));
    };
    const handleCheckboxChange = async () => {
        if (!currentUserContext?.currentUser?.username) {
            handleFetchError("Please log in to mark the lab as opened.");
            return;
        }
        try {
            const { data } = await CustomAxios("post", `/checker/${LAB_NAME}`);
            setIsOpened(data.status);
        } catch (error) {
            handleFetchError(error);
        }
    };
    const visualLength = length * PIXELS_PER_METER;

    return (
    <main className="relative w-full grow pb-20 pt-24">
        <div className="container mx-auto max-w-[1000px] px-4">
            <div className="flex items-center justify-center gap-4">
                <h1 className="my-4 text-center text-3xl font-bold text-green-700">The Pendulum</h1>
                <div
                onClick={handleCheckboxChange}
                className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded border-2 ${ isOpened ? "border-green-600 bg-green-600" : "border-gray-400 bg-gray-200"} transition-colors duration-200`}
                title={isOpened ? "Mark as unopened" : "Mark as opened"}
                >
                    <FaCheck className={`text-white transition-opacity duration-200 ${isOpened ? "opacity-100" : "opacity-0"}`} size={14}/>
                </div>
            </div>
            <div className="flex h-fit min-h-full w-full flex-col items-center justify-center gap-8 rounded-lg border p-6 shadow-lg">
                <div className="w-full max-w-[500px]">
                <label
                    htmlFor="length-slider"
                    className="mb-2 block text-lg font-medium"
                >
                String Length: {length.toFixed(2)} meters
                </label>
                <input
                    id="length-slider"
                    type="range"
                    min="0.1" 
                    max="1.0" 
                    step="0.01"
                    value={length}
                    onChange={handleSliderChange}
                    className="w-full"
                />
                <p className="mt-4 text-center text-lg text-gray-700 italic">
                    Formula: <strong>T = 2π * √(L / g)</strong>
                </p>
                <p className="mt-4 text-center text-xl">
                    Calculated Period:{" "}
                    <strong className="text-green-700">
                        {period.toFixed(2)} seconds
                    </strong>
                </p>
                </div>
                <div className="relative h-[600px] w-full overflow-hidden rounded bg-gray-50 pt-4">
                    <Pendulum length={visualLength} period={period} />
                </div>
            </div>
        </div>
    </main>
    );
};

export default PhysicsPage;