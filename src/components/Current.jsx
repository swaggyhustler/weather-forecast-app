const Current = ({data}) => {

    return (
        <div className="w-full bg-blue h-full md:h-64 flex flex-col md:flex-row justify-between items-center md:px-12 p-0 py-6">
            <div className="h-full w-full md:w-1/2 flex flex-col justify-between items-center md:items-start">
                <h1 className="text-6xl font-bold">{data?.location?.name}</h1>
                <p className="flex gap-2"><span className="text-8xl font-bold">{data?.current?.temp_c}</span><p className="text-3xl font-bold">o</p></p>
            </div>
            <div>
                <img height={200} width={200} src={data?.current?.condition.icon} alt="" />
            </div>
        </div>
    )
}

export default Current;