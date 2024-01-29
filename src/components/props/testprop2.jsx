import { ParentProp } from "./testprop"
import { My_Stack } from "./cardData"
import '../style/card.css'

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
        </main>
        </div>
    )
}