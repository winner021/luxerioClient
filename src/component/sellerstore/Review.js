import React from 'react'
import "../css/style.css"
import { Field,reduxForm } from 'redux-form'
import { reviewFormAction } from '../../actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { reviewDatafetcher } from '../../actions'
import reviewDataEnter from '../../reducers/reviewDataEnter'
import { memo } from 'react'

const Review=(props)=> {

   useEffect(()=>{
     props.reviewDatafetcher()
   },[props.reviewFlag])
  const  inputName=({input})=>{
       
        return(   
        <div className='form__field'>
          
            <input {...input}  placeholder='name' type="text"  />
        </div>
        )
    
   }
  const  inputReview=({input,label})=>{
    return(   
    <div className='form__field'>
        
        <textarea {...input} label={label} cols="40" style={{fontSize:"1rem"}}  placeholder='What Do You Fell For Us' rows="10"></textarea>
    </div>
    )



}
 


 const submithandler=(formvalue)=>{
     props.reviewFormAction(formvalue)

  }
   
  const reviewData=props.review.slice(0,4);

  const reviewDataRender=reviewData.map((list)=>{
    return <div className="review_card">
    <div className="review_name">
    {list.name}
    </div>
    <div className="review_about">
    {list.review}
    </div>
    
</div>
  },[])
    
    
        return(
            <div className='review '>
                <h2>Wall of Love</h2>
                <div className="review_container grid-2-col">
                <div className="review_data">
                     {reviewDataRender}
                </div>
                <div className="review_form">
                  <h2>Give us our feedback</h2>
                    <form onSubmit={props.handleSubmit(submithandler)}>

                    <span className="name">
                   <Field component={inputName}  label="name"  name="name"    />
                    </span>     
                 <span className="review">

                 <Field component={inputReview} name="review"  label="review" />
                 </span>
                <div className="submitBtn">
                <button >Submit</button>
                </div>
                 </form>
                  
                  
                       
                </div>
                </div>
                
            </div>
        )

    }
    
const mapStateToProps=(state)=>{
  return({review:state.review.data,
         reviewFlag:state.reviewDataFlag,
})
}

const formRender=reduxForm({form:'review'})  (Review)

export default connect(mapStateToProps,{reviewFormAction,reviewDatafetcher}) (formRender)