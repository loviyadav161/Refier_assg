import './Footer.css'
const Footer=()=>{
    return(
        <footer className="mainfooter" role="contentinfo">  
            <div className="footer-middle">  
            <div className="container">  
                <div className="row">
                <div className="col-md-3">  
                    <h1>ReFier</h1>
                    <p className='address'>Plot-76 D, Udyog Vihar, Phase-4, Section-18, Gurugram, Haryana, India - 122001</p> 
                        <ul className="social-network social-circle">  
                            <li> <a href="#" className="icoFacebook" title="Facebook"> <i className="fa fa-facebook"> </i> </a> </li>  
                            <li> <a href="#" className="icoLinkedin" title="Linkedin"> <i className="fa fa-linkedin"> </i> </a> </li>  
                            <li> <a href="#"> <i className="fa fa-youtube" aria-hidden="true"> </i> </a> </li>  
                        </ul> 
                    <p>Sign up for job alerts</p>
                    <div className='email_picker'>
                        <input type="text" placeholder='Email' className='email_input'/>
                        <button className='btn_email'>Submit</button>
                    </div>
                    </div>
                <div className="col-md-3 col-sm-6">  
                    <div className="footer-pad">  
                    <h4> Discover</h4>  
                    <ul className="list-unstyled">  
                        <li> <a href="#"> </a> </li>  
                        <li> <a href="#">Jobs</a></li>  
                        <li> <a href="#"> Jobseeker </a></li>  
                        <li> <a href="#">College</a></li>  
                        <li> <a href="#">Enterprise</a></li>  
                        <li> <a href="#">Blog</a></li> 
                        <li> <a href="#">ISA</a></li>
                        <li> <a href="#">Newsletter</a></li>  
                    </ul>  
                    </div>  
                </div>  
                <div className="col-md-3 col-sm-6">  
                    <div className="footer-pad">  
                    <h4> Company</h4>  
                    <ul className="list-unstyled">  
                        <li><a href="#"> Contact us </a> </li>  
                        <li><a href="#">About us</a> </li>  
                        <li><a href="#">Webinar</a></li>   
                    </ul>  
                    </div>  
                </div>  
                <div className="col-md-3 col-sm-6">  
                    <div className="footer-pad">  
                    <h4> Contact </h4>  
                    <ul className="list-unstyled">  
                        <li> <a href="#"> +91-8790909745 </a> </li>  
                        <li> <a href="#"> info@refier.com </a> </li>  
                    </ul>  
                    </div>  
                </div>  
                      
                </div>  
                <div className="row">  
                <div className="col-md-12 copy">  
                    <p className="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>  
                    <div className='lower_a'>
                        <a href="#">Privacy Policy</a>
                        <span class="vl"></span>
                        <a href="#">Terms</a>
                        <span class="vl"></span>
                        <a href="#">Sitemap</a>
                    </div>
                </div>  
                </div>  
            </div>  
            </div>  
        </footer>
    );
};
export default Footer;