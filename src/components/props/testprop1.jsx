import  {My_Stack}  from './testprop2';
import '../style/card.css';
export function DaddyProp() {
    return (
    
        <main>
        <section id="core-concepts">
            <h2>My Stack</h2>
            <ul>
              <My_Stack 
              title = {My_Stack[0].title}
              description = {My_Stack[0].description}
              img = {My_Stack[0].img}
              />
              <My_Stack 
              title = {My_Stack[1].title}
              description = {My_Stack[1].description}
              img = {My_Stack[1].img}
              />
              <My_Stack 
              title = {My_Stack[2].title}
              description = {My_Stack[2].description}
              img = {My_Stack[2].img}
              />
              <My_Stack 
              title = {My_Stack[3].title}
              description = {My_Stack[3].description}
              img = {My_Stack[3].img}
              />
            </ul>
        </section>
        </main>
        
    )
}