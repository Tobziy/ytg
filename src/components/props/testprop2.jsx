import { ParentProp } from "./testprop"
import { My_Stack } from "./cardData"
import '../style/card.css'
import TabButton from '../props/TabButton'

export function ChildProp () {
    return (
        <div>
        <main>
            <section id="core-concepts">
                <ul>
                    <ParentProp {...My_Stack[0]}/>
                    <ParentProp {...My_Stack[1]}/>
                    <ParentProp {...My_Stack[2]}/>
                    <ParentProp {...My_Stack[3]}/>
                </ul>
            </section>
            <section className="container">

                <h2>Examples</h2>
                <menu>
                    <TabButton>Components</TabButton>
                    <TabButton>JSX</TabButton>
                    <TabButton>Props</TabButton>
                    <TabButton>State</TabButton>
                </menu>

            </section>
        </main>
        </div>
    )
}