import "./Header.css"

export function Header(){
    // const [count, setCount] = useState(0) // useState принимает инициальное значение
    return (
        <div>
                <header>

                    <div className="searchBar">
                        <input type="text" placeholder="Search.." />
                    </div>

                    <button className="SignIn">
                        <div className="SignInSection">
                            <p className="SignInText">Sign in</p>
                        </div>
                    </button>

                </header>      
                        
        </div>
    )
}