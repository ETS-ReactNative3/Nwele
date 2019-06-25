import React, {Component} from 'react';
import './Salons.css'

class Salons extends Component {

    // constructor(props){
    //   super(props);
    //   this.state = {
    //     items:[],
    //     isLoaded: false,
    //   }
    //
    //
    // }
    //
    // componentDidMount() {
    //   fetch('http://lutheranhymnals.co.za/salon/salonUserApi/jwtApp/public/index.php/serviceByEntity?entityID=1')
    //     .then(res => res.json())
    //     .then(json =>{
    //         this.setState({
    //           isLoaded: true,
    //           items: json,
    //         })
    //     });
    // }

  render() {

    // var { isLoaded, items } = this.state;
    //
    //   if(!isLoaded){
    //     return <div>Loading....</div>
    //   }else {

        //return <p>hello</p>

        // const data = [
        // {
        //   "0": "www.google.com",
        //   "1": "Click here and enjoy searching",
        //   "2": "17"
        // },
        // ];
    return(
            <div className = "salons">

              <div className="top-sec">
                <p> Name </p>
              </div>

              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu
                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est
                 laborum </p>
              </div>

              <div className="Services">
              <h5> SERVICES </h5>
              <p> I wanted to add a list of here but I figured you might want to Add</p>
              <p> the items on a different structure, these are just dummy styles </p>

              // <ul>
              //   {data.map(item => {
              //     return <li>{item[0]}</li>;
              //   })}
              // </ul>

              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>
              <p> Some weird style                                  R 0.00 </p>

              </div>
              <button id="continue" onclick="location.href='./DatePicker'">Continue</button>

            </div>



    );
//  }
}

}

export default Salons;
