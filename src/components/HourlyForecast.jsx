const HourlyForecast = ({data, length, index}) => {
    let style = "flex flex-col justify-around items-center h-[80%] min-w-[40%] md:min-w-[20%] pr-2 md:pr-0 mx-2 md:mx-0 border-r";
    if(index===length-1){
        style = "flex flex-col justify-around items-center h-[80%] min-w-[40%] md:min-w-[20%] mx-2 md:mx-0";
    }
    return (
        <div className={style}>
            <h1 className="font-bold text-xl">Hour{data?.time.slice(10, 20)}</h1>

            <div><img src={data?.condition.icon} alt="weather condition" /></div>
            <div className="flex"><p className="text-2xl font-bold">{data?.temp_c}</p><p className="font-bold">o</p></div>
        </div>
    )
}

export default HourlyForecast;