'use client'

import { useEffect, useState } from 'react';
import { PrayerTimings } from './prayerTimings';



export const Clock = () => {

    const [timings, setTimings] = useState(null);

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {

                const url =
                    'https://api.aladhan.com/v1/timings/01-01-2025?latitude=30.332184&longitude=-81.655647&shafaq=general&tune=5%2C3%2C5%2C7%2C9%2C-1%2C0%2C8%2C-6&timezonestring=UTC&calendarMethod=UAQ';
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.data);
                setTimings(data.data.timings);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPrayerTimes();
    }, []);

    if (!timings) return <div>Loading...</div>;

    console.log('abc', timings);
    return (
        <div>
            <div className="width-full height-2 text-yellow-400 text-center p-5">
                <h1 className="text-3xl orbitron-digital tracking-widest">10:14<small className="ml-1 text-sm">:55</small></h1>
                <h1 className="text-3xl">FRIDAY</h1>
            </div>

            <div className="clockBody">
                <div className="flex justify-center">

                    <table className="border-collapse bordernone text-amber-400">
                        <thead>

                        </thead>
                        <tbody>

                            <PrayerTimings timings={timings} />
                        </tbody>
                    </table>


                </div>
            </div>

        </div>
    );
}