import React from "react";
import {ceateDay,img, toC} from "../Helper/helper";
import { NavLink } from 'react-router-dom';
import {Container } from "@material-ui/core"

function Details({days,info}) {
    const thisDay = ceateDay();
    days.list && days.list.forEach(item => {
        if(+info.match.params.day === new Date(item.dt_txt).getDay()){
            thisDay.val.push(Math.round(toC(item.main.temp)));
            thisDay.id.push(item.dt);
            thisDay.time.push(item.dt_txt.slice(-8,-3))
            thisDay.img.push(img + item.weather[0].icon + "@2x.png");
        switch (+info.match.params.day) {
            case 0:
                thisDay.name = "sunday";
                break;
            case 1:
                thisDay.name = "monday";
                break;
            case 2:
                thisDay.name = "tuesday";
                break;
            case 3:
                thisDay.name = "wednesday";
                break;
            case 4:
                thisDay.name = "thursday";
                break;
            case 5:
                thisDay.name = "friday";
                break;
            case 6:
                thisDay.name = "saturday";
                break;
            default:
            }
        }else if(!(+info.match.params.day >= 0 && +info.match.params.day <= 6)) {
            thisDay.error = "We can't find this page"
        }
    });
    return(
        <Container style={{display:"flex",textAlign:"center",flexDirection:"column"}}>
            <NavLink to='/' activeClassName={"none"}>
                <p style={{fontSize:"25px",textDecoration:"none"}} >{thisDay.name.toUpperCase() || "We can't find this page"}</p>
            </NavLink>
            <Container style={{display:"inline-flex",}}>
                {thisDay.val && thisDay.val.map((e,i) => {
                    if(thisDay.name){
                        return (<Container key={thisDay.id[i]}
                                           style={{width:"145px",height:"200px",border:"0.5px solid #84A7DF",borderRadius:"5%",background:"rgba(255, 255, 255, 0.4)",}}>
                                {thisDay.time[i]}
                                <p>
                                     Temp: {e} C
                                </p>
                                <p>
                                    <img alt={""} src={thisDay.img[i]}/>
                                </p>

                            </Container>
                        )
                    } return "We can't find this page";
                })}
            </Container>
        </Container>
    )
}

export default Details
