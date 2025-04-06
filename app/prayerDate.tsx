export const PrayerDate = ({ date }) => {


   

    console.log(Object.entries(date));
    return <div className="flex w-full flex-row gap-3 flex-nowrap">
        {Object.entries(date)
        
        .map((index) => {
            return(
            <div key={index} className="prayer-item text-center flex-1 basis-1/5 text-lg p-4 font-semibold text-center bg-white hover:bg-orange-400 text-black hover:text-white rounded-3xl">     
                <div className="pb-0 inter">ATHAN</div>
               
            </div>
            );
            
            })
        }
        </div>   

}

