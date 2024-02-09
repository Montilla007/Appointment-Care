import React from 'react'
import '../../css/WelcomeDesign.css'

const WelcomeDesign = () => {
  return (
    <div>
        <h3 id="welcome">WELCOME TO</h3>
        <div className='flex-row align-items-center serving-logo'>
          <img className='' src="logo.png" alt="logo" />
          <h2 className='d-inline-block'>APPOINT <span style={{ color: "#007E85" }}>CARE</span></h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="three-design">
                <img className="mini-picture" src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415520262_682282690749442_3834135202651424997_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFl4SgcsL3fHCZJUk3anViwC6xdahPKf-0LrF1qE8p_7ZsM9qLv24lZT6pWkvqsCqWft8nWf81LLWptQYVjo6rd&_nc_ohc=qj5Curk8FIwAX89gpy_&_nc_ht=scontent.fbag1-2.fna&oh=03_AdStEKnecP08E7BG-agCi4gxFh014dZTUO4GjntdG9DReg&oe=65CD77BA" alt="schedule" />
                <h4 className='d-inline-block'>Book</h4>
                <p>Easily connect with your doctors</p>
              </div>
            </div>
            <div className="col-4">
              <div className="three-design">
                <img className="mini-picture" src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/385548362_938166191235962_6636029415136559148_n.png?stp=cp0_dst-png&_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGsM-jn74on8nCtbFGTQ5S-jO3JEdrhcViM7ckR2uFxWD9H7uiXxb7N_Dvwv-95Pq_q1n4TWrbaXtAIXIRMPLHa&_nc_ohc=nR_MYxvECQUAX8M4-AI&_nc_ht=scontent.fbag1-2.fna&oh=03_AdTd37sfG3ykRpfPXQ3zTlpQf7NnmFSD7Zxqvm-hJXiVDg&oe=65CD8312" alt="consult" />
                <h4 className='d-inline-block' >Consult</h4>
                <p>Visit your doctor or consult online</p>
              </div>
            </div>
            <div className="col-4">
              <div className="three-design">
                <img className="mini-picture" src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/419717219_6582501638520903_4071051728243720948_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEBW1EkL09nQiuKX-kkgGKAgST0R8mv4bKBJPRHya_hskfVfsC2PGS58V2PD6bbWXMVoNMAWgf4k5uUWEHfRrJG&_nc_ohc=0EJtKrz6oYEAX_JJpfc&_nc_ht=scontent.fbag1-2.fna&oh=03_AdR1qywkZlSCWc3xZHJdhVmTAgqSVhf2AWAs51L49hU6Ag&oe=65CD7E83" alt="take your medicine" />
                <h4 className='d-inline-block' >Prescription</h4>
                <p>You can take your medicine or prescription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WelcomeDesign