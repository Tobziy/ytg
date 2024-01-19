import  {My_Stack}  from './testprop2';
import '../style/card.css';
export function DaddyProp() {
    return (
    
        <main>
        <section id="core-concepts">
            <h2>My Stack</h2>
            <ul>
              <My_Stack {...My_Stack[0]} />
              <My_Stack {...My_Stack[1]} />
              <My_Stack {...My_Stack[2]} />
              <My_Stack {...My_Stack[3]} />
            </ul>
        </section>
        </main>
        
    )
}