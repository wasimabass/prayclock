export const PrayerTimings = ({ timings }) => {


    function convertTo12Hour(time) {
        let [hours, minutes] = time.split(":").map(Number);
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 0 to 12 for midnight
        return [`${hours}:${minutes.toString().padStart(2, "0")}`, period]; 
    } 


    const prayersMust = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    console.log(Object.entries(timings));
    return <div className="flex w-full flex-row gap-3 flex-nowrap">
        {Object.entries(timings)
        
        .filter(([name]) => prayersMust.includes(name) )
        .map(([name, time], index) => {
            const [formattedTime, amPm] = convertTo12Hour(time);
            return(
            <div key={index} className="prayer-item text-center flex-1 basis-1/5 text-lg p-4 font-semibold text-center bg-white hover:bg-orange-400 text-black hover:text-white rounded-3xl">     
                <div className="pb-0 inter">ATHAN</div>
                <div className="pb-0 text-2xl orbitron-digital">{formattedTime}<small className="text-xs">:{amPm}</small></div>
                <div className="pb-0">{name.toUpperCase()}</div>
                <div className="pb-0 readex-pro-arabic">
                    {name === 'Imsak' && 'امساک'}
                    {name === 'Fajr' && 'الفجر'}
                    {name === 'Sunrise' && 'طلوع آفتاب'}
                    {name === 'Dhuhr' && 'الظهر'}
                    {name === 'Asr' && 'العصر'}
                    {name === 'Sunset' && 'غروب آفتاب'}
                    {name === 'Maghrib' && 'المغرب'}
                    {name === 'Isha' && 'العشاء'}
                    {name === 'Lastthird' && 'تہجد'}
                </div>
            </div>
            );
            
            })
        }
        </div>   

}

