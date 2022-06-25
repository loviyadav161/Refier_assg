import './JobItem.css'
const JobItem = (props)=>{
    return(
        <div className='job'>
            <div className="card" >
                <div className="card_body">
                    <div className='card_header'>
                        <h5 className="card-title">{props.name}</h5>
                        <img className='company_logo' src='#' alt='logo'></img>
                    </div>
                    <h6 className="card-title">{props.company}</h6>
                    <hr />
                </div>
                <div className='card_lower'>
                    <p className='p_tag'>{props.job_type}</p>
                    <p className='p_tag'>{props.type}</p>
                    <button className="btn_lower">Apply Now</button>
                </div>
            </div>
        </div>
    );
};
export default JobItem;