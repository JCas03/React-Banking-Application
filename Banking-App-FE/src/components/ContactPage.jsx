import Button from "@mui/material/Button";

function Contact() {
    return(
        <div>
            <h1 style={{ color: 'grey' }}> BinaryBank </h1>
            <h2>
                <Button href="/schedule-appointment">
                    Schedule Appointment
                </Button>
            </h2>
            <h2 style={{ color: 'grey' }}>Email: helpdesk@binarybank.com</h2>
            <h2 style={{ color: 'grey' }}>Phone: (546) 680 5689</h2>
            <p> Please send us an email or give us a call for more information.</p>
            
            
        </div>
        
        
    )
    }
    
export default Contact