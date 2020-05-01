const createWeekDays = () => {
               return([{name:"sunday",val:[],id:0,img:[]},
                    {name:"monday",val:[],id:0,img:[]},
                    {name:"tuesday",val:[],id:0,img:[]},
                    {name:"wednesday",val:[],id:0,img:[]},
                    {name:"thursday",val:[],id:0,img:[]},
                    {name:"friday",val:[],id:0,img:[]},
                    {name:"saturday",val:[],id:0,img:[]}])};
const ceateDay = () => {
    return {name:"",val:[],id:[],img:[],time:[]}
}
function max(array) {
    let a = array.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    const arr = [];
    for(let key in a){
        arr.push(a[key])
    }
    let max = Math.max(...arr);
    let icon;
    for(let key in a){
        if(a[key] === max) icon = (key < 10 ? "0" + key : key)
    }
    return icon
}

const toC = (a) => a - 273.15;

const img = "http://openweathermap.org/img/wn/";

export {max,createWeekDays,toC,img,ceateDay}