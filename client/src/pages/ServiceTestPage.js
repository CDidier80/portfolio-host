import React, {Component, useState} from 'react'
const path = "./subcomponents/ServiceTestComps"
// import DbTableCom from `${path}/DbTableCom`



const ServiceTest = () => {
    const models = ["User, Profile, Projects"]
    const styles = {
        componentWrapper: {
            minHeight: "100vw",
            minWidth: "100vw", 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            "gridGap": "1.8rem",
            margin: "auto",
            padding: "10px",

            backgroundColor: 'blue'

        },
        DatabaseModelWrapper: {
            minWidth: "300px", 
            maxWidth: "400px",
            maxHeight: "70vh",

            backgroundColor: 'pink'
        },
        requestScrollPanel: {

        },
    }
    
    // rename "styles" to "s" for component readability
    let s = styles 
    return (
        <div>
            <main style={s.componentWrapper}>
                <div style={s.DatabaseModelWrapper}>
                    <div style={s.requestScrollPanel}>
                        

                    </div>

                </div>

            </main>
        </div>
    )
}

export default ServiceTest