export default function Stats({stat_one_title , stat_one_desc , stat_two_title , stat_two_desc , stat_three_title , stat_three_desc , stat_four_title , stat_four_desc}){
    return <>
            <div className="relative">
               
                <div className="relative mx-auto max-w-full bg-gray-200 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-full " >
                        <dl className="stats_Div rounded-lg  p-5 flex justify-between flex-wrap">
                            <div className="flex flex-col  p-6 text-center ">
                                <dt className="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_one_desc}</dt>
                                <dd className="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_one_title}</dd>
                            </div>
                            <div
                                className="flex flex-col   p-6 text-center sm:border-0 ">
                                <dt className="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_two_desc}</dt>
                                <dd className="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_two_title}</dd>
                            </div>
                            <div className="flex flex-col   p-6 text-center ">
                                <dt className="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_three_desc}</dt>
                                <dd className="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_three_title}</dd>
                            </div>
                            <div className="flex flex-col   p-6 text-center ">
                                <dt className="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-">{stat_four_desc}</dt>
                                <dd className="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_four_title}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
    
    </>
}


