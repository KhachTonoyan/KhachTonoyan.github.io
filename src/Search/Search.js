import React from "react";
import { withRouter } from 'react-router-dom';

function Search({change,submit,getInputValue,history}) {
    console.log(getInputValue)

        return (

    <form className="searchBox"
                    onSubmit={(e) => {
                        history.replace('/')
                        e.preventDefault()
                        submit()
                }}>
                    <input placeholder="Search" className="searchInput" type="text" onChange={(e) => change(e.target.value)}  value={getInputValue}/>
                    <button className="searchButton" type={"submit"}>
                        <i className="material-icons">
                            search
                        </i>
                    </button>
                </form >

            )
}

export default withRouter(Search)