import JobItem from './JobItem';
import './Jobs.css';
const DUMMY_JOBS = [
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    },
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    },
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    },
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    },
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    },
    {
        id:"job1",
        name: "Full Stack Developer",
        company: "Microsoft",
        location: "Gurgoan",
        job_type:"Hybrid",
        type:"Full Time",
    }
]
const Jobs = () =>{
    const presentJob = DUMMY_JOBS.map((props) => 
        <JobItem key={props.id} name={props.name} company = {props.company} job_type={props.job_type} type = {props.type}/>
    )
    return(
        <ul>
            {presentJob}
        </ul>
    );
};

export default Jobs;