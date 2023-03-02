export default function Stats({stat_one_title , stat_one_desc , stat_two_title , stat_two_desc , stat_three_title , stat_three_desc , stat_four_title , stat_four_desc}){
    return <>

     
        
            <div class="relative">
               
                <div class="relative mx-auto bg-gray-200 max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-full " >
                        <dl class="rounded-lg  p-5 flex justify-between flex-wrap">
                            <div class="flex flex-col  p-6 text-center ">
                                <dt class="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_one_desc}</dt>
                                <dd class="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_one_title}</dd>
                            </div>
                            <div
                                class="flex flex-col   p-6 text-center sm:border-0 ">
                                <dt class="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_two_desc}</dt>
                                <dd class="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_two_title}</dd>
                            </div>
                            <div class="flex flex-col   p-6 text-center ">
                                <dt class="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-black">{stat_three_desc}</dt>
                                <dd class="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_three_title}</dd>
                            </div>
                            <div class="flex flex-col   p-6 text-center ">
                                <dt class="order-2 mt-2  font-semibold space-x-4 uppercase leading-6 text-">{stat_four_desc}</dt>
                                <dd class="order-1  text-6xl font-bold tracking-tight text-red-500">{stat_four_title}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
    
    </>
}


