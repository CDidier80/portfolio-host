`CHEATSHEET FOR REACT SNIPPETS
VSCode exrension name: "ES7 React/Redux/GraphQL/React-Native snippets"

Some keyboard shortcuts insert code that requires you to name many 
elements in an expression. When you finish naming one, use tab
to jump to the next.
` 

////////////////////////////////////////////////////////////////////////////


"QUICK REFERENCE FOR MOST HELPFUL"

/* 
rafce  =>    CREATE FULL ES6 REACT FUNCTIONAL COMPONENET WITH DEFAULT EXPORT   
imrse  =>    import React, { useState, useEffect } from 'react'                
cp     =>    const { } = this.props                                            
cs     =>    const { } = this.state                                            
dob    => 	 const {propName} = objectToDescruct                               
cmmb   =>	 create a comment block                                             
*/

"CREATE FULL REACT COMPONENTS QUICKLY"

/*
rfce => 
(ES5)
 */

import React from 'react'

function ReactSnippetShortcuts() {
    return (
        <div>
            
        </div>
    )
}

export default ReactSnippetShortcuts

/*
rafce =>  
(ES6)
*/

import React from 'react'

export const ReactSnippetShortcuts = () => {
    return (
        <div>
            
        </div>
    )
}

"REACT IMPORTS"

/* imr   =>    */    import React from 'react'
/* imrd  =>    */    import ReactDOM from 'react-dom'
/* imrs  =>    */    import React, { useState } from 'react'
/* imrse =>    */    import React, { useState, useEffect } from 'react'
/* imrc  =>    */    import React, { Component } from 'react'


"REACT BROWSER ROUTER IMPORTS"

/* imbr  =>	   */    import { BrowserRouter as Router} from 'react-router-dom'
/* imrr  =>    */    import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


"GENERIC IMPORTS"

/* imp   =>    */   import moduleName from 'module'
/* imn   =>    */   import 'module'
/* imd   =>    */   import { destructuredModule } from 'module'
/* ime   =>    */   import * as alias from 'module'
/* ima   =>    */   import { originalName as aliasName} from 'module'


"EXPORTS"

/* exp   =>     */   export default moduleName
/* exd   =>     */   export { destructuredModule } from 'module'
/* enf   =>     */   export const functionName = (params) => { }


"DECONSTRUCTION"

/* cp    =>     */	 const { } = this.props
/* cs    =>     */	 const { } = this.state
/* dob   =>     */	 const {propName} = objectToDescruct
/* dar   =>     */	 const [propName] = arrayToDescruct


"SETTING STATE FOR CLASS COMPONENTS"

/* sst   =>     */	 this.setState({ })
/* ssf   =>     */	 this.setState((state, props) => { return {  }})

"MOUNTING"

/* cdm   =>	    */   componentDidMount = () => { }

"LOOPS & HIGHER ORDER FUNCTIONS"

/* forEach      */
/* fre    =>    */  
array.forEach(currentItem => {

})

/* fof    =>    */	
for(let item of object) {
    
}

/* fin    =>    */	
for(let item in object) {
    
}


"OTHER"

/* ren    =>    */	
render() {
    return (
        <div>
            
        </div>
    )
}

/* nfn    =>     */	  const functionName = (params) => { }
/* cmmb   =>     */   // creates a comment block
/**
 * example
 */





