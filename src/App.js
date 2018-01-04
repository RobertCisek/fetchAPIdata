import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {

        fetch("https://randomuser.me/api?results=5&inc=name,email,picture&noinfo")
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({
                    data: findresponse.results,
                })

            })
    }


    render() {
        return (
            <div>
                {
                    this.state.data.map((dynamicData, key) =>
                        <div className='container'>
                            <img src={dynamicData.picture.medium} /><br />
                            <span>{dynamicData.name.first + ' ' + dynamicData.name.last} </span><br />
                            <a href='mailto:'> {dynamicData.email} </a>

                        </div>
                    )

                }


            </div>

        )


    }
}

export default App;


