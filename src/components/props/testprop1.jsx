import {PropBody} from './testprop.jsx';
import tailwindImg from '../../assets/tailwind.svg'
export function DaddyProp() {
    return (
        <>
        <section>
            <h2>My Stack</h2>
            <ul>
              <PropBody 
               title="Tailwind CSS "
               description ="I use Tailwind CSS to design my websites"
               img={tailwindImg}
               />
              <PropBody/>
              <PropBody/>
              <PropBody/>
            </ul>
        </section>
        </>
    )
}