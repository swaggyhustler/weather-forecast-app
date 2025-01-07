import DayForecastRow from "./DayForecastRow";

const DaysForecast = ({data}) => {
    return (
        <div className="w-full h-[80vh] bg-slate-800 mt-12 mr-12 rounded-xl p-8 overflow-auto">
            <h1 className="mb-2 text-xl font-semibold sticky -top-8 bg-slate-800">Days Forecast</h1>
            <div className="w-full h-[90%] flex flex-col gap-4">
                {data?.map((forecast, index)=> <DayForecastRow key={index} data={forecast}/>)}
            </div>  
        </div>
    )
}

export default DaysForecast;