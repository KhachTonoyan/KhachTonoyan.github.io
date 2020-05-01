import React from "react";
import DaysItems from "./DaysItems";
function Days({days}) {
    return(
        <div>
            {days.list ? <DaysItems days={days}/> : <p style={{fontSize:"25px"}}>We can't find this city</p> }
        </div>
    )
}

export default Days