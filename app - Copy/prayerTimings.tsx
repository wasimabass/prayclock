export const PrayerTimings = ({ timings }) => {


    //console.log(Object.entries(timings));
    return <div className="d-flex">
        {Object.entries(timings).map(([name, time], index) => (
            <tr key={index} className="prayer-item tracking-wider text-lg pt-4 font-semibold ">
                <td className="p-3 text-right">{name.toUpperCase()}</td>
                <td className="p-3 text-2xl text-right bg-amber-400 text-sky-950  orbitron-digital border border-4 border-transparent">{time.split(':')[0]}</td>
                <td className="text-3xl">:</td>
                <td className="p-3 text-2xl text-right bg-amber-400 text-sky-950 orbitron-digital">{time.split(':')[1]}</td>
                <td className="p-3 readex-pro-arabic text-left">
                    {name === 'Imsak' && 'امساک'}
                    {name === 'Fajr' && 'الفجر'}
                    {name === 'Sunrise' && 'طلوع آفتاب'}
                    {name === 'Dhuhr' && 'الظهر'}
                    {name === 'Asr' && 'العصر'}
                    {name === 'Sunset' && 'غروب آفتاب'}
                    {name === 'Maghrib' && 'المغرب'}
                    {name === 'Isha' && 'العشاء'}
                    {name === 'Lastthird' && 'تہجد'}
                </td>
            </tr>
        ))
        }
        </div>   

}

