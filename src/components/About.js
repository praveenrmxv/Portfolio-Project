import React,{useState} from 'react'

export default function About() {
    const[myStyle, setMyStyle] = useState({
      color:'white',
      backgroundColor:'black'
      
    })
    const [btntext,setBtnText] =useState('className=Change Theme')
   const toggleStyle = ()=>{
      if(myStyle.color=='white'){
        setMyStyle({
          color:'black',
          backgroundColor:'white',
          border: '3px solid white'
          
        
        })
        setBtnText('Enable  Light Mode')
      }
      else{
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setBtnText('Enable Dark Mode')
      }
    }

  return (
    <div className='container' style={myStyle}>
        <h2 className='my-2'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Me
      </button>
    </h2>
    <div id="collapseOne"  style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Praveen Kumar Varma.</strong>  Here you'll write short summery about yourself, which will include proper introduction of yourself, and then short summery of your ambitions, goals and experience anything important you want your employer to know. Click here to see full Resume, or scroll down to read summery. , though the transition does limit overflow.<code><a href='https://praveenrmxv.github.io/portfolio/'>Read more</a></code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Journy in Web Development
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>This is the Web development .</strong> Here you'll write about your Journey of Web-Development, degree, certification, projects, experiences and other skills related to web development. Here you'll write about your Journey of Web-Development, degree, certification, projects, experiences and other skills related to web development.Here you'll write about your Journey of Web-Development, degree, certification, projects, experiences and other skills related to web development.<code><a href='https://github.com/praveenrmxv/E-Commerce-website'>Read More</a></code>
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Journey in Data Science
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>Journey in Data Science</strong>Here you'll write about your Journey in Data Science, degree, certification, projects, experiences and other skills related to Data Science. Here you'll write about your Journey of Data Science, degree, certification, projects, experiences and other skills related to web development.Here you'll write about your Journey of Web-Development, degree, certification, projects, experiences and other skills related to Data Science. Read more<strong><code><a href='https://github.com/praveenrmxv/praveenrmxv.github.io'>Read More</a></code></strong>
      </div>
    </div>
  </div>




  
</div>
<div className='container my-2'>
<button  type="button" onClick={toggleStyle} className="btn btn-primary"> Enable Dark Mode</button>
</div>
    </div>

  )
}
