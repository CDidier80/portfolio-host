import React, { Component } from 'react'
import Uploader from './components/Uploader'
import Images from './components/Images'
import { __LoadImages } from './services/UserServices'




class App extends Component {
    constructor() {
        super()
        this.state = {
            imgUrls: []
        }
    }

    // componentDidMount() {
    //     this.setImages()
    // }
    setImages = async () => { 
        console.log('inside setImages: ')
        const image = await __LoadImages()
        this.setState({
            imgUrls: [image]
        })
        console.log(this.state)
    }
    // shouldn't need delete since we will just update
    delete = async () => { }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        <h2>Cloudinary</h2>
                    </div>
                    <div className="pic-buttons">
                        <Uploader setImages={this.setImages} />
                        <button className="btn  teal darken-4" onClick={() => this.delete()}>
                            <i className="material-icons left">delete_sweep</i>Delete All
                </button>
                    </div>
                </header>
                <button onClick={(e) => this.setImages()}>viewpic</button>
                {/* <main>
                    <Images imgUrls={this.state.imgUrls} />
                </main> */}
            </div>
        )
    }
}

export default App