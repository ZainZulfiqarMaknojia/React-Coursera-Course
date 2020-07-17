import React , { Component } from 'react';
import { Card , CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';


class DishDetail  extends Component{
    
    constructor(props){
        super(props);
    }
    renderDish(dish){    
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }
    renderComment(dish)
    {
        if(dish != null)
        {   
            const dishComment = this.props.selectedDish.comments.map((Comment)=>{
                return (
                        <div key = {Comment.id}>
                            <p>{Comment.comment}</p>
                            <p>--{Comment.author} , {Comment.date}</p>
                        </div>
                        );
            });

            return(
                <div className = "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {dishComment}
                </div>
            );

        }
        else
        {
            return(
                <div></div>
            );
        }
    }
    render(){
        return(
          <div className = "row">
            <div className = "col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>
                {this.renderComment(this.props.selectedDish)}
          </div>  
        );
    }
    
}
export default DishDetail ;