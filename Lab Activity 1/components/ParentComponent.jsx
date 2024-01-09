import React from "react";
import ChildComponent from './ChildComponent';

// function ParentComponent(){
//     const dataToPass = " Hello From Parent!";
//     return (
//         <ChildComponent message={dataToPass} />
//     );
// }

// export default ParentComponent

//Class Components


class ParentComponent extends React.Component{
    render() {
        const dataToPass = " Hello From Parent!";
        return (
        <ChildComponent message={dataToPass} />
        );
    }
}

export default ParentComponent;