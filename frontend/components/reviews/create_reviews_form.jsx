import React from 'react'



class CreateReviewsForm extends React.Component {
    constructor(props){
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount(){
        debugger
        this.props.createReview()
    }
    
    render() {
        
    return (
        <div>
           <input className="review__title" type="text" onSubmit={this.componentDidMount}/>
        </div>
    )
    }
}

export default CreateReviewsForm;
