import Carousel from "../../Components/Carousel/Carousel"
import styles from "./home.module.css"
import Card from "../../Components/Card/Card";
function Home(){
    const arr = [...Array(6).keys()];
    return(<>
    THIS IS HOME
    <Carousel></Carousel>
   <div className={styles.places}> 
    <h2 className={styles.title}>Popular Restaurants near you</h2>
    <div className={styles.cards}>
        
    {arr.map((index) => (
        <Card img="https://placehold.co/150x100"
            key={index}
            rating="4.0"
            discount="20% OFF" 
            title="Pizzza Hoot" 
            isPromoted={true}
            estimate="200"
            time="19"
            description="Pizza, Fast Food, Italian, Dessert"></Card>))}
        
    </div>
   </div>
   </>);
}
export default Home