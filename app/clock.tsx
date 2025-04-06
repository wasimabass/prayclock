'use client'

import { useEffect, useState } from 'react';
import { PrayerTimings } from './prayerTimings';
import { PrayerDate } from './prayerDate';



export const Clock = () => {

    const [timingsState,  setTimingsState] = useState({timings : null, date: null});

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const url =
                    'https://api.aladhan.com/v1/timings/01-01-2025?latitude=30.332184&longitude=-81.655647&shafaq=general&tune=5%2C3%2C5%2C7%2C9%2C-1%2C0%2C8%2C-6&timezonestring=UTC&calendarMethod=UAQ';
                const response = await fetch(url);
                const data = await response.json();
                console.log( data.data.date);
                setTimingsState({ timings: data.data.timings, date: data.data.date });
            } catch (error) {
                console.error(error);
            }
        };

        fetchPrayerTimes();
    }, []);

    if (!timingsState.timings) return <div>Loading...</div>;

    console.log('abc', timingsState.date);
    return (
        <div>
            <div className="width-full height-2 text-yellow-400 text-center p-5">
                <h1 className="text-3xl orbitron-digital tracking-widest">10:14<small className="ml-1 text-sm">:55</small></h1>
                <h1 className="text-3xl">FRIDAY</h1>
            </div>

            <div className="clockBody">

                <div className="flex justify-center">
                    <PrayerDate date={timingsState.date} />
                </div>

                <div className="flex justify-center">
                    <PrayerTimings timings={timingsState.timings} />
                </div>
            </div>

        </div>
    );
}