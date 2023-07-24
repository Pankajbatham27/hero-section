import 'animate.css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Cans.module.css';


const Cans = ({ color, name, image, isAnimating, animationType, lemon }) => {

    // const [dominantColor, setDominantColor] = useState();

    return (
        <div className='backgroundChange' style={{ backgroundImage: `radial-gradient(circle, #fff -30%, ${color} 41%)` }}>
            <div className='container'>
                <div className='row vh-100' style={{ overflow: 'hidden' }}>

                
                    <div className={`col-md-3 align-self-center text-white animate__animated ${isAnimating && (animationType === 'forward' ? 'animate__slideInDown' : 'animate__slideInUp')} animate__faster`}>
                        <h3>{name}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h6><u>Buy Now</u></h6>
                    </div>
                    <div className='col-md-6 align-self-center' style={{position: 'relative'}}>

                        <div className={`animate__animated animate__faster ${isAnimating && 'animate__zoomIn '} ${style.bgView}`} style={{ backgroundImage: `url(${lemon})` }}></div>

                        <div className={style.firstBackImage}>
                            <div className={style.divCover}>
                                <img src={image} />
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3 align-self-center'></div>
                </div>
            </div>
        </div>
    )
}
export default Cans;