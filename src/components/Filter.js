import { useState } from 'react';
import './Filter.css';
const Filter=()=>{
    const [newJobs, setNewJobs] =useState(null)
    const [city, setCity] = useState(null);
    const [valueis, setValusis] = useState(0);
    const btnHandler=() =>{
        setNewJobs(
            <datalist id="jobs">
                <option value="HR"/>
                <option value="Sales"/>
                <option value="Marketing"/>
                <option value="Tech"/>
                <option value="Others"/>
                <option value="Manager"/>
                <option value="Data Science"/>
            </datalist>
        )
    }
    const btnHandler2=() =>{
        setCity(
            <datalist id="city">
                <option value="Delhi"/>
                <option value="Banglore"/>
                <option value="Hydrabad"/>
                <option value="London"/>
                <option value="Kolkata"/>
                <option value="Gurugram"/>
                <option value="Mumbai"/>
            </datalist>
        )
    }
    const sliderHandler=() =>{
        setValusis(document.getElementById('slider').value);
    }
    return(
        <div className="fliter_main">
            <h3>Filter</h3>
            <div>
                <p>Category</p>
                <div className="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true">
                    <input list="jobs" placeholder='Sales' onFocus={btnHandler}/>
                    {newJobs}
                    <span class="select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                    <button className='search_job' onClick={btnHandler}>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                    </button>
                </div>
            </div>
            <div>
                <p>Location</p>
                <div className="select__indicator select__dropdown-indicator css-tlfecz-indicatorContainer" aria-hidden="true">
                    <input list="city" placeholder='Delhi, Mumbai' onFocus={btnHandler2}/>
                    {city}
                    <span className="select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                    <button className='search_job' onClick={btnHandler2}>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="type_job">
                <p>Work From Home</p>
                <label className='switch'>
                    <input className='chk_slider' type="checkbox"/>
                    <span className='slider round'></span>
                </label>
            </div>
            <div className="intern">
                <p>Only Intership</p>
                <label className='switch'>
                    <input className='chk_slider' type="checkbox"/>
                    <span className='slider round'></span>
                </label>
            </div>
            <div className='pay_selector'>
                <p className='pay'>Desired Minimum Pay</p>
                {`${valueis} ${'L'}`}
            </div>
            <div className="slidecontainer">
                <input type="range" min="0" max="10" className="slider2" defaultValue="0" id="slider" onInput={sliderHandler}/>
            </div>
            <div>
                <button className='clr_btn'>Clear All</button>
            </div>
            <button className='aply_btn'>Apply</button>
        </div>
    );
};
export default Filter;