const Current = ({data}) => {

    return (
        <div className="w-full bg-blue h-64 flex justify-between px-12 py-6">
            <div className="h-full w-1/2 flex flex-col justify-between">
                <h1 className="text-3xl font-bold">{data?.location?.name}</h1>
                <p className="flex gap-2"><span className="text-8xl font-bold">{data?.current?.temp_c}</span><p className="text-3xl font-bold">o</p></p>
            </div>
            <div>
                <img height={200} width={200} src={data?.current?.condition.icon} alt="" />
            </div>
        </div>
    )
}

export default Current;