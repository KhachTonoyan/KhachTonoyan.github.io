import React from "react";
import {Container } from "@material-ui/core"
import { withRouter } from 'react-router-dom';
import {max,createWeekDays,toC,img} from "../Helper/helper";


function DaysItems({days, history}) {
    const weekDays = createWeekDays()
    days.list.forEach(item => {
        weekDays[new Date(item.dt_txt).getDay()].val.push(Math.round(toC(item.main.temp)));
        weekDays[new Date(item.dt_txt).getDay()].id = item.dt;
        weekDays[new Date(item.dt_txt).getDay()].img.push(parseInt(item.weather[0].icon));
        weekDays[new Date(item.dt_txt).getDay()].dayImg = img + max(weekDays[new Date(item.dt_txt).getDay()].img) + "d@2x.png";
        weekDays[new Date(item.dt_txt).getDay()].day=new Date(item.dt_txt).getDay()
    });
    weekDays.sort((a,b)=> a.id - b.id);
    return(
        <Container style={{display:"flex",textAlign:"center",flexDirection:"column"}}>
            <p style={{fontSize:"25px"}}>{days.city.name || "We can't find this page"}</p>
            <Container style={{display:"inline-flex",padding:"10px"}}>
            {weekDays.map((e,i) => {
            if(e.id){
                return(
                    <Container key={e.id}
                               style={{width:"180px",height:"220px",border:"0.5px solid #84A7DF",borderRadius:"5%",background:"rgba(255, 255, 255, 0.4)",cursor:"pointer",marginLeft:"15px"}}
                               onClick={() => history.push(`${e.day}`)}>
                        {e.name.toUpperCase()}
                        <p>
                            Max Temp:{Math.round(Math.max(...e.val))} C
                        </p>
                        <p>
                            Min Temp:{Math.round(Math.min(...e.val))} C
                        </p>
                        <p>
                        <img alt={""} src={e.dayImg}/>
                        </p>

                    </Container>
                )
          } return ""
        })}
            </Container>
        </Container>
    )

}


export default withRouter(DaysItems)