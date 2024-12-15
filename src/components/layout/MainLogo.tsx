import MainIcon from '/plane_logo.svg';

export default function MainLogo () {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto', 
            width: '100%',  
            backgroundColor: 'transparent', 
        }}>
            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden', 
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent', 
                marginBlockEnd: '50px',
            }}>
                <img
                    src={MainIcon}
                    alt='Plane Logo'
                    style={{
                        width: '75%',
                        height: '75%',
                        objectFit: 'contain' 
                    }}
                />
            </div>
        </div>
        
    )
}