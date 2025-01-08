const DayForecastRow = ({data}) => {
    return (
        <div className="w-full flex justify-between gap-2 items-center border-b-2 border-slate-100 py-8 ">
            <p className="font-semibold">Day {data.date}</p>
            <div className="flex md:gap-2 items-center font-semibold"><p><img src={data.day.condition.icon} alt="Condition Image" /></p><p>{data.day.condition.text}</p></div>
            <p className="font-semibold">{data.day.maxtemp_c}/{data.day.mintemp_c}</p>
        </div>
    )
}
export default DayForecastRow;