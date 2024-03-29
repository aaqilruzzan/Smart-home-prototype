import s from "./power.module.css"


function power(){
return(
    <div className={s.container}>
    <p className={s.powerctext}>Power Consumption</p>
    <p className={s.powercsmalltext}>Summary of the energy consumption</p>

    <div className={s.consumption}>

    <div className={s.consumptionone}>
    <div className={s.ltngicon}>
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M40 1L17 37h14l-7 26 26-36H36z"
      />
    </svg>
    </div>
    <p className={s.consumptiontext}>16 kwh</p>
    <p className={s.consumptionsmalltext}>Today</p>

    </div>
    <div className={s.consumptiontwo}>
    <div className={s.ltngicon}>
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M40 1L17 37h14l-7 26 26-36H36z"
      />
    </svg>
    </div>
    <p className={s.consumptiontext}>439 kwh</p>
    <p className={s.consumptionsmalltext}>This month</p>

    </div>

    </div>

    <div className="flex items-center  gap-2 mt-4">

    <div className={s.belowicons}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>
    </div>

    <div>
        <p className="text-xs">Main Light</p>
        <p className={s.biconssmalltext} >2 kwh</p>
    </div>

    </div>

    <div className="flex items-center  gap-2 mt-4">

    <div className={s.belowicons}>
    <svg
      viewBox="0 0 905 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path d="M84.5 316c-10.667 9.333-22.667 13.333-36 12-13.333-1.333-24.667-7.333-34-18-9.333-9.333-13.333-21.333-12-36 1.333-14.667 7.333-26.667 18-36 32-26.667 58.333-46.667 79-60 20.667-13.333 50.333-26.667 89-40 38.667-13.333 81.667-14.667 129-4s100.333 32.667 159 66 110.333 51 155 53 78-3.333 100-16 51.667-35 89-67c25.333-20 48.667-18 70 6 21.333 26.667 19.333 50.667-6 72-81.333 73.333-159.333 110-234 110-66.667 0-140.667-23.333-222-70-45.333-25.333-85-42.667-119-52-34-9.333-65-9.333-93 0s-49.667 19-65 29c-15.333 10-37.667 27-67 51m736 110c25.333-21.333 48.667-19.333 70 6 21.333 26.667 19.333 50.667-6 72-26.667 22.667-48.333 40.333-65 53-16.667 12.667-40.667 25.333-72 38-31.333 12.667-63.667 19-97 19-64 0-138-23.333-222-70-45.333-25.333-85-42.667-119-52-34-9.333-65-9.333-93 0s-49.667 19-65 29c-15.333 10-37.667 27-67 51-9.333 9.333-21 13.333-35 12-14-1.333-25.667-7.333-35-18-21.333-26.667-19.333-50.667 6-72 25.333-22.667 45.333-39.333 60-50 14.667-10.667 37.667-23.333 69-38 31.333-14.667 60.667-22.333 88-23 27.333-.667 62.333 4.333 105 15s87.333 29.333 134 56c45.333 25.333 85 42.667 119 52 34 9.333 65 9.333 93 0s49.667-19 65-29c15.333-10 37.667-27 67-51m0 256c25.333-21.333 48.667-19.333 70 6 9.333 9.333 13.333 21.333 12 36-1.333 14.667-7.333 26.667-18 36-26.667 22.667-48.333 40.333-65 53-16.667 12.667-40.667 25.333-72 38-31.333 12.667-63.667 19-97 19-64 0-138-23.333-222-70-45.333-25.333-85-42.667-119-52-34-9.333-65-9.667-93-1s-50 18.333-66 29c-16 10.667-38 28-66 52-9.333 9.333-21 13.333-35 12-14-1.333-25.667-7.333-35-18-21.333-26.667-19.333-50.667 6-72 25.333-22.667 45.333-39.333 60-50 14.667-10.667 37.667-23.333 69-38 31.333-14.667 60.667-22.333 88-23 27.333-.667 62.333 4.333 105 15s87.333 29.333 134 56c45.333 25.333 85 42.667 119 52 34 9.333 65 9.333 93 0s49.667-19 65-29c15.333-10 37.667-27 67-51" />
    </svg>
    </div>

    <div>
        <p className="text-xs">Air Conditioner</p>
        <p className={s.biconssmalltext} >8 kwh</p>
    </div>

    </div>

    </div>
)






}

export default power