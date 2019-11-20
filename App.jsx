import React from 'react'
// import Hello from './Hello.jsx'
import Student from './Student.jsx'

// export default class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Hello name='Thanh' age="30" gender="unidentify" address="nha o hcm city" phone='0909989199' />
//                 <Hello name='Hien' age='15' gender='bede' address='nha o que' phone='090330113399' />

//             </div>
//         )
//     }
// }
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Student />
            </div>
        )
    }
}