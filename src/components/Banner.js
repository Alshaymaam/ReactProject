import { Container, Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import hedderImg from '../assests/img/header-img.svg'
import { useEffect,useState } from "react"
export const Banner = ()=>{
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]) 
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          }
        else if(isDeleting && updatedText === ''){
            setIsDeleting (false);
            setLoopNum(loopNum+1);
            setDelta(500);

        }
    }
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">welcome to my portfolio</span>
                        <h1>{'hi, Nice to meet you, we have '}<span className="warp">{text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book.</p>
                           <button onClick={()=> console.log("connect")}>let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                        <img src={hedderImg} alt="hedder img"/>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}