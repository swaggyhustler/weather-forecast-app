import HourlyForecast from "./HourlyForecast";
const TodayForecast = ({forecast}) => {
    const hours = [];
    let currentHour = new Date().getHours();
    for( let i=currentHour ; i<(currentHour+(2*5)); i+=2){
        // hours.push(i);
        if(forecast){
            hours.push(forecast[i]);
        }
    }
    return (
        <div className="w-full h-64 bg-slate-800 rounded-lg p-4">
            <h1 className="mb-2 font-semibold text-2xl">Today&apos;s Forecast</h1>
            <div className="flex w-full h-full overflow-auto">
                {hours.map((data, index)=> <HourlyForecast key={index} index={index} length={hours.length} data={data}/>)}
            </div>
        </div>
    )
}

export default TodayForecast;