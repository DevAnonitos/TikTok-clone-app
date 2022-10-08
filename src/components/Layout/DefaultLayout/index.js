import Header from "./Header";
import Slidebar from "./Slidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Slidebar />
            </div>
            <div className="content">
                {children}
            </div>
        </div> 
    );
}

export default DefaultLayout;