import React from 'react';
import Header from './Header';
const Layout = (props) => {

        return (
            <>
            <Header title="Conversations"/>
            <div className="initdiv">
                {props.children}
            </div>
            </>
        )

}
export default Layout;