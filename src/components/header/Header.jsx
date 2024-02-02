import {NavButton} from '../props/menuButton'
export function Header() {
    return(
        <>
        <div className=" pl-10 flex items-right text-black text-4xl font-mono">
           <span className="text-[#eef2ff]">T</span>OBZIY.
        </div>
        <div>
            <section>
          <menu>
          <NavButton>Projects</NavButton>
          </menu>
          </section>
        </div>

        </>
    );
} 